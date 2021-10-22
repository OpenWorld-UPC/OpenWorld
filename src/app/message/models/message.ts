import {Reservation} from "../../reservation/model/reservation";

export interface Message {
  id: number;
  title: string;
  content: string;
  sentAt:string;
  idDoctor: number;
  idPatient:number;
}
