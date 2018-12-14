import { Component, OnInit } from '@angular/core';
import { SERVICES } from 'src/data/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  items = [];
  show = false;
  constructor() {
    window.scrollTo(0, 0);
    this.items = SERVICES.slice(0);
    setTimeout(() => { this.show = true; }, 2000);
  }

  ngOnInit() {
  }

  godown() {
    const minVH: number = window.innerHeight;
    try {
      window.scrollTo({ left: 0, top: minVH + 50, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }

}
