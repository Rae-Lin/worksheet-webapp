
export interface ProjectGroup {
  GroupTitle: string;
  GroupList: GroupItem[];
}
  
export interface GroupItem {
  Id: string;
  Name: string;
}

export interface Project {
  Group: string,
  Id: string;
  Name: string;
}

export interface workEvents {
  ProjectId: string;            // 專案 Id
  ProjectName: string;          // 專案名稱
  WorkPhase: string;            // 工作階段
  WorkItem: string;             // 工作項目
  WorkHours: number;            // 工時
  WorkContent: string;          // 工作內容
}