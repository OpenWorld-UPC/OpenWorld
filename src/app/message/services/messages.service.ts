import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Message} from "../models/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  basePath = 'http://localhost:3000/api/v1/messages';

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

  //Get Message By Id Patient
  getById(id: number): Observable<Message> {
    return this.http.get<Message>(`${this.basePath}?idPatient=${id}`)
      .pipe(retry(2),
        catchError(this.handleError));
  }
}
