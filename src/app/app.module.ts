import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoxHeroComponent } from './box-hero/box-hero.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { BadgesComponent } from './badges/badges.component';
import { FooterComponent } from './footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { RecentDevelopmentComponent } from './recent-development/recent-development.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { WebDevPageComponent } from './web-dev-page/web-dev-page.component';
import { WebDevProjectsComponent } from './web-dev-projects/web-dev-projects.component';
import { AppRoutingModule } from './/app-routing.module';
import { PagesNavbarComponent } from './pages-navbar/pages-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BoxHeroComponent,
    CarouselComponent,
    AboutComponent,
    BadgesComponent,
    FooterComponent,
    ResumeComponent,
    RecentDevelopmentComponent,
    ContactFormComponent,
    WebDevPageComponent,
    WebDevProjectsComponent,
    PagesNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
