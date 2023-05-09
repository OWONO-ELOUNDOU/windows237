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
  convert = 650;
  cmPrice: number | undefined;
  number = this.cartService.itemsCount();
  handler: any = null;

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
    this.getCmrPrice(this.items);
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

  getCmrPrice(data: any) {
    let subs = 0;
    let cmrPrice = 0;

    for(const item of data) {
      subs += item.price * item.quantity;

      cmrPrice = subs * this.convert;
      this.cmPrice = cmrPrice;
      localStorage.setItem('cmrprice', JSON.stringify(cmrPrice))
    }

    return cmrPrice;
  }

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
