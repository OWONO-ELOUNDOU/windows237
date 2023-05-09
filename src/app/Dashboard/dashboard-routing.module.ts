import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddDocumentComponent } from './add-document/add-document.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceListComponent } from './screens/service-list/service-list.component';

import { AuthService } from '../services/Auth/auth.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dashboard', component: DashboardComponent/*, canActivate: [AuthService] */},
      { path: 'addLink', component: AddLinkComponent },
      { path: 'addDocument', component: AddDocumentComponent },
      { path: 'addService', component: AddServiceComponent },
      { path: 'service/list', component: ServiceListComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
})
export class DashboardRoutingModule { }
