import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addHyphen'
})
export class AddHyphenPipe implements PipeTransform {
  initial:string="Mr.";
  transform(value: string, ...args: string[]): string {
    // return value.replace(' ',args[0]);
    return "Mr. "+value.replace(' ',args[0]);
  }

}
