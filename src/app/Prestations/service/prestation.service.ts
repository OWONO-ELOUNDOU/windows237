import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Activity } from '../shared/model/activity';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private readonly apiUrl = 'api/database.json';
  private readonly endPoint = ''

  constructor(
    private http: HttpClient
  ) { }

  //Get all the services
  getAllService(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.apiUrl);
  }

  //create service demande from Form page
  createService( data: any ) {
    return this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/demande.json', data)
  }

}
