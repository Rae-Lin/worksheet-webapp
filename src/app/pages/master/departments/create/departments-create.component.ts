import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

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
    private toastr: ToastrService,
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    // if (!this.subject.trim() || !this.content.trim() || !this.formControl.value || !this.ngModelDate) {
    //   this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
    //   return;
    // }
    this.department = {
      sn: this.sn,
      name: this.name,
    };
    this.dialogRef.close(this.department);
  }

  ngOnInit(): void {
  }

}
