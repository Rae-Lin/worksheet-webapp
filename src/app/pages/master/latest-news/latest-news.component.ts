import { LatestNews, LatestNewsService } from './../../../shared/service/master/latest-news.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-latest-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './latest-news.component.html',
  providers: [LatestNewsService],
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent{
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  error: any;
  headers: string[];
  latestNews: LatestNews;

  constructor(private latestNewsService: LatestNewsService) {}

  // tslint:disable-next-line: typedef
  showConfig() {
    this.latestNewsService.getNews()
      .subscribe((data: LatestNews) => this.latestNews = {
        subject: data.subject,
        content:  data.content,
        startAt: data.startAt,
        endAt: data.endAt,
      });
  }
}
