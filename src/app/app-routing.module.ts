import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { MasterComponent } from './pages/master/master.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent},
  { path: 'Report', component: ReportComponent},
  { path: 'Management', component: ManagementComponent},
  { path: 'Master', component: MasterComponent},
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
