import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../../Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL:string = 'http://localhost:8080';
  constructor(private _http:HttpClient) { }

  getEmployees():Observable<any>{
    return this._http.get<any>(this.baseURL+"/employees");
  }

  addEmployee(emp: Employee):Observable<Employee> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this._http.post<Employee>(this.baseURL+"/employee",emp,httpOptions);
  }

  updateEmployee(emp: Employee):Observable<Employee> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this._http.put<Employee>(this.baseURL+"/employee/",emp,httpOptions);
  }

  getEmployeeById(empNo: any):Observable<Employee> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this._http.get<Employee>(this.baseURL+"/employee/"+empNo,httpOptions);
  }

  deleteEmployeeById(empNo: any):Observable<Employee>{
    const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this._http.delete<Employee>(this.baseURL+"/employee/"+empNo,httpOptions);
  }
}
