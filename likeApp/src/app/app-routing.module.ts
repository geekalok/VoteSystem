import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ParticipateComponent } from './participate/participate.component';
import { ResultComponent } from './result/result.component';
import { PrizesComponent } from './prizes/prizes.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FullcardComponent } from './fullcard/fullcard.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'participate', component: HomeComponent},
  {path:'result', component: HomeComponent},
  {path:'prizes', component: HomeComponent},
  {path:'contactus', component: HomeComponent},
  {path: 'fullview', component:FullcardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
