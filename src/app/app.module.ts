import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';

// import components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ParternshipComponent } from './screen/parternship/parternship.component';
import { ContactComponent } from './screen/contact/contact.component';
import { AboutComponent } from './screen/about/about.component';
import { CartComponent } from './Cart/cart/cart.component';
import { ListComponent } from './Prestations/list/list.component';
import { DocumentsComponent } from './Free-services/documents/documents.component';
import { LinksComponent } from './Free-services/links/links.component';
import { InfoComponent } from './Free-services/info/info.component';
import { ShopComponent } from './Free-services/shop/shop.component';
import { DohoneComponent } from './dohone/dohone.component';
import { LoadingSpinnerComponent } from './Components/loading-spinner/loading-spinner.component';
import { CvComponent } from './Components/progress/cv/cv.component';
import { Cv2Component } from './Components/progress/cv2/cv2.component';
import { HouseComponent } from './Houses/house/house.component';
import { HouseFormComponent } from './Houses/house-form/house-form.component';
import { BlogComponent } from './screen/blog/blog.component';
import { ProgressStepComponent } from './Components/progress/progress-step/progress-step.component';
import { ProgressStepDirective } from './Components/progress/directive/progress-step.directive';
import { ProgressComponent } from './Components/progress/progress/progress.component';
import { SucceedOfferComponent } from './Houses/succeed-offer/succeed-offer.component';
import { HouseDetailsComponent } from './Houses/house-details/house-details.component';
import { Form2Component } from './Prestations/form2/form2.component';
import { TestimonialComponent } from './Components/testimonial/testimonial.component';
import { FormComponent } from './Components/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    ParternshipComponent,
    ContactComponent,
    AboutComponent,
    CartComponent,
    ListComponent,
    DocumentsComponent,
    LinksComponent,
    InfoComponent,
    ShopComponent,
    DohoneComponent,
    LoadingSpinnerComponent,
    CvComponent,
    Cv2Component,
    HouseComponent,
    HouseFormComponent,
    BlogComponent,
    ProgressStepComponent,
    ProgressStepDirective,
    ProgressComponent,
    SucceedOfferComponent,
    HouseDetailsComponent,
    Form2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TestimonialComponent,
    FormComponent,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
