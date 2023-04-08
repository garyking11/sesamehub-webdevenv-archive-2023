import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimContent'
})
export class TrimContentPipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.trim();
    }
    return value;
  }

}
