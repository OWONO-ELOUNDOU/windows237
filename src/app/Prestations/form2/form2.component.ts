import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { Activity, activities } from '../shared/model/activity';
import { PrestationService } from '../service/prestation.service';
import { CartService } from 'src/app/Cart/service/cart.service';
import { Demand, Mission } from '../shared/model/demand';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
  product: Activity | any;
  productId: any;
  isRegister = false;

  serviceForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    type: [''],
    location: [''],
    contactDetails: [''],
    description: ['']
  })

  constructor(
    private prestation: PrestationService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const serviceParams = this.route.snapshot.paramMap;
    const activityIdFromRoute = Number(routeParams.get('id'));
    const serviceIdFromRoute = Number(serviceParams.get('Id'));
    console.log(activityIdFromRoute);
    console.log(serviceIdFromRoute);
    this.product = activities.find(activity => activity.Id === activityIdFromRoute);
    this.productId = this.product.activity.find((activity: { id: number; }) => activity.id === serviceIdFromRoute);
    console.log(this.productId);
  }

  onSubmit() {
    console.warn(this.serviceForm.value);
  }

  saveService(demande: Mission) {
    this.prestation.createMission(demande);
    this.isRegister = !this.isRegister;
  }

  addToCart(product: Activity) {
    this.cartService.addToCart(product);
  }
}
