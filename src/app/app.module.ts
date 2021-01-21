import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {
  NbSidebarModule,
  NbCardModule,
  NbThemeModule,
  NbMenuModule,
  NbCalendarModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCalendarRangeModule,
  NbDatepickerModule,
  NbDialogModule,
  NbToastrModule,
  NbSelectModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { TreeModule } from '@circlon/angular-tree-component';
import zhHant from '@angular/common/locales/zh-Hant';
import { NbMomentDateModule } from '@nebular/moment';
import { NbDateFnsDateModule } from '@nebular/date-fns';
registerLocaleData(zhHant, 'zh-Hant');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTabsetModule,
    NbCardModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbMomentDateModule,
    NbDateFnsDateModule.forRoot({ format: 'yyyy-MM-dd' }),
    LayoutModule,
    PagesModule,
    SharedModule,
    TreeModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hant' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
