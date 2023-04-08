"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var QuickLinksComponent = (function () {
    function QuickLinksComponent(overlay, vcRef, modal) {
        this.modal = modal;
        this.quickLinksForm = new forms_1.FormGroup({
            quicklink: new forms_1.FormControl('', [])
        });
        this.quickLinks = [
            { "url": "//dental.drsesame.com/", "display": "dental.drsesame.com" },
            { "url": "//ortho.drsesame.com/", "display": "ortho.drsesame.com" },
            { "url": "//pediatric.drsesame.com/", "display": "pediatric.drsesame.com" },
            { "url": "//sesame-perio.sesamehub.com/", "display": "sesame-perio.drsesame.com" }
        ];
        overlay.defaultViewContainer = vcRef;
    }
    QuickLinksComponent.prototype.ngOnInit = function () {
    };
    QuickLinksComponent.prototype.onGetQuickLink = function () {
        var selectedlink = this.quickLinksForm.value; // Form values
        var url = selectedlink.quicklink;
        if (url != "") {
            window.open(url, '_blank');
        }
        else {
            return false;
        }
    };
    QuickLinksComponent.prototype.onClickModal = function () {
        // useage: <button (click)="onClickModal()">Alert</button>
        this.modal.alert()
            .size('lg')
            .showClose(true)
            .title('A simple Alert style modal window')
            .body("\n            <h4>Alert is a classic (title/body/footer) 1 button modal window that \n            does not block.</h4>\n            <b>Configuration:</b>\n            <ul>\n                <li>Non blocking (click anywhere outside to dismiss)</li>\n                <li>Size large</li>\n                <li>Dismissed with default keyboard key (ESC)</li>\n                <li>Close wth button click</li>\n                <li>HTML content</li>\n            </ul>")
            .open();
    };
    QuickLinksComponent = __decorate([
        core_1.Component({
            selector: 'dev-quick-links',
            templateUrl: './quick-links.component.html',
            styleUrls: ['./quick-links.component.css']
        })
    ], QuickLinksComponent);
    return QuickLinksComponent;
}());
exports.QuickLinksComponent = QuickLinksComponent;
//# sourceMappingURL=quick-links.component.js.map