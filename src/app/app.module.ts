import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsModule } from './maps/maps.module';
import { NavModule } from './nav/nav.module';
import { ShowsModule } from './shows/shows.module';
import { EventService } from './event.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapsModule,
    NavModule,
    ShowsModule,
    MaterialModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
