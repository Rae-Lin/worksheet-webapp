import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CalendarSettingsService } from 'src/app/shared/service/master/calendar-settings.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-calendar-settings-create',
  templateUrl: './calendar-settings-create.component.html',
  styleUrls: ['./calendar-settings-create.component.scss']
})
export class CalendarSettingsCreateComponent implements OnInit {
  @Input() setDate: string;
  type = '';
  memo = '';
  setting = {};

  constructor(
    private dialogRef: NbDialogRef<CalendarSettingsCreateComponent>,
    private service: CalendarSettingsService,
    private masterCommon: MasterCommonService,
  ) { }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    this.setting = {
      setDate: this.setDate,
      type: this.type,
      memo: this.memo,
    };
    console.log(this.setting);
    this.masterCommon.doCreate(this.service, this.dialogRef, this.setting);
  }

  ngOnInit(): void {
  }

}
