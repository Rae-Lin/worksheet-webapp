import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { LatestNewsComponent } from '../latest-news.component';

@Component({
  selector: 'app-latest-news-modal',
  templateUrl: './latest-news-modal.component.html',
  styleUrls: ['./latest-news-modal.component.scss']
})
export class LatestNewsModalComponent implements OnInit {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();

  constructor(private dialogRef: NbDialogRef<any>) { }

  cancel(): void {
    this.dialogRef.close();
  }

  // submit(value: String): void {
  //   this.ref.close(value);
  // }

  ngOnInit(): void {
  }

}
