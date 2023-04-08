//import {Control} from "@angular/common";
import {FormControl} from "@angular/forms";
export class Regex {

    /*static telephoneValidator(control: Control): { [key: string]: any } {
        if (control.value) {
            if (!control.value.match(/[-!$%^&*()_+|~=`{}\[\]:";#@'<>?,.\/]/)) {
                return null;
            }
            else {
                return { 'invalidChar': true };
            }
        }

    }*/


    static regex(pattern: any): Function {
        return (control: FormControl): {[key: string]: any} => {
            return control.value.match(pattern) ? null : {pattern: true};
        };
    }
}
