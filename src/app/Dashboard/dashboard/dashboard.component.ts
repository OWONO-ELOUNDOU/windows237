import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  logo = 'assets/images/icon/favicon.png';
  logoName = 'Windows237';

  constructor() { }

  NgOnInit(): void{
    
  }

}
