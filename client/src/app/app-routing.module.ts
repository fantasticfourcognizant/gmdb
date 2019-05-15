import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
