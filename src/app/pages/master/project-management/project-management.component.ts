import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { ProjectManagementService } from 'src/app/shared/service/master/project-management.service';
import { ProjectManagementCreateComponent } from './create/project-management-create.component';
import { ProjectManagementModifyComponent } from './modify/project-management-modify.component';

@Component({
  selector: 'app-project-management',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
  providers: [DatePipe],
})
export class ProjectManagementComponent implements OnInit {
  private query = '?AllData=true';
  private groupItem: {
    groupSn: string;
    groupName: string;
    sn: string;
    name: string;
    startAt: Date;
    endAt: Date;
    status: boolean;
  };

  // table Data
  settings = {
    pager: { display: true }, // 設定分頁
    mode: 'external', // 新增、編輯以跳窗開啟
    hideSubHeader: true, // 不顯示新增資料欄位
    actions: {
      // 操作欄位
      columnTitle: '', // 標題名稱
      position: 'right', // 表格最後
      add: false, // 不在表格內開放新增
    },
    attr: { class: 'table thead-light table-hover' }, // 表格添加class
    noDataMessage: '查無資料', // no data found Message
    edit: { editButtonContent: '<img src="./assets/img/icon-edit.svg">' },
    delete: { deleteButtonContent: '<img src="./assets/img/icon-delete.svg">' },
    columns: {
      groupSn: {
        title: '專案群組代號',
        type: 'string',
        valuePrepareFunction: (cell) => {
          return `【${cell}】`;
        },
      },
      groupName: {
        title: '專案群組名稱',
        type: 'html',
        valuePrepareFunction: (cell) => {
          return `<span class="groupName">${cell}</span>`;
        },
      },
      sn: {
        title: '專案項目編號',
        type: 'string',
        valuePrepareFunction: (cell) => {
          return `【${cell}】`;
        },
      },
      name: {
        title: '專案項目名稱',
        type: 'html',
        valuePrepareFunction: (cell) => {
          return `<span class="name">${cell}</span>`;
        },
      },
      status: {
        title: '狀態',
        type: 'html',
        width: '70px',
        valuePrepareFunction: (cell) => {
          return cell ? `<span class="onStatus">啟動</span>` : '結束';
        },
      },
      startAt: {
        title: '開始時間',
        type: 'Date',
        width: '105px',
        valuePrepareFunction: (created) => {
          return created === ''
            ? ''
            : this.datePipe.transform(new Date(created), 'yyyy-MM-dd');
        },
      },
      endAt: {
        title: '結束時間',
        type: 'Date',
        width: '105px',
        valuePrepareFunction: (created) => {
          return created === ''
            ? ''
            : this.datePipe.transform(new Date(created), 'yyyy-MM-dd');
        },
      },
    },
  };

  source: LocalDataSource; // add a property to the component

  constructor(
    private service: ProjectManagementService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) {
    this.source = new LocalDataSource(); // create the source
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(ProjectManagementCreateComponent, {
        autoFocus: false,
        hasScroll: true,
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.refreshTable(this.query);
        }
      });
  }

  // 開啟編輯modal
  openModify(event): void {
    const snNo = event.data.sn;
    this.service.getData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage, 'danger');
      } else {
        this.dialogService
          .open(ProjectManagementModifyComponent, {
            autoFocus: false,
            hasScroll: true,
            context: {
              groupSn: res.data.groupSn,
              groupName: res.data.groupName,
              sn: res.data.sn,
              name: res.data.name,
              status: res.data.status,
              formControl: new Date(res.data.startAt),
              ngModelDate: new Date(res.data.endAt),
            },
          })
          .onClose.subscribe((result) => {
            if (result) {
              this.refreshTable(this.query);
            }
          });
      }
    });
  }

  // 刪除
  deleteNews(event): void {
    const snNo = event.data.sn;
    this.service.deleteData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage, 'danger');
      } else {
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.refreshTable(this.query);
      }
    });
  }

  refreshTable(query): any {
    this.service.getAll(query).subscribe((data) => {
      this.source.load(data);
    });
  }

  onSearch(query: string = ''): any {
    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter(
        [
          {
            field: 'groupSn',
            search: query,
          },
          {
            field: 'groupName',
            search: query,
          },
          {
            field: 'sn',
            search: query,
          },
          {
            field: 'name',
            search: query,
          },
        ],
        false
      );
    }
  }

  ngOnInit(): void {}
}
