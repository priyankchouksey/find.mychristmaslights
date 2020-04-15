import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  markers: any = [{
    logo: 'assets/logo.png',
    name: 'list 1',
    geo: { city: 'Houston', state: 'TX'}
  }];
  constructor() { }

  ngOnInit() {
  }

}
