import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { DepartmentService } from 'src/app/shared/service/master/department.service';

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
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.department = {
      sn: this.sn,
      name: this.name,
    };
    this.doModify(this.sn, this.department);
  }

  doModify(sn, data): any {
    this.service.updateData(sn, data).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
        return false;
      }else{
        this.toastr.showToast('', 'top-right', '修改成功', 'success');
        this.dialogRef.close(true);
      }
    });
  }

  ngOnInit(): void {
  }

}
