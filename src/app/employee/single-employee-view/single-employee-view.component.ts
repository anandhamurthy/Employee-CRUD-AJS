import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-employee-view',
  templateUrl: './single-employee-view.component.html',
  styleUrls: ['./single-employee-view.component.css'],
})
export class SingleEmployeeViewComponent implements OnInit {
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
}
