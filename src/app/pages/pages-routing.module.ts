import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component : PagesComponent,
    children : [
      {
        path : 'home',
        component : HomeComponent,
        // loadChildren : './home/home.module#HomeModule',
        // data: {
        //   breadcrumb: 'APPLICATION.FEATURE.HOME'
        // }
      },
      // {
      //   path : 'report',
      //   loadChildren : './report/report.module#ReportModule',
      //   data: {
      //     breadcrumb: 'APPLICATION.FEATURE.Report_PARENT'
      //   }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
