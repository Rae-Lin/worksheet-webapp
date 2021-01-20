import { Injectable } from '@angular/core';
import { ToastrService } from '../../component/toastr/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class MasterCommonService {

  constructor(
    private toastr: ToastrService,
  ) { }

  doClose(dialogRef): void {
    dialogRef.close();
  }

  doCreate(service, dialogRef, data ): void {
    service.postData(data).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
        return false;
      }else{
        this.toastr.showToast('', 'top-right', '新增成功', 'success');
        dialogRef.close(true);
      }
    });
  }

  doModify(service, dialogRef, sn, data): any {
    service.updateData(sn, data).subscribe((res: any) => {
      if (res.errorStatus) {
        this.toastr.showToast(res.errorMessage !== null ? res.errorMessage.message : '' , 'top-right', res.errorStatus , 'danger');
        return false;
      }else{
        this.toastr.showToast('', 'top-right', '修改成功', 'success');
        dialogRef.close(true);
      }
    });
  }

  refreshTable(service, query, source): any {
    service.getAll(query).subscribe((data) => {
      source.load(data);
    });
  }
}
