import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-movie-using-template',
  templateUrl: './add-movie-using-template.component.html',
  styleUrls: ['./add-movie-using-template.component.scss']
})
export class AddMovieUsingTemplateComponent implements OnInit {
  id: string="";
  category:string="";
  title:string="";
  poster:string="";
  directorName:string="";
  releaseDate:string="";

  movie: string[]=[
    this.id,
    this.category,
    this.title,
    this.poster,
    this.directorName,
    this.releaseDate
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}
