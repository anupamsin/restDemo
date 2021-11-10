import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search=args.toLowerCase();
    return value.filter(movie=>{
      let movieName=movie.title.toLowerCase();
      return movieName.indexOf(search)!==-1;
    });
  }

}
