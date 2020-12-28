import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbThemeModule, NbCardModule, NbCalendarModule, NbLayoutModule, NbCalendarRangeModule } from '@nebular/theme';
import { SharedComponent } from './shared.component';
import { CalendarRangeComponent } from './component/calendar-range/calendar-range.component';
import { CalendarComponent } from './component/calendar/calendar.component';

@NgModule({
  declarations: [
    SharedComponent,
    CalendarRangeComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    NbThemeModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbCalendarModule,
    NbCalendarRangeModule
  ],
  exports: [
    SharedComponent,
    CalendarComponent,
    CalendarRangeComponent,
  ]
})
export class SharedModule { }
