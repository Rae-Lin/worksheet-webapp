import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() resource: any;
  @Output() create = new EventEmitter();

  constructor() { }

  submit(): void {
    console.log('按下');
    this.create.emit();
  }

  ngOnInit(): void {
  }

}
