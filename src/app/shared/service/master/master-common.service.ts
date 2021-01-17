import { Injectable } from '@angular/core';
import { ToastrService } from '../../component/toastr/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class MasterCommonService {

  constructor(
    private toastr: ToastrService,
  ) { }

  doDelete(dialogRef): void {
    dialogRef.close();
  }

  doCreate(service, dialogRef, data ): void {
    service.postData(data).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
        return false;
      }else{
        this.toastr.showToast('', 'top-right', '新增成功', 'success');
        dialogRef.close(true);
      }
    });
  }
}
