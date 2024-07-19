import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {registerRequest} from "../../model/registerRequest";
import {NgIf} from "@angular/common";

import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../service/auth-service.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerRequest: registerRequest = new registerRequest();

  @Output()
  registerEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private authService: AuthService, public router: Router) {}

  submitRegister(form: NgForm) {

    if(form.valid){
      console.log(this.registerRequest);
      this.authService.register(this.registerRequest).subscribe({
          next: (response : number ) : void => {
          console.log('Registrazione avvenuta con successo:', response);
          this.registerEvent.emit(response);
            this.router.navigate(['/login']);
          },

          error: (error) : void => {
          console.error('Errore durante la registrazione:', error);
         },

          complete: () : void =>{

          }
        }
      );
    }else {

      console.log("Form validation non valida")
    }
  }
}
