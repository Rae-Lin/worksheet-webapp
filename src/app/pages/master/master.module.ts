import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';

import { MasterComponent } from './master.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NbCalendarModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LatestNewsModalComponent } from './latest-news/create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './latest-news/modify/latest-news-modify.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ProjectGroupsComponent } from './project-groups/project-groups.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectSessionComponent } from './project-session/project-session.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';
import { ProjectGroupsCreateComponent } from './project-groups/create/project-groups-create.component';
import { ProjectGroupsModifyComponent } from './project-groups/modify/project-groups-modify.component';

@NgModule({
  declarations: [
    MasterComponent,
    LatestNewsComponent,
    LatestNewsModalComponent,
    LatestNewsModifyComponent,
    StaffMembersComponent,
    DepartmentsComponent,
    ProjectGroupsComponent,
    ProjectManagementComponent,
    ProjectSessionComponent,
    ProjectMemberComponent,
    ProjectSettingsComponent,
    CalendarSettingsComponent,
    ProjectGroupsCreateComponent,
    ProjectGroupsModifyComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule,
    NbCardModule,
    NbThemeModule,
    NbLayoutModule,
    NbDatepickerModule,
    NbIconModule,
    NbCalendarModule,
    NbDialogModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MasterComponent, LatestNewsComponent, LatestNewsModalComponent, LatestNewsModifyComponent],
  entryComponents: [LatestNewsModalComponent],
})
export class MasterModule {}
