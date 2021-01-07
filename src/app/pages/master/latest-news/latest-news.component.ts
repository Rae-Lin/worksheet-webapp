import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { LatestNews, LatestNewsService } from './../../../shared/service/master/latest-news.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { APIdata } from 'src/app/shared/service/app.service';
import { LatestNewsModalComponent } from './create/latest-news-modal.component';
import { ModifyNewsComponent } from './modify/modify-news.component';

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
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit{
  // private dialogRef: NbDialogRef<any>;
  private newsItem: {
    subject: string;
    content: string;
    startAt: Date;
    endAt: Date;
  };

  apidata: APIdata;
  // newsList$: Observable<APIdata>;
  newsList$: Observable<any>;
  constructor(
    private service: LatestNewsService,
    private dialogService: NbDialogService
  ) { }

  openCreate(): void {
    // this.dialogRef = this.dialogService.open(LatestNewsModalComponent, {
    this.dialogService.open(LatestNewsModalComponent, {
      dialogClass: 'model-full'})
      .onClose.subscribe(item => {
        if (item) {
              console.log('回傳');
              this.newsItem = {
                subject: item.subject,
                content: item.content,
                startAt: item.startAt,
                endAt: item.endAt,
              };
              this.submit();
        }
      });
  }

  submit(): void {
      this.service.postData(this.newsItem)
      .subscribe(res => {
        console.log('準備存囉');
        if (res.errorMessage) { alert(res.errorMessage); }
        console.log('存完囉');
      });
  }

  deleteNews(id: number): void {
    this.service.deleteData(id)
    .subscribe(res => {
      console.log('準備刪囉');
      if (res.errorMessage) { alert(res.errorMessage); }
      console.log('刪完囉');
    });
    // this.service.getAll().subscribe(res => {
    //   this.newsList$ = res;
    //   if (res.errorMessage) { alert(res.errorMessage); }
    // });
  }

  openModify(id: number): void {
    this.service.getData(id)
      .subscribe(res => {
        if (res.errorMessage) { alert(res.errorMessage); }

      });
    console.log(id);
    this.dialogService.open(ModifyNewsComponent, {
      context: {
        subject: 'show please',
        content: '',
        startat: new Date(),
        endat: new Date(),
      },
      dialogClass: 'model-full'})
      .onClose.subscribe(item => {
        console.log('回傳');
        this.newsItem = {
          subject: item.subject,
          content: item.content,
          startAt: item.startAt,
          endAt: item.endAt,
        };
      });
  }

  ngOnInit(): void {
    this.newsList$ = this.service.getAll();
    console.log(this.newsList$);
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

