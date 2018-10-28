import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/employee';
// import {EMPLOYEES} from '../../model/mock-employee';
import {EmployeeService} from '../../services/employee.service';
@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {
   employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getEmployees()
    .subscribe(employees => this.employees = employees);
  }

}
