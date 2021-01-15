import { Component, Input, OnInit } from '@angular/core';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LatestNewsService } from 'src/app/shared/service/master/latest-news.service';

@Component({
  selector: 'app-latest-news-modify',
  templateUrl: './latest-news-modify.component.html',
  styleUrls: ['./latest-news-modify.component.scss']
})
export class LatestNewsModifyComponent implements OnInit {
  @Input() id: string;
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
    private service: LatestNewsService,
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
      id: this.id,
      subject: this.subject,
      content: this.content,
      startAt: this.formControl,
      endAt: this.ngModelDate,
    };
    // this.dialogRef.close(this.news);
    this.doModify(this.id, this.news);
  }

  doModify(id, data): void {
    this.service.updateData(id, data).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
        return false;
      }else{
        this.toastr.showToast('', 'top-right', '修改成功', 'success');
        this.dialogRef.close(true);
      }
    });
  }

  ngOnInit(): void {
  }

}
