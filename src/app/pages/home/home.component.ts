import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CalendarOptions, EventClickArg,  FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking

import { NbDialogService } from '@nebular/theme';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentMonth: string;
  @ViewChild('fullcalendar', { static: false }) fullcalendarComponent: FullCalendarComponent;

  constructor(public datepipe: DatePipe,
              public dialogService: NbDialogService,
             ) { }

  ngOnInit(): void {

    this.showEventDetail = false;
  }

  eventDate: string;
  totalWorkHours: string;
  showEventDetail: boolean;

  // 日程 資料
  arrayEvents202101 = [ 
    { date: '2021-01-05',  workHour: 8 },
    { date: '2021-01-06',  workHour: 10 },
    { date: '2021-01-07',  workHour: 7.5 },
    { date: '2021-01-08',  workHour: 8 },
  ];

  arrayEvents202102 = [ 
    { date: '2021-02-09',  workHour: 8 },
    { date: '2021-02-10',  workHour: 10 },
    { date: '2021-02-15',  workHour: 7.5 },
    { date: '2021-02-16',  workHour: 4 },
  ];

  // Date Work Project 資料
  arrayProjrct: any[];
  arrayProjrct0105 = [{ 
      projrctName:'Q Burger_會員APP_仕燮_門市店休設定及收單銀行MID設定', 
      workHour:'8',
      workItem: [{ item:'公司活動參與(朝會、資安會議等)', desc: '1.需求訪談 2.整理內容'},
                 { item:'設計式樣做成及檢討', desc: '已完成月曆以及公時填寫版本'}]
  }];

  arrayProjrct0106 = [{ 
      projrctName:'Q Burger_會員APP_仕燮_門市店休設定及收單銀行MID設定', 
      workHour:'8',
      workItem: [{ item:'公司活動參與(朝會、資安會議等)', desc: '1.需求訪談 2.整理內容'},
                 { item:'設計式樣做成及檢討', desc: '已完成月曆以及公時填寫版本'}]
    },
    { projrctName:'共通', 
      workHour:'2',
      workItem: [{ item:'部會', desc: ''}]
  }];

  // 月曆 schedule 設定
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',                      // 月曆顯示格式
    locale: 'zh-tw',                                  // 地區顯示
    showNonCurrentDates: false,                       // true顯示非當月日期，false 不顯示非當月日期
                                                      // 個別定義上下月分 button 以設定 click events
    customButtons: {
      prev: {
        text: '<',
        click: this.getEventsByMonthBefore.bind(this)
      },
      next: {
        text: '>',
        click: this.getEventsByMonthAfter.bind(this)
       }
    },
    editable: true,                                   // 判断该日程能否拖动
    dateClick: this.handleDateClick.bind(this),       // 日期 click events
    eventClick: this.handleEventClick.bind(this),     // 日程 click events
    selectable: true,                                 // 日期是否可多選
                                                      // 日程資料綁定
    events: function (fetchInfo, successCallback, failureCallback)
      {
        var events = [];
        var eventColor: string;

        if (fetchInfo.start.getFullYear() == 2021) {
            if (fetchInfo.start.getMonth() == 0) {
              events.push(
                { title: '工作時數: 8', date: '2021-01-05' },
                { title: '工作時數: 10', date: '2021-01-06', color: 'purple' },
                { title: '工作時數: 7.5', date: '2021-01-07' },
                { title: '工作時數: 4', date: '2021-01-08' }
              );
            }
            else if (fetchInfo.start.getMonth() == 1) {
              events.push(
                  { title: '工作時數: 8', date: '2021-02-09' },
                  { title: '工作時數: 10', date: '2021-02-10', color: 'purple' },
                  { title: '工作時數: 7.5', date: '2021-02-15' },
                  { title: '工作時數: 4', date: '2021-02-16' }
                );
            }
        }

        successCallback(events);
      },
      
  };

  // 日期 Click Function
  handleDateClick(arg) {
    this.openDayWorkDialog(arg.dateStr);
  }

  // 日程 Click Function 顯示右方日程資料
  handleEventClick(clickInfo: EventClickArg) {
    this.showEventDetail = true;
    let weekArray = new Array('日', '一', '二', '三', '四', '五', '六');

    var datePipe = new DatePipe("en-US");
    this.eventDate = datePipe.transform(clickInfo.event.start, 'MM/dd') 
                   + "(" + weekArray[clickInfo.event.start.getDay()] + ")";
    this.totalWorkHours = clickInfo.event.title.replace("工作時數:", "總工時") + " 小時";

    this.arrayProjrct = [];

    if (datePipe.transform(clickInfo.event.start, 'MM/dd')  == '01/05') {
      this.arrayProjrct  = Object.assign([], this.arrayProjrct0105);
    }
    else if (datePipe.transform(clickInfo.event.start, 'MM/dd')  == '01/06') {
      this.arrayProjrct  = Object.assign([], this.arrayProjrct0106);
    }

  }

  // 前一個月 button click 
  getEventsByMonthBefore(arg)
  {
    this.showEventDetail = false;

    // 引用 api
    const calendarApi = this.fullcalendarComponent.getApi();
    calendarApi.prev();

    // 可取得顯示的月份
    var datePipe = new DatePipe("en-US");
    this.currentMonth =  datePipe.transform(calendarApi.getDate(), 'yyyy/MM');

  }

  // 下一個月 button click
  getEventsByMonthAfter(arg)
  {
    this.showEventDetail = false;
    const calendarApi = this.fullcalendarComponent.getApi();
    calendarApi.next();

    var datePipe = new DatePipe("en-US");
    this.currentMonth =  datePipe.transform(calendarApi.getDate(), 'yyyy/MM');

  }

  // 日期 click 開啟 填寫工時 Dialog
  openDayWorkDialog(workdate: string) {
    this.dialogService.open(WorkScheduleComponent, 
      { 
        context: { workDate : workdate },
        hasBackdrop: true,
        closeOnBackdropClick: false,
      });
  }
}
