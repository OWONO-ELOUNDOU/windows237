import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  links = [
    {
      id: 1,
      image: "assets/images/icon/dribbble.svg",
      url: ""
    },
    {
      id: 2,
      image: "assets/images/icon/facebook.svg",
      url: ""
    },
    {
      id: 3,
      image: "assets/images/icon/instagram.svg",
      url: ""
    },
    {
      id: 4,
      image: "assets/images/icon/twitter.svg",
      url: ""
    },
    {
      id: 5,
      image: "assets/images/icon/youtube.svg",
      url: ""
    },
  ]

}
