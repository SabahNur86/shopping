import { Pipe, PipeTransform } from '@angular/core';
import {filter} from "rxjs";

@Pipe({
  name: 'filterProductPipe'
})
export class FilterProductPipe implements PipeTransform {

  transform(value:any[], filterText:string): any[] {
    try {
      return value.filter(p => p.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
    } catch (error) {
      return value;
    }
  }
}
