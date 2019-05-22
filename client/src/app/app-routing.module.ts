
import { SearchbarComponent } from './Searchbar/Searchbar.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'landing/display', component: DisplayComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
