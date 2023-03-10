import { Component } from '@angular/core';

import { Link } from '../shared/model/link';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent {

  constructor(
    private dashService: DashboardService
  ) { }

  ngOnInit(): void{

  }

  onSubmit(link: Link) {
    this.dashService.addLink(link);
  }

}
