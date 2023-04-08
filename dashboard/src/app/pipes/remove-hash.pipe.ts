import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'replaceHash'})


export class ReplaceHashPipe implements PipeTransform {

    transform(value) {
        if (!value || !value.length) {
            return;
        }
        return value.replace('#', '');

    }
}