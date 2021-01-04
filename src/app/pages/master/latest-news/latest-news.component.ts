import { LatestNewsService } from './../../../shared/service/master/latest-news.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.component.html',
  providers: [LatestNewsService],
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor(
    private service: LatestNewsService
  ) { }

  ngOnInit(): void {
    this.service.getData(1)
      .subscribe(res => {
        console.log(res);
        if (res['errorMessage']) {
          alert(res);
        }
      });
    this.service.postData({ title: '123'})
      .subscribe(res => {
        console.log(res);
      });
    this.service.updateData(1, { title: '123'})
      .subscribe(res => {
        console.log(res);
      });
    this.service.deleteData(1)
      .subscribe(res => {
        console.log(res);
      });
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
}
