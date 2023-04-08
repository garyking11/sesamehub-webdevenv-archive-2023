import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLowercase'
})
export class ToLowercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.toLowerCase();
    }
    return value;
  }

}
