"use strict";
var Regex = (function () {
    function Regex() {
    }
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
    Regex.regex = function (pattern) {
        return function (control) {
            return control.value.match(pattern) ? null : { pattern: true };
        };
    };
    return Regex;
}());
exports.Regex = Regex;
//# sourceMappingURL=regex.js.map