import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Reservation} from "../model/reservation";
import {catchError, retry} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  basePath = 'http://localhost:3000/api/v1/reservations';

  constructor(private http: HttpClient, private router: Router) {
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

  //Create Reservation
  create(createReservationDto: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.basePath, JSON.stringify(createReservationDto), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Get Reservation By Id
  getReservationsById(id: number, idTypeUser: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.basePath}?${idTypeUser}=${id}`)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Get By Id
  getById(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.basePath}/${id}`)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Update Reservation
  update(id: number, createReservationDto: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.basePath}/${id}`, JSON.stringify(createReservationDto), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

}
