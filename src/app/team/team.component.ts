import { Component, OnInit, HostListener } from '@angular/core';

const TIME_TO_CHANGE = 5000;
const ANIMATIONS = ['slideUp', 'slideDown' , 'slideLeft' , 'slideRight'];
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  lstRnd = 3;
  count = 3;
  show = false;
  show2 = false;
  show3 = false;
  constructor() {
    window.scrollTo(0, 0);
   }

  ngOnInit() {
    this.makeItChange();
  }


  makeItChange () {
    /*setInterval(() => {
      this.lstRnd = this.getRandomInt(0, 4);
      const rang = document.getElementById('div' + this.count);
      if (this.count ===  3) {
      }
      this.count = this.count <= 0 ? 3 : this.count - 1;
      console.log(`El valor del count es ${this.count} y el random es ${this.lstRnd}`);
      rang.classList.add(ANIMATIONS[this.lstRnd]);
    }, TIME_TO_CHANGE);*/
  }

   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number: number = window.pageYOffset || 0;
    const minVH: number = window.innerHeight;
    if ((number > (minVH - (minVH / 2))))   {
        this.show = true;
    }
     if (number > ((minVH * 2) - (minVH / 2)) ) {
      this.show2 = true;
    }

    if (number > ((minVH * 3) - (minVH / 2)) ) {
      this.show3 = true;
    }

    if (number < ((minVH * 3) - (minVH / 2))) {
      this.show3 = false;
    }


    if (number < ((minVH * 2) - (minVH / 2))) {
      this.show2 = false;
    }
    if ((number < (minVH - (minVH / 2)))) {
      this.show = false;
  }
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
