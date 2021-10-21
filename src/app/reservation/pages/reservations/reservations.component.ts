import {Component, OnInit} from "@angular/core";
import {ReservationsService} from "../../services/reservations.service"
import {Reservation} from "../../model/reservation";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservationData : Reservation;
  dataSource = new MatTableDataSource();

  constructor(private reservationService: ReservationsService) {
    this.reservationData = {} as Reservation;
  }

  ngOnInit(): void {
  }

  dateChanged($event:any) {
    console.log($event.target.value)
    this.reservationData.meetDate =  $event.target.value;
  }
  addReservation() {
    this.reservationService.create(this.reservationData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => {
        return o
      })
    })
  }
}
