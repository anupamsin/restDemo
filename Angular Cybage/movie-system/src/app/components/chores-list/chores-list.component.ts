import { Component, OnInit } from '@angular/core';
import {ChoresService} from "../../utility/chores.service";
import {Router} from "@angular/router";

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

  /*choresList:IChores[]=[
    {taskName:"Task 1",assignedDate:"20/07/2020",completionDate:"25/07/2020",createdBy:"Anupam",completedBy:"Abhi",completionTime:new Date().toLocaleTimeString()},
    {taskName:"Task 2",assignedDate:"21/07/2020",completionDate:"26/07/2020",createdBy:"Anup",completedBy:"Anupam",completionTime:new Date().toLocaleTimeString()},
    {taskName:"Task 3",assignedDate:"22/07/2020",completionDate:"27/07/2020",createdBy:"Anmol",completedBy:"Anup",completionTime:new Date().toLocaleTimeString()},
    {taskName:"Task 4",assignedDate:"23/07/2020",completionDate:"28/07/2020",createdBy:"Apurv",completedBy:"Anmol",completionTime:new Date().toLocaleTimeString()},
    {taskName:"Task 5",assignedDate:"24/07/2020",completionDate:"29/07/2020",createdBy:"Arpit",completedBy:"Apurv",completionTime:new Date().toLocaleTimeString()}
  ];*/

  choresImg:string="https://th.bing.com/th/id/OIP.L-nC-SNBexEBZD0PUdhMQAHaI9?w=173&h=209&c=7&r=0&o=5&pid=1.7";
  choress:any;
  constructor(private choresService:ChoresService,private _router:Router) { }

  ngOnInit(): void {
    this.choress=this.choresService.getChores();
  }

  navigateTo(taskName: any) {
    this._router.navigate(["/chores/" + taskName]);
  }
}
