import { Component } from '@angular/core';

import { PrestationService } from '../service/prestation.service';
import { Activity, activities } from '../shared/model/activity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  prestation = activities;
  price: number | undefined;
  convert = 650;

  constructor(
    
  ) {

  }

}
