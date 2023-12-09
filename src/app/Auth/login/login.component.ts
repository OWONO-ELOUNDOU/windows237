import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  hasError = false;
  errorMsg = '';
  minPasswordLength = 6;

  constructor(
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  closeMsg() {
    this.hasError = !this.hasError;
  }

  onSubmit(userForm: {
    email: string,
    password: string
  }) {
    if (userForm.email !== "" && userForm.password !== "") {
      this.isLoading = true;
        this.authService.login(userForm.email, userForm.password).subscribe((res) => {
          console.log(res);
          this.isLoading = false;
          this.route.navigate(['/']);
        }, (errorMessage) => {
          this.isLoading = false;
          this.hasError = true;
          this.errorMsg = errorMessage;
        })
    } else {
      this.hasError = !this.hasError;
      this.errorMsg = "Veuillez remplir tous les champs";
    }
  }

}
