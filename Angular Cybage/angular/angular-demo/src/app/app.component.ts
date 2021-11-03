import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Project';
  msg = 'Anupam Singh';
  testString:string="Hello";
  sayHello(){
    alert("Clicked Successful");
  }

  showMe:boolean=true;
  showMsg:boolean=true;

  name:string[]=['anupam','anoop','anmol','apurv','ashish'];

  toDate = new Date();

  num1:number=2.8;
  num2:string="3.1";
}
