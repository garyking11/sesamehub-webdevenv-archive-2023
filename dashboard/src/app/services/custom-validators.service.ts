import {Injectable} from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable()
export class CustomValidatorsService {

    constructor() {
    }

    /**
     * Validate http/https in 301-Redirects
     * @param control
     * @returns {any}
     */
    protocolValidator(control: FormControl): {[s: string]: boolean } {
        if (!control.value.match('^(http|https)://')) {
            return {protocol: true};
        }
        return null;
    }

    validateEmail(control: FormControl): {[s: string]: boolean } {
        {
            if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return {email: true};
            }
            return null;
        }
    }

    verifyExtensionExists(control: FormControl): {[s: string]: boolean } {
        {
            if (!control.value.match(/(\.pdf|\.doc|\.html|\.htm|\.docx|\.txt|\.php|\.img|\.html|\.xml|\.xlt|\.xls)$/)) {
                return {ext: true};
            }
            return null;
        }
    }

    verifyImageExtensionExists(control: FormControl): {[s: string]: boolean } {
        //console.log(control);
        {
            if (!control.value.match(/(\.gif|\.jpg|\.jpeg|\.jif|\.jfif|\.jp2|\.jpx|\.j2k|\.j2c|\.png|\.GIF|\.JPG|\.JPEG|\.JIF|\.JFIF|\.JP2|\.JPX|\.J2K|\.J2C|\.PNG)$/)) {
                return {imgext: true};
            }
            return null;
        }
    }

}
