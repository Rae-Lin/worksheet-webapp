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
import { LatestNewsModalComponent } from './latest-news/create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './latest-news/modify/latest-news-modify.component';

@NgModule({
  declarations: [
    MasterComponent,
    LatestNewsComponent,
    LatestNewsModalComponent,
    LatestNewsModifyComponent
  ],
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
    ReactiveFormsModule
  ],
  exports: [MasterComponent, LatestNewsComponent, LatestNewsModalComponent, LatestNewsModifyComponent],
  entryComponents: [LatestNewsModalComponent],
})
export class MasterModule {}
