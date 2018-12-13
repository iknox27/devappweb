import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterDevComponent } from './footer-dev/footer-dev.component';
import { HeaderDevComponent } from './header-dev/header-dev.component';
import { ParrallaxDirective } from './parrallax.directive';
import { AngularFireModule } from '@angular/fire';
import { DevDivMoveComponent } from './dev-div-move/dev-div-move.component';
import { ServicesComponent } from './services/services.component';
import { PresentationHeaderComponent } from './presentation-header/presentation-header.component';

const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyAi4125aHeF96KMFiUNN4R33YIRo1jgdCw',
    authDomain: 'devprocr-67df8.firebaseapp.com',
    databaseURL: 'https://devprocr-67df8.firebaseio.com',
    projectId: 'devprocr-67df8',
    storageBucket: 'devprocr-67df8.appspot.com',
    messagingSenderId: '956903617753'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FooterDevComponent,
    HeaderDevComponent,
    routingComponents,
    ParrallaxDirective,
    DevDivMoveComponent,
    ServicesComponent,
    PresentationHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
