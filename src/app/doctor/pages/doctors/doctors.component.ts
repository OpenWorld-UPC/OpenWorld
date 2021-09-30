import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Doctor} from "../../models/doctor";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {DoctorsService} from "../../services/doctors.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  @ViewChild('doctorForm', {static: false})
  doctorForm!: NgForm

  doctorData: Doctor;

  dataSource = new MatTableDataSource();
  title: String = 'holaaa'

  displayedColumns: string[] = ['id', 'name', 'age'];

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator

  isEditMode = false;

  constructor(private doctorsService: DoctorsService) {
    this.doctorData = {} as Doctor;
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllDoctors();
  }

  getAllDoctors() {
    this.doctorsService.getAll().subscribe((response: any) => {
      console.log(response)
      this.dataSource.data = response;
    })
  }

  editItem(element: Doctor) {
    this.doctorData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.doctorForm.resetForm();
  }

  deleteItem(id: number) {
    this.doctorsService.delete(id).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      })
    })
    console.log(this.dataSource.data)
  }

  addStudent() {
    this.doctorsService.create(this.doctorData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map(o => {
        return o
      })
    })
  }

  updateStudent() {
    this.doctorsService.update(this.doctorData.id, this.doctorData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      })
      this.cancelEdit();
    })
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      if (this.isEditMode) {
        this.updateStudent();
      } else {
        this.addStudent()
      }
    } else {
      console.log('Invalid data')
    }
  }
}
