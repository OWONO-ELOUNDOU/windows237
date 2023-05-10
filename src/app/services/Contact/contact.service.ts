import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  // Function for sending message form the contact page
  sendMessage(data: any) {
    return this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/message.json', data, {
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
