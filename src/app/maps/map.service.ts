import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }
  getlocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          resolve(position);
        }, (error) => {
          reject({errcode: 1, description: 'Error while calling getCurrentPosition', err: error});
        });
      } else {
        reject({errcode: 0, description: 'Browser does not support geolocation'});
      }
    });
  }
}
