import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,

    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
