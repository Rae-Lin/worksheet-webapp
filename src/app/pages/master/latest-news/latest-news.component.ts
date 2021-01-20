import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestNewsService } from 'src/app/shared/service/master/latest-news.service';
import { NbDialogService } from '@nebular/theme';
import { LatestNewsModalComponent } from './create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './modify/latest-news-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LocalDataSource } from 'ng2-smart-table';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  providers: [DatePipe],
})
export class LatestNewsComponent implements OnInit {
  private query = '?AllData=true';
  private newsItem: {
    subject: string;
    content: string;
    startAt: Date;
    endAt: Date;
  };

  // table Data
  settings = {
    pager: {display: true}, // 設定分頁
    mode: 'external',       // 新增、編輯以跳窗開啟
    hideSubHeader: true ,   // 不顯示新增資料欄位
    actions: {              // 操作欄位
      columnTitle: '',      // 標題名稱
      position: 'right',    // 表格最後
      add: false,           // 不在表格內開放新增
    },
    attr: {class: 'table thead-light table-hover'},   // 表格添加class
    noDataMessage: '查無資料',   // no data found Message
    edit: {editButtonContent: '<img src="./assets/img/icon-edit.svg">'},
    delete: {deleteButtonContent: '<img src="./assets/img/icon-delete.svg">'},
    columns: {
      subject: {
        title: '主旨',
        type: 'html',
        valuePrepareFunction: (cell) => {
          return `<span class="subject">${cell}</span>`;
        }
      },
      content: {
        title: '消息內容',
        type: 'html',
        valuePrepareFunction: (cell) => {
          return `<span class="content">${cell}</span>`;
        }
      },
      startAt: {
        title: '開始時間',
        type: 'Date',
        width: '105px',
        valuePrepareFunction: (created) => {
          return this.datePipe.transform(new Date(created), 'yyyy-MM-dd');
        }
      },
      endAt: {
        title: '結束時間',
        type: 'Date',
        width: '105px',
        valuePrepareFunction: (created) => {
          return this.datePipe.transform(new Date(created), 'yyyy-MM-dd');
        }
      },
    },
  };

  source: LocalDataSource; // add a property to the component

  constructor(
    private service: LatestNewsService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private masterCommon: MasterCommonService
  ) {
    this.source = new LocalDataSource(); // create the source
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(LatestNewsModalComponent, { autoFocus: false, hasScroll: true}, )
      .onClose.subscribe((result) => {
        if (result) {
          this.masterCommon.refreshTable(this.service, this.query, this.source);
        }
      });
  }

  // 刪除
  deleteNews(event): void {
    const idNo = event.data.id;
    this.service.deleteData(idNo).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.masterCommon.refreshTable(this.service, this.query, this.source);
      }
    });
  }

  // 開啟編輯modal
  openModify(event): void {
    const idNo = event.data.id;
    this.service.getData(idNo).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
      } else {
        this.dialogService
          .open(LatestNewsModifyComponent, {
            autoFocus: false, hasScroll: true,
            context: {
              id: idNo,
              subject: res.data.subject,
              content: res.data.content,
              formControl: new Date(res.data.startAt),
              ngModelDate: new Date(res.data.endAt),
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

  ngOnInit(): void {
  }
}
