import { ReviewsService } from './../services/reviews.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  template: '<pre>{{ state$ | async | json }}</pre>',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})

export class DisplayComponent implements OnInit {
  state$: Observable<object>;
  input : any;
  public someTitle: string;
  public someReview: string;
  errorMessage: string;

  review: string;
  constructor(public activatedRoute: ActivatedRoute, private router:Router, private reviewService: ReviewsService) { }

  // ngOnInit() {

  //   this.activatedRoute.queryParams
  //    .filter(params => params.reading)
  //    .subscribe(params => {
  //    console.log(params); // DATA WILL BE A JSON STRING- WE PARSE TO GET BACK OUR 
  //                         //OBJECT
   
  //    this.data = JSON.parse(params.item) ;
   
  //    console.log(this.data,'PASSED DATA'); //Gives {name:"Nelson", bankAccount:"1 
  //                                          //million dollars"}
  //     });
  //    }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe((() => window.history.state));
      console.log(this.state$);

    this.input =
       {
        reviewBody: [''],
        reviewTitle: [''],
        movieId: [''],
        userId: [''],
      };
      
  }

  submitReview(){
        this.reviewService.createReview(this.input).subscribe(
          response => this.router.navigate(['/display']),
          error => this.errorMessage = error as any
      );
  }
}

