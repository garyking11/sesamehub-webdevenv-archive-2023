"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.siteItems = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        //console.log(this.sitename);
        return this.sitename;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<div class=\"container\">\n      <dev-get-hub-navigation></dev-get-hub-navigation>\n      </div>",
            styleUrls: ['../assets/css/dev-tools.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map