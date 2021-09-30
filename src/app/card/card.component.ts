import {Component, Input, OnInit} from '@angular/core';
import {Doctor} from "../doctor/models/doctor";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!:Doctor

  constructor() { }

  ngOnInit(): void {
  }

}
