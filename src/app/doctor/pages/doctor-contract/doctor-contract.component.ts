import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../models/doctor";
import {DoctorsService} from "../../services/doctors.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PatientsService} from "../../../patient/services/patients.service";
import {Patient} from "../../../patient/models/patient";

@Component({
  selector: 'app-doctor-contract',
  templateUrl: './doctor-contract.component.html',
  styleUrls: ['./doctor-contract.component.css']
})
export class DoctorContractComponent implements OnInit {
  doctorData: Doctor;
  patientData: Patient;

  constructor(private doctorsService: DoctorsService, private patientService: PatientsService,private route: ActivatedRoute) {
    this.doctorData = {} as Doctor;
    this.patientData = {} as Patient;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      let idPatient = parseInt(<string>params.get('idPatient'));
      this.doctorsService.getById(id).subscribe((response: any) => {
        console.log(response)
        this.doctorData = response
      })
      this.patientService.getById(idPatient).subscribe((response: any) => {
        console.log(response)
        this.patientData = response
      })
    });
  }

}
