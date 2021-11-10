import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  title:string="Favourite Links";
  links:string[]=['My Google','My Gmail','My Yahoo'];
  linksWork:string[]=['google.com','gmail.com','yahoo.com'];
  constructor() { }

  ngOnInit(): void {
  }

}
