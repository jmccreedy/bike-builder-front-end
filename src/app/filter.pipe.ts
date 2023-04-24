import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: any) => val['part_title']['S'].toLowerCase().includes(input))
    } else {
      return value;
    }
  }

}
