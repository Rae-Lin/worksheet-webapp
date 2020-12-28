import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  items: NbMenuItem[] = [
    {
      title: '首頁',
      link: '/home',
    },
    {
      title: '最新消息',
      link: '/latestnews',
    },
    {
      title: '報表',
      link: '/report',
    },
    {
      title: '權限',
      link: '/pages',
    },
    {
      title: '主檔設定',
    },
  ];

}
