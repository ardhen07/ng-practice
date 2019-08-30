import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-emplyees',
  templateUrl: './list-emplyees.component.html',
  styleUrls: ['./list-emplyees.component.css']
})
export class ListEmplyeesComponent implements OnInit {

  employees: Employee[]=[
    {
        id: 1,
        name: "Ardhendu",
        gender: "Male",
        contactPreference: "email",
        email: "a@b.com",
        phonenumber: 12223,
        dateofBirth: new Date('01/02/1990'),
        department: "IT",
        isActive: true,
        photoPath: "assets/images/user-placeholder.jpg"
    
    },
    {
      id: 2,
      name: "Soumya",
      gender: "Male",
      contactPreference: "email",
      email: "s@b.com",
      dateofBirth: new Date('01/02/1998'),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/user-placeholder.jpg"

    }
];
  constructor() { }

  ngOnInit() {
  }

}
