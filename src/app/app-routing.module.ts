import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomeComponent
  },

  {
    path : 'portfolio',
    component: PortfolioComponent
  },

  {
    path : 'team',
    component: TeamComponent
  },

  {
    path : 'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PortfolioComponent, TeamComponent, ContactComponent, HomeComponent];

