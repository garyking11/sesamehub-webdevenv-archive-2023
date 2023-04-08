import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.split('.').slice(0, -1).join('.')

    }


  }

}
