import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  id: any;
  constructor(private _activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      this.id=p.id;
    })
  }

}
