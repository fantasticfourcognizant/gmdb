import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  movies: any;
  errorMessage: string;

  constructor(private moviesService: MoviesService ) { }


  ngOnInit() {
    this.moviesService.getAllMovies()
      .subscribe(response => {
        this.movies = response;
      },
      error => this.errorMessage =  error as any
      );
    }

}
