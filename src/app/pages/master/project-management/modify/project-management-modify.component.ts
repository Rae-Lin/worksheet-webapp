import { Component, Input, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { ProjectManagementService } from 'src/app/shared/service/master/project-management.service';
import { SelectMenuService } from 'src/app/shared/service/master/select-menu.service';

@Component({
  selector: 'app-project-management-modify',
  templateUrl: './project-management-modify.component.html',
  styleUrls: ['./project-management-modify.component.scss']
})
export class ProjectManagementModifyComponent implements OnInit {
  @Input() groupSn: string;
  @Input() groupName: string;
  @Input() sn: string;
  @Input() name: string;
  @Input() status: number;
  @Input() formControl: Date;
  @Input() ngModelDate: Date;

  min: Date;
  projects = {};
  groupList = [];

  constructor(
    private dialogRef: NbDialogRef<ProjectManagementModifyComponent>,
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
      this.status == null || !this.formControl || !this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
      return;
    }
    if (this.formControl > this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
      return;
    }
    this.projects = {
      groupSn: this.groupSn,
      sn: this.sn,
      name: this.name,
      startAt: this.formControl,
      endAt: this.ngModelDate,
      status: this.status,
    };
    this.masterCommon.doModify(this.service, this.dialogRef, this.sn, this.projects);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   if (!this.groupSn.trim() || !this.sn.trim() || !this.name.trim() ||
  //     this.status == null || !this.formControl || !this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
  //     return;
  //   }
  //   if (this.formControl > this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
  //     return;
  //   }
  //   this.projects = {
  //     groupSn: this.groupSn,
  //     sn: this.sn,
  //     name: this.name,
  //     startAt: this.formControl,
  //     endAt: this.ngModelDate,
  //     status: this.status,
  //   };
  //   this.doModify(this.sn, this.projects);
  // }

  // doModify(sn, data): any {
  //   this.service.updateData(sn, data).subscribe((res: any) => {
  //     if (res.errorMessage) {
  //       this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
  //       return false;
  //     }else{
  //       this.toastr.showToast('', 'top-right', '修改成功', 'success');
  //       this.dialogRef.close(true);
  //     }
  //   });
  // }

  ngOnInit(): void {
    const query = '/projectgroup';
    this.selectMenu.getMenu(query).subscribe((res) => {
      this.groupList = res;
    });
  }

}
