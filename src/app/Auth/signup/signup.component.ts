import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    private authService: AuthService
  ) { }

  ngOnInit(): void{
    
  }

  onSubmit(user: User) {
    this.authService.addUser(user)
  }

}
