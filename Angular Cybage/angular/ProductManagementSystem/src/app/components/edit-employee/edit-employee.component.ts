import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { EmployeeService } from 'src/app/utility/employee.service';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  empNo: any;
  employee: any;
  empName:any;
  position:any;
  salary:any;
  employeeForm: any;

  constructor(private _activeRoute:ActivatedRoute,private employeeService:EmployeeService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      this.empNo=p.empNo;
    });
    this.employeeService.getEmployeeById(this.empNo).subscribe((data) => {
      console.log(data);
      this.employee = data;
      this.empName=this.employee.empName;
      this.position=this.employee.position;
      this.salary=this.employee.salary;
      console.log(this.employee);

      this.employeeForm= this.formBuilder.group({
        empNo:[this.empNo],
        empName:[this.empName],
        position:[this.position],
        salary:[this.salary],
      });
    });
  }


  onSubmit() {
    if(this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.employeeForm.value).subscribe((data) => console.log(data));
      alert("Employee Added Successfully");
      history.back();
    }else{
      alert("Employee Add Failed")
    }
  }

  goBack() {
    history.back();
  }
}
