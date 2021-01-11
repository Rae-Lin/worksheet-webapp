import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'PTC.work';

  constructor(private sidebarService: NbSidebarService) {
  }

  toggle(): void {
    this.sidebarService.toggle(false, 'left');
  }

  ngOnInit(): void {
  }

}
