import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  addLink( data: any) {
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/link.json', data).subscribe((res) => {
      console.log(res)
    })
  };

  addService( data: any, type: string) {
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/service.json' + type, data).subscribe((res) => {
      console.log(res)
    })
  };

  addFile( data: any ) {
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/document.json', data).subscribe((res) => {
      console.log(res)
    })
  }
}
