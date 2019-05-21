import { UserServiceService } from './../services/user-service.service';
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;
    errorMessage: string;
    response: any;

    constructor(private http: HttpClient, private router: Router, private userService: UserServiceService, private fb: FormBuilder) {}


    ngOnInit(): void {

        // initialize form value
        this.loginForm = this.fb.group({
          email: [''],
          password: [''],
        });
      }
    public login() {
        // console.log("submit", this.loginForm);
        if (this.loginForm.value.email && this.loginForm.value.password) {
            this.userService.validateUser(this.loginForm.value).subscribe(
                response => {
                    this.response = response;
                    this.router.navigate(['/']);
                },
                error => this.errorMessage = error as any
            );
        }
    }
}
