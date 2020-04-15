import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class NavModule { }
