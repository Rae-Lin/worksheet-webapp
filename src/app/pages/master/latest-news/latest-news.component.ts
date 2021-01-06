import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LatestNews, LatestNewsService } from './../../../shared/service/master/latest-news.service';



@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.component.html',
  // providers: [LatestNewsService],
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  newsList: Observable<any>;
  latestNews: LatestNews;

  constructor(
    private service: LatestNewsService
  ) { }

  getAll(): void {
    this.service.getAll()
      .subscribe(res => {
        this.newsList = res.data.list;
        console.log(this.newsList);
        if (res.errorMessage) {
          alert(res.errorMessage);
        }
      });
  }

  ngOnInit(): void {
    // this.newsList = [
    //   {id: 2, subject: 'test', content: '最新消息測試', startAt: '2020-01-01T00:00:00', endAt: '2022-01-01T00:00:00'},
    //   {id: 2, subject: 'test', content: '最新消息測試', startAt: '2020-01-01T00:00:00', endAt: '2022-01-01T00:00:00'},
    // ];
    // console.log(this.newsList);
    this.service.getAll()
      .subscribe(res => {
        this.newsList = res.data.list;
        console.log(this.newsList);
        if (res.errorMessage) {
          alert(res.errorMessage);
        }
      });
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

  // // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit(): void{
  //   this.getAll();
  // }

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
}
