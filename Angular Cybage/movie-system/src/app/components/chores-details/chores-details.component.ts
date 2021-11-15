import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChoresService} from "../../utility/chores.service";

@Component({
  selector: 'app-chores-details',
  templateUrl: './chores-details.component.html',
  styleUrls: ['./chores-details.component.scss']
})
export class ChoresDetailsComponent implements OnInit {

  chores:any;
  taskName:any;
  constructor(private _activeRoute:ActivatedRoute, private choresService:ChoresService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(c=>{
      this.taskName = c.taskName;
    });
    this.chores = this.choresService.getChoresByName(this.taskName);
  }

}
