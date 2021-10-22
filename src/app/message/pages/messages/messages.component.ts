import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Reservation} from "../../../reservation/model/reservation";
import {ReservationsService} from "../../../reservation/services/reservations.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  reservationData: Reservation;
  id?: number;


  constructor(private reservationsService: ReservationsService, private router: Router, private route: ActivatedRoute) {
    this.reservationData = {} as Reservation;
  }

  ngOnInit(): void {
    let auxSwitch = this.router.url.substr(1, 1);
    if (auxSwitch == 'p') {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = parseInt(<string>params.get('idPatient'));
        this.getAllMessages(this.id, 'idPatient');
      });
    } else if (auxSwitch == 'd') {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = parseInt(<string>params.get('idDoctor'));
        this.getAllMessages(this.id, 'idDoctor');
      });
    }
  }

  getAllMessages(idPatient: number, idUser: string) {
    this.reservationsService.getReservationsById(idPatient, idUser).subscribe((response: any) => {
      console.log(response)
      this.reservationData = response;
    })
  }

  onClick(reservation: Reservation) {
    let auxSwitch = this.router.url.substr(1, 1);
    if(auxSwitch == 'p'){
      this.router.navigate(['/patients', this.id, 'messages', reservation.id]);
    }else if(auxSwitch == 'd'){
      this.router.navigate(['/doctors', this.id, 'messages', reservation.id]);
    }
  }
}
