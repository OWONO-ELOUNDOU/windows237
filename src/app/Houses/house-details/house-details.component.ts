import { Component } from '@angular/core';
import { HouseService } from '../service/house.service';
import { Offer } from '../shared/model/offer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent {

  offer: Offer;

  constructor(
    private service: HouseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const offerId = routeParams.get('id');
    console.log(offerId);
    this.houseDetails(offerId);
    this.landDetails(offerId);
  }

  private houseDetails(id: string) {
    this.service.getHouseDetails(id).subscribe((res) => {
      this.offer = res;
      console.log(this.offer);
    })
  }

  private landDetails(id: string) {
    this.service.getLandDetails(id).subscribe((res) => {
      this.offer = res;
      console.log(this.offer);
    })
  }

}
