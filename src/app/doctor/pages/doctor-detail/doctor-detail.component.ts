import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Doctor} from "../../models/doctor";
import {DoctorsService} from "../../services/doctors.service";

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {

  doctorData: Doctor;

  constructor(private doctorsService: DoctorsService, private route: ActivatedRoute, private router:Router) {
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

  onSelectDoctorContract(element:Doctor){
    this.router.navigate(['/contract', element.id])
  }

}


