import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(status:any): string {
   if(status==0){
     return 'Sold';
   }
   return 'Unsold';
  }

}
