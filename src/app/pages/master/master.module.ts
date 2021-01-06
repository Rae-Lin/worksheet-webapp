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
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestNewsModalComponent } from './latest-news/modal/latest-news-modal.component';
import { TestComponent } from './latest-news/test/test.component';

@NgModule({
  declarations: [MasterComponent, LatestNewsComponent, LatestNewsModalComponent, TestComponent],
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
    NbDialogModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MasterComponent, LatestNewsComponent, LatestNewsModalComponent],
  entryComponents: [LatestNewsModalComponent],
})
export class MasterModule {}
