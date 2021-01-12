import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

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
    LayoutModule,
    PagesModule,
    SharedModule,
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'zh-Hant' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
