import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import { DoctorsComponent } from './doctor/pages/doctors/doctors.component';
import { HomeComponent } from './public/home/home.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { DoctorDetailComponent } from './doctor/pages/doctor-detail/doctor-detail.component';
import { DoctorContractComponent } from './doctor/pages/doctor-contract/doctor-contract.component';
<<<<<<< HEAD
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
=======
import {MatGridListModule} from '@angular/material/grid-list';
>>>>>>> 58c7538fd38dcbc63d8a25d475aa52e7ddb401c1

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    HomeComponent,
    CardComponent,
    DoctorDetailComponent,
    DoctorContractComponent
  ],
<<<<<<< HEAD
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
        MatGridListModule
    ],
=======
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
    MatGridListModule
  ],
>>>>>>> 58c7538fd38dcbc63d8a25d475aa52e7ddb401c1
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
