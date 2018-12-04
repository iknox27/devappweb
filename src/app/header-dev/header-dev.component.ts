import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-dev',
  templateUrl: './header-dev.component.html',
  styleUrls: ['./header-dev.component.scss']
})
export class HeaderDevComponent implements OnInit {

  isOpen = false;
  constructor(public router: Router) {
  }

  ngOnInit() {
    $('.parallax').parallax();
  }

  openSideBar() {
    const sidebar = document.getElementById('nav-mobile');
    const overlay = document.getElementById('overlay');

    if (!this.isOpen) {
      overlay.style.opacity = '1';
      overlay.style.display = 'block';
      sidebar.style.transform =  'translateX(0%)';
    } else {
      overlay.style.opacity = '0';
      overlay.style.display = 'none';
      sidebar.style.transform =  'translateX(-150%)';
    }
    this.isOpen = !this.isOpen;
  }

  close() {
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('nav-mobile');
    overlay.style.opacity = '0';
    overlay.style.display = 'none';
    sidebar.style.transform =  'translateX(-150%)';
    this.isOpen = false;
  }
  hi() {
    console.log('hi');
  }
}
