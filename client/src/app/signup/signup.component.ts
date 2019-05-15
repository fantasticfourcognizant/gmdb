import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { UserServiceService } from '../services/user-service.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    private input: any;
    private confirmPassword: string;
    errorMessage: string;

    constructor(private http: HttpClient, private router: Router, private userService: UserServiceService) {
        this.input = {
            screenName: 'md3',
            email: 'md3@test.com',
            password: 'md3',
        };
    }

     signup() {
        if (this.input.email && this.input.password && this.input.password === this.confirmPassword) {
          this.userService.createUser(this.input).subscribe(
            response => this.router.navigate(['/login']),
            error => this.errorMessage = error as any
        );
        }
    }

}
