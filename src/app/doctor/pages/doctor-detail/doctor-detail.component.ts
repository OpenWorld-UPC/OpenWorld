import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Doctor} from "../../models/doctor";
import {DoctorsService} from "../../services/doctors.service";
import {Patient} from "../../../patient/models/patient";
import {PatientsService} from "../../../patient/services/patients.service";

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  doctorData: Doctor;
  patientData: Patient;

  constructor(private doctorsService: DoctorsService, private patientService: PatientsService, private route: ActivatedRoute, private router: Router) {
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

  onSelectDoctorContract(elementD: Doctor,elementP: Patient) {
    this.router.navigate(['/patient',elementP.id, 'contract', elementD.id])
  }

}


