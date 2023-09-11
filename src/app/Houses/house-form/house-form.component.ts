import { Component } from '@angular/core';
import { HouseService } from '../service/house.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent {

  constructor(
    private service: HouseService
  ) { }

  ngOnInit(): void{

  }

  houseService(demande: any) {
    this.service.createOffer(demande);
  }

}
