import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/model/user';
import { AuthService } from 'src/app/services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public errormsg = '' ;
  public successmsg = '';
  isLoading = false;
  userForm: FormGroup

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void{
    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      phone: ['', Validators.required],
      rue: ['', Validators.required],
      ville: ['', Validators.required],
      pays: ['', Validators.required],
    }) 
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
    this.isLoading = true;
    this.authService.signUp(userForm.email, userForm.password).subscribe((res) => {
      console.log(res);
      this.isLoading = true;
      alert('Inscription Réussie!');
      this.route.navigate(['/login']);
    }, (errorMessage) => {
      console.log(errorMessage);
      this.isLoading = false;
      this.errormsg = errorMessage;
    })
    this.authService.createUser(this.userForm.value);
    
  }

}
