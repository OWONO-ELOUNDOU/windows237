import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Service } from 'src/app/model/home/service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  activityUrl = 'database/activity.json'

  constructor(
    private http: HttpClient
  ) { }

  getAllActivity(): Observable<Service[]>{
    return this.http.get<Service[]>(this.activityUrl);
  }
}
