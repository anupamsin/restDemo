import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  template: `<h2 id="sec4">Hi from fourth component using inline template</h2>`,
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
