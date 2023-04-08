"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var CanadianContentComponent = (function () {
    function CanadianContentComponent(_copyDataToClipboardService, _canadianContentService) {
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._canadianContentService = _canadianContentService;
    }
    /**
     * Copy HTML/CSS markup to clipboard
     */
    CanadianContentComponent.prototype.onCopyThisHTMLToClipboard = function (id) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(id);
    };
    /**
     *
     * @param type
     * @param file
     */
    CanadianContentComponent.prototype.onGetCanadianContent = function (type, file) {
        var _this = this;
        var canadiancontent = {
            type: type,
            file: file
        };
        this.pageName = canadiancontent.file;
        this.pageType = canadiancontent.type;
        this._canadianContentService.getCanadianContent(canadiancontent).subscribe(function (data) {
            _this.canadiancontent = data;
        }, function (error) { return console.log(error); });
    };
    CanadianContentComponent = __decorate([
        core_1.Component({
            selector: 'dev-canadian-content',
            templateUrl: './canadian-content.component.html',
            styleUrls: ['./canadian-content.component.css']
        })
    ], CanadianContentComponent);
    return CanadianContentComponent;
}());
exports.CanadianContentComponent = CanadianContentComponent;
//# sourceMappingURL=canadian-content.component.js.map