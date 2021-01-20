import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { ProjectManagementService } from 'src/app/shared/service/master/project-management.service';
import { SelectMenuService } from 'src/app/shared/service/master/select-menu.service';

@Component({
  selector: 'app-project-management-create',
  templateUrl: './project-management-create.component.html',
  styleUrls: ['./project-management-create.component.scss']
})
export class ProjectManagementCreateComponent implements OnInit {
  groupSn = '';
  groupName = '';
  sn = '';
  name = '';
  status = null;
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  min: Date;
  projects = {};
  groupList = [];

  constructor(
    private dialogRef: NbDialogRef<ProjectManagementCreateComponent>,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
    private selectMenu: SelectMenuService,
    private service: ProjectManagementService,
    private masterCommon: MasterCommonService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    if (!this.groupSn.trim() || !this.sn.trim() || !this.name.trim() ||
      this.status == null || !this.formControl.value || !this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
      return;
    }
    if (this.formControl.value > this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
      return;
    }
    this.projects = {
      groupSn: this.groupSn,
      sn: this.sn,
      name: this.name,
      startAt: this.formControl.value,
      endAt: this.ngModelDate,
      status: this.status,
    };
    this.masterCommon.doCreate(this.service, this.dialogRef, this.projects);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   if (!this.groupSn.trim() || !this.sn.trim() || !this.name.trim() ||
  //     this.status == null || !this.formControl.value || !this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
  //     return;
  //   }
  //   if (this.formControl.value > this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
  //     return;
  //   }
  //   this.projects = {
  //     groupSn: this.groupSn,
  //     sn: this.sn,
  //     name: this.name,
  //     startAt: this.formControl.value,
  //     endAt: this.ngModelDate,
  //     status: this.status,
  //   };
  //   // this.dialogRef.close(this.projects);
  //   this.doCreate(this.projects);
  // }

  // doCreate(data): any {
  //   this.service.postData(data).subscribe((res: any) => {
  //     if (res.errorStatus) {
  //       this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
  //       return false;
  //     }else{
  //       this.toastr.showToast('', 'top-right', '新增成功', 'success');
  //       this.dialogRef.close(true);
  //     }
  //   });
  // }

  ngOnInit(): void {
    // load 下拉選單
    const query = '/projectgroup';
    this.selectMenu.getMenu(query).subscribe((res) => {
      this.groupList = res;
    });
  }
}
