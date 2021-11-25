import { Component, OnInit } from '@angular/core';
import {ReservationsService} from "../../../reservation/services/reservations.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Reservation} from "../../../reservation/model/reservation";

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  reservationData: Reservation;

  constructor(private reservationsService: ReservationsService, private route:ActivatedRoute) {
    this.reservationData = {} as Reservation;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idMessage = parseInt(<string>params.get('idMessage'));
      console.log(idMessage);
      this.reservationsService.getById(idMessage).subscribe((response: any) => {
        console.log(response)
        this.reservationData = response
      })
    });
  }

}
