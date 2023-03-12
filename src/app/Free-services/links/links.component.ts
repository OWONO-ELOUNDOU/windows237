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

  constructor(
    private freeService: FreeService
  ) { }

  ngOnInit(): void{
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
    })
  }

  fetchLink() {
    this.freeService.getAllLinks()
  }
}
