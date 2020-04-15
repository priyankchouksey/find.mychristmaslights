import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOvsI3uMIIuf488XQr9EDW9hgvVcnQkYw'
    })
  ],
  exports: [
    MapComponent
  ],
  providers: [MapService]
})
export class MapsModule { }
