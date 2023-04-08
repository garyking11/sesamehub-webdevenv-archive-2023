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
var MeetTheTeamComponent = (function () {
    function MeetTheTeamComponent(_meetTheTeamService, _siteContextProviderService, _copyDataToClipboardService, _fb) {
        this._meetTheTeamService = _meetTheTeamService;
        this._siteContextProviderService = _siteContextProviderService;
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._fb = _fb;
        this.meetTheTeamDataArray = [];
        this.deleteConfirmationArray = [];
        this.confirm = false;
        this.cancel = false;
        this.siteData = [];
        this.meetTheTeamForm = new forms_1.FormGroup({ items: new forms_1.FormArray([]) });
    }
    /**
     *
     * @type {{value: string; display: string}[]}
     */
    MeetTheTeamComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.onGetSiteContext();
    };
    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    MeetTheTeamComponent.prototype.onGetSiteContext = function () {
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
    MeetTheTeamComponent.prototype.onGetProductType = function (account) {
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
    MeetTheTeamComponent.prototype.onGetFormData = function (account) {
        var _this = this;
        this._meetTheTeamService.getFormData(account).subscribe(function (res) {
            var data;
            try {
                data = res.json();
            }
            catch (e) {
                return;
            }
            // ../../{{sitecontext.account}}/assets/images/team/{{formDataValue.value.image}}
            _this.meetTheTeamDataArray = data.meettheteamData;
            _this.meetTheTeamForm = _this._fb.group({
                items: _this._fb.array([])
            });
            var meetTheTeamForm = _this.meetTheTeamForm;
            var component = _this;
            _this.deleteConfirmationArray = [];
            //Create an array from account form-data.json
            collection_1.forEach(data.meettheteamData, function (item) {
                var control = meetTheTeamForm.controls['items'];
                //,Validators.required
                //,this._customValidatorsService.validateEmail
                control.push(component._fb.group({
                    name: [item.name, forms_1.Validators.required],
                    bio: [item.bio],
                    position: [item.position],
                    image: [item.image],
                    alt: [item.alt],
                    imageClass: [item.imageClass]
                }));
                component.deleteConfirmationArray.push(false);
            });
        }, function (error) { return console.log(error); });
        return this.meetTheTeamDataArray;
    };
    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    MeetTheTeamComponent.prototype.onSetMemberData = function (form) {
        var meettheteamdata = {
            account: this.sitecontext.account,
            meetTheTeamData: form.value.items
        };
        // Get new values
        this._meetTheTeamService.setSiteFormData(meettheteamdata).subscribe(function (data) {
            //console.log(meettheteamdata)
        }, function (error) { return console.log(error); });
    };
    /**
     * Create Form Group
     * @returns {FormGroup}
     *
     */
    MeetTheTeamComponent.prototype.initItem = function () {
        return this._fb.group({
            name: ['', forms_1.Validators.required],
            bio: [''],
            position: [''],
            image: [''],
            alt: [''],
            imageClass: ['img-right']
        });
    };
    /**
     * Add item to the list
     */
    MeetTheTeamComponent.prototype.addItem = function () {
        var control = this.meetTheTeamForm.controls['items'];
        control.insert(0, this.initItem());
    };
    MeetTheTeamComponent.prototype.confirmDeleteMessage = function (i, el) {
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
    MeetTheTeamComponent.prototype.confirmDelete = function (i, itemVal, status) {
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
    MeetTheTeamComponent.prototype.removeItem = function (i, itemVal) {
        var control = this.meetTheTeamForm.controls['items'];
        control.removeAt(i);
        this.onSetMemberData(itemVal);
    };
    //End delete form item
    /**
     * Copy HTML/CSS markup to clipboard
     */
    MeetTheTeamComponent.prototype.onCopyHTMLToClipboard = function () {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    };
    MeetTheTeamComponent.prototype.onCopyCSSToClipboard = function () {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    };
    MeetTheTeamComponent = __decorate([
        core_1.Component({
            selector: 'dev-meet-the-team',
            templateUrl: './meet-the-team.component.html',
            styleUrls: ['./meet-the-team.component.css']
        })
    ], MeetTheTeamComponent);
    return MeetTheTeamComponent;
}());
exports.MeetTheTeamComponent = MeetTheTeamComponent;
//# sourceMappingURL=meet-the-team.component.js.map