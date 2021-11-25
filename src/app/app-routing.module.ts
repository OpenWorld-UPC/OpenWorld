import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./doctor/pages/doctors/doctors.component";
import {HomeComponent} from "./public/home/home.component";
import {DoctorDetailComponent} from "./doctor/pages/doctor-detail/doctor-detail.component";
import {DoctorContractComponent} from "./doctor/pages/doctor-contract/doctor-contract.component";
import {MessagesComponent} from "./message/pages/messages/messages.component";
import {ReservationsComponent} from "./reservation/pages/reservations/reservations.component";
import {MessageDetailComponent} from "./message/pages/message-detail/message-detail.component";
import {MessageResponseComponent} from "./message/pages/message-response/message-response.component";

const routes: Routes = [
  /** These Paths are for User Patients **/
  {path: 'patients/:idPatient/doctors', component: DoctorsComponent},
  {path: 'patients/:idPatient/messages', component: MessagesComponent},
  {path: 'patients/:idPatient/messages/:idMessage', component: MessageDetailComponent},
  {path: 'patients/:idPatient/doctors/:id', component: DoctorDetailComponent},
  {path: 'patients/:idPatient/contract/:id', component: DoctorContractComponent},
  {path: 'patients/:idPatient/contract/:id/reservations', component: ReservationsComponent},

  /** These Paths are for User Patients **/
  {path: 'doctors/:idDoctor/messages', component: MessagesComponent},
  {path: 'doctors/:idDoctor/messages/:idMessage', component: MessageResponseComponent},

  /** These Paths are common for all Users **/
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
