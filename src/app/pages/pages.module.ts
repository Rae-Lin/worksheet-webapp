import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
} from '@nebular/theme';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { ReportModule } from './report/report.module';
import { MasterModule } from './master/master.module';
import { ManagementModule } from './management/management.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbTabsetModule,
    NbCardModule,
    NbLayoutModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    HomeModule,
    ReportModule,
    ManagementModule,
    MasterModule,
    SharedModule
  ]
})
export class PagesModule {}
