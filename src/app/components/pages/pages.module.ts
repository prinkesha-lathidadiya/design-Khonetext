import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { PaymentsComponent } from './payments/payments.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [
    DashboardComponent,
    JobComponent,
    MessagingComponent,
    MyContactComponent,
    PaymentsComponent,
    SchedulingComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
