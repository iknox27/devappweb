import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devappweb';
  show = false;
  show2 = false;
  hasCome = false;
  
  onElementScroll($event) {
      console.log($event);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || 0;
    const minVH = window.innerHeight;
    if (number > minVH) {
        this.show = true;
    } else if(number > ((minVH * 2) - (minVH/2))) {
      this.show2= true;
    }else if (number < minVH) {
      this.show = false;
      this.show2= true;
    }
  }

  goUp() {
    try {
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
     } catch (e) {
      window.scrollTo(0, 0);
      }
  }

}
