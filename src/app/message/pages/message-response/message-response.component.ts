import { Component, OnInit } from '@angular/core';
import {Reservation} from "../../../reservation/model/reservation";
import {ReservationsService} from "../../../reservation/services/reservations.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-message-response',
  templateUrl: './message-response.component.html',
  styleUrls: ['./message-response.component.css']
})
export class MessageResponseComponent implements OnInit {

  reservationData: Reservation;

  dataSource = new MatTableDataSource();

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

  addReservation(response: boolean) {
    this.reservationData.status = response;
    console.log(response)
    console.log(this.reservationData.id)

    this.reservationsService.update(this.reservationData.id, this.reservationData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })
    })
  }
}
