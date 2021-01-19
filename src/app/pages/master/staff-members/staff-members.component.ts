import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NbDateService, NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ToastrService } from 'src/app/shared/component/toastr/toastr.service';
import { StaffMemberService } from 'src/app/shared/service/master/staff-member.service';
import { StaffMembersCreateComponent } from './create/staff-members-create.component';

@Component({
  selector: 'app-staff-members',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './staff-members.component.html',
  styleUrls: ['./staff-members.component.scss'],
  providers: [DatePipe],
})
export class StaffMembersComponent implements OnInit {
  formControl = new FormControl(null);
  ngModelDate = null;
  // formControl = new FormControl(Date);
  // ngModelDate = Date;
  min: Date;
  private query = '?AllData=true';
  private member: {
    id: string;
    employeeCode: string;
    name: string;
    departmentName: string;
    mail: string;
    startAt: Date;
    status: number;
  };

  // table Data
  settings = {
    pager: { display: true },   // 設定分頁
    mode: 'external',           // 新增、編輯以跳窗開啟
    hideSubHeader: true,        // 不顯示新增資料欄位
    actions: {                  // 操作欄位
      columnTitle: '',          // 標題名稱
      position: 'right',        // 表格最後
      add: false,               // 不在表格內開放新增
    },
    attr: { class: 'table thead-light table-hover' },   // 表格添加class
    noDataMessage: '查無資料',
    edit: { editButtonContent: '<img src="./assets/img/icon-edit.svg">' },
    delete: { deleteButtonContent: '<img src="./assets/img/icon-delete.svg">' },
    columns: {
      id: {
        title: 'id',
        type: 'string',
        hide: true,
      },
      employeeCode: {
        title: '員工編號',
        type: 'string',
      },
      name: {
        title: '姓名',
        type: 'string',
      },
      departmentName: {
        title: '單位',
        type: 'string',
      },
      status: {
        title: '狀態',
        type: 'html',
        width: '70px',
        valuePrepareFunction: (cell) => {
          if (cell === 0) {
            return `<span>離職</span>`;
          } else if (cell === 1) {
            return `<span class="onStatus">在職中</span>`;
          } else {
            return `<span>留職停薪</span>`;
          }
        }
      },
      mail: {
        title: 'Email',
        type: 'string',
      },
      startAt: {
        title: '到職日',
        type: 'Date',
        width: '105px',
        valuePrepareFunction: (created) => {
          if (created) {
            return this.datePipe.transform(new Date(created), 'yyyy-MM-dd');
          }
        },
      },
    },
  };

  source: LocalDataSource; // add a property to the component

  constructor(
    private service: StaffMemberService,
    private dialogService: NbDialogService,
    protected dateService: NbDateService<Date>,
    private toastr: ToastrService,
    private datePipe: DatePipe
  ) {
    this.min = this.dateService.addDay(this.dateService.today(), 0);
    this.source = new LocalDataSource(); // create the source
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  // 開啟新增modal
  openCreate(): void {
    this.dialogService
      .open(StaffMembersCreateComponent, { autoFocus: false, hasScroll: true })
      .onClose.subscribe((result) => {
        if (result) {
          this.refreshTable(this.query);
        }
      });
  }

  // 開啟新增modal - 執行新增
  // createNews(): void {
  //   this.service.postData(this.member).subscribe((res: any) => {
  //     if (res.errorMessage) {
  //       this.toastr.showToast('', 'top-right', res.errorMessage, 'danger');
  //     } else {
  //       this.toastr.showToast('', 'top-right', '新增成功', 'success');
  //       this.refreshTable(this.query);
  //     }
  //   });
  // }

  // 刪除
  deleteNews(event): void {
    console.log(event.data.id);
    const idNo = event.data.id;
    this.service.deleteData(idNo).subscribe((res: any) => {
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
    // const idNo = event.data.id;
    // this.service.getData(idNo).subscribe((res: any) => {
    //   if (res.errorMessage) {
    //     this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
    //   } else {
    //     this.dialogService
    //       .open(LatestNewsModifyComponent, {
    //         autoFocus: false, hasScroll: true,
    //         context: {
    //           subject: res.data.subject,
    //           content: res.data.content,
    //           formControl: new Date(res.data.startAt),
    //           ngModelDate: new Date(res.data.endAt),
    //         },
    //       })
    //       .onClose.subscribe((item) => {
    //         if (item) {
    //           const Newsitem = {
    //             id: idNo,
    //             subject: item.subject,
    //             content: item.content,
    //             startAt: item.startAt,
    //             endAt: item.endAt,
    //           };
    //           this.modifyNews(idNo, Newsitem);
    //         }
    //       });
    //   }
    // });
  }

  // 開啟編輯modal - 執行編輯
  modifyNews(idNo: number, Newsitem: object): void {
    // this.service.updateData(idNo, Newsitem).subscribe((res: any) => {
    //   if (res.errorMessage) {
    //     this.toastr.showToast('', 'top-right', res.errorMessage , 'danger');
    //   }else{
    //     this.toastr.showToast('', 'top-right', '修改成功', 'success');
    //     this.refreshTable(this.query);
    //   }
    // });
  }

  refreshTable(query): any {
    this.service.getAll(this.query).subscribe((data) => {
      this.source.load(data);
    });
  }

  onSearch(query: string = '', startAt: Date, endAt: Date): any {
    if(!startAt === null || !endAt === null){

    }
    this.query = `${startAt} / ${endAt}`;
    console.log(this.query);
    // this.refreshTable(this.query);

    if (query === '') {
      this.source.setFilter([]);
    } else {
      this.source.setFilter([
        {
          field: 'employeeCode',
          search: query
        },
        {
          field: 'name',
          search: query
        },
        {
          field: 'departmentName',
          search: query
        },
        {
          field: 'mail',
          search: query
        }
      ], false);
    }
  }

  ngOnInit(): void {}
}
