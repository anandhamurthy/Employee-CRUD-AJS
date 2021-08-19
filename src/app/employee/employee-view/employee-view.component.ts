import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
})
export class EmployeeViewComponent implements OnInit {
  emp_db_list: any = [];
  constructor(private route: Router) {
    let emp_db = localStorage.getItem('employee_db');
    this.emp_db_list = JSON.parse(emp_db ? emp_db : '[]');
  }

  ngOnInit(): void {}

  openUpdate(id: Number) {
    this.route.navigateByUrl('update/' + id);
  }

  openView(id: Number) {
    this.route.navigateByUrl('view/' + id);
  }

  openCreate() {
    this.route.navigateByUrl('create');
  }

  performDelete(id: Number) {
    this.emp_db_list = this.emp_db_list.filter((ele: any) => {
      return ele.id != id;
    });

    localStorage.setItem('employee_db', JSON.stringify(this.emp_db_list));
  }
}
