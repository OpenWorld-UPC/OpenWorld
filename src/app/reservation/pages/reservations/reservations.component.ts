import {Component, OnInit} from "@angular/core";
import {ReservationsService} from "../../services/reservations.service"
import {Reservation} from "../../model/reservation";
import {MatTableDataSource} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservationData: Reservation;
  dataSource = new MatTableDataSource();

  constructor(private reservationService: ReservationsService, private route: ActivatedRoute) {
    this.reservationData = {} as Reservation;
  }

  ngOnInit(): void {
  }

  latestDate(){
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    return today.toDateString();
  }

  dataChanged($event: any) {
    console.log($event.target.value)
    this.reservationData.meetDate = $event.target.value;
    this.reservationData.sentAt = this.latestDate();

    this.route.paramMap.subscribe((params: ParamMap) => {
      this. reservationData.idDoctor = parseInt(<string>params.get('id'));
      this. reservationData.idPatient = parseInt(<string>params.get('idPatient'));
    });

    this.reservationData.meetUrl = "https://meet.google.com/cpu-joos-dyc"
  }

  addReservation() {
    this.reservationService.create(this.reservationData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => {
        return o
      })
    })
  }

  onSubmit(){
    console.log("send")
  }
}

