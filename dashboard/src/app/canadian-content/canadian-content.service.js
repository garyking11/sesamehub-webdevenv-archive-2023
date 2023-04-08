"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/Rx');
var CanadianContentService = (function () {
    function CanadianContentService(_http) {
        this._http = _http;
    }
    CanadianContentService.prototype.getCanadianContent = function (data) {
        return this._http.get('/dashboard/assets/canadian-site-content/canadian-formatted/' + data.type + '/' + data.file + '.html').map(function (res) { return res.text(); });
    };
    CanadianContentService = __decorate([
        core_1.Injectable()
    ], CanadianContentService);
    return CanadianContentService;
}());
exports.CanadianContentService = CanadianContentService;
//# sourceMappingURL=canadian-content.service.js.map