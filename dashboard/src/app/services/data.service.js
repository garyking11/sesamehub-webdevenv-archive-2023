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
var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.ngOnInit = function () {
        this.getLocalDirectories();
    };
    DataService.prototype.postData = function (data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/data-endpoint.php', body, { headers: headers });
        // removed because it was throwing unexpeted end to json file.  Likely because of an empty payload.
        // .map(response => response.json());
    };
    DataService.prototype.getData = function () {
        return this._http.get('/dashboard/data/data.json');
        //.map((response : Response) => response.json());
    };
    DataService.prototype.getHubNavData = function (doctorName) {
        return this._http.get('/.well-known/.hub-navigation/' + doctorName).map(function (response) {
            var html = response.text();
            var html_parsed = $($.parseHTML(html));
            var nav = html_parsed.filter("#main-nav");
            return nav[0].outerHTML;
        });
    };
    DataService.prototype.getLocalDirectories = function () {
        //console.log(this._http.get('../helpers.php').map(response => response.text()));
        return this._http.get('../helpers.php')
            .map(function (response) { return response.text(); });
    };
    DataService.prototype.postHubNavData = function (doctorName, html) {
        return this._http.post('/.well-known/.hub-navigation/' + doctorName + '/update', html).map(function (response) { return response.text(); });
    };
    DataService.prototype.loadStockNavData = function () {
        return this._http.get('/dashboard/app/data/stock-nav-html.html')
            .map(function (response) { return response.text(); });
    };
    DataService = __decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map