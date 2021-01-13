import { SelectMenuService } from './../../../../shared/service/master/select-menu.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

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
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.dialogRef.close();
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
    this.dialogRef.close(this.projects);
  }

  ngOnInit(): void {
    const query = '/projectgroup';
    this.selectMenu.getMenu(query).subscribe((res) => {
      this.groupList = res;
    });
  }
}
