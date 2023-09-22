import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Database, set, ref, update, onValue } from '@angular/fire/database';

import { House } from '../shared/model/house';
import { Offer } from '../shared/model/offer';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly firebaseEndpoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/';
  user = JSON.parse(localStorage.getItem('userData'));

  constructor(
    private http: HttpClient,
    public database: Database
  ) { }

  getHouses() {
    return this.http.get<{[key : string]: Offer}>(`${this.firebaseEndpoint}/offers/house.json`);
  }
  getLands() {
    return this.http.get<{[key : string]: Offer}>(`${this.firebaseEndpoint}/offers/land.json`);
  }

  createLandOffer(data: Offer) {
    set(ref(this.database, 'offers/land/' + data.characteristic), {
      type: data.type,
      characteristic: data.characteristic,
      place: data.place,
      area: data.area,
      owner: data.owner,
      details: data.details,
      price: data.price,
      contact: this.user.email
    });
  }

  createHouseOffer(data: Offer) {
    set(ref(this.database, 'offers/house/' + data.characteristic), {
      type: data.type,
      characteristic: data.characteristic,
      place: data.place,
      area: data.area,
      owner: data.owner,
      details: data.details,
      price: data.price,
      contact: this.user.email
    });
  }

  getHouseDetails(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.firebaseEndpoint}/offers/house/` + id + `.json`);
  }

  getLandDetails(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.firebaseEndpoint}/offers/land/` + id + `.json`);
  }
}
