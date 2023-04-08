import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addWidth'
})
export class AddWidthPipe implements PipeTransform {

  transform(value:any) {
    if (!value || !value.length) { return; }
    return value.replace('style="', 'style="width: 100%; ' );
  };

}
