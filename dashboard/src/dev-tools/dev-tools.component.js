"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ToolbarComponent = (function () {
    function ToolbarComponent(_resetNavHtml, _dataService) {
        this._resetNavHtml = _resetNavHtml;
        this._dataService = _dataService;
        this.siteItems = [];
    }
    // isClassVisible: false;
    ToolbarComponent.prototype.onResetNavigation = function () {
        this._resetNavHtml.resetNavBar(this.sitename)
            .subscribe(function (data) {
            window.location.reload();
        }, function (error) { return console.log(error); });
    };
    ToolbarComponent.prototype.ngOnInit = function () {
        // Keep to designate dev-tools dashboard page
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        this.onGetData();
        return this.sitename;
    };
    ToolbarComponent.prototype.onGetData = function () {
        var _this = this;
        this._dataService.getData()
            .subscribe(function (data) {
            var siteData = [];
            for (var key in data) {
                siteData.push(data[key]);
            }
            _this.siteItems = siteData;
            //console.log('app/data/data.json -- onGetData():'+ siteData);
            return _this.siteItems;
        });
    };
    ToolbarComponent.prototype.onOpenDashboard = function () {
        location.href = 'http://localhost/dashboard/#/home';
    };
    ToolbarComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'dev-tools',
            styleUrls: ['../assets/css/dev-tools.css'],
            templateUrl: 'templates/dev-tools.template.html'
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=dev-tools.component.js.map