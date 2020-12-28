import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarMenuComponent } from './menu/sidebar-menu.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarMenuComponent],
  imports: [
    CommonModule, LayoutRoutingModule,
  ],
  exports: [
    HeaderComponent, SidebarMenuComponent, FooterComponent
  ]
})
export class LayoutModule { }
