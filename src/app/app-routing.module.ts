import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./doctor/pages/doctors/doctors.component";
import {HomeComponent} from "./public/home/home.component";
import {DoctorDetailComponent} from "./doctor/pages/doctor-detail/doctor-detail.component";
import {DoctorContractComponent} from "./doctor/pages/doctor-contract/doctor-contract.component";
import {MessagesComponent} from "./message/pages/messages/messages.component";
import {ReservationsComponent} from "./reservation/pages/reservations/reservations.component";
import {MessageDetailComponent} from "./message/pages/message-detail/message-detail.component";

const routes: Routes = [
  {path: 'patient/:idPatient/doctors', component: DoctorsComponent},
  {path: 'patient/:idPatient/messages', component: MessagesComponent},
  {path: 'patient/:idPatient/messages/:idMessage', component: MessageDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'patient/:idPatient/doctors/:id', component: DoctorDetailComponent},
  {path: 'patient/:idPatient/contract/:id', component: DoctorContractComponent},
  {path: 'patient/:idPatient/contract/:id/reservations', component: ReservationsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
