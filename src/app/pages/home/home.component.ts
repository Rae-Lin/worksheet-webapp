import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'zh-tw',
    showNonCurrentDates: false,
    editable: true,                            //判断该日程能否拖动
    dateClick: this.handleDateClick.bind(this), // bind is important!
    selectable: true,
    events: function (fetchInfo, successCallback, failureCallback)
      {
        var datePipe = new DatePipe("en-US");
        let latest_date = datePipe.transform(fetchInfo.start, 'yyyy-MM-dd');
      
        var events = [];

        if (fetchInfo.start.getFullYear() == 2021) {
            if (fetchInfo.start.getMonth() == 0) {
              events.push(
                  { title: '工作時數: 8', date: '2021-01-05' },
                  { title: '工作時數: 10', date: '2021-01-06' },
                  { title: '工作時數: 7.5', date: '2021-01-07' },
                  { title: '工作時數: 4', date: '2021-01-08' }
                );
            }
            else if (fetchInfo.start.getMonth() == 1) {
              events.push(
                  { title: '工作時數: 8', date: '2021-02-09' },
                  { title: '工作時數: 10', date: '2021-02-10' },
                  { title: '工作時數: 7.5', date: '2021-02-15' },
                  { title: '工作時數: 4', date: '2021-02-16' }
                );
            }
        }

        successCallback(events);
      },
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
}

