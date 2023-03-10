import { Component } from '@angular/core';

import { CartService } from '../service/cart.service';
import { Payment } from '../shared/model/payment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  price = localStorage.getItem('amount');
  total =  this.getTotal(this.items);
  number = this.cartService.itemsCount();
  handler: any = null;
  paiement: Payment = {
    cmd: 'start',
    rN: 'PAUL TESTEUR',
    rT: '696042700',
    rE: 'user01@gmail.com',
    rH: 'DF216B76193067807036203',
    rMt: '1000',
    rDvs: 'XAF',
    rMo: '1=MTN, 2=Orange, 3=Express Union, 5=Visa via UBA, 10=Dohone, 14= Visa via Wari, 15=Wari card, 16=Visa/MasterCard',
    source: 'DIGITAL DIRECT ASSISTANCE',
    endPage: 'https://windows237.net/home',
    cancelPage: 'https://windows237.net/cart',
    logo: 'assets/Images/icon/logo.png',
 }

  constructor(
    private cartService: CartService
  ) { };

  ngOnInit(): void{
    console.log(this.price);
    console.log(this.items);
  };

  onSubmit(): void{
    this.cartService.saveOrder();
    this.items = this.cartService.clearCart();
    console.warn('Vos produits ont été envoyés');
  };

  validateInput(event: any, i: number) {
    const qty = +event.target.value;
    if(qty < 1) {
      event.target.value = this.items[i].quantity;
      return;
    }

    this.QtyUpdated(qty, i);
  };

  private QtyUpdated(qty: number, i: number) {
    this.items[i].quantity = qty;

    this.getTotal(this.items);
  };

  getTotal(data: any) {
    let subs = 0;

    for(const item of data) {
      subs += item.price * item.quantity;

      this.total = subs;
      localStorage.setItem('amount', JSON.stringify(this.total))
    }
    return subs;
  };

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51MDA9KGsQevxDi0b92NKzE5EmVQ7nkHcVSCwjLsB8sEQlyHwftyUcphioj8Ka5YvLdcKf6BtFiUVGl5Z2hgCC1HY00jdAwv7Mc',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Windows237',
      description: this.cartService.itemsCount()+'produits',
      amount: amount * 100
    });
 
  };

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51MDA9KGsQevxDi0b92NKzE5EmVQ7nkHcVSCwjLsB8sEQlyHwftyUcphioj8Ka5YvLdcKf6BtFiUVGl5Z2hgCC1HY00jdAwv7Mc',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  };

  dohonePay(paiement: Payment) {
    this.cartService.createPayment(paiement);
    console.log(paiement);
  }

}
