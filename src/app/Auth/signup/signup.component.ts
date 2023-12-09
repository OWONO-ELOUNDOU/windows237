import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errormsg = '' ;
  isLoading = false;
  hasError = false;
  minPasswordLength = 6;

  constructor(
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void{
  }

  closeMsg() {
    this.hasError = !this.hasError;
  }

  onSubmit(userForm: {
    fname: string,
    lname: string,
    email: string,
    phone: string,
    password: string,
    street: string,
    town: string,
    country: string
  }) {
    if (
      userForm.fname !== "" &&
      userForm.lname !== "" &&
      userForm.email !== "" &&
      userForm.phone !== "" &&
      userForm.password !== "" &&
      userForm.street !== "" &&
      userForm.town !== "" &&
      userForm.country !== ""
    ) {
      
      if (userForm.password.length >= this.minPasswordLength) {
        this.isLoading = true;
        this.authService.signUp(userForm.email, userForm.password)
        .subscribe((res) => {
          this.isLoading = true;
          this.route.navigate(['/login']);
        }, (errorMessage) => {
          this.isLoading = false;
          this.errormsg = errorMessage;
        });
        this.authService.createUser(userForm);
      } else {
        this.hasError = !this.hasError;
        this.errormsg = `Mot de passe court au moins ${this.minPasswordLength} caractères.` ;
      }

    } else {
      this.hasError = !this.hasError;
      this.errormsg = 'Veuillez remplir tous les champs';
    }
  }

}
