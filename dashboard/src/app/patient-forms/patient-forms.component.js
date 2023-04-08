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
var PatientFormsComponent = (function () {
    function PatientFormsComponent(_patientFormsService, _siteContextProviderService, _copyDataToClipboardService, _customValidatorService, _fb) {
        this._patientFormsService = _patientFormsService;
        this._siteContextProviderService = _siteContextProviderService;
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._customValidatorService = _customValidatorService;
        this._fb = _fb;
        this.patientFormsDataArray = [];
        this.deleteConfirmationArray = [];
        this.confirm = false;
        this.cancel = false;
        this.siteData = [];
        this.patientFormsForm = new forms_1.FormGroup({ items: new forms_1.FormArray([]) });
    }
    /**
     *
     * @type {{value: string; display: string}[]}
     */
    PatientFormsComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.onGetSiteContext();
    };
    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    PatientFormsComponent.prototype.onGetSiteContext = function () {
        var _this = this;
        this._siteContextProviderService.getCurrentContext().subscribe(function (data) {
            _this.sitecontext = data;
            // Send account name to onGetLocalFormData
            _this.onGetFormData(data.account);
            _this.onGetProductType(data.account);
        }, function (error) { return console.log(error); });
        return this.sitecontext;
    };
    /**
     * Get local product type from /account/www/assets/includes/data/data.json
     * @param account
     */
    PatientFormsComponent.prototype.onGetProductType = function (account) {
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
    PatientFormsComponent.prototype.onGetFormData = function (account) {
        var _this = this;
        this._patientFormsService.getFormData(account).subscribe(function (res) {
            var data;
            try {
                data = res.json();
            }
            catch (e) {
                return;
            }
            _this.patientFormsDataArray = data.patientformsData;
            _this.patientFormsForm = _this._fb.group({
                items: _this._fb.array([])
            });
            var patientFormsForm = _this.patientFormsForm;
            var component = _this;
            _this.deleteConfirmationArray = [];
            //Create an array from account form-data.json
            collection_1.forEach(data.patientformsData, function (item) {
                var control = patientFormsForm.controls['items'];
                //,Validators.required
                //,this._customValidatorsService.validateEmail
                control.push(component._fb.group({
                    name: [item.name, forms_1.Validators.required],
                    url: [item.url, this._customValidatorService.verifyExtensionExists]
                }));
                //, this._customValidatorService.verifyExtensionExists
                component.deleteConfirmationArray.push(false);
            });
        }, function (error) { return console.log(error); });
        return this.patientFormsDataArray;
    };
    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    PatientFormsComponent.prototype.onSetPatientFormData = function (form) {
        var patientformsdata = {
            account: this.sitecontext.account,
            patientFormsData: form.value.items
        };
        // Get new values
        this._patientFormsService.setFormData(patientformsdata).subscribe(function (data) {
            //console.log(patientformsdata)
        }, function (error) { return console.log(error); });
    };
    /**
     * Create Form Group
     * @returns {FormGroup}
     *
     */
    PatientFormsComponent.prototype.initItem = function () {
        return this._fb.group({
            name: ['', forms_1.Validators.required],
            url: ['', this._customValidatorService.verifyExtensionExists]
        });
    };
    //, this._customValidatorService.verifyExtensionExists
    /**
     * Add item to the list
     */
    PatientFormsComponent.prototype.addItem = function () {
        var control = this.patientFormsForm.controls['items'];
        control.insert(0, this.initItem());
    };
    PatientFormsComponent.prototype.confirmDeleteMessage = function (i, el) {
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
    PatientFormsComponent.prototype.confirmDelete = function (i, itemVal, status) {
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
    PatientFormsComponent.prototype.removeItem = function (i, itemVal) {
        var control = this.patientFormsForm.controls['items'];
        control.removeAt(i);
        this.onSetPatientFormData(itemVal);
    };
    //End delete form item
    /**
     * Copy HTML/CSS markup to clipboard
     */
    PatientFormsComponent.prototype.onCopyHTMLToClipboard = function () {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    };
    PatientFormsComponent.prototype.onCopyCSSToClipboard = function () {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    };
    PatientFormsComponent = __decorate([
        core_1.Component({
            selector: 'dev-patient-forms',
            templateUrl: './patient-forms.component.html',
            styleUrls: ['./patient-forms.component.css']
        })
    ], PatientFormsComponent);
    return PatientFormsComponent;
}());
exports.PatientFormsComponent = PatientFormsComponent;
//# sourceMappingURL=patient-forms.component.js.map