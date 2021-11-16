import { Injectable } from '@angular/core';
import {IMovie} from "../IMovie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies:IMovie[]=[{id:1,category:"Nature",title:"Oceans 8",poster:"https://th.bing.com/th/id/OIP.9RAiIxkBE6VEXxKGxYi5pAHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",directorName:"Anupam Singh",releaseDate:"23/07/2021"},
    {id:2,category:"SciFi",title:"The Manchurian Candidate",poster:"https://th.bing.com/th/id/OIP.ZfNnqTKtfePC9KI6bRaM7gHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7",directorName:"Anmol Maniyar",releaseDate:"03/07/2021"},
    {id:3,category:"Technology",title:"Hidden Figures",poster:"https://th.bing.com/th/id/OIP.qpIoTTkOtHsGXtnpYKtsawHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7",directorName:"Arpit Singh",releaseDate:"22/07/2021"},
    {id:4,category:"Action",title:"The Incredibles",poster:"https://th.bing.com/th/id/OIP.nrxqxBxPDG7bIUmcFneljwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7",directorName:"Apurv Gupta",releaseDate:"20/07/2021"}];


  constructor() { }

  getMovies():IMovie[] {
    return this.movies;
  }

  getMovieById(id: number): any {
    return this.movies.find((movie)=>(movie.id==id));
  }

  addMovie(movie: IMovie) {
    this.movies.push(movie);
  }
}
