import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitzeHiddenRequiredField'
})
export class SanitzeHiddenRequiredField implements PipeTransform {

  transform(value: string): string {

    if (value) {
      return value
          .replace(/\?/g, '')
          .replace(/[^\w\d\s,]/g, '')
          .trim()
    }

    return "";
  }

}
