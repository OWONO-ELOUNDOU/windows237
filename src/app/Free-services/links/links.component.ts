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
  etrangers: Link[] = [];
  logo = "assets/images/cameroon/cameroun.png";
  name = "CAMEROUN";

  showEmbassy = false;
  showFinance = false;
  showPublic = false;
  showSchool = false;
  showHotel = false;
  showEtranger = false;
  institution = false;

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

    this.freeService.getFinance().subscribe({
      next: finances => this.finances = finances
    })

    this.freeService.getSchool().subscribe({
      next: schools => this.schools = schools
    })

    this.freeService.getPublicServices().subscribe({
      next: publics => this.publics = publics
    })

    this.freeService.getHotels().subscribe({
      next: hotels => this.hotels = hotels
    })
    
    this.freeService.getEtranger().subscribe({
      next: etrangers => this.etrangers = etrangers
    })
  }

  fetchLink() {
    this.freeService.getAllLinks()
  }

  displayEmbassy() {
    this.showEmbassy = !this.showEmbassy;
  }
  displayPublic() {
    this.showPublic = !this.showPublic;
  }
  displayHotel() {
    this.showHotel = !this.showHotel;
  }
  displayFinance() {
    this.showFinance = !this.showFinance;
  }
  displaySchool() {
    this.showSchool = !this.showSchool;
  }
  displayEtranger() {
    this.showEtranger = !this.showEtranger;
  }
  displayInstitution() {
    this.institution = !this.institution;
  }

  onSubmit(url: string) {
    window.location.href = url;
  }
}