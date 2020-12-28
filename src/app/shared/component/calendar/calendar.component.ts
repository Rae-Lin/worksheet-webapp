import { Component, OnInit } from '@angular/core';

import { NbCalendarSize, NbCalendarSizeValues, } from '@nebular/theme';
// import { DayCellComponent } from './day-cell/day-cell.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent  {

  date = new Date();
  date2 = new Date();

  // dayCellComponent = DayCellComponent;
}
