import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCurlyBraceEntity'
})
export class ReplaceCurlyBraceEntityPipe implements PipeTransform {

  transform(value:any) {
    if (value) {
      return value  = value.replace(/'&#123;'/g, '{').replace(/'&#125;'/g, '}');
    }
    return value;
  }

}
