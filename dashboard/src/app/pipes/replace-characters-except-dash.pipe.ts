import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCharactersExceptDash'
})
export class ReplaceCharactersExceptDashPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value  = value.replace(/[^a-zA-Z0-9]/g, '-').replace(/--/g, '-').trim();
    }
    return value;
  }

}



//var stripped = string.replace(/[^0-9\-]/g,'');
//return value  = value.replace(/[^a-zA-Z0-9]+/g, "").trim();