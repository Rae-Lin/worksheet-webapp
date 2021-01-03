import {  ChangeDetectionStrategy, Component } from '@angular/core';
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
      link: 'Home',
    },
    {
      title: '報表',
      link: 'Report',
    },
    {
      title: '權限管理',
      link: 'Management' ,
    },
    {
      title: '主檔設定',
      link: 'Master',
    },
  ];
}
