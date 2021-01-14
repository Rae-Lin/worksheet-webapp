import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import {
  NbCalendarModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbLayoutModule,
  NbSelectModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbMomentDateModule } from '@nebular/moment';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MasterComponent } from './master.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LatestNewsModalComponent } from './latest-news/create/latest-news-modal.component';
import { LatestNewsModifyComponent } from './latest-news/modify/latest-news-modify.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsCreateComponent } from './departments/create/departments-create.component';
import { DepartmentsModifyComponent } from './departments/modify/departments-modify.component';
import { ProjectGroupsComponent } from './project-groups/project-groups.component';
import { ProjectGroupsCreateComponent } from './project-groups/create/project-groups-create.component';
import { ProjectGroupsModifyComponent } from './project-groups/modify/project-groups-modify.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ProjectManagementCreateComponent } from './project-management/create/project-management-create.component';
import { ProjectManagementModifyComponent } from './project-management/modify/project-management-modify.component';
import { ProjectSessionComponent } from './project-session/project-session.component';
import { ProjectMemberComponent } from './project-member/project-member.component';
import { ProjectSettingsComponent } from './project-settings/project-settings.component';
import { CalendarSettingsComponent } from './calendar-settings/calendar-settings.component';

@NgModule({
  declarations: [
    MasterComponent,
    LatestNewsComponent,
    LatestNewsModalComponent,
    LatestNewsModifyComponent,
    ProjectGroupsComponent,
    ProjectGroupsCreateComponent,
    ProjectGroupsModifyComponent,
    ProjectManagementComponent,
    ProjectManagementCreateComponent,
    ProjectManagementModifyComponent,
    StaffMembersComponent,
    DepartmentsComponent,
    DepartmentsCreateComponent,
    DepartmentsModifyComponent,
    ProjectSessionComponent,
    ProjectMemberComponent,
    ProjectSettingsComponent,
    CalendarSettingsComponent,
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    MasterRoutingModule,
    SharedModule,
    NbCardModule,
    NbThemeModule,
    NbLayoutModule,
    NbDatepickerModule,
    NbIconModule,
    NbCalendarModule,
    NbDialogModule.forChild(),
    NbSelectModule,
    NbMomentDateModule,
    NbDateFnsDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MasterComponent],
  // entryComponents: [LatestNewsModalComponent],
})
export class MasterModule {}
