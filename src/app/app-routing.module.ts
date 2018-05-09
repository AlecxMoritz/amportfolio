import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WebDevPageComponent } from './web-dev-page/web-dev-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component'
import { BadgesComponent } from './badges/badges.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: WebDevPageComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'technicalSkills', component: HomeComponent }
]

@NgModule({
  imports: 
   [ RouterModule.forRoot(routes) ]
  ,
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
