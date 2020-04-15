import { Component, OnInit } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom = 1;

  public openedWindow: number;

  // public markers: Marker[] = this.locationService.getMarkers();

  constructor(
    // private locationService: LocationsService,
    private mapApiLoader: MapsAPILoader,
    private mapService: MapService
  ) { }

  ngOnInit() {

    // this.lat = this.mapsService.lat;
    // this.lng = this.mapsService.lng;
    // this.zoom = this.mapsService.zoom;
    this.mapService.getlocation().then((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude
    });
    this.setCurrentPosition();
    this.mapApiLoader.load();

    // // Zoom to new location after search
    // this.mapsService.newCoordinators.subscribe(
    //   (coords: { lat: number, lng: number, zoom: number }) => {
    //     if (coords) {
    //       this.lat = coords.lat;
    //       this.lng = coords.lng;
    //       this.zoom = coords.zoom;
    //       this.mapApiLoader.load();
    //     }
    //   }
    // );

    // // Open window after click on panel
    // this.mapsService.openWindow.subscribe(
    //   index => {
    //     this.openedWindow = +index;
    //   }
    // );
  }

  mapClicked($event: MouseEvent) {
    console.log($event);
  }

  clickedMarker(label: string, index: number) {
    console.log(`Clicked the marker: ${label || index}`);
    this.openedWindow = index;
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // this.lat = this.mapsService.lat = position.coords.latitude;
        // this.lng = this.mapsService.lng = position.coords.longitude;
        this.zoom = 10;
      });
    }

    // @Todo: resort the locations
  }

  isInfoWindowOpen(index: number) {
    return this.openedWindow === index;
  }

}
