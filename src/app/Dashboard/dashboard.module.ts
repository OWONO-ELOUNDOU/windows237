import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddDocumentComponent } from './add-document/add-document.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { ServiceListComponent } from './screens/service-list/service-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddDocumentComponent,
    AddServiceComponent,
    AddLinkComponent,
    ServiceListComponent
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
