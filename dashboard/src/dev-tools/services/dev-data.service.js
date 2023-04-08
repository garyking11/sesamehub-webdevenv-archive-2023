"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var DevDataService = (function () {
    function DevDataService(_http) {
        this._http = _http;
    }
    DevDataService.prototype.ngOnInit = function () { };
    DevDataService.prototype.getData = function () {
        var _this = this;
        var obs = this._http.get('/dashboard/data/data.json')
            .map(function (response) { return response.json(); });
        obs.subscribe(function (data) {
            _this.data = data;
            _this.account = data.account;
        }, function (error) {

        });
        return obs;
    };
    DevDataService.prototype.setSiteData = function (metadata) {
        // Also adjust onSelectSiteData site-metadata.component.ts
        var body = JSON.stringify({
            'account': metadata.value.account,
            'product_type': metadata.value.product_type,
            'sm_version': metadata.value.sm_version,
            'data_version': metadata.value.data_version
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, { headers: headers });
    };
    DevDataService = __decorate([
        core_1.Injectable()
    ], DevDataService);
    return DevDataService;
}());
exports.DevDataService = DevDataService;
//# sourceMappingURL=dev-data.service.js.map