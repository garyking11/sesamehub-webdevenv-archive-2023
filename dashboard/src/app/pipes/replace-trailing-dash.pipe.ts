import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceTrailingDash'
})
export class ReplaceTrailingDashPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value  = value.replace(/-$/, '').trim();
    }
    return value;
  }

}