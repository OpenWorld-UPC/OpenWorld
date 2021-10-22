import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Message} from "../../models/message";
import {Reservation} from "../../../reservation/model/reservation";
import {ReservationsService} from "../../../reservation/services/reservations.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  reservationData: Reservation;
  idPatient?: number;


  constructor(private reservationsService: ReservationsService, private router: Router, private route: ActivatedRoute) {
    this.reservationData = {} as Reservation;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idPatient = parseInt(<string>params.get('idPatient'));
      this.getAllMessages(this.idPatient);
    });
  }

  getAllMessages(idPatient: number) {
    this.reservationsService.getReservationsById(idPatient).subscribe((response: any) => {
      console.log(response)
      this.reservationData = response;
    })
  }

  onClick(reservation: Reservation) {
    this.router.navigate(['/patient', this.idPatient, 'messages', reservation.id]);
  }
}
