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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
