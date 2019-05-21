import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, generate } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private a: any = [];
  private allMoviesAPI = 'https://apigatewayff.herokuapp.com/api/movie/allmovies';
  private singleMoviesAPI='https://apigatewayff.herokuapp.com/api/movie/movie/title?title=';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

constructor(private http: HttpClient) { }

getAllMovies(): Observable<any> {
    return this.http.get<any>(this.allMoviesAPI, this.httpOptions)
    .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
    );
}

generateURLString(inString) {
  let splitArray = inString.split(" ");
  let outString =  '';
  for(let i = 0; i < splitArray.length; i++){
    outString += splitArray[i];
    if(i != splitArray.length-1){
      outString += '%20';
    }
  }
  return outString;
}

// getSingleMovieByTitle(p): Observable<any> {
//   //console.log('Inside movie service', p);
  
//   // this.singleMoviesAPI += p;
//   p = this.generateURLString(p);
//   //console.log('Inside movie service', this.singleMoviesAPI + p);
  
//   return this.http.get<any>(this.singleMoviesAPI, this.httpOptions)
//   .pipe(tap(data => console.log(data)),
  
  
//       catchError(this.handleError)
//   );
  
// }

getMovieByTitle(p): Observable<any>{
  p = this.generateURLString(p);
  // console.log('Inside getMovieByTitle ', this.singleMoviesAPI + p);
  return this.http.get<any>(this.singleMoviesAPI + p, this.httpOptions).pipe(
    tap(data => console.log(data)),
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
