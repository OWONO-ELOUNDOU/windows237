import { Component } from '@angular/core';

import { Service } from '../shared/model/service';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent {

  constructor(
    private dashService: DashboardService
  ) { }

  ngOnInit(): void{

  }

  onSubmit(service: Service) {
    this.dashService.addService(service);
  }

}
