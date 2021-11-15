import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/utility/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  imgLink:string = 'https://th.bing.com/th/id/OIP.UFixW-hhuQ02LL8H8H_mpAHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7';
  employee: any;
  constructor(private employeeService: EmployeeService,private _router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employee = data;
      console.log(data);
    });
  }

  editEmp(empNo: any) {
    this._router.navigate(["/employee/" + empNo]);
  }

  deleteEmp(empNo: any) {
    this.employeeService.deleteEmployeeById(empNo).subscribe((data) => {console.log(data);});
    window.location.reload();
    alert("deleted successfully");
  }
}
