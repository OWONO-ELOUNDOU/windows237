import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logImg = "assets/images/login.png";
  asChecked = false;
  isLoading = false
  errorMsg = '';
  successMsg = '';
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    })
  }

  check() {
    this.asChecked = !this.asChecked;
  }

  onSubmit(userForm: {
    email: string,
    password: string
  }) {
    this.isLoading = true;
    this.authService.login(userForm.email, userForm.password).subscribe((res) => {
      console.log(res);
      this.isLoading = false;
      this.route.navigate(['/']);
    }, (errorMessage) => {
      this.isLoading = false;
      this.errorMsg = errorMessage;
    })
  }

}
