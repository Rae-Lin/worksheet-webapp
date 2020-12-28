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
import { HomeComponent } from './home/home.component';
import { ManagementComponent } from './management/management.component';
import { MasterComponent } from './master/master.component';
import { ReportComponent } from './report/report.component';
// import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ManagementComponent,
    MasterComponent,
    ReportComponent,
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
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ManagementComponent,
    MasterComponent,
    ReportComponent,
  ],
})
export class PagesModule {}
