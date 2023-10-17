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
  coursesLink = 'list#courses';
  houseServices = [
    {
      name: 'Recherche opportunités d\'affaires',
      image: 'assets/images/house_img/opportunité.jpg'
    },
    {
      name: 'Construction réhabilitation, et innovation immobilière',
      image: 'assets/images/house_img/construction.jpg'
    },
    {
      name: 'Recherche de terrains et autres acitfs immobiliers',
      image: 'assets/images/house_img/terrains_actifs.jpeg'
    }
  ]

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void{
    
  }

}
