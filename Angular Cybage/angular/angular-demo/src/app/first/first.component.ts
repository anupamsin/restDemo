import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  title:string="First Component"
  imageURL:string="https://www.thesprucepets.com/thmb/dpUuT_dNN7QdoSKCYfma1dSD2F8=/3264x2448/filters:fill(auto,1)/FunnyDogSmiling-ef11b73fa1834734b8c47025039fcd43.jpg"

  constructor() { }

  parentNum:number = 20;

  ngOnInit(): void {
  }

  getTitle():string{
    return this.title;
  }

}
