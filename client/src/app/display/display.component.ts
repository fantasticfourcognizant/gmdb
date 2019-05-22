import { ReviewsService } from './../services/reviews.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  state$: Observable<object>;
  input: FormGroup;
  public someTitle: string;
  public someReview: string;
  errorMessage: string;
  review: string;
  constructor(public activatedRoute: ActivatedRoute, private router: Router, private reviewService: ReviewsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe((() => window.history.state));
    this.getMovieReviews();
    this.input = this.fb.group({
        reviewText: [''],
        reviewTitle: [''],
        movieId: [''],
        userId: [''],
      });
  }

  getMovieReviews(): void {
    if (this.state$) {
      this.reviewService.getReviews(this.state$).subscribe(
        response => {
          this.review = response;
        },
        error => this.errorMessage = error as any
    );
    }
  }

  submitReview() {
    this.reviewService.createReview(this.input.value).subscribe(
          response => {
            console.log(response);
            // this.router.navigate(['/landing/display']);
          },
          error => this.errorMessage = error as any
      );
  }
}

