import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import {
  NbSidebarModule,
  NbCardModule,
  NbThemeModule,
  NbMenuModule,
  NbLayoutModule,
  NbTabsetModule,
} from '@nebular/theme';

import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbTabsetModule,
    SharedModule,
    HomeRoutingModule,
    FullCalendarModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
