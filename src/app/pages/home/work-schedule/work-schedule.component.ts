import { Component, 
         OnInit, 
         Input, 
         ViewChild, 
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { NbDialogRef, } from '@nebular/theme';
import { Observable, of, } from 'rxjs';

import { ProjectGroup, 
         GroupItem,
         Project,
} from '../models/work-schedule.model'

import { TreeNode } from '@circlon/angular-tree-component/lib/defs/api';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.scss',]
})

export class WorkScheduleComponent implements OnInit {

  @Input() workDate: string;                          // 月曆 schedule 傳入的日期

  constructor(public datepipe: DatePipe,
              public dialogRef: NbDialogRef<WorkScheduleComponent>,) { }

  titleWorkDate : string;

  searchProjectGroupValue: string;                    // 專案群組查詢 input
  projectGroups: ProjectGroup[];                      // 專案群組資料
  filteredGroups$: Observable<ProjectGroup[]>;        // 畫面顯示查詢後的專案群組資料
  selectedProjectGroup = [];
  
  searchProjectValue: string;                         // 專案資料查詢 input
  projectList: Project[];                             // 專案資料
  filteredProject$: Observable<Project[]>; 
  selectedProject = [];

  //===========================================================================================================
  nodesTree = [
    {
      id: 1000,
      name: '*需求檢討',
      children: [
        { 
          id: 1001, 
          name: '業務需求檢討、確認'
        },
        { id: 1002, 
          name: '工時評估'
        },
        { id: 1003, 
          name: '提案製作'
        },
        { id: 1004, 
          name: '產品 Demo'
        },
        { id: 1005, 
          name: '報價製作與協商'
        },
        { id: 1006, 
          name: '合約簽訂'
        }, ]
    },
    {
      id: 2000,
      name: '基本設計',
      children: [
        { 
          id: 2001, 
          name: '設計式樣作成及檢討'
        },
        { 
          id: 2002, 
          name: '式樣Review'
        },
        { 
          id: 2003, 
          name: '畫面基本設計書製作'
        },
        { 
          id: 2004, 
          name: 'BATCH 基本設計書製作'
        }, ]
    },
    {
      id: 3000,
      name: '概要設計',
      children: [
        { 
          id: 3001, 
          name: '概要設計書作成及檢討'
        },
        { 
          id: 3002, 
          name: '設計書Review'
        },
        { 
          id: 3003, 
          name: '畫面基本設計書製作'
        }, ]
    },
    {
      id: 4000,
      name: '詳細設計',
      children: [
        { 
          id: 4001, 
          name: '詳細設計-子項目一'
        },
        { 
          id: 4002, 
          name: '詳細設計-子項目二'
        },
        { 
          id: 4003, 
          name: '詳細設計-子項目三'
        },
        { 
          id: 4004, 
          name: '詳細設計-子項目四'
        },
        { 
          id: 4005, 
          name: '詳細設計-子項目五'
        },
        { 
          id: 4006, 
          name: '詳細設計-子項目六'
        }, ]
    },
    {
      id: 5000,
      name: '系統開發',
      children: [
        { 
          id: 5001, 
          name: '系統開發-子項目一'
        },
        { 
          id: 5002, 
          name: '系統開發-子項目二'
        },
        { 
          id: 5003, 
          name: '系統開發-子項目三'
        },
        { 
          id: 5004, 
          name: '系統開發-子項目四'
        },
        { 
          id: 5005, 
          name: '系統開發-子項目五'
        }, ]
    },
    {
      id: 6000,
      name: '整合測試',
    },
    {
      id: 7000,
      name: '系統建置',
    },
    {
      id: 8000,
      name: 'AT',
    },
    {
      id: 9000,
      name: '專案管理',
    },
    {
      id: 10000,
      name: '*系統導入*',
    },
    {
      id: 11000,
      name: '*會議/其他*',
    },
    {
      id: 12000,
      name: '結合測試',
    },
  ];

  optionsSetting = {
    useVirtualScroll: true,
    nodeHeight: 22
  }
//============================================================================================

  ngOnInit(): void {

    // 標題
    let weekArray = new Array('日', '一', '二', '三', '四', '五', '六');

    var datePipe = new DatePipe("en-US");
    this.titleWorkDate = "<   " 
                       + this.workDate.substr(0, 4) + "年"
                       + this.workDate.substr(5, 2) + "月"
                       + this.workDate.substr(8, 2) + "日"
                       + " (" + weekArray[new Date(this.workDate).getDay()] + ")"
                       + "   >";

    // 專案群組資料
    this.projectGroups = [
      { 
        GroupTitle:'[群組代號] 一年保固，SET_3代POS開發', 
        GroupList: [{ Id: '020084', Name: '[020084] 電子發票平台'},
                    { Id: '020086', Name: '[020086] 大智通_PP系統式樣變更'},
                    { Id: '020087', Name: '[020087] SET_V1.29_門市引進新型可攜帶式行動裝置(ST)Ph4'}]
      },
      { 
        GroupTitle:'[群組代號] 測試專案群組', 
        GroupList: [{ Id: '030012', Name: '[030012] 測試專案一'},
                    { Id: '030013', Name: '[030013] 測試專案二'},
                    { Id: '030014', Name: '[030014] 測試專案三'}]
      },
      { 
        GroupTitle:'[群組代號] 開發專案群組', 
        GroupList: [{ Id: '040025', Name: '[040025] 開發專案一'},
                    { Id: '040026', Name: '[040026] 開發專案一'},
                    { Id: '040026', Name: '[040027] 開發專案一'}]
      }];

    this.filteredGroups$ = of(this.projectGroups);

    // 專案資料
    this.projectList = [ { Group: '020084', Id: '0001', Name: '共通' },
                     { Group: '020084', Id: '0002', Name: '共通推廣' },
                     { Group: '020084', Id: '0003', Name: '新工時系統' },
                     { Group: '020084', Id: '0004', Name: '康是美' },
                     { Group: '020084', Id: '0005', Name: '超商 POS' },
                     { Group: '020084', Id: '0006', Name: '大智通' },
                     { Group: '020084', Id: '0007', Name: '祺鋒科技' },
                     { Group: '020084', Id: '0008', Name: 'SET_OPENPOINT APP兌點 RWD 上架前後台' },
                     { Group: '020084', Id: '0009', Name: 'SETOP 超商OP兌點 商品預售系統(行動隨時取)' },
                     { Group: '020084', Id: '0010', Name: 'SET V1.29 門市引進新型可攜式行動裝置(ST)Ph4' },
                     { Group: '020084', Id: '0011', Name: '兌點平台 線上支付+電子發票平台開發專案' },

                     { Group: '020086', Id: '0001', Name: '共通' },
                     { Group: '020086', Id: '0002', Name: '共通推廣' },
                     { Group: '020086', Id: '0006', Name: '大智通' },
                     
                     { Group: '020087', Id: '0010', Name: '康是美' },
                     { Group: '020087', Id: '0001', Name: '共通' },
        
                     { Group: '040025', Id: '0007', Name: '祺鋒科技' },
                     { Group: '040025', Id: '0001', Name: '共通' },

                     { Group: '040026', Id: '0001', Name: '共通' },
                     { Group: '040026', Id: '0008', Name: 'SET_OPENPOINT APP兌點 RWD 上架前後台' },
                     { Group: '040026', Id: '0009', Name: 'SETOP 超商OP兌點 商品預售系統(行動隨時取)' },
                     { Group: '040026', Id: '0011', Name: '兌點平台 線上支付+電子發票平台開發專案' }];

  }

  // 專案群組 搜尋 
  onSearchProjectGroup() {

    this.filteredGroups$ = of(this.projectGroups.map(group => {
      return {
        GroupTitle: group.GroupTitle,
        GroupList: group.GroupList.filter(filter => filter.Name.toLowerCase().includes(this.searchProjectGroupValue.toLowerCase()))
      }
    }).filter(group => group.GroupList.length));
  }

  // 專案群組下拉選單改變
  onProjectGroupSelectionChange() {
    this.searchProjectGroupValue = "";
    this.filteredProject$ = of(this.projectList.filter(project => project.Group.includes(this.selectedProjectGroup.toString())));
    
  }

  // 專案 搜尋 
  onSearchProject() {

    this.filteredProject$ = of(this.projectList.filter(group => group.Group.includes(this.selectedProjectGroup.toString()))
                                               .filter(project => project.Name.includes(this.searchProjectValue)));
  }

  // 專案下拉選單改變
  onProjectSelectionChange() {
    this.searchProjectValue = "";
    //alert(this.selectedProject.toString());
  }
}
