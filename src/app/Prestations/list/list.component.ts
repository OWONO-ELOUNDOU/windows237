import { Component } from '@angular/core';

import { PrestationService } from '../service/prestation.service';
import { Activity, serviceAdmin, serviceCours, serviceProf,  } from '../shared/model/activity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //prestation = activities;
  administrative = serviceAdmin;
  professional = serviceProf;
  courses = serviceCours;
  price: number | undefined;
  convert = 650;

  constructor(
    
  ) {

  }

}
