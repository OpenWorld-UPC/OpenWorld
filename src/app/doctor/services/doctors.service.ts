import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Doctor} from "../models/doctor";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  basePath = 'http://localhost:3000/api/v1/doctors';

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

  //Create Student
  create(createDoctorDto: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.basePath, JSON.stringify(createDoctorDto), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Get Student By Id
  getById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.basePath}/${id}`)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Get All Doctors
  getAll(): Observable<Doctor> {
    return this.http.get<Doctor>(this.basePath)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Update Student
  update(id: number, updateDoctorDto: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.basePath}/${id}`, JSON.stringify(updateDoctorDto), this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }

  //Delete Student
  delete(id: number) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2),
        catchError(this.handleError));
  }
}
