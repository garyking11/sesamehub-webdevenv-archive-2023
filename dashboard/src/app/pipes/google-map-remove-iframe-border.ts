import {PipeTransform, Pipe} from "@angular/core";
@Pipe({name: 'googleMapRemoveIframeBorder'})

export class GoogleMapRemoveIframeBorderPipe implements PipeTransform {

    transform (value:any) {
        if (!value || !value.length) { return; }
            return value.replace('frameborder="0"', ' ');
};

}