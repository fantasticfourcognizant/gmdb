import { UserServiceService } from './../services/user-service.service';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public input: any;
    errorMessage: string;
    response: any;

    constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
        this.input = {
            email: '',
            password: ''
        };
    }

    public login() {
        if (this.input.email && this.input.password) {
            this.userService.validateUser(this.input).subscribe(
                response => {
                    this.response = response;
                    this.router.navigate(['/']);
                },
                error => this.errorMessage = error as any
            );
        }
    }
}
