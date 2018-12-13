import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-presentation-header',
  templateUrl: './presentation-header.component.html',
  styleUrls: ['./presentation-header.component.scss']
})
export class PresentationHeaderComponent implements OnInit {

  @Input() img: string;
  @Input() title: string;
  @Input() text: string;
  show: boolean;

  constructor() { }

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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number: number = window.pageYOffset || 0;
    const minVH: number = window.innerHeight;
    if ((number > (minVH - (minVH / 2))))   {
      this.show = true;
    }
    if ((number < (minVH - (minVH / 2)))) {
      this.show = false;
    }
  }
}


