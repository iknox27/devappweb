import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devappweb';

  onElementScroll($event) {
      console.log($event);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 200) {
      console.log("hi")
    } else if (number < 10) {
      console.log("by")
    }
  }

}
