import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-project-groups-modify',
  templateUrl: './project-groups-modify.component.html',
  styleUrls: ['./project-groups-modify.component.scss']
})
export class ProjectGroupsModifyComponent implements OnInit {
  @Input() sn: string;
  @Input() name: string;

  groups = {};

  constructor(private dialogRef: NbDialogRef<ProjectGroupsModifyComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.sn.trim() || !this.name.trim()) {
      alert('皆為必填');
      return;
    }
    this.groups = {
      name: this.name
    };
    console.log(this.groups);
    this.dialogRef.close(this.groups);
  }

  ngOnInit(): void {
  }

}
