import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { StaffMemberService } from 'src/app/shared/service/master/staff-member.service';
import { SelectMenuService } from 'src/app/shared/service/master/select-menu.service';

@Component({
  selector: 'app-staff-members-create',
  templateUrl: './staff-members-create.component.html',
  styleUrls: ['./staff-members-create.component.scss'],
})
export class StaffMembersCreateComponent implements OnInit {
  id = '';
  employeeCode = '';
  domainAccount = '';
  password = '';
  name = '';
  mail = '';
  departmentSn = '';
  jobTitle = '';
  group = '';
  memo = '';
  status = '';
  deptList = [];
  startAt =  new Date();
  endAt = new Date();
  applyStartAt = new Date();
  applyEndAt = new Date();

  // formControl = new FormControl(new Date());
  // ngModelDate = new Date();
  min: Date;
  member = {};

  constructor(
    private dialogRef: NbDialogRef<StaffMembersCreateComponent>,
    private service: StaffMemberService,
    protected dateService: NbDateService<Date>,
    private selectMenu: SelectMenuService,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    // if (!this.subject.trim() || !this.content.trim() || !this.formControl.value || !this.ngModelDate) {
    //   this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
    //   return;
    // }
    // if (this.formControl.value > this.ngModelDate) {
    //   this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
    //   return;
    // }
    this.member = {
      employeeCode: this.employeeCode,
      domainAccount: this.domainAccount,
      password: this.password,
      name: this.name,
      mail: this.mail,
      departmentSn: this.departmentSn,
      jobTitle: this.jobTitle,
      group: this.group,
      memo: this.memo,
      status: this.status,
      // startAt: this.formControl.value,
      // endAt: this.ngModelDate,
      startAt: this.startAt,
      endAt: this.endAt,
      applyStartAt: this.applyStartAt,
      applyEndAt: this.applyEndAt,
    };
    console.log(this.member);
    this.masterCommon.doCreate(this.service, this.dialogRef, this.member);
  }

  ngOnInit(): void {
    // load 下拉選單
    const query = '/Department';
    this.selectMenu.getMenu(query).subscribe((res) => {
      this.deptList = res;
    });
  }
}
