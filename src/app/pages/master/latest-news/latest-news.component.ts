import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LatestNewsService } from 'src/app/shared/service/master/latest-news.service';
import { NbDialogService } from '@nebular/theme';
// import { APIdata } from 'src/app/shared/service/app.service';
import { LatestNewsModalComponent } from './create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './modify/latest-news-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LocalDataSource } from 'ng2-smart-table';

// export interface News {
//   id: number;
//   subject: string;
//   content: string;
//   startAt: string;
//   endAt: string;
// }

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

  // apidata: APIdata;
  // newsList$: Observable<APIdata>;
  // newsList$: Observable<any[]>;

  // table Data
  settings = {
    pager: {display: true}, // 設定分頁
    mode: 'external',     // 新增、編輯以跳窗開啟
    hideSubHeader: true , // 不顯示新增資料欄位
    actions: {            // 操作欄位
      columnTitle: '',    // 標題名稱
      position: 'right',  // 表格最後
      add: false,         // 不在表格內開放新增
    },
    noDataMessage: '查無資料',  // no data found Message
    edit: {editButtonContent: '<img src="./assets/img/icon-edit.svg">'},
    delete: {deleteButtonContent: '<img src="./assets/img/icon-delete.svg">'},
    attr: {class: 'table thead-light table-hover'},  // 表格添加class
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
      .open(LatestNewsModalComponent, { autoFocus: false, hasScroll: true}, )
      .onClose.subscribe((result) => {
        if (result) {
          this.refreshTable(this.query);
        }
      });
  }

  // 開啟新增modal - 執行新增
  // createNews(): void {
  //   this.service.postData(this.newsItem).subscribe((res: any) => {
  //     if (res.errorMessage) {
  //       this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
  //     }else{
  //       this.toastr.showToast('', 'top-right', '新增成功', 'success');
  //       this.refreshTable(this.query);
  //     }
  //   });
  // }

  // 刪除
  deleteNews(event): void {
    console.log(event.data.id);
    const idNo = event.data.id;
    this.service.deleteData(idNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.refreshTable(this.query);
      }
    });
  }

  // 開啟編輯modal
  openModify(event): void {
    const idNo = event.data.id;
    this.service.getData(idNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
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
              this.refreshTable(this.query);
            }
          });
      }
    });
  }

  // 開啟編輯modal - 執行編輯
  // modifyNews(idNo: number, Newsitem: object): void {
  //   this.service.updateData(idNo, Newsitem).subscribe((res: any) => {
  //     if (res.errorMessage) {
  //       this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
  //     }else{
  //       this.toastr.showToast('', 'top-right', '修改成功', 'success');
  //       this.refreshTable(this.query);
  //     }
  //   });
  // }

  refreshTable(query): any {
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
    // this.newsList$ = this.service.getAll();
    // console.log(this.newsList$);
    // this.newsList$.subscribe((res) => {
    //   console.log(res.data.list);
    //   this.newsList = res.data.list;
    // });

    // this.service.postData({ title: '123'})
    //   .subscribe(res => {
    //     console.log(res);
    //   });
    // this.service.updateData(1, { title: '123'})
    //   .subscribe(res => {
    //     console.log(res);
    //   });
    // this.service.deleteData(1)
    //   .subscribe(res => {
    //     console.log(res);
    //   });
  }

  // error: any;
  // headers: string[];
  // latestNews: LatestNews;

  // constructor(private latestNewsService: LatestNewsService) {}

  // // tslint:disable-next-line: typedef
  // showConfig() {
  //   this.latestNewsService.getNews()
  //     .subscribe((data: LatestNews) => this.latestNews = {
  //       subject: data.subject,
  //       content:  data.content,
  //       startAt: data.startAt,
  //       endAt: data.endAt,
  //     });
  // }

  // ngAfterViewInit(): void {
  //   this.getAll();
  // }
}
