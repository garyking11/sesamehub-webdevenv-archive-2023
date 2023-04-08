import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'googleMapRemoveWidth'})

export class GoogleMapRemoveWidthPipe implements PipeTransform {

    transform (value) {
        if (!value || !value.length) { return; }
        return  value.replace('width="600"', ' ');
    };

}