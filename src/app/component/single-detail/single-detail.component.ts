import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Employee} from '../../model/employee';
// import {EMPLOYEES} from '../../model/mock-employee';
import {EmployeeService} from '../../services/employee.service';
@Component({
  selector: 'app-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrls: ['./single-detail.component.css']
})
export class SingleDetailComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
    .subscribe(employee => this.employee = employee);
  }

  goBack(): void {
    this.location.back();
  }
}
