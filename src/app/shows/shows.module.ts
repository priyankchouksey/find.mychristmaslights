import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ShowListComponent } from './show-list/show-list.component';
import { ShowmarkerComponent } from './showmarker/showmarker.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { CreateshowComponent } from './createshow/createshow.component';

@NgModule({
  declarations: [ShowListComponent, ShowmarkerComponent, ShowdetailsComponent, CreateshowComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ShowListComponent,
    ShowmarkerComponent,
    ShowdetailsComponent,
    CreateshowComponent
  ]
})
export class ShowsModule { }
