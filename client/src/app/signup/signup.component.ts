// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }


//   createUser(){}

// }

import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/Rx";
 
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 
    public input: any;
    public confirmPassword: string;
 
    public constructor(private http: Http, private router: Router) {
        this.input = {
            // "firstname": "",
            // "lastname": "",
            "screenName":"",
            "email": "",
            "password": ""
        };
    }
 
    public signup() {
        if(this.input.email && this.input.password && this.input.password === this.confirmPassword) {
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            this.http.post("https://boiling-ocean-39055.herokuapp.com/signup", JSON.stringify(this.input), options)
                .map(result => JSON.stringify(result))
                .subscribe(result => {
                    this.router.navigate(["/login"]);
                });
        }
    }
 
}