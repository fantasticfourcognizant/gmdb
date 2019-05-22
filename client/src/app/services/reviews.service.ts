import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private addReviewAPI = 'https://apigatewayff.herokuapp.com/api/review/addreview';
  private getReviewAPI = 'https://apigatewayff.herokuapp.com/api/review/reviewbymovieid';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

constructor(private http: HttpClient) { }

public createReview(ReviewObj): Observable<any> {
  return this.http.post<any>(this.addReviewAPI, JSON.stringify(ReviewObj), this.httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
  );
}

public getReviews(movieObj): Observable<any> {
  let obj = {
    movieId: movieObj.movieId
  }
  return this.http.post<any>(this.getReviewAPI, JSON.stringify(obj), this.httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
  );
}

private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An Error Occured: ${errorMessage}`;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }

    return throwError(errorMessage);
}


}
