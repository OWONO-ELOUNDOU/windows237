import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../Cart/service/cart.service';

@Component({
  selector: 'app-dohone',
  templateUrl: './dohone.component.html',
  styleUrls: ['./dohone.component.css']
})
export class DohoneComponent implements OnInit {

  items = this.cartService.getItems();
  price = this.getTotal(this.items);
  dohone_rH = "DF216B76193067807036203";
  dohone_endPoint = "https://my-dohone.com/dohone/pay"

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    console.log(this.items);
    console.log(this.price);
  }

  getTotal(data: any) {
    let sum = 0;

    for(const item of data) {
      sum += item.price * item.quantity;
    }
    return sum;
  }

  checkoutForm = this.formBuilder.group({
    rN: '',
    rE: '',
    rT: '',
    rI: '',
    cmd: 'start',
    rDvs: 'EUR',
    rH: this.dohone_rH,
    rMt: this.price,
    rLocale: 'fr',
    motif: "Paiement d'un article sur le site Windows 237",
    source: 'DIGITAL DIRECT ASSISTANCE',
    endPage: 'https://windows237.net/home',
    cancelPage: 'https://windows237.net/cart',
    notifyPage: 'https://windows237.net/cart',
    logo: 'https://windows237.net/assets/Images/icon/logo.png',
  });

  onSubmit() {
    this.httpClient.post('https://www.my-dohone.com/dohone/pay', this.checkoutForm.value, {
      headers: {
        'Access-Control-Allow-Headers' : "origin, x-requested-with, content-type",
        'Access-Control-Allow-Origin' : "http://localhost:4200",
        "Content-Type": "application/json"
      }
    }).subscribe((res) => {
        console.log(res)
    });
  }
}
