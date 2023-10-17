import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Database, set, ref } from '@angular/fire/database';

import { Activity } from '../shared/model/activity';
import { Demand, Mission } from '../shared/model/demand';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private readonly apiUrl = 'api/database.json';
  private readonly endPoint = ''

  constructor(
    private http: HttpClient,
    public database: Database
  ) { }

  //Get all the services
  getAllService(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.apiUrl);
  }

  //create service demande from Form page
  // createService( data: any ) {
  //   return this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/demande.json', data)
  // }

  createDemand(data: Demand) {
    set(ref(this.database, 'Request/Mission/' + data.service), {
      nom: data.nom,
      prenom: data.prenom,
      rubriqueId: data.rubriqueId,
      service: data.service,
      description: data.description,
      location: data.location
    });
  }

  createMission(data: Mission) {
    set(ref(this.database, 'Request/Mission/' + data.type), {
      type: data.type,
      nom: data.nom,
      prenom: data.prenom,
      lieu: data.lieu,
      coordonnees: data.coordonnees,
      description: data.description
    });
  }

}
