import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

import { loginRequest } from '../../model/loginRequest';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth-service.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest = new loginRequest();

  @Output()
  loginEvent: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private authService: AuthService, public router: Router) { }

  submitLogin(form: NgForm) {

    if (form.valid){
      this.authService.login(this.loginRequest).subscribe({
        next: (response) => {
          console.log('Login avvenuto con successo: ', response);
          const isAuthenticated = true;
          this.loginEvent.emit(isAuthenticated);
          this.router.navigate(['/']); // Per passare a /login

        },
        error: (error) => {
          console.error('Login fallito: ', error);
          const isAuthenticated = false;
          this.loginEvent.emit(isAuthenticated);
        }
      });
    }
  }
}
