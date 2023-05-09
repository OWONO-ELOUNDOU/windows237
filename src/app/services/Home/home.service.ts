import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Service } from 'src/app/model/home/service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  activityUrl = 'database/activity.json'

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  getAllActivity(): Observable<Service[]>{
    return this.http.get<Service[]>(this.activityUrl);
  }

}
