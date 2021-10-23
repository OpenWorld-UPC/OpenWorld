import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Doctor} from "../../models/doctor";
import {DoctorsService} from "../../services/doctors.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorData: Doctor;

  dataSource = new MatTableDataSource();

  constructor(private doctorsService: DoctorsService, private router:Router) {
    this.doctorData = {} as Doctor;
  }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorsService.getAll().subscribe((response: any) => {
      console.log(response)
      this.dataSource.data = response;
    })
  }
}
