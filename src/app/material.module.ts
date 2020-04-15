import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
