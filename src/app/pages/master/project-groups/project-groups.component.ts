import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';

import { ProjectGroupsService } from './../../../shared/service/master/project-groups.service';
import { ProjectGroupsCreateComponent } from './create/project-groups-create.component';
import { ProjectGroupsModifyComponent } from './modify/project-groups-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

@Component({
  selector: 'app-project-groups',
  templateUrl: './project-groups.component.html',
  styleUrls: ['./project-groups.component.scss'],
})
export class ProjectGroupsComponent implements OnInit {
  private group: {
    sn: string;
    name: string;
  };

  search = '';
  itemList$: Observable<any[]>;

  constructor(
    private dialogService: NbDialogService,
    private service: ProjectGroupsService,
    private toastr: ToastrService,
  ) {}

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(ProjectGroupsCreateComponent, { dialogClass: 'model-full' })
      .onClose.subscribe((item) => {
        if (item) {
          this.group = {
            sn: item.sn,
            name: item.name,
          };
          this.createGroup();
        }
      });
  }

  // 開啟新增modal - 執行新增
  createGroup(): void {
    this.service.postData(this.group).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '新增成功', 'success');
      }
    });
    // this.group$.subscribe();
  }

  // 刪除
  deleteNews(snNo: string): void {
    this.service.deleteData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
      }
    });
  }

  // 開啟編輯modal
  openModify(snNo: string): void {
    this.service.getData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      } else {
        this.dialogService
          .open(ProjectGroupsModifyComponent, {
            dialogClass: 'model-full',
            context: {
              sn: res.data.sn,
              name: res.data.name,
            },
          })
          .onClose.subscribe((item) => {
            if (item) {
              const groupItem = {
                sn: snNo,
                name: item.name,
              };
              this.modifyGroup(snNo, groupItem);
            }
          });
      }
    });
  }

  // 開啟編輯modal - 執行編輯
  modifyGroup(snNo: string, groupItem: object): void {
    this.service.updateData(snNo, groupItem).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '修改成功', 'success');
      }
    });
  }

  ngOnInit(): void {
    this.itemList$ = this.service.getAll();
  }
}
