import { Component, OnInit } from '@angular/core';
import {Doctor} from "../../models/doctor";
import {DoctorsService} from "../../services/doctors.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-doctor-contract',
  templateUrl: './doctor-contract.component.html',
  styleUrls: ['./doctor-contract.component.css']
})
export class DoctorContractComponent implements OnInit {
  doctorData: Doctor;

  constructor(private doctorsService: DoctorsService, private route: ActivatedRoute) {
    this.doctorData = {} as Doctor;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      this.doctorsService.getById(id).subscribe((response: any) => {
        console.log(response)
        this.doctorData = response
      })
    });

  }

}
