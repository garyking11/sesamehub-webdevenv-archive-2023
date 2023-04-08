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
var LocationService = (function () {
    function LocationDataService(_http) {
        this._http = _http;
    }
    LocationDataService.prototype.getFormData = function (account) {
        //console.log( account);
        return this._http.get('../../../../' + account + '/www/assets/includes/data/locations-data.json');
    };
    LocationDataService.prototype.setSiteFormData = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/locations-data-endpoint.php', body, { headers: headers });
    };
    LocationDataService = __decorate([
        core_1.Injectable()
    ], LocationDataService);
    return LocationDataService;
}());
exports.LocationDataService = LocationService;
//# sourceMappingURL=location-data.service.js.map