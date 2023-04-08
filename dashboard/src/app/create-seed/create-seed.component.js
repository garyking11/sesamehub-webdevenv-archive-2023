"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var CreateSeedComponent = (function () {
    function CreateSeedComponent(_siteManagementService) {
        this._siteManagementService = _siteManagementService;
        // Create site seed form
        this.createSiteSeedForm = new forms_1.FormGroup({
            'siteSeed': new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    CreateSeedComponent.prototype.onCreateSiteSeed = function () {
        var seedname = this.createSiteSeedForm.value; // Form values
        this._siteManagementService.createSeed(seedname).subscribe(function (data) {
            console.log(seedname);
        }, function (error) { return console.log(error); });
        ;
        location.reload();
    };
    CreateSeedComponent = __decorate([
        core_1.Component({
            selector: 'dev-create-seed',
            templateUrl: './create-seed.component.html'
        })
    ], CreateSeedComponent);
    return CreateSeedComponent;
}());
exports.CreateSeedComponent = CreateSeedComponent;
//# sourceMappingURL=create-seed.component.js.map