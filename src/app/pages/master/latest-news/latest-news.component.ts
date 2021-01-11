import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  LatestNews,
  LatestNewsService,
} from './../../../shared/service/master/latest-news.service';
import { NbDialogService } from '@nebular/theme';
import { APIdata } from 'src/app/shared/service/app.service';
import { LatestNewsModalComponent } from './create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './modify/latest-news-modify.component';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

export interface News {
  id: number;
  subject: string;
  content: string;
  startAt: string;
  endAt: string;
}

@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {
  private newsItem: {
    subject: string;
    content: string;
    startAt: Date;
    endAt: Date;
  };

  apidata: APIdata;
  // newsList$: Observable<APIdata>;
  newsList$: Observable<any[]>;
  constructor(
    private service: LatestNewsService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
  ) {}

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(LatestNewsModalComponent, { dialogClass: 'model-full' })
      .onClose.subscribe((item) => {
        if (item) {
          this.newsItem = {
            subject: item.subject,
            content: item.content,
            startAt: item.startAt,
            endAt: item.endAt,
          };
          this.createNews();
        }
      });
  }

  // 開啟新增modal - 執行新增
  createNews(): void {
    this.service.postData(this.newsItem).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '新增成功', 'success');
      }
    });
    this.newsList$.subscribe();
  }

  // 刪除
  deleteNews(idNo: number): void {
    this.service.deleteData(idNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
      }
    });
  }

  // 開啟編輯modal
  openModify(idNo: number): void {
    this.service.getData(idNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      } else {
        this.dialogService
          .open(LatestNewsModifyComponent, {
            dialogClass: 'model-full',
            context: {
              subject: res.data.subject,
              content: res.data.content,
              formControl: new Date(res.data.startAt),
              ngModelDate: new Date(res.data.endAt),
            },
          })
          .onClose.subscribe((item) => {
            if (item) {
              const Newsitem = {
                id: idNo,
                subject: item.subject,
                content: item.content,
                startAt: item.startAt,
                endAt: item.endAt,
              };
              this.modifyNews(idNo, Newsitem);
            }
          });
      }
    });
  }

  // 開啟編輯modal - 執行編輯
  modifyNews(idNo: number, Newsitem: object): void {
    this.service.updateData(idNo, Newsitem).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '修改成功', 'success');
      }
    });
  }

  ngOnInit(): void {
    this.newsList$ = this.service.getAll();
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
