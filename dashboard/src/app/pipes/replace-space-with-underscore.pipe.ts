import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpaceWithUnderscore'
})
export class ReplaceSpaceWithUnderscorePipe implements PipeTransform {

  transform(value: string) {
    if (value) {
      return value.trim().replace(/\s+/g, '_');
    }
    return value;
  }
}
