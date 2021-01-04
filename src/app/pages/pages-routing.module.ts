import { ManagementComponent } from './management/management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PagesComponent } from './pages.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component : PagesComponent,
    children : [
      {
        path : 'home',
        component: HomeComponent
        // loadChildren : () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path : 'report',
        component: ReportComponent
        // loadChildren : () => import('./report/report.module').then(m => m.ReportModule),
      },
      {
        path : 'management',
        component: ManagementComponent
        // loadChildren : () => import('./management/management.module').then(m => m.ManagementModule),
      },
      {
        path : 'master',
        loadChildren : () => import('./master/master.module').then(m => m.MasterModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
