import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

@Component({
  selector: 'app-departments-modify',
  templateUrl: './departments-modify.component.html',
  styleUrls: ['./departments-modify.component.scss']
})
export class DepartmentsModifyComponent implements OnInit {
  @Input() sn: string;
  @Input() name: string;
  despartment = {};

  constructor(
    private dialogRef: NbDialogRef<DepartmentsModifyComponent>,
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.despartment = {
      sn: this.sn,
      name: this.name,
    };
    this.dialogRef.close(this.despartment);
  }

  ngOnInit(): void {
  }

}
