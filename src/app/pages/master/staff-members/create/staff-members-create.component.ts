import { Component, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

@Component({
  selector: 'app-staff-members-create',
  templateUrl: './staff-members-create.component.html',
  styleUrls: ['./staff-members-create.component.scss']
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
  startAt = new Date();
  endAt = new Date();
  applyStartAt = new Date();
  applyEndAt = new Date();

  min: Date;
  member = {};

  constructor(
    private dialogRef: NbDialogRef<StaffMembersCreateComponent>,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.dialogRef.close();
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
      id: this.id,
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
      startAt: this.startAt,
      endAt: this.endAt,
      applyStartAt: this.applyStartAt,
      applyEndAt: this.applyEndAt,
    };
    this.dialogRef.close(this.member);
  }


  ngOnInit(): void {
  }

}
