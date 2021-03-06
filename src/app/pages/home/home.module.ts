import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import {
  NbSidebarModule,
  NbCardModule,
  NbThemeModule,
  NbMenuModule,
  NbCalendarModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCalendarRangeModule,
} from '@nebular/theme';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbThemeModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbSidebarModule,
    NbMenuModule,
    NbTabsetModule,
    SharedModule,
  ],
  exports: [
    // CalendarRangeComponent
  ]
})
export class HomeModule { }
