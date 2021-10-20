import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./doctor/pages/doctors/doctors.component";
import {HomeComponent} from "./public/home/home.component";
import {DoctorDetailComponent} from "./doctor/pages/doctor-detail/doctor-detail.component";
import {DoctorContractComponent} from "./doctor/pages/doctor-contract/doctor-contract.component";
import {MessagesComponent} from "./message/pages/messages/messages.component";

const routes: Routes = [
  {path: 'doctors', component: DoctorsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'doctors/:id', component: DoctorDetailComponent},
  {path: 'contract/:id', component: DoctorContractComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
