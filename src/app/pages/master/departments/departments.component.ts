import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { DepartmentService } from 'src/app/shared/service/master/department.service';
import { DepartmentsCreateComponent } from './create/departments-create.component';
import { DepartmentsModifyComponent } from './modify/departments-modify.component';

@Component({
  selector: 'app-departments',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  private query = '?AllData=true';
  private department: {
    sn: string;
    name: string;
  };

  // table Data
  settings = {
    pager: {display: true}, // 設定分頁
    mode: 'external',       // 新增、編輯以跳窗開啟
    hideSubHeader: true,    // 不顯示新增資料欄位
    actions: {              // 操作欄位
      columnTitle: '',      // 標題名稱
      position: 'right',    // 表格最後
      add: false,           // 不在表格內開放新增
    },
    noDataMessage: '查無資料',  // no data found Message
    edit: {editButtonContent: '<img src="./assets/img/icon-edit.svg">'},
    delete: {deleteButtonContent: '<img src="./assets/img/icon-delete.svg">'},
    attr: {class: 'table thead-light table-hover'},  // 表格添加class
    columns: {
      sn: {
        title: '單位編號',
        type: 'string',
        width: '105px'
      },
      name: {
        title: '單位名稱',
        type: 'string',
      }
    },
  };

  source: LocalDataSource; // add a property to the component

  constructor(
    private service: DepartmentService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
  ) {
    this.source = new LocalDataSource(); // create the source
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(DepartmentsCreateComponent, { autoFocus: false, hasScroll: true}, )
      .onClose.subscribe((result) => {
        if (result) {
          this.refreshTable(this.query);
        }
      });
  }

  // 刪除
  deleteNews(event): void {
    const snNo = event.data.sn;
    this.service.deleteData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      }else{
        this.toastr.showToast('', 'top-right', '刪除成功', 'success');
        this.refreshTable(this.query);
      }
    });
  }

  // 開啟編輯modal
  openModify(event): void {
    const snNo = event.data.sn;
    this.service.getData(snNo).subscribe((res: any) => {
      if (res.errorMessage) {
        this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
      } else {
        this.dialogService
          .open(DepartmentsModifyComponent, {
            autoFocus: false, hasScroll: true,
            context: {
              sn: res.data.sn,
              name: res.data.name,
            },
          })
          .onClose.subscribe((result) => {
            if (result) {
              this.refreshTable(this.query);
            }
          });
      }
    });
  }

  refreshTable(query): any {
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  ngOnInit(): void {
  }

}
