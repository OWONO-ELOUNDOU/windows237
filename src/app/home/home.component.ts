import { Component } from '@angular/core';

import { Service } from '../model/home/service';
import { HomeService } from '../services/Home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  logo = 'assets/images/icon/favicon.png';
  image = 'assets/images/icon/bg1.png';
  site = 'https://windows237.net/home';
  adminLink = 'list#admin';
  professionalLink = 'list#professional';
  marchandLink = 'list#marchand';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void{
    
  }

}
