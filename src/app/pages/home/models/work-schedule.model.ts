
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