import { Component } from '@angular/core';
import { House, houses } from '../shared/model/house';
import { HouseService } from '../service/house.service';
import { map } from 'rxjs';
import { Offer } from '../shared/model/offer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  Houses: Offer[] = [];
  Lands: Offer[] = [];
  numOffer: number = 0

  constructor(
    private service: HouseService,
    private router: Router
  )
  { }

  ngOnInit(): void{
    this.showHouses();
    this.showLands();
    this.numOffer = this.Houses.length + this.Lands.length;
  }

  showDetails(id: string) {
    this.router.navigate(['house/details', id]);
  }
  
  private showHouses() {
    this.service.getHouses().pipe(map((res) => {
      const houses = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          houses.push({...res[key], id: key})
        }
      }
      return houses;
    }))
    .subscribe((houses) => {
      console.log(houses);
      this.Houses = houses;
      console.log(this.Houses.length)
    })
  }

  private showLands() {
    this.service.getLands().pipe(map((res) => {
      const lands = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          lands.push({...res[key], id: key})
        }
      }
      return lands;
    }))
    .subscribe((lands) => {
      console.log(lands);
      this.Lands = lands;
      console.log(this.Lands.length)
    })
  }
}
