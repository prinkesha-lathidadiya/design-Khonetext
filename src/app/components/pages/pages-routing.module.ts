import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { PaymentsComponent } from './payments/payments.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'job', component: JobComponent},
  {path:'messaging', component: MessagingComponent},
  {path:'my-contact', component: MyContactComponent},
  {path:'payments', component: PaymentsComponent},
  {path:'scheduling', component: SchedulingComponent},
  {path:'security', component: SecurityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
