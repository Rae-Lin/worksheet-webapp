import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { ProjectGroupsService } from 'src/app/shared/service/master/project-groups.service';

@Component({
  selector: 'app-project-groups-modify',
  templateUrl: './project-groups-modify.component.html',
  styleUrls: ['./project-groups-modify.component.scss']
})
export class ProjectGroupsModifyComponent implements OnInit {
  @Input() sn: string;
  @Input() name: string;

  groups = {};

  constructor(
    private dialogRef: NbDialogRef<ProjectGroupsModifyComponent>,
    private service: ProjectGroupsService,
    private toastr: ToastrService,
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.sn.trim() || !this.name.trim()) {
      alert('皆為必填');
      return;
    }
    this.groups = {
      sn: this.sn,
      name: this.name
    };
    this.doModify(this.sn, this.groups);
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
