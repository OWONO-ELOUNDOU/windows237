import { Component } from '@angular/core';
import { houseService } from 'src/app/Prestations/shared/model/activity';

@Component({
  selector: 'app-house-service',
  templateUrl: './house-service.component.html',
  styleUrls: ['./house-service.component.css']
})
export class HouseServiceComponent {
  exclusives = houseService;
  isLoading = false;
}
