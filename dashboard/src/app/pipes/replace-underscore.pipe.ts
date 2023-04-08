import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'replaceUnderscoreSpace'})

export class ReplaceUnderscoreSpace implements PipeTransform {

    transform(value: any) {
        if (value) {
            return value = value.replace(/_/g, ' ').trim();
        }
        return value;
    }

}