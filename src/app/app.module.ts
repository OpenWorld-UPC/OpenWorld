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

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    HomeComponent,
    CardComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
