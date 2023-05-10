import { Component } from '@angular/core';
import { map } from 'rxjs';

import { FreeService } from '../service/free.service';
import { Link } from '../shared/model/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {

  image = "assets/images/links/pharmacie.jpeg";
  allLinks: Link[] = [];
  embassies: Link[] = [];
  finances: Link[] = [];
  publics: Link[] = [];
  schools: Link[] = [];
  hotels: Link[] = [];

  constructor(
    private freeService: FreeService
  ) { }

  ngOnInit(): void{
    /*
    this.freeService.getAllLinks().pipe(map((res) => {
      const links = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          links.push({...res[key], id: key})
        } 
      }
      return links;
    }))
    .subscribe((links) => {
      console.log(links);
      this.allLinks = links;
    });
    */

    this.freeService.getEmbassy().subscribe({
      next: embassies => this.embassies = embassies
    })
    console.log(this.embassies);

    this.freeService.getFinance().subscribe({
      next: finances => this.finances = finances
    })
    console.log(this.finances);

    this.freeService.getSchool().subscribe({
      next: schools => this.schools = schools
    })
    console.log(this.schools);

    this.freeService.getPublicServices().subscribe({
      next: publics => this.publics = publics
    })
    console.log(this.publics);

    this.freeService.getHotels().subscribe({
      next: hotels => this.hotels = hotels
    })
    console.log(this.hotels);
  }

  fetchLink() {
    this.freeService.getAllLinks()
  }
}
