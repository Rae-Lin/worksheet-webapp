import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {
  items: NbMenuItem[] = [
    {
      title: '首頁',
      link: 'pages/home',
    },
    {
      title: '報表',
      link: 'pages/report',
    },
    {
      title: '權限管理',
      link: 'pages/management',
    },
    {
      title: '主檔設定',
      expanded: true,
      // link: 'pages/master',
      children: [
        {
          title: '最新消息',
          link: 'pages/master/latest-news',
        }
      ],
    },
  ];
}
