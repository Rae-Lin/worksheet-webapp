import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-news',
  templateUrl: './modify-news.component.html',
  styleUrls: ['./modify-news.component.scss']
})
export class ModifyNewsComponent implements OnInit {
  @Input() subject: string;
  @Input() content: string;
  @Input() startat: Date;
  @Input() endat: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
