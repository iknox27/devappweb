import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {

  items = ['assets/zara.png', 'assets/eco.jpg', 'assets/prisma_logo.png', 'assets/eco.jpg', 'assets/zara.png' ];
  count: number;
  centerTick: any;
  // tslint:disable-next-line:comment-format
  position = false;  //false derecha //true izquierda
  valueOfWid = 0;
  timer: any;
  from = 0;
  constructor() {
    this.count = 0;

   }

  ngOnInit() {
    this.centerTick = document.getElementById('center-tick');
    this.valueOfWid = this.centerTick.offsetWidth;
    this.initTickTimer();
  }

  initTickTimer() {
    this.timer = setInterval(() => {
      this.tickTimer();
    }, 5000);
  }

  tickTimer() {
      if (this.position) {
        this.from = this.valueOfWid * this.count;
        this.centerTick.scrollTo({left: this.from, top: 0, behavior: 'smooth' });
        this.count = this.count - 1 ;
        if (this.count === -1) {
            this.position = false;
            this.count = this.count + 1 ;
        }
      } else {
        this.from = this.valueOfWid * this.count;
        this.centerTick.scrollTo({left: this.from, top: 0, behavior: 'smooth' });
        this.count = this.count + 1 ;
        if (this.count === this.items.length) {
            this.position = true;
            this.count = this.count - 1 ;
        }
      }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
