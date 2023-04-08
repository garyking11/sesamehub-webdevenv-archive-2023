import {Injectable} from '@angular/core';

@Injectable()
export class UtilitiesService {

    constructor() {
    }

    /**
     *
     * @param field
     * @returns {RegExpMatchArray|boolean}
     */
    getFileExtension(field) {
        {
            //useage:
            /**
             *
             * @param field
             * @returns {string}
             */
            /*getFileExtension(field){
             this.ext = this._utilities.getFileExtension(field.value);
             console.log('ext: '  + this.ext);
             console.log(field.value);
             return this.ext;
             }*/

            let ext = field.match(/\.[0-9a-z]{1,5}$/i);
            /*console.log('ext: ' + ext);
            console.log(field);*/
            return ext;

        }

    }


}
