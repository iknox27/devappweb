import { Component, OnInit, HostListener } from '@angular/core';
import { OURKNOWLEDGE } from 'src/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

   knowle = [];

  constructor() {
    this.knowle = OURKNOWLEDGE.slice(0);
   }
}
