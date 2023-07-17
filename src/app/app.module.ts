import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from '@shared/components/header/header.module';
import { SidebarModule } from '@shared/components/sidebar/sidebar.module';

import { NgbNav, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatSidenavModule,

    HeaderModule,
    SidebarModule,

    NgbNav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
