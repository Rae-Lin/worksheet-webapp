import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { DepartmentService } from 'src/app/shared/service/master/department.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-departments-modify',
  templateUrl: './departments-modify.component.html',
  styleUrls: ['./departments-modify.component.scss']
})
export class DepartmentsModifyComponent implements OnInit {
  @Input() sn: string;
  @Input() name: string;
  department = {};

  constructor(
    private dialogRef: NbDialogRef<DepartmentsModifyComponent>,
    private service: DepartmentService,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService,
  ) { }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    if (!this.sn.trim() || !this.name.trim()) {
      alert('皆為必填');
      return;
    }
    this.department = {
      sn: this.sn,
      name: this.name,
    };
    this.masterCommon.doModify(this.service, this.dialogRef, this.sn, this.department);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   this.department = {
  //     sn: this.sn,
  //     name: this.name,
  //   };
  //   this.doModify(this.sn, this.department);
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
  }

}
