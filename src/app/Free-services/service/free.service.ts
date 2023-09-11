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
  private readonly shopUrl = 'database/shop.json';
  private readonly embassyUrl = 'database/embassy.json';
  private readonly financeUrl = 'database/bank_assurance.json';
  private readonly schoolUrl = 'database/school.json';
  private readonly hotelUrl = 'database/hotel.json';
  private readonly publicServiceUrl = 'database/government.json';
  private readonly etrangerUrl = 'database/etranger.json';
  private readonly endPoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/';
  allLinks: Link[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getAllDocuments() {
    return this.http.get<File[]>(this.fileUrl);
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

  getEmbassy():Observable<Link[]>{
    return this.http.get<Link[]>(this.embassyUrl);
  }

  getFinance():Observable<Link[]>{
    return this.http.get<Link[]>(this.financeUrl);
  }

  getSchool():Observable<Link[]>{
    return this.http.get<Link[]>(this.schoolUrl);
  }

  getPublicServices():Observable<Link[]>{
    return this.http.get<Link[]>(this.publicServiceUrl);
  }

  getHotels():Observable<Link[]>{
    return this.http.get<Link[]>(this.hotelUrl);
  }

  getEtranger():Observable<Link[]>{
    return this.http.get<Link[]>(this.etrangerUrl);
  }

  getFileData() {
    return this.http.get<{[key : string]: File}>('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/document.json');
  }
}
