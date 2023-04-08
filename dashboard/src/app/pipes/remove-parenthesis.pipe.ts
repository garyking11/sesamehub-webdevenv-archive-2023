import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeParenthesis'
})
export class RemoveParenthesisPipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      return value.replace(/[\(\)\s+\-]/g, '');
    }
  };

}
