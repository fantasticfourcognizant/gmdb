import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchbarComponent } from './Searchbar/Searchbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { DisplayComponentComponent } from './DisplayComponent/DisplayComponent.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      LoginComponent,
      HomepageComponent,
      SearchbarComponent,
      NavbarComponent,
      LandingComponent,
      DisplayComponentComponent,
      DisplayComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      HttpModule
   ],
   providers: [
      HttpClientModule,
      HttpClient
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
