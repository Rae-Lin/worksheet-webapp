import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { ProjectGroupsService } from 'src/app/shared/service/master/project-groups.service';

@Component({
  selector: 'app-project-groups-modify',
  templateUrl: './project-groups-modify.component.html',
  styleUrls: ['./project-groups-modify.component.scss']
})
export class ProjectGroupsModifyComponent implements OnInit {
  @Input() sn: string;
  @Input() name: string;

  group = {};

  constructor(
    private dialogRef: NbDialogRef<ProjectGroupsModifyComponent>,
    private service: ProjectGroupsService,
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
    this.group = {
      sn: this.sn,
      name: this.name,
    };
    this.masterCommon.doModify(this.service, this.dialogRef, this.sn, this.group);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   if (!this.sn.trim() || !this.name.trim()) {
  //     alert('皆為必填');
  //     return;
  //   }
  //   this.groups = {
  //     sn: this.sn,
  //     name: this.name
  //   };
  //   this.doModify(this.sn, this.groups);
  // }

  // doModify(sn, data): any {
  //   this.service.updateData(sn, data).subscribe((res: any) => {
  //     if (res.errorStatus) {
  //       this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
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
