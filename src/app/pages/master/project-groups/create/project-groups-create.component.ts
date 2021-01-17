import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import { ProjectGroupsService } from 'src/app/shared/service/master/project-groups.service';

@Component({
  selector: 'app-project-groups-create',
  templateUrl: './project-groups-create.component.html',
  styleUrls: ['./project-groups-create.component.scss']
})
export class ProjectGroupsCreateComponent implements OnInit {
  sn = '';
  name = '';
  group = {};

  constructor(
    private dialogRef: NbDialogRef<ProjectGroupsCreateComponent>,
    private service: ProjectGroupsService,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService,
  ) { }

  cancel(): void {
    this.masterCommon.doDelete(this.dialogRef);
  }

  submit(): void {
    this.group = {
      sn: this.sn,
      name: this.name,
    };
    this.masterCommon.doCreate(this.service, this.dialogRef, this.group);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   this.group = {
  //     sn: this.sn,
  //     name: this.name,
  //   };
  //   this.doCreate(this.group);
  // }

  // doCreate(data): any {
  //   this.service.postData(data).subscribe((res: any) => {
  //     if (res.errorMessage) {
  //       this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
  //       return false;
  //     }else{
  //       this.toastr.showToast('', 'top-right', '新增成功', 'success');
  //       this.dialogRef.close(true);
  //     }
  //   });
  // }

  ngOnInit(): void {
  }
}
