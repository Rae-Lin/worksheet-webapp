import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';

import { MasterComponent } from './master.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NbCalendarModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MasterComponent, LatestNewsComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
    NbCardModule,
    NbThemeModule,
    NbLayoutModule,
    NbDatepickerModule,
    NbIconModule,
    NbCalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MasterComponent, LatestNewsComponent],
})
export class MasterModule {}
