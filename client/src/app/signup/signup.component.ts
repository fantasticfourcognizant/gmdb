import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    signupForm: FormGroup;
    input: any;
    confirmPassword: string;
    errorMessage: string;

    constructor(private http: HttpClient, private router: Router, private userService: UserServiceService, private fb: FormBuilder) {}


    ngOnInit() {
        // initialize form value
        this.signupForm = this.fb.group({
          first_name: [''],
          email: [''],
          password: [''],
          confirmPassword: ['']
        });
      }

     signup() {
        if (this.signupForm.value.email && this.signupForm.value.password && this.signupForm.value.password === this.confirmPassword) {
          this.userService.createUser(this.input).subscribe(
            response => this.router.navigate(['/login']),
            error => this.errorMessage = error as any
        );
        }
    }

}
