import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { CalendarSettingsService } from 'src/app/shared/service/master/calendar-settings.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-calendar-settings-modify',
  templateUrl: './calendar-settings-modify.component.html',
  styleUrls: ['./calendar-settings-modify.component.scss']
})
export class CalendarSettingsModifyComponent implements OnInit {
  @Input() setDate: string;
  @Input() type: number;
  @Input() memo: string;
  event = {};

  constructor(
    private dialogRef: NbDialogRef<CalendarSettingsModifyComponent>,
    private service: CalendarSettingsService,
    private masterCommon: MasterCommonService,
    private toastr: ToastrService,
  ) { }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }
  submit(): void {
    this.event = {
      setDate: this.setDate,
      type: this.type,
      memo: this.memo
    };
    console.log(this.event);
    this.masterCommon.doModify(this.service, this.dialogRef, `edit?id=${this.setDate}`, this.event);
  }

    // 刪除
    delete(): void {
      const id = `del?id=${this.setDate}`;
      this.service.deleteData(id).subscribe((res: any) => {
        if (res.errorStatus) {
          this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
        }else{
          this.toastr.showToast('', 'top-right', '刪除成功', 'success');
          this.masterCommon.doClose(this.dialogRef);
        }
      });
    }

  ngOnInit(): void {
  }

}
