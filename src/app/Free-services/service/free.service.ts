import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { File } from '../shared/model/file';
import { Link } from '../shared/model/link';
import { Police } from '../shared/model/police';
import { Commisariat } from '../shared/model/commisariat';
import { Procedure } from '../shared/model/procedure';

@Injectable({
  providedIn: 'root'
})
export class FreeService {

  private readonly apiUrl = 'database/procedure.json';
  private readonly fileUrl = 'database/file.json';
  private readonly policeUrl = 'database/police.json';
  private readonly shopUrl = 'database/shop.json'
  allLinks: Link[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllDocuments() {
    this.http.get('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/document.json')
    .subscribe((res) => {
      console.log(res)
    })
  }

  getAllLinks() {
    return this.http.get<{[key : string]: Link}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/link.json')
  }

  getAllProcedure(): Observable<Procedure[]>{
    return this.http.get<Procedure[]>(this.apiUrl)
  }

  getCommisariat(): Observable<Commisariat[]>{
    return this.http.get<Commisariat[]>(this.policeUrl);
  }

  getShopData():Observable<Link[]>{
    return this.http.get<Link[]>(this.shopUrl);
  }

  getFileData():Observable<File[]>{
    return this.http.get<File[]>(this.fileUrl);
  }
}
