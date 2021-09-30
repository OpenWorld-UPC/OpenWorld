import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorsComponent} from "./doctor/pages/doctors/doctors.component";
import {HomeComponent} from "./public/home/home.component";

const routes: Routes = [
  {path: 'doctors', component: DoctorsComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
