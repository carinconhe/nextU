import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicar'
})
export class DuplicarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * 2;
  }

}
