import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getExtension'
})
export class GetExtensionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.split('.').pop();

    }


  }

}
