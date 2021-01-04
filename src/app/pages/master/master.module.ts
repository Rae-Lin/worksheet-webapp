import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';

import { MasterComponent } from './master.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MasterComponent,
    LatestNewsComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
  ],
  exports: [
    MasterComponent,
    LatestNewsComponent
  ],
})
export class MasterModule { }
