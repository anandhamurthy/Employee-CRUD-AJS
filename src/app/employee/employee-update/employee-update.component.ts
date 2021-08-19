import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  emp_db_list: any = [];
  emp_id = '';
  current_emp_details: any;
  constructor(private route: ActivatedRoute) {
    let emp_db = localStorage.getItem('employee_db');
    this.emp_db_list = JSON.parse(emp_db ? emp_db : '[]');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.emp_id = params.id;
    });

    this.current_emp_details = this.emp_db_list.find((ele: any) => {
      return ele['id'] == this.emp_id;
    });
    console.log(this.current_emp_details);
  }

  onUpdate(
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
    console.log(emp_details);

    for (let i = 0; i < this.emp_db_list.length; i++) {
      if (this.emp_db_list[i]['id'] == this.emp_id) {
        this.emp_db_list[i] = emp_details;
      }
    }

    localStorage.setItem('employee_db', JSON.stringify(this.emp_db_list));
  }
}
