import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { LatestNewsService } from 'src/app/shared/service/master/latest-news.service';
import { MasterCommonService } from 'src/app/shared/service/master/master-common.service';

@Component({
  selector: 'app-latest-news-modal',
  templateUrl: './latest-news-modal.component.html',
  styleUrls: ['./latest-news-modal.component.scss']
})

export class LatestNewsModalComponent implements OnInit {
  subject = '';
  content = '';
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  min: Date;
  news = {};

  constructor(
    private dialogRef: NbDialogRef<LatestNewsModalComponent>,
    private service: LatestNewsService,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
    private masterCommon: MasterCommonService,
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.masterCommon.doClose(this.dialogRef);
  }

  submit(): void {
    if (!this.subject.trim() || !this.content.trim() || !this.formControl.value || !this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
      return;
    }
    if (this.formControl.value > this.ngModelDate) {
      this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
      return;
    }
    this.news = {
      subject: this.subject,
      content: this.content,
      startAt: this.formControl.value,
      endAt: this.ngModelDate,
    };
    this.masterCommon.doCreate(this.service, this.dialogRef, this.news);
  }

  // cancel(): void {
  //   this.dialogRef.close();
  // }

  // submit(): void {
  //   if (!this.subject.trim() || !this.content.trim() || !this.formControl.value || !this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '必填欄位未填寫' , 'danger');
  //     return;
  //   }
  //   if (this.formControl.value > this.ngModelDate) {
  //     this.toastr.showToast('', 'top-right', '結束時間需晚於開始時間' , 'danger');
  //     return;
  //   }
  //   this.news = {
  //     subject: this.subject,
  //     content: this.content,
  //     startAt: this.formControl.value,
  //     endAt: this.ngModelDate,
  //   };
  //   this.doCreate(this.news);
  // }

  // doCreate(data): void {
  //   this.service.postData(data).subscribe((res: any) => {
  //     if (res.errorStatus) {
  //       this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
  //       return false;
  //     }else{
  //       this.toastr.showToast('', 'top-right', '新增成功', 'success');
  //       this.dialogRef.close(true);
  //     }
  //   });
  // }

  ngOnInit(): void {
  }

}
