import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';

import {
  NbSidebarModule,
  NbMenuModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCardModule,
  NbDialogModule,
  NbIconModule,
  NbThemeModule,
  NbFormFieldModule,
  NbAccordionModule,
  NbActionsModule,
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

import { HomeComponent } from './home.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';

import { TreeModule } from '@circlon/angular-tree-component';

@NgModule({
  declarations: [HomeComponent, WorkScheduleComponent],
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
    NbCardModule,
    NbThemeModule,
    NbLayoutModule,
    NbIconModule,
    NbDialogModule.forChild(),
    NbFormFieldModule,
    NbAccordionModule,
    NbActionsModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    NgSelectModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
