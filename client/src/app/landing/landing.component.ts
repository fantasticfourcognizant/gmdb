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
  submitForm: FormGroup;
  submitFlag = false;
  redirectFlag = false;
  movies: any = [];
  movie: any;
  moviesResults: any = [];
  appParentMessage: string;
  errorMessage: string;
  moviename: string;

  name = new FormControl('');
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private moviesService: MoviesService ) {
     }

    ngOnInit(): void {
    this.moviesService.getAllMovies()
        .subscribe(response => {
          this.movies = response;
          console.log(this.movies);
        },
        error => this.errorMessage =  error as any
        );
    }

    updateSearch(): void {
      this.moviesResults = [];
      this.movies.map((item, index) => {
        if (this.name.value.length > 0 && item.title.toLowerCase().includes(this.name.value.toLowerCase())) {
          this.moviesResults.push(item);
        }
      });
    }

    onDisplay() {
      this.redirectFlag = true;
    }


}
