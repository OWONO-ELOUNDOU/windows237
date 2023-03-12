import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from 'src/app/Cart/service/cart.service';
import { PrestationService } from '../service/prestation.service';
import { jsPDF } from 'jspdf';
import { Activity, activities } from '../shared/model/activity';
import { Demand } from '../shared/model/demand';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  logo= "assets/images/icon/logo.png";
  product: Activity | any;
  product1: any;

  @ViewChild('form', { static: false }) el!: ElementRef;

  constructor(
    private prestation: PrestationService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const serviceParams = this.route.snapshot.paramMap;
    const activityIdFromRoute = Number(routeParams.get('id'));
    const serviceIdFromRoute = Number(serviceParams.get('Id'));
    console.log(activityIdFromRoute);
    console.log(serviceIdFromRoute);
    this.product = activities.find(activity => activity.Id === activityIdFromRoute);
    this.product1 = this.product.activity.find((activity: { id: number; }) => activity.id === serviceIdFromRoute);
    console.log(this.product1);
  }

  makePdf() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.output('datauristring');
        let pdfBase64 = pdf.output('datauristring');
      } 
    })
  };

  saveService(demande: Demand) {
    this.prestation.createService(demande);
  }

  addToCart(product: Activity) {
    this.cartService.addToCart(product);
    this.makePdf();
  }

}
