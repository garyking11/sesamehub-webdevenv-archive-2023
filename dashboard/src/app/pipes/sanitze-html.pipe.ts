import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitzeHtml'
})
export class SanitzeHtmlPipe implements PipeTransform {

  transform(value: string): string {

    if (value) {
      return value
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
    }

    return "";
  }

}
