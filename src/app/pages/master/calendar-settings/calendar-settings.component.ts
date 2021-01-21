import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  CalendarOptions,
  EventClickArg,
  FullCalendarComponent,
} from '@fullcalendar/angular'; // useful for typechecking
import { NbDialogService } from '@nebular/theme';
import { CalendarSettingsCreateComponent } from './create/calendar-settings-create.component';
import { CalendarSettingsService } from 'src/app/shared/service/master/calendar-settings.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-settings',
  templateUrl: './calendar-settings.component.html',
  styleUrls: ['./calendar-settings.component.scss'],
})
export class CalendarSettingsComponent implements OnInit {
  private query = '';
  currentMonth: string;
  calendarEvents: any[] = [];
  calendarOptions: CalendarOptions;

  @ViewChild('fullcalendar', { static: false })
  fullcalendarComponent: FullCalendarComponent;

  constructor(
    public datePipe: DatePipe,
    public dialogService: NbDialogService,
    private service: CalendarSettingsService,
    private masterCommon: MasterCommonService
  ) {}

  eventDate: string;
  totalWorkHours: string;
  showEventDetail: boolean;

  // 日期 Click Function
  handleDateClick(arg, jsEvent): any {
    this.openCreate(arg.dateStr);
  }

  handleEventClick(clickInfo: EventClickArg): any {
    this.showEventDetail = true;
  }

  // 前一個月 button click
  getEventsByMonthBefore(arg): any {
    this.showEventDetail = false;

    // 引用 api
    const calendarApi = this.fullcalendarComponent.getApi();
    calendarApi.prev();

    // 可取得顯示的月份
    const datePipe = new DatePipe('en-US');
    this.currentMonth = datePipe.transform(calendarApi.getDate(), 'yyyy/MM');
  }

  // 下一個月 button click
  getEventsByMonthAfter(arg): any {
    this.showEventDetail = false;
    const calendarApi = this.fullcalendarComponent.getApi();
    calendarApi.next();

    const datePipe = new DatePipe('en-US');
    this.currentMonth = datePipe.transform(calendarApi.getDate(), 'yyyy/MM');
  }

  // 日期 click 開啟 填寫工時 Dialog
  openCreate(selectDate: string): any {
    this.dialogService.open(CalendarSettingsCreateComponent, {
      autoFocus: false,
      hasScroll: true,
      context: { setDate: selectDate },
    });
    // .onClose.subscribe((result) => {
    //   if (result) {
    //     this.refreshCalendar();
    //   }
    // });
  }

  // 月曆 schedule 設定
  getData(): any {
    // setTimeout(() => {
      this.service.getAll(this.query).subscribe((data) => {
        data.forEach((element) => {
          this.calendarEvents.push({
            title: element.memo,
            start: element.setDate,
            allDay: true,
            display: 'background',
            color: element.type === 0 ? '#9764ff26' : '#89d2ffd2',
          });
        });
      });
      // }, 2000);
  }
  initCalendar(): any {
    this.calendarOptions  = {
      headerToolbar: {
        left: 'prev,title,next',
        right: 'today',
      },
      initialView: 'dayGridMonth',  // 月曆顯示格式
      locale: 'zh-tw',              // 地區顯示
      showNonCurrentDates: false,   // true 顯示非當月日期，false 不顯示非當月日期
                                    // 個別定義上下月分 button 以設定 click events
      customButtons: {
        prev: {
          text: '<',
          click: this.getEventsByMonthBefore.bind(this),
        },
        next: {
          text: '>',
          click: this.getEventsByMonthAfter.bind(this),
        },
      },
      editable: true, // 判斷該日程是否能拖動
      selectable: true, // 日期是否可多選
      dateClick: this.handleDateClick.bind(this), // 日期 click events
      eventClick: this.handleEventClick.bind(this),
      events: this.calendarEvents,
      dayCellContent: (args) => {
        return moment(args.date).format('D');
      }
    };
  }

  refreshCalendar(): any {
    this.getData();
    console.log(this.calendarEvents);
    setTimeout(() => {
      this.initCalendar();
   }, 300);
  }

  ngOnInit(): void {
    this.showEventDetail = false;
    this.refreshCalendar();
  }
}
