import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../models/model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IProducts[], searchValue: string): IProducts[] {
    return value.filter(item => item.category.name.toLowerCase().includes(searchValue)
      || item.title.toLowerCase().includes(searchValue)
      || item.title.toLowerCase().includes(searchValue)
      || item.price === Number(searchValue));
  }

}
