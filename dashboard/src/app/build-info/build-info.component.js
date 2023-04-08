"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BuildInfoComponent = (function () {
    function BuildInfoComponent(_copyDataToClipboardService) {
        this._copyDataToClipboardService = _copyDataToClipboardService;
    }
    BuildInfoComponent.prototype.ngOnInit = function () {
    };
    /**
     * Copy HTML/CSS markup to clipboard
     */
    BuildInfoComponent.prototype.onCopyThisHTMLToClipboard = function (id) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(id);
    };
    BuildInfoComponent = __decorate([
        core_1.Component({
            selector: 'dev-build-info',
            templateUrl: './build-info.component.html',
            styleUrls: ['./build-info.component.css']
        })
    ], BuildInfoComponent);
    return BuildInfoComponent;
}());
exports.BuildInfoComponent = BuildInfoComponent;
//# sourceMappingURL=build-info.component.js.map