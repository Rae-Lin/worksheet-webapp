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
      icon: 'home-outline',
      link: '/home',
      home: true,
      pathMatch: 'prefix',
    },
    {
      title: '報表',
      icon: 'bar-chart-outline',
      link: '/report',
      pathMatch: 'prefix',
    },
    {
      title: '權限管理',
      icon: 'shield-outline',
      link: '/management',
      pathMatch: 'full',
    },
    {
      title: '系統管理',
      expanded: true,
      icon: 'settings-2-outline',
      pathMatch: 'prefix',
      link: '/pages/master',
      children: [
        {
          title: '員工資訊',
          icon: 'person-outline',
          link: '/master/staff-members',
          pathMatch: 'prefix',
        },
        {
          title: '單位資訊',
          icon: 'clipboard-outline',
          link: '/master/departments',
          pathMatch: 'prefix',
        },
        {
          title: '建立專案群組',
          icon: 'folder-add-outline',
          link: '/master/project-groups',
          pathMatch: 'prefix',
        },
        {
          title: '專案',
          icon: 'file-text-outline',
          link: '/master/project-management',
          pathMatch: 'prefix',
        },
        {
          title: '工作階段模板',
          icon: 'grid-outline',
          link: '/master/project-session',
          pathMatch: 'prefix',
        },
        {
          title: '專案成員',
          icon: 'people-outline',
          link: '/master/project-member',
          pathMatch: 'prefix',
        },
        {
          title: '專案設定',
          icon: 'file-add-outline',
          link: '/master/project-settings',
          pathMatch: 'prefix',
        },
        {
          title: '最新消息',
          icon: 'bell-outline',
          link: '/master/latest-news',
          pathMatch: 'prefix',
        },
        {
          title: '日曆管理',
          icon: 'calendar-outline',
          link: '/master/calendar-settings',
          pathMatch: 'prefix',
        }
      ],
    },
  ];
}
