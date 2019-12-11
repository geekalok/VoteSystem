import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TeamComponent } from './team/team.component';
import { InfoComponent } from './info/info.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { ParticipantHomeComponent } from './participant-home/participant-home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { ParticipateComponent } from './participate/participate.component';
import { ResultComponent } from './result/result.component';
import { PrizesComponent } from './prizes/prizes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FullcardComponent } from './fullcard/fullcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    InfoComponent,
    ProfileButtonComponent,
    ParticipantHomeComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CarouselHomeComponent,
    ParticipateComponent,
    ResultComponent,
    PrizesComponent,
    ContactUsComponent,
    FullcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
