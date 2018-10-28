import { Component, OnInit } from '@angular/core';
import {EmployeeRequests } from '../../model/employee-requests';
import {MOCKREQUEST} from '../../model/mock-employee-requests';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests = MOCKREQUEST;

  constructor() { }

  ngOnInit() {
  }

}
