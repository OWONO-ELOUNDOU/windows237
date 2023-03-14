import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { User } from '../shared/model/user';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public errormsg = '' ;
  public successmsg = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void{
    
  }

  userForm = this.formBuilder.group({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    password: '',
    street: '',
    town: '',
    country: ''
  });

  onSubmit() {
    this.authService.addUser(this.userForm.value);
  }

}
