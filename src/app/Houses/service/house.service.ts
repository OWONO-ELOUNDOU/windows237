import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../shared/model/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  private readonly houseUrl = 'database/house.json';

  constructor(
    private http: HttpClient
  ) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.houseUrl);
  }
}
