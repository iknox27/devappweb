import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  items = ['web', 'movil', 'desk', 'publi', 'desk', 'publi', 'movil', 'web', 'web'];
  itemsToShow = [];
  lastItem = 1;
  constructor() { }

  ngOnInit() {
    this.itemsToShow = this.items.slice(0);
  }

  setPagination (value, whereToShow) {
    const pagination = document.getElementById('li' + value);
    const lastItemPa = document.getElementById('li' + this.lastItem);
    lastItemPa.classList.remove('active');
    pagination.classList.add('active');
    this.lastItem = value;
    this.itemsToShow =  whereToShow === 'all' ? this.items : this.items.filter(e => e === whereToShow );
  }

}
