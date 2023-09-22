import { Component } from '@angular/core';
import { HouseService } from '../service/house.service';
import { Offer } from '../shared/model/offer';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.css']
})
export class HouseFormComponent {

  Offers: Offer[] = [];
  selectedFile: File = null;

  constructor(
    private service: HouseService,
    private router: Router
  ) { }

  ngOnInit(): void{
    
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  async houseService(demande: Offer) {
    const type = await demande.type.toLowerCase();
    const dateTime = await new Date().toLocaleString();
    demande.date = dateTime; 
    try {
      if(type == "terrain"){
        this.service.createLandOffer(demande);
      } else if(type == "maison") {
        this.service.createHouseOffer(demande);
      }
      this.router.navigate(['/offer/succeed']);
    } catch (error) {
      console.log(error)
    }
    // console.log(demande);
  }

}
