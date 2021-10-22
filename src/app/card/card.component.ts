import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from "../doctor/models/doctor";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!:Doctor

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelectDoctor(element:Doctor){
    this.router.navigate(['/patient',1,'doctors', element.id])
  }


  onSelectDoctorContract(element:Doctor){
    this.router.navigate(['/patient',1,'contract', element.id])
  }

}
