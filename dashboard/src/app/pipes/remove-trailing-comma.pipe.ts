import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeTrailingComma'
})
export class RemoveTrailingCommaPipe implements PipeTransform {
  transform(value:any) {
    if (value) {
      return value.replace(/,\s*$/, "");
    }
  };
}

