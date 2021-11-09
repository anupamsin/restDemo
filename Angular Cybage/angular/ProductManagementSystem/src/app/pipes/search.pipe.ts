import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    if(!value) return null;
    if(!args) return value;
    let search=args.toLowerCase();
    return value.filter(product=>{
      let productName=product.name.toLowerCase();
      return productName.indexOf(search)!==-1;
    });
  }

}
