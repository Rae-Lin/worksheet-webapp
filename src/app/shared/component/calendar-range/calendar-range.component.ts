import { Component } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-calendar-range',
  templateUrl: './calendar-range.component.html',
  styleUrls: ['./calendar-range.component.scss']
})
export class CalendarRangeComponent {
  range: NbCalendarRange<Date>;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}
