import { Component } from '@angular/core';

import { FreeService } from '../service/free.service';
import { commisariats } from '../shared/model/commisariat';
import { polices } from '../shared/model/police';
import { Procedure } from '../shared/model/procedure';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  name = "CAMEROUN";
  image = "assets/images/cameroon/cameroun.png";
  procedures: Procedure[] = [];
  police = commisariats;
  security = polices;

  constructor(
    private freeService: FreeService
  ) { }

  ngOnInit(): void{
    this.freeService.getAllProcedure().subscribe({
      next: procedures => this.procedures = procedures
    })
    console.log(this.police)
    console.log(this.security)
  }

}
