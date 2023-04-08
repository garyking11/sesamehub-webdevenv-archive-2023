"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require('rxjs/Rx');
var ResetNavHtml = (function () {
    function ResetNavHtml(_http) {
        this._http = _http;
    }
    ResetNavHtml.prototype.resetNavBar = function (doctorName) {
        return this._http.get('/.well-known/.hub-navigation/' + doctorName + '/delete');
    };
    ResetNavHtml = __decorate([
        core_1.Injectable()
    ], ResetNavHtml);
    return ResetNavHtml;
}());
exports.ResetNavHtml = ResetNavHtml;
//# sourceMappingURL=dev-tools-sidebar.service.js.map