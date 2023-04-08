"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(_siteContextProviderService, _siteManagementService, overlay, vcRef, modal) {
        this._siteContextProviderService = _siteContextProviderService;
        this._siteManagementService = _siteManagementService;
        this.modal = modal;
        this.localDirectories = [];
        overlay.defaultViewContainer = vcRef;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.onGetLocalDirectories();
    };
    HomeComponent.prototype.deleteSite = function (site) {
        var _this = this;
        this.modal.confirm()
            .size('sm')
            .isBlocking(false)
            .showClose(true)
            .keyboard(27)
            .title('Delete Item?')
            .body('Are you sure? \nThis will delete the entire site folder from your local server!')
            .okBtn('Yes, delete it')
            .open()
            .then(function (dialog) {
            dialog.result.then(function (ok) {
                _this._siteManagementService.deleteSiteDirectory(site);
                location.reload();
            }, function (cancelled) {
                // dialog.close();
            });
        }); // if were here ok was clicked.
    };
    HomeComponent.prototype.onGetLocalDirectories = function () {
        var _this = this;
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(function (data) {
            _this.localDirectories = data;
        }, function (error) { return console.log(error); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: './home.component.html',
            styles: ["\n        .ng-invalid {\n            border: 1px solid #ff9790;\n        }\n"]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map