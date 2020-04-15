import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private evtSrvc: EventService) { }

  ngOnInit() {
  }
  openDoc(type: string) {
    this.evtSrvc.publish(type);
  }

}
