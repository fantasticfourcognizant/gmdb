import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loginAPI = 'https://boiling-ocean-39055.herokuapp.com/login';
  private signUpAPI = 'https://boiling-ocean-39055.herokuapp.com/signup';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

constructor(private http: HttpClient) { }

validateUser(loginObj): Observable<any> {
    return this.http.post<any>(this.loginAPI, JSON.stringify(loginObj), this.httpOptions)
    .pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
    );
}


createUser(UserObj): Observable<any> {
  return this.http.post<any>(this.signUpAPI, JSON.stringify(UserObj), this.httpOptions).pipe(
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
