import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ContactComponent } from './screen/contact/contact.component';
import { ParternshipComponent } from './screen/parternship/parternship.component';
import { AboutComponent } from './screen/about/about.component';
import { AddDocumentComponent } from './Dashboard/add-document/add-document.component';
import { AddLinkComponent } from './Dashboard/add-link/add-link.component';
import { AddServiceComponent } from './Dashboard/add-service/add-service.component';
import { CartComponent } from './Cart/cart/cart.component';
import { ListComponent } from './Prestations/list/list.component';
import { FormComponent } from './Prestations/form/form.component';
import { DocumentsComponent } from './Free-services/documents/documents.component';
import { LinksComponent } from './Free-services/links/links.component';
import { InfoComponent } from './Free-services/info/info.component';
import { ShopComponent } from './Free-services/shop/shop.component';

import { AuthService } from './services/Auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'parternship', component: ParternshipComponent },
  { path: 'addLink', component: AddLinkComponent },
  { path: 'addDocument', component: AddDocumentComponent },
  { path: 'addService', component: AddServiceComponent },
  { path: 'cart', component: CartComponent },
  { path: 'list', component: ListComponent },
  { path: 'docs', component: DocumentsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'info', component: InfoComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'form/:id/:Id', component: FormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
