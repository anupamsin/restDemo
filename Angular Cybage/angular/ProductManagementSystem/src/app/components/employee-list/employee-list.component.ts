import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/utility/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  imgLink:string = 'https://th.bing.com/th/id/OIP.UFixW-hhuQ02LL8H8H_mpAHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7';
  employee: any;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employee = data;
      console.log(data);
    });
  }

}
