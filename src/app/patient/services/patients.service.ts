import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Patient} from "../models/patient";

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  basePath = 'http://localhost:3000/api/v1/patients';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      //Default error handling
      console.error('An error occurred: ', error.error.message);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    //Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again');
  }

  //Get Patient By Id
  getById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.basePath}/${id}`)
      .pipe(retry(2),
        catchError(this.handleError));
  }
}
