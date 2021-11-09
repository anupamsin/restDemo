import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  title:string="Movies to Watch";
  toDate=new Date();

  //movies:string[]=['The Manchurian Candidate','Oceans 8','The Incredibles','Hidden Figures'];

  moviess:Movie[]=[{id:1,category:"Nature",title:"Oceans 8",poster:"https://th.bing.com/th/id/OIP.9RAiIxkBE6VEXxKGxYi5pAHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",directorName:"directorName",releaseDate:this.toDate.toUTCString()},
  {id:2,category:"SciFi",title:"The Manchurian Candidate",poster:"https://th.bing.com/th/id/OIP.ZfNnqTKtfePC9KI6bRaM7gHaEo?w=285&h=180&c=7&r=0&o=5&pid=1.7",directorName:"directorName",releaseDate:this.toDate.toUTCString()},
  {id:3,category:"Technology",title:"Hidden Figures",poster:"https://th.bing.com/th/id/OIP.qpIoTTkOtHsGXtnpYKtsawHaEK?w=298&h=180&c=7&r=0&o=5&pid=1.7",directorName:"directorName",releaseDate:this.toDate.toUTCString()},
  {id:4,category:"Action",title:"The Incredibles",poster:"https://th.bing.com/th/id/OIP.nrxqxBxPDG7bIUmcFneljwHaEo?w=276&h=180&c=7&r=0&o=5&pid=1.7",directorName:"directorName",releaseDate:this.toDate.toUTCString()}];

  title1:string="Movies Watched";
  watchedMovies:Movie[]=[];

  onSelect(movie:Movie):void{
    this.watchedMovies.push(movie);
    this.moviess=this.moviess.filter(obj=>obj !== movie);
  }

  onSelectRemove(movie:Movie):void{
    this.moviess.push(movie);
    this.watchedMovies=this.watchedMovies.filter(obj=>obj !== movie);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
