import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  emp_db_list: any;

  constructor() {
    let emp_db = localStorage.getItem('employee_db');
    this.emp_db_list = JSON.parse(emp_db ? emp_db : '[]');
    console.log(this.emp_db_list);
  }

  ngOnInit(): void {}

  onCreate(
    username: String,
    name: String,
    age: String,
    phonenumber: String,
    email: String
  ) {
    var emp_details = {
      id: Date.now(),
      username: username,
      name: name,
      age: age,
      phonenumber: phonenumber,
      email: email,
    };

    localStorage.setItem(
      'employee_db',
      JSON.stringify([...this.emp_db_list, emp_details])
    );
  }
}
