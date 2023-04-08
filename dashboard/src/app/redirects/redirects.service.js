"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var RedirectsService = (function () {
    function RedirectsService(_http) {
        this._http = _http;
    }
    RedirectsService.prototype.getPreviousSiteUrls = function (previousdomainname) {
        var body = JSON.stringify(previousdomainname);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/redirects/301-redirects.php', body, { headers: headers }).map(function (res) { return res.json(); });
    };
    RedirectsService.prototype.setRedirectData = function (redirects) {
        var body = JSON.stringify(redirects);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //console.log( redirects.account)
        //console.log( redirects)
        return this._http.post('/dashboard/endpoints/redirects/301-redirects-set-data.endpoint.php', body, { headers: headers });
    };
    RedirectsService = __decorate([
        core_1.Injectable()
    ], RedirectsService);
    return RedirectsService;
}());
exports.RedirectsService = RedirectsService;
//# sourceMappingURL=redirects.service.js.map