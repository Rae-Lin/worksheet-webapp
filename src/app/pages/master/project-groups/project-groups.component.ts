import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';

import { ProjectGroupsService } from 'src/app/shared/service/master/project-groups.service';
import { ProjectGroupsCreateComponent } from './create/project-groups-create.component';
import { ProjectGroupsModifyComponent } from './modify/project-groups-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LocalDataSource } from 'ng2-smart-table';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

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
    edit: {editButtonContent: '<img src="./assets/img/icon-edit.svg">'},
    delete: {deleteButtonContent: '<img src="./assets/img/icon-delete.svg">'},
    attr: {class: 'table thead-light table-hover'},
    columns: {
      sn: {
        title: '代號',
        type: 'string',
        valuePrepareFunction: (cell) => {
          return `【${cell}】`;
        }
      },
      name: {
        title: '專案群組名稱',
        type: 'html',
        valuePrepareFunction: (cell) => {
          return `<span class="name">${cell}</span>`;
        }
      },
    },
  };

  source: LocalDataSource;

  constructor(
    private dialogService: NbDialogService,
    private service: ProjectGroupsService,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService
  ) {
    this.source = new LocalDataSource();
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(ProjectGroupsCreateComponent, { autoFocus: false, hasScroll: true, })
      .onClose.subscribe((result) => {
        if (result) {
          this.masterCommon.refreshTable(this.service, this.query, this.source);
        }
      });
  }

  // 刪除
  deleteNews(event): void {
    const snNo = event.data.sn;
    this.service.deleteData(snNo).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.masterCommon.refreshTable(this.service, this.query, this.source);
      }
    });
  }

  // 開啟編輯modal
  openModify(event): void {
    const snNo = event.data.sn;
    this.service.getData(snNo).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
      } else {
        this.dialogService
          .open(ProjectGroupsModifyComponent, {
            autoFocus: false, hasScroll: true,
            context: {
              sn: res.data.sn,
              name: res.data.name,
            },
          })
          .onClose.subscribe((result) => {
            if (result) {
              this.masterCommon.refreshTable(this.service, this.query, this.source);
            }
          });
      }
    });
  }

  onSearch(query: string = ''): any {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter([
        { field: 'sn', search: query },
        { field: 'name', search: query }
      ], false);
    }
  }

  ngOnInit(): void {
  }
}
