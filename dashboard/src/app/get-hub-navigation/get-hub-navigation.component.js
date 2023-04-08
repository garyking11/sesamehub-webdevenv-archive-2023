"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var GetHubNavigationComponent = (function () {
    function GetHubNavigationComponent(_dataService) {
        this._dataService = _dataService;
    }
    GetHubNavigationComponent.prototype.onHubPost = function (hub_navigation, sitename) {
        this._dataService.postHubNavData(sitename, hub_navigation)
            .subscribe(function (data) {
            console.log(data);
            window.location.reload();
        }, function (error) { return console.log(error); });
    };
    ;
    GetHubNavigationComponent.prototype.getHubNavData = function () {
        var _this = this;
        this._dataService.getHubNavData(this.sitename)
            .subscribe(function (data) {
            _this.response = data;
        }, function (error) { return console.log(error); });
    };
    GetHubNavigationComponent.prototype.ngOnInit = function () {
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        var sitename = this.sitename;
        return sitename;
    };
    GetHubNavigationComponent.prototype.getStockNavData = function () {
        var _this = this;
        this._dataService.loadStockNavData()
            .subscribe(function (data) {
            _this.response = data;
        }, function (error) { return console.log(error); });
    };
    GetHubNavigationComponent = __decorate([
        core_1.Component({
            selector: 'dev-get-hub-navigation',
            template: "\n    \n    <div id=\"dev-dashboard\" class=\"container\">\n        \n        <div class=\"col span6 offset3\">\n                 \n            <div id=\"dev-set-navigation\" class=\"row\" [ngClass]=\"{'hide': sitename == 'dashboard'}\">\n                \n                <div class=\"col span6 offset3 \">\n                         \n                    <div class=\"form-group\">                                   \n                        <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\" (click)=\"getHubNavData(sitename)\">Get HUB #main-nav </button>\n                        <button id=\"getStockNavData\" class=\"btn btn-small button button-medium site-button-color box-round box-shadow\" (click)=\"getStockNavData()\">Get STOCK #main-nav</button>\n                        <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\" (click)=\"onHubPost(response, sitename)\">Apply</button>                \n                    </div>              \n                                                                 \n                    <div class=\"form-group\" style=\"background-color: #0099cc;  line-height:2em;\">\n                        <label style=\"color: #fff; \">{{ sitename }}</label>\n                        <textarea id=\"hub_navigation\" name=\"navigation\" class=\"form-control\" [(ngModel)]=\"response\" #hub_navigation></textarea>\n                    </div>\n                                             \n                </div>\n            \n            </div>   \n                      \n        </div>\n                 \n    </div>"
        })
    ], GetHubNavigationComponent);
    return GetHubNavigationComponent;
}());
exports.GetHubNavigationComponent = GetHubNavigationComponent;
//# sourceMappingURL=get-hub-navigation.component.js.map