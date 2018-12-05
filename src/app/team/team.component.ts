import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    this.makeItChange();
  }


  makeItChange () {
    setInterval(() => {
      this.lstRnd = this.getRandomInt(0, 4);
      const rang = document.getElementById('div' + this.count);

      if (this.count ===  3) {
          
      }

      this.count = this.count <= 0 ? 3 : this.count - 1;

      

      console.log(`El valor del count es ${this.count} y el random es ${this.lstRnd}`);
      rang.classList.add(ANIMATIONS[this.lstRnd]);
    }, TIME_TO_CHANGE);
  }

   getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
