import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'replaceEmailAt'})


export class ReplaceEmailAtPipe implements PipeTransform {

    transform(value) {
        if (!value || !value.length) {
            return;
        }
        return value.replace(/\@/g, '|');

    }
}