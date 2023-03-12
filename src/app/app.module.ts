import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './screen/header/header.component';
import { FooterComponent } from './screen/footer/footer.component';
import { ParternshipComponent } from './screen/parternship/parternship.component';
import { ContactComponent } from './screen/contact/contact.component';
import { AboutComponent } from './screen/about/about.component';
import { AddServiceComponent } from './Dashboard/add-service/add-service.component';
import { AddLinkComponent } from './Dashboard/add-link/add-link.component';
import { AddDocumentComponent } from './Dashboard/add-document/add-document.component';
import { CartComponent } from './Cart/cart/cart.component';
import { ListComponent } from './Prestations/list/list.component';
import { FormComponent } from './Prestations/form/form.component';
import { DocumentsComponent } from './Free-services/documents/documents.component';
import { LinksComponent } from './Free-services/links/links.component';
import { InfoComponent } from './Free-services/info/info.component';
import { ShopComponent } from './Free-services/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ParternshipComponent,
    ContactComponent,
    AboutComponent,
    AddServiceComponent,
    AddLinkComponent,
    AddDocumentComponent,
    CartComponent,
    ListComponent,
    FormComponent,
    DocumentsComponent,
    LinksComponent,
    InfoComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
