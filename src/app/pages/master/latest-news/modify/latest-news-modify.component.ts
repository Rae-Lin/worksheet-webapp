import { Component, Input, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';

@Component({
  selector: 'app-latest-news-modify',
  templateUrl: './latest-news-modify.component.html',
  styleUrls: ['./latest-news-modify.component.scss']
})
export class LatestNewsModifyComponent implements OnInit {
  @Input() subject: string;
  @Input() content: string;
  @Input() formControl: Date;
  @Input() ngModelDate: Date;

  min: Date;
  news = {};

  constructor(
    private dialogRef: NbDialogRef<LatestNewsModifyComponent>,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.subject.trim() || !this.content.trim() || !this.formControl || !this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
      return;
    }
    if (this.formControl > this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
      return;
    }
    this.news = {
      subject: this.subject,
      content: this.content,
      startAt: this.formControl,
      endAt: this.ngModelDate,
    };
    this.dialogRef.close(this.news);
  }

  ngOnInit(): void {
  }

}
