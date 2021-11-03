import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertSpace'
})
export class ConvertSpacePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.replace(' ',args[0]);
  }

}
