import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'replaceDashSpace'})

export class ReplaceDashSpace implements PipeTransform {

    transform(value:any) {
        if (value) {
            return value  = value.replace(/-/g, ' ').trim();
        }
        return value;
    }

}