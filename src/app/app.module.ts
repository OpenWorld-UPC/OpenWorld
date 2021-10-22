import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DoctorsComponent} from './doctor/pages/doctors/doctors.component';
import {HomeComponent} from './public/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import {CardComponent} from './card/card.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {DoctorDetailComponent} from './doctor/pages/doctor-detail/doctor-detail.component';
import {DoctorContractComponent} from './doctor/pages/doctor-contract/doctor-contract.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {ObjToArrayPipe} from "./objToArray.pipe";
import {MessagesComponent} from './message/pages/messages/messages.component';
import {ReservationsComponent} from './reservation/pages/reservations/reservations.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MessageDetailComponent} from './message/pages/message-detail/message-detail.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MessageResponseComponent } from './message/pages/message-response/message-response.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    HomeComponent,
    CardComponent,
    DoctorDetailComponent,
    DoctorContractComponent,
    ObjToArrayPipe,
    MessagesComponent,
    ReservationsComponent,
    MessageDetailComponent,
    MessageResponseComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSlideToggleModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
