import { Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
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
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  subject = '';
  content = '';
  news = {};
  data = [];

  @Output() add = new EventEmitter<any[]>();

  constructor(private dialogRef: NbDialogRef<any>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    console.log('按下');
    if (!this.subject.trim() || !this.content.trim() || !this.formControl || !this.ngModelDate) {
      return;
    }

    this.news = {
      subject: this.subject,
      content: this.content,
      startAt: this.formControl.value,
      endAt: this.ngModelDate,
    };
    this.data.push(this.news);
    console.log(this.data);
    this.add.emit(this.data);
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
  }

}
