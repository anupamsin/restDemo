import { Injectable } from '@angular/core';
import {IChores} from "../IChores";

@Injectable({
  providedIn: 'root'
})
export class ChoresService {
  choresList:IChores[]=[
    {taskName:"Task 1",taskType:"home",taskStatus:"true",assignedBy:"Anupam",assignedTo:"Anmol",duration:new Date().toDateString()},
    {taskName:"Task 2",taskType:"daily",taskStatus:"false",assignedBy:"Anup",assignedTo:"Apurv",duration:new Date().toDateString()},
    ];

  constructor() { }

  getChores():IChores[] {
    return this.choresList;
  }

  getChoresByName(taskName: string): any {
    return this.choresList.find((chores)=>(chores.taskName.match(taskName)));
  }

  addChores(chores: IChores) {
    this.choresList.push(chores);
  }
}
