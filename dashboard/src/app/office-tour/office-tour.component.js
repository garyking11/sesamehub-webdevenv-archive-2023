"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var collection_1 = require("@angular/router/src/utils/collection");
var OfficeTourComponent = (function () {
    function OfficeTourComponent(_officeTourService, _siteContextProviderService, _copyDataToClipboardService, _customValidatorsService, _fb) {
        this._officeTourService = _officeTourService;
        this._siteContextProviderService = _siteContextProviderService;
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._customValidatorsService = _customValidatorsService;
        this._fb = _fb;
        this.officeTourDataArray = [];
        this.deleteConfirmationArray = [];
        this.confirm = false;
        this.cancel = false;
        this.siteData = [];
        this.officeTourForm = new forms_1.FormGroup({ items: new forms_1.FormArray([]) });
    }
    /**
     *
     * @type {{value: string; display: string}[]}
     */
    OfficeTourComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.onGetSiteContext();
    };
    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    OfficeTourComponent.prototype.onGetSiteContext = function () {
        var _this = this;
        this._siteContextProviderService.getCurrentContext().subscribe(function (data) {
            _this.sitecontext = data;
            _this.onGetFormData(data.account);
            _this.onGetProductType(data.account);
        }, function (error) { return console.log(error); });
        return this.sitecontext;
    };
    /**
     * Get local product type from /account/www/assets/includes/data/data.json
     * @param account
     */
    OfficeTourComponent.prototype.onGetProductType = function (account) {
        var _this = this;
        this._siteContextProviderService.getProductType(account)
            .subscribe(function (data) {
            var siteDataArray = [];
            for (var key in data) {
                siteDataArray.push(data[key]);
            }
            _this.siteData = siteDataArray;
        }, function (error) { return console.log(error); });
    };
    ;
    /**
     * Get current form data from selected account /www/assets/includes/data/form-data-json
     * @param account
     * @returns {any[]}
     */
    OfficeTourComponent.prototype.onGetFormData = function (account) {
        var _this = this;
        this._officeTourService.getFormData(account).subscribe(function (res) {
            var data;
            try {
                data = res.json();
            }
            catch (e) {
                return;
            }
            // ../../{{sitecontext.account}}/assets/images/team/{{formDataValue.value.image}}
            _this.officeTourDataArray = data.meettheteamData;
            _this.officeTourForm = _this._fb.group({
                items: _this._fb.array([])
            });
            var officeTourForm = _this.officeTourForm;
            var component = _this;
            _this.deleteConfirmationArray = [];
            //Create an array from account form-data.json
            collection_1.forEach(data.meettheteamData, function (item) {
                var control = officeTourForm.controls['items'];
                //,Validators.required
                //,this._customValidatorsService.validateEmail
                control.push(component._fb.group({
                    image: [item.image, [forms_1.Validators.required, this._customValidatorsService.verifyImageExtensionExists]],
                    imageAlt: [item.imageAlt],
                    imageClass: [item.imageClass]
                }));
                component.deleteConfirmationArray.push(false);
            });
        }, function (error) { return console.log(error); });
        return this.officeTourDataArray;
    };
    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    OfficeTourComponent.prototype.onSetOfficeTourData = function (form) {
        var officetourdata = {
            account: this.sitecontext.account,
            officeTourData: form.value.items
        };
        // Get new values
        this._officeTourService.setFormData(officetourdata).subscribe(function (data) {
            //console.log(officetourdata)
        }, function (error) { return console.log(error); });
    };
    /**
     * Create Form Group
     * @returns {FormGroup}
     *
     */
    OfficeTourComponent.prototype.initItem = function () {
        return this._fb.group({
            image: ['', [forms_1.Validators.required, this._customValidatorsService.verifyImageExtensionExists]],
            imageAlt: [''],
            imageClass: ['']
        });
    };
    /**
     * Add item to the list
     */
    OfficeTourComponent.prototype.addItem = function () {
        var control = this.officeTourForm.controls['items'];
        control.insert(0, this.initItem());
    };
    OfficeTourComponent.prototype.confirmDeleteMessage = function (i, el) {
        this.confirm = true;
        this.cancel = true;
        this.deleteConfirmationArray[i] = true;
    };
    /**
     * Delete form item
     * @param i
     * @param itemVal
     * @param status
     * @returns {boolean}
     */
    OfficeTourComponent.prototype.confirmDelete = function (i, itemVal, status) {
        if (status == "deleteItem") {
            this.removeItem(i, itemVal);
            this.deleteConfirmationArray[i] = false;
        }
        else if (status == 'cancelDeleteItem') {
            this.deleteConfirmationArray[i] = false;
            return false;
        }
    };
    /**
     * Remove items from the list
     * @param i
     * @param itemVal
     */
    OfficeTourComponent.prototype.removeItem = function (i, itemVal) {
        var control = this.officeTourForm.controls['items'];
        control.removeAt(i);
        this.onSetOfficeTourData(itemVal);
    };
    //End delete form item
    /**
     * Copy HTML/CSS markup to clipboard
     */
    OfficeTourComponent.prototype.onCopyHTMLToClipboard = function () {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    };
    OfficeTourComponent.prototype.onCopyCSSToClipboard = function () {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    };
    OfficeTourComponent = __decorate([
        core_1.Component({
            selector: 'dev-office-tour',
            templateUrl: './office-tour.component.html',
            styleUrls: ['./office-tour.component.css']
        })
    ], OfficeTourComponent);
    return OfficeTourComponent;
}());
exports.OfficeTourComponent = OfficeTourComponent;
//# sourceMappingURL=office-tour.component.js.map