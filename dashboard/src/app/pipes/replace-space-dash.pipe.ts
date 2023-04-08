import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'replaceSpaceDash'})

export class ReplaceSpaceDash implements PipeTransform {

    transform(value: string) {
        if (value) {
            return value.trim().replace(/\s+/g, '-');
        }
        return value;
    }

}



