import { HostBinding, Injectable } from '@angular/core';
import { NbIconConfig, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  private index = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(private toastrService: NbToastrService) { }

  showToast(message, position, title, status): void {
    // const iconConfig: NbIconConfig = { icon: iconName, pack: 'eva' };
    this.toastrService.show(
      `${message}`, `${title}`, { position, status });
  }
}
