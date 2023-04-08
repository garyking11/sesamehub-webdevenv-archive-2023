import {PipeTransform, Pipe} from '@angular/core';
@Pipe({name: 'capitalizeEachWord'})

export class CapitalizeEachWord implements PipeTransform {

    transform(value: any) {
        if (value) {
            return value.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function(letter) {
                return letter.toUpperCase(); } );
        }

        return value;
    }
}
