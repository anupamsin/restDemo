import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chores-list',
  templateUrl: './chores-list.component.html',
  styleUrls: ['./chores-list.component.scss']
})
export class ChoresListComponent implements OnInit {
  title:string="Yesterday's Chores";
  chores:string[]=['Empty dishwasher','Complete launch Code prep work','Buy Groceries'];
  //chores:string[]=['Empty dishwasher','Complete launch Code prep work','Buy Groceries','test'];

  title1:string="Today's Chores";
  chores1:string[]=['Load dishwasher','Finish Launch Code prep','Buy groceries u forget'];
  //chores1:string[]=['Load dishwasher','Finish Launch Code prep','Buy groceries u forget','polish your skills'];
  //chores1:string[]=[];

  title2:string="Tommorrow's Chores";
  chores2:string[]=['Empty dishwasher again','Play with launch code','Groceries Again'];

  constructor() { }

  ngOnInit(): void {
  }

}
