import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  getSingleUser() {

  };

  addUser(data: any){
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/users.json', data, {
      headers: {
        "content-type": "application/json"
      }
    }).subscribe((res) => {
      console.log(res);
    })
  }
}
