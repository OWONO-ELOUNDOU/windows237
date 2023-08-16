import { Component } from '@angular/core';
import { House, houses } from '../shared/model/house';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  houses = houses;

  constructor()
  { }

  ngOnInit(): void{

  }

  show() {
    alert("Cette fonctionnalité sera bientôt disponible Merci !");
  }
}
