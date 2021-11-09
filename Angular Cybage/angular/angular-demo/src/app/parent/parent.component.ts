import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Student} from "../../student";

@Component({
  selector: 'app-root',
  template: `
      <h1>{{parentTitle}}</h1>
      <child-one
              [ctMsg]="cityMsg"
              [ctArray]="cityArray"
              [studentAddMsg]="stdAddMsg"
              (addStudentEvent)="saveData($event)"
              (sendMsgEvent)="printMsg($event)">
      </child-one>
      <p>Name: {{stdFullName}}</p>
      <p>Message: {{msg}}</p>
      <child-two
              [studentMsg]="stdMsg"
              [stdLeader]="stdLeaderObj"
              (addNumberEvent)="printSum($event)">
      </child-two>
      <p>Sum: {{sum}}</p>
  `
})
export class ParentComponent implements OnInit,OnChanges,OnDestroy {
  parentTitle = 'Parent Component';

  //Property for child component one
  cityMsg = 'Indian City Names';
  cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
  stdAddMsg = 'Add Student';

  //Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Narendra', 'Modi');

  //Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  saveData(std: Student) {
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  printSum(res: any) {
    this.sum = res;
  }

  printMsg(msg: string) {
    this.msg = msg;
  }

  ngOnInit(): void {
    console.log("In ng init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("in ng on changes")
  }

  ngOnDestroy(): void {
    console.log("in ng destroy")
  }
}
