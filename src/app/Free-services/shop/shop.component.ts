import { Component } from '@angular/core';

import { Link } from '../shared/model/link';
import { FreeService } from '../service/free.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  shop = [
    {
      id: 24,
      fname: "TRANSPORT inter-Urbain YANGO",
      image: "assets/images/school-pics/YANGO.png",
      type: "Transport",
      url: "https://yango.com/fr_cm/"
  },
  {
      id: 25,
      fname: "Pharmacie en ligne Urpharm",
      image: "assets/images/school-pics/Urpharm.jpeg",
      type: "Boutique",
      url: "https://www.urpharm.com/"
  }
  ];

  constructor(
    private freeService: FreeService
  ) { }

  ngOnInit(): void{
    /*
    this.freeService.getShopData().subscribe({
      next: shop => this.shop = shop
    })
    console.log(this.shop);
    */
  }

}
