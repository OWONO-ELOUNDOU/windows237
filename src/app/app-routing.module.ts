import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { ContactComponent } from './screen/contact/contact.component';
import { ParternshipComponent } from './screen/parternship/parternship.component';
import { AboutComponent } from './screen/about/about.component';
import { CartComponent } from './Cart/cart/cart.component';
import { ListComponent } from './Prestations/list/list.component';
import { FormComponent } from './Prestations/form/form.component';
import { DocumentsComponent } from './Free-services/documents/documents.component';
import { LinksComponent } from './Free-services/links/links.component';
import { InfoComponent } from './Free-services/info/info.component';
import { ShopComponent } from './Free-services/shop/shop.component';
import { HouseComponent } from './Houses/house/house.component';
import { HouseFormComponent } from './Houses/house-form/house-form.component';
import { DohoneComponent } from './dohone/dohone.component';
import { CvComponent } from './screen/progress/cv/cv.component';
import { Cv2Component } from './screen/progress/cv2/cv2.component';
import { AuthGuard } from './services/Guard/auth.guard';

/* import { AuthService } from './services/Auth/auth.service'; */

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cv', component: CvComponent , canActivate: [AuthGuard] },
  { path: 'cv2', component: Cv2Component , canActivate: [AuthGuard] },
  { path: 'parternship', component: ParternshipComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'docs', component: DocumentsComponent, /* canActivate: [AuthGuard] */ },
  { path: 'links', component: LinksComponent, canActivate: [AuthGuard] },
  { path: 'info', component: InfoComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'house', component: HouseComponent, canActivate: [AuthGuard] },
  { path: 'house/form/:id', component: HouseFormComponent, canActivate: [AuthGuard] },
  { path: 'pay/with/dohone', component: DohoneComponent },
  { path: 'form/:id/:Id', component: FormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
