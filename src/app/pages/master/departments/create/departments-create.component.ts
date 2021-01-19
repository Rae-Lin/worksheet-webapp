import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { DepartmentService } from 'src/app/shared/service/master/department.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-departments-create',
  templateUrl: './departments-create.component.html',
  styleUrls: ['./departments-create.component.scss']
})
export class DepartmentsCreateComponent implements OnInit {
  sn = '';
  name = '';
  department = {};

  constructor(
    private dialogRef: NbDialogRef<DepartmentsCreateComponent>,
    private service: DepartmentService,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService,
  ) { }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    this.department = {
      sn: this.sn,
      name: this.name,
    };
    this.masterCommon.doCreate(this.service, this.dialogRef, this.department);
  }

  ngOnInit(): void {
  }

}
