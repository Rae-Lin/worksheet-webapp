import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-project-groups-create',
  templateUrl: './project-groups-create.component.html',
  styleUrls: ['./project-groups-create.component.scss']
})
export class ProjectGroupsCreateComponent implements OnInit {
  sn = '';
  name = '';
  group = {};

  constructor(private dialogRef: NbDialogRef<ProjectGroupsCreateComponent> ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.sn.trim() || !this.name.trim()) {
      alert('皆為必填');
      return;
    }

    this.group = {
      sn: this.sn,
      name: this.name,
    };
    this.dialogRef.close(this.group);
  }

  ngOnInit(): void {
  }
}
