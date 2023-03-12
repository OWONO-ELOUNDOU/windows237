import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Activity } from 'src/app/Prestations/shared/model/activity';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Activity[] = [];
  cart: any;
  site: any;

  constructor(
    private http: HttpClient
  ) { }

  addToCart(activity: Activity) {
    this.items.push(activity);
    localStorage.setItem('cart', JSON.stringify(this.items));
    console.log(this.items);
  };

  getItems() {
    //JSON.parse(sessionStorage.getItem('cart'))
    return this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
  };

  itemsCount() {
    return this.items.length;
  };

  clearCart() {
    this.items = [];
    return this.items;
  };

  order = {
    cart: JSON.parse(localStorage.getItem('cart') || '{}'),
    total: localStorage.getItem('amount'),
  }

  saveOrder() {
    this.http.post('https://windows-237-default-rtdb.europe-west1.firebasedatabase.app/cart.json', this.order)
  }

  createPayment(data: any) {
    this.http.post('https://www.my-dohone.com/dohone/pay', data).subscribe((res) => {
      console.log(res);
      this.site = res;
      console.log(this.site);
    })
  }
}
