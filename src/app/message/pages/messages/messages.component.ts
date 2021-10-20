import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {DoctorsService} from "../../../doctor/services/doctors.service";
import {Router} from "@angular/router";
import {Message} from "../../models/message";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageData: Message;

  dataSource = new MatTableDataSource();

  constructor(private messagesService: MessagesService, private router:Router) {
    this.messageData = {} as Message;
  }

  ngOnInit(): void {
    this.getAllMessages(1);
  }

  getAllMessages(idPatient: number) {
    this.messagesService.getById(idPatient).subscribe((response: any) => {
      console.log(response)
      this.dataSource.data = response;
    })
  }
}
