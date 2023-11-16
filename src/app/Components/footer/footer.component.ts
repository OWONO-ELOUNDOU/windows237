import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  links = [
    {
      id: 1,
      name: "dribble",
      icon: "bx bxl-dribbble",
      image: "assets/images/icon/dribbble.svg",
      url: ""
    },
    {
      id: 2,
      name: "facebook",
      icon: "bx bxl-facebook",
      image: "assets/images/icon/facebook.svg",
      url: ""
    },
    {
      id: 3,
      name: "instagram",
      icon: "bx bxl-instagram",
      image: "assets/images/icon/instagram.svg",
      url: ""
    },
    {
      id: 4,
      name: "twitter",
      icon: "bx bxl-twitter",
      image: "assets/images/icon/twitter.svg",
      url: ""
    },
    {
      id: 5,
      name: "youtube",
      icon: "bx bxl-youtube",
      image: "assets/images/icon/youtube.svg",
      url: ""
    },
  ]

}
