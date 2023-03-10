import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Activity } from '../shared/model/activity';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private readonly apiUrl = 'api/database.json';

  constructor(
    private http: HttpClient
  ) { }

  //Get all the services
  getAllService(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.apiUrl);
  }
}
