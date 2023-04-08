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
var Rx_1 = require("rxjs/Rx");
var SiteContextProviderService = (function () {
    function SiteContextProviderService(_http) {
        this._http = _http;
        this._currentContextSubscribers = [];
    }
    SiteContextProviderService.prototype.ngOnInit = function () {
        // this.getCurrentContext();
    };
    SiteContextProviderService.prototype.getLocalDirectories = function () {
        var _this = this;
        return Rx_1.Observable.create(function (subscriber) {
            if (_this._localDirectories) {
                subscriber.next(_this._localDirectories);
                subscriber.complete();
                return;
            }
            // path is correct here
            _this._http.get('/dashboard/endpoints/get-local-directories-endpoint.php')
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this._localDirectories = data;
                // console.log('getLocalDirectories');
                subscriber.next(data);
                subscriber.complete();
            }, function (error) {
                'Error at getLocalDirectories';
                subscriber.error(error);
            });
        });
    };
    SiteContextProviderService.prototype.getCurrentContext = function () {
        var _this = this;
        return Rx_1.Observable.create(function (subscriber) {
            _this._currentContextSubscribers.push(subscriber);
            if (_this._currentContext) {
                subscriber.next(_this._currentContext);
                return;
            }
            _this._http.get('/dashboard/data/site-context.json')
                .map(function (response) { return response.json(); })
                .subscribe(function (data) {
                _this._currentContext = data;
                subscriber.next(data);
            }, function (error) {
                'Error at getCurrentContext()';
                subscriber.error(error);
            });
        });
    };
    SiteContextProviderService.prototype.setCurrentContext = function (context) {
        var _this = this;
        var siteContext = {
            'account': context.value.account,
            'product_type': context.value.product_type,
            'sm_version': context.value.sm_version,
            'data_version': context.value.data_version
        };
        var body = JSON.stringify(siteContext);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, { headers: headers }).subscribe(function (data) {
            _this._currentContext = siteContext;
            _this._currentContextSubscribers.forEach(function (subscriber) {
                subscriber.next(_this._currentContext);
            });
        }, function (error) {
            'Error at setCurrentContext()';
        });
    };
    SiteContextProviderService = __decorate([
        core_1.Injectable()
    ], SiteContextProviderService);
    return SiteContextProviderService;
}());
exports.SiteContextProviderService = SiteContextProviderService;
//# sourceMappingURL=site-context-provider.service.js.map