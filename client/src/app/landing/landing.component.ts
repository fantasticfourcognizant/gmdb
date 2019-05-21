import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  submitForm:FormGroup;
  submitFlag: boolean = false;
  redirectFlag: boolean = false;
  movies: any = [];
  movie: any;
  appParentMessage: string;
  errorMessage: string;
  moviename: string;

  name = new FormControl('');
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private moviesService: MoviesService ) {
     }

  ngOnInit() {

    this.moviesService.getAllMovies()
      .subscribe(response => {
        this.movies = response;
        console.log(this.movies);
      },
      error => this.errorMessage =  error as any
      );
    }
  getMovieDetails(){
      //console.log(this.name.value);
      // this.moviesService.getSingleMovieByTitle(this.name.value).
     
      this.moviesService.getMovieByTitle(this.name.value).
      subscribe(res => {
        //console.log(this.movie)
        this.movie = res;
        this.submitFlag = true;
        
      },
      error => this.errorMessage =  error as any
      )
      
    }
    

    onSubmit() {
      console.log("Form submitted online");
      this.appParentMessage="Hello";
        console.log("Form Submitted!");
        this.getMovieDetails();
      
        
    }

    onDisplay(){
      this.redirectFlag=true;
    }


}
