import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'windows237';

  constructor(
    private AuthService: AuthService
  ) {}

  ngOnInit(): void{
    this.AuthService.autoLogin();
  }
}
