import { Observable } from 'rxjs';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LatestNews, LatestNewsService } from './../../../shared/service/master/latest-news.service';
import { NbDialogService } from '@nebular/theme';
import { APIdata } from 'src/app/shared/service/app.service';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit{
  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  apidata: APIdata;
  newsList$: Observable<APIdata>;

  constructor(
    private service: LatestNewsService,
    private dialogService: NbDialogService
  ) { }

  open(dialog: TemplateRef<any>): void {
    this.dialogService.open(dialog);
  }

  ngOnInit(): void {
    this.newsList$ = this.service.getAll();
    console.log(this.newsList$);

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

