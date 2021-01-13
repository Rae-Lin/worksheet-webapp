import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';

import { ProjectGroupsService } from './../../../shared/service/master/project-groups.service';
import { ProjectGroupsCreateComponent } from './create/project-groups-create.component';
import { ProjectGroupsModifyComponent } from './modify/project-groups-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-project-groups',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './project-groups.component.html',
  styleUrls: ['./project-groups.component.scss'],
})
export class ProjectGroupsComponent implements OnInit {
  private query = '?AllData=true';
  private group: {
    sn: string;
    name: string;
  };

  search = '';
  itemList$: Observable<any[]>;

  settings = {
    pager: {display: true},
    mode: 'external',
    hideSubHeader: true ,
    noDataMessage: '查無資料',
    actions: {
      columnTitle: '',
      position: 'right',
      add: false,
    },
    edit: {editButtonContent: '<img src="../../../../assets/img/icon-edit.svg">'},
    delete: {deleteButtonContent: '<img src="../../../../assets/img/icon-delete.svg">'},
    attr: {class: 'table thead-light table-hover'},
    columns: {
      sn: {
        title: '代號',
        type: 'string',
        width: '220px',
        valuePrepareFunction: (cell) => {
          return `【${cell}】`;
        }
      },
      name: {
        title: '專案群組名稱',
        type: 'html',
        width: '75%',
        // valuePrepareFunction: (cell) => {
        //   return `<span class="subject">${cell}</span>`;
        // }
      },
    },
  };

  source: LocalDataSource;

  constructor(
    private dialogService: NbDialogService,
    private service: ProjectGroupsService,
    private toastr: ToastrService,
  ) {
    this.source = new LocalDataSource();
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

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
        this.refreshTable();
      }
    });
  }

  // 刪除
  deleteNews(event): void {
    const snNo = event.data.sn;
    this.service.deleteData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.refreshTable();
      }
    });
  }

  // 開啟編輯modal
  openModify(event): void {
    const snNo = event.data.sn;
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
        this.refreshTable();
      }
    });
  }

  refreshTable(): any {
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  onSearch(query: string = ''): any {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter([
        {
          field: 'sn',
          search: query
        },
        {
          field: 'name',
          search: query
        }
      ], false);
    }
  }

  ngOnInit(): void {
    // this.itemList$ = this.service.getAll();
  }
}
