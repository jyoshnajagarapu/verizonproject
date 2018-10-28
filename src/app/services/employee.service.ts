import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {Employee} from '../model/employee';
import {EMPLOYEES} from '../model/mock-employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string;

  constructor() { }
  // constructor(private http: Http) {
  //   this.baseUrl = "http://localhost:5252/contacts";
  // }
  // getBaseUrlById(id: number): string {
  //   return this.baseUrl + "/" + id;
  // }
  // getJsonContentTypeHeader(): RequestOptions {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return new RequestOptions({ headers: headers });
  // }
  getEmployees(): Observable<Employee[]>{
    return of(EMPLOYEES);
    // return this.http.get(this.baseUrl).pipe(
    //   map(data => data.json())
    // );
  }
  getEmployee(id: number): Observable<Employee> {
    return of(EMPLOYEES.find(employee => employee.id === id));
    // return this.http.get(this.getBaseUrlById(id)).pipe(
    //   map(data => data.json())
    // );
  }
}
