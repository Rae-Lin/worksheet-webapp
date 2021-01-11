import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';

import { LatestNewsComponent } from './latest-news/latest-news.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProjectGroupsComponent } from './project-groups/project-groups.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectSessionComponent } from './project-session/project-session.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';

const routes: Routes = [{
  path: '',
  component: MasterComponent,
  children: [
    {
      path: 'staff-members',
      component: StaffMembersComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'departments',
      component: DepartmentsComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'project-groups',
      component: ProjectGroupsComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'project-management',
      component: ProjectManagementComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'project-session',
      component: ProjectSessionComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'project-member',
      component: ProjectMemberComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'project-settings',
      component: ProjectSessionComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'latest-news',
      component: LatestNewsComponent,
      data: {
        preload: true
      }
    },
    {
      path: 'calendar-settings',
      component: CalendarSettingsComponent,
      data: {
        preload: true
      }
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
