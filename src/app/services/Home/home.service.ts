import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Database, set, ref, update } from '@angular/fire/database';

import { Service } from 'src/app/model/home/service';
import { Feedback } from 'src/app/model/feedback';
import { onValue } from 'firebase/database';
import { locationApiKey } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  activityUrl = 'database/activity.json';
  private visitorInfo = {
    ipAddress: '',
    city: '',
    region: '',
    country: '',
    latitude: '',
    longitude: '',
  };
  private readonly endPoint = 'https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/Feedback.json';

  constructor(
    private http: HttpClient,
    private route: Router,
    public database: Database
  ) { }

  getAllActivity(): Observable<Service[]>{
    return this.http.get<Service[]>(this.activityUrl);
  }

  postFeedback(data: Feedback) {
    set(ref(this.database, 'Feedback/' + data.username), {
      username: data.username,
      feedback: data.feedback
    })
  }

  getFeedBack() {
    return this.http.get<{[key : string]: Feedback}>(this.endPoint);
  }

  getUserInfo() {
    return this.http.get(`https://ipgeolocation.abstractapi.com/v1/?api_key=${locationApiKey}`)
    .subscribe((res: any) => {
      console.log(res);
      this.visitorInfo.city = res.city;
      this.visitorInfo.country= res.country;
      this.visitorInfo.region = res.region;
      this.visitorInfo.ipAddress = res.ip_address;
      this.visitorInfo.latitude = res.latitude;
      this.visitorInfo.longitude = res.longitude;
      console.log(this.visitorInfo);

      this.createVisitor(this.visitorInfo);
    });
  }

  // VisitCount(){
  //   let counter = 0
  //   if(this.visitorInfo) {
  //     counter += 1;
  //   }
  // }

  private createVisitor(data) {
    set(ref(this.database, 'Visitors/' + data.city), {
      city: data.city,
      country: data.country,
      region: data.region,
      ipAddress: data.ipAddress,
      latitude: data.latitude,
      longitude: data.longitude,
    })
  }

}
