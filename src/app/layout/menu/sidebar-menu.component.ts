import {  ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent {

}
