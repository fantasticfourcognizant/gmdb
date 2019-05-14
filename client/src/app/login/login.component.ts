import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import "rxjs/Rx";
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    public input: any;
 
    constructor(private http: Http, private router: Router) {
        this.input = {
            "email": "",
            "password": ""
        };
    }
 
    public login() {
        if(this.input.email && this.input.password) {
            let headers = new Headers({ "content-type": "application/json" });
            let options = new RequestOptions({ headers: headers });
            this.http.post("https://boiling-ocean-39055.herokuapp.com/login", JSON.stringify(this.input), options)
                .map(result => JSON.stringify(result))
                .subscribe(result => {
                    this.router.navigate(["/"]);
                });
        }
    }
 
}


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
