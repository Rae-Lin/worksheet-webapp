import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbSidebarModule,
  NbCardModule,
  NbThemeModule,
  NbMenuModule,
  NbCalendarModule,
  NbLayoutModule,
  NbTabsetModule,
  NbCalendarRangeModule,
} from '@nebular/theme';

import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbTabsetModule,
    NbCardModule,
    NbLayoutModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    LayoutModule,
    PagesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
