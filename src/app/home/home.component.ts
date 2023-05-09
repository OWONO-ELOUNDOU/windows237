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
  services = [
    {
      id: 1,
      name: "Recherche, vérification ou suivi d’information ou de dossier administratif, professionnel ou privé",
      price: 20,
      image: "assets/images/activity_images/recherche ou verification.jpeg"
    },
    {
      id: 2,
      name: "Retrait / dépôt de document auprès de toute administration publique ou privée",
      price: 20,
      image: "assets/images/activity_images/retrait et depot de document.jpeg"
    },
    {
      id: 3,
      name: "Représentation administrative, professionnelles et privées diverses",
      price: 20,
      image: "assets/images/activity_images/rendez-vous.jpeg"
    },
    {
      id: 4,
      name: "Accomplissement de toute autre course, acte, mission personnelle ou privée à la demande",
      price: 20,
      image: "assets/images/activity_images/representation et rendez-vous.jpeg"
    },
    {
      id: 5,
      image: "assets/images/activity_images/aliments.jpeg",
      name: "Achat de produits alimentaires ou autres ",
      price: 7.50,
    },
    {
      id: 6,
      image: "assets/images/activity_images/achat et expedition de petites courses locales.jpeg",
      name: "Retrait de produits alimentaires ou autres ",
      price: 7.50,
    },
    {
      id: 7,
      image: "assets/images/activity_images/autres formalités.jpeg",
      name: "Expédition de produits alimentaires ou autres ",
      price: 7.50,
    },
    {
      id: 8,
      image: "assets/images/activity_images/colis à récupérer à l aéroport.jpeg",
      name: "Dépôt de colis",
      price: 7.50,
    },
    {
      id: 9,
      name: "Retrait de colis",
      image: "assets/images/activity_images/reception de colis.jpeg",
      price: 7.50
    }
  ];

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void{
    console.log(this.services)
  }

}
