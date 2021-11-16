import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../utility/movies.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  id: any;
  constructor(private _activeRoute:ActivatedRoute,private movieService:MoviesService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(p=>{
      this.id=p.id;
    });
    this.movie=this.movieService.getMovieById(this.id);
  }

  goBack() {
      history.back();
  }
}
