import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {AddMovieUsingTemplateComponent} from "./components/add-movie-using-template/add-movie-using-template.component";
import {ChoresListComponent} from "./components/chores-list/chores-list.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {TaskInfoReactiveComponent} from "./components/task-info-reactive/task-info-reactive.component";
import { ChoresDetailsComponent } from './components/chores-details/chores-details.component';

const routes: Routes = [
  {path: 'movieList', component:MovieListComponent},
  {path: 'addMovie', component:AddMovieUsingTemplateComponent},
  {path: 'choresHome', component:ChoresListComponent},
  {path: 'addTask',component:TaskInfoReactiveComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'chores/:taskName',component:ChoresDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
