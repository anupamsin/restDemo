import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  msg1:string="Hi from second";

  @Input() parentNum:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
