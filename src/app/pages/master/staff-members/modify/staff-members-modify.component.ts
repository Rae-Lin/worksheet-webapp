import { Component, Input, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { SelectMenuService } from 'src/app/shared/service/master/select-menu.service';
import { StaffMemberService } from 'src/app/shared/service/master/staff-member.service';

@Component({
  selector: 'app-staff-members-modify',
  templateUrl: './staff-members-modify.component.html',
  styleUrls: ['./staff-members-modify.component.scss']
})
export class StaffMembersModifyComponent implements OnInit {
  @Input() id: string;
  @Input() employeeCode: string;
  @Input() domainAccount: string;
  @Input() password: string;
  @Input() name: string;
  @Input() mail: string;
  @Input() departmentSn: string;
  @Input() jobTitle: string;
  @Input() group: string;
  @Input() memo: string;
  @Input() status: string;
  @Input() deptList = [];
  @Input() startAt: Date;
  @Input() endAt: Date;
  @Input() applyStartAt: Date;
  @Input() applyEndAt: Date;

  min: Date;
  member = {};

  constructor(
    private dialogRef: NbDialogRef<StaffMembersModifyComponent>,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
    private service: StaffMemberService,
    private masterCommon: MasterCommonService,
    private selectMenu: SelectMenuService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    if (this.startAt > this.endAt) {
      this.toastr.showToast('', 'top-right', '離職日需晚於到職日' , 'danger');
      return;
    }
    if (this.applyStartAt > this.applyEndAt) {
      this.toastr.showToast('', 'top-right', '適用結束日需晚於適用開始日' , 'danger');
      return;
    }
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
      applyEndAt: this.applyEndAt
    };
    this.masterCommon.doModify(this.service, this.dialogRef, this.id, this.member);
  }

  ngOnInit(): void {
    // load 下拉選單
    const query = '/Department';
    this.selectMenu.getMenu(query).subscribe((res) => {
      this.deptList = res;
    });
  }

}
