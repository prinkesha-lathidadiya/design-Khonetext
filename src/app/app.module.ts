import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FullLayoutComponent } from './Layout/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './Layout/empty-layout/empty-layout.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    SideBarComponent,
    FullLayoutComponent,
    EmptyLayoutComponent,
    DashboardMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
