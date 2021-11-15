import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmployeeService} from "../../utility/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm=new FormGroup({
    empNo:new FormControl(),
    empName:new FormControl('',[Validators.required]),
    position:new FormControl('',[Validators.required]),
    salary:new FormControl('',[Validators.required]),
  });

  constructor(private _router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe((data) => console.log(data));
      alert("Employee Added Successfully");
      history.back();
    }else{
      alert("Employee Add Failed")
    }
  }
}
