import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogRef } from '@nebular/theme';
import { LatestNewsComponent } from '../latest-news.component';

@Component({
  selector: 'app-latest-news-modal',
  templateUrl: './latest-news-modal.component.html',
  styleUrls: ['./latest-news-modal.component.scss']
})

// export interface News{
//   name: string;
//   content: string;
//   startAt: Date;
//   endAt: Date;
// }

export class LatestNewsModalComponent implements OnInit {
  @Input() title: string;

  subject = '';
  content = '';
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  min: Date;
  news = {};

  constructor(
    private dialogRef: NbDialogRef<LatestNewsModalComponent>,
    protected dateService: NbDateService<Date>
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (!this.subject.trim() || !this.content.trim() || !this.formControl || !this.ngModelDate) {
      alert('皆為必填');
      return;
    }
    this.news = {
      subject: this.subject,
      content: this.content,
      startAt: this.formControl.value,
      endAt: this.ngModelDate,
    };
    this.dialogRef.close(this.news);
  }

  ngOnInit(): void {
  }

}
