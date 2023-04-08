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
var LocationComponent = (function () {
    function LocationComponent(_locationsDataService, _siteContextProviderService, _copyDataToClipboardService, _fb) {
        this._locationsDataService = _locationsDataService;
        this._siteContextProviderService = _siteContextProviderService;
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._fb = _fb;
        this.locationDataArray = [];
        this.deleteConfirmationArray = [];
        this.confirm = false;
        this.cancel = false;
        this.siteData = [];
        this.hours = [
            { 'hour': 'Closed' },
            { 'hour': 'By Appointment Only' },
            { 'hour': '1' },
            { 'hour': '2' },
            { 'hour': '3' },
            { 'hour': '4' },
            { 'hour': '5' },
            { 'hour': '6' },
            { 'hour': '7' },
            { 'hour': '8' },
            { 'hour': '9' },
            { 'hour': '10' },
            { 'hour': '11' },
            { 'hour': '12' }
        ];
        this.incrementHours = [
            { 'increment': ':00' },
            { 'increment': ':15' },
            { 'increment': ':30' },
            { 'increment': ':45' }
        ];
        this.officeHours = [
            { 'weekday': 'Sunday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Monday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Tuesday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Wednesday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Thursday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Friday', 'start': 'Closed', 'end': 'Closed' },
            { 'weekday': 'Saturday', 'start': 'Closed', 'end': 'Closed' }
        ];
        this.locationDataForm = new forms_1.FormGroup({ items: new forms_1.FormArray([]) });
    }
    /**
     *
     * @type {{value: string; display: string}[]}
     */
    LocationComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.onGetSiteContext();
        //this.onGetFormData();
    };
    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    LocationComponent.prototype.onGetSiteContext = function () {
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
    LocationComponent.prototype.onGetProductType = function (account) {
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
    LocationComponent.prototype.onGetFormData = function (account) {
        var _this = this;
        this._locationsDataService.getFormData(account).subscribe(function (res) {
            var data;
            try {
                data = res.json();
            }
            catch (e) {
                return;
            }
            console.log(data);
            _this.locationDataArray = data.locationData;
            _this.locationDataForm = _this._fb.group({
                items: _this._fb.array([])
            });
            var locationDataForm = _this.locationDataForm;
            var component = _this;
            _this.deleteConfirmationArray = [];
            //Create an array from account form-data.json
            collection_1.forEach(data.locationData, function (item) {
                var control = locationDataForm.controls['items'];
                //,Validators.required
                //,this._customValidatorsService.validateEmail
                control.push(component._fb.group({
                    name: [item.name, forms_1.Validators.required],
                    doctorname1: [item.doctorname1, forms_1.Validators.required],
                    doctorname2: [item.doctorname2],
                    doctorname3: [item.doctorname3],
                    address1: [item.address1, forms_1.Validators.required],
                    address2: [item.address2],
                    city: [item.city, forms_1.Validators.required],
                    st: [item.st, forms_1.Validators.required],
                    zip: [item.zip, forms_1.Validators.required],
                    telephone: [item.telephone, forms_1.Validators.required],
                    fax: [item.fax],
                    email: [item.email],
                    emailtitle: [item.emailtitle],
                    google_map_link: [item.google_map_link],
                    google_map_embed: [item.google_map_embed],
                    comments: [item.comments],
                    image: [item.image],
                    alt: [item.alt],
                    imageClass: [item.imageClass],
                    weekday0: [item.weekday0],
                    startTime0: [item.startTime0],
                    endTime0: [item.endTime0],
                    startIncrement0: [item.startIncrement0],
                    endIncrement0: [item.endIncrement0],
                    weekday1: [item.weekday1],
                    startTime1: [item.startTime1],
                    endTime1: [item.endTime1],
                    startIncrement1: [item.startIncrement1],
                    endIncrement1: [item.endIncrement1],
                    weekday2: [item.weekday2],
                    startTime2: [item.startTime2],
                    endTime2: [item.endTime2],
                    startIncrement2: [item.startIncrement2],
                    endIncrement2: [item.endIncrement2],
                    weekday3: [item.weekday3],
                    startTime3: [item.startTime3],
                    endTime3: [item.endTime3],
                    startIncrement3: [item.startIncrement3],
                    endIncrement3: [item.endIncrement3],
                    weekday4: [item.weekday4],
                    startTime4: [item.startTime4],
                    endTime4: [item.endTime4],
                    startIncrement4: [item.startIncrement4],
                    endIncrement4: [item.endIncrement4],
                    weekday5: [item.weekday5],
                    startTime5: [item.startTime5],
                    endTime5: [item.endTime5],
                    startIncrement5: [item.startIncrement5],
                    endIncrement5: [item.endIncrement5],
                    weekday6: [item.weekday6],
                    startTime6: [item.startTime6],
                    endTime6: [item.endTime6],
                    startIncrement6: [item.startIncrement6],
                    endIncrement6: [item.endIncrement6]
                }));
                component.deleteConfirmationArray.push(false);
            });
        }, function (error) { return console.log(error); });
        return this.locationDataArray;
    };
    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    LocationComponent.prototype.onSetLocationData = function (form) {
        var locationdata = {
            account: this.sitecontext.account,
            locationData: form.value.items
        };
        // Get new values
        this._locationsDataService.setSiteFormData(locationdata).subscribe(function (data) {
        }, function (error) { return console.log(error); });
    };
    /**
     * Create Form Group
     * @returns {FormGroup}
     *
     */
    //this._customValidatorsService.validateEmail]
    LocationComponent.prototype.initItem = function () {
        return this._fb.group({
            doctorname1: ['', forms_1.Validators.required],
            doctorname2: [''],
            doctorname3: [''],
            name: ['', forms_1.Validators.required],
            address1: ['', forms_1.Validators.required],
            address2: [''],
            city: ['', forms_1.Validators.required],
            st: ['', forms_1.Validators.required],
            zip: ['', forms_1.Validators.required],
            telephone: ['', forms_1.Validators.required],
            fax: [''],
            email: [''],
            emailtitle: ['Click here to email us'],
            google_map_link: [''],
            google_map_embed: [''],
            comments: [''],
            image: [''],
            alt: [''],
            imageClass: [''],
            weekday0: [''],
            startTime0: [''],
            endTime0: [''],
            startIncrement0: [''],
            endIncrement0: [''],
            weekday1: [''],
            startTime1: [''],
            endTime1: [''],
            startIncrement1: [''],
            endIncrement1: [''],
            weekday2: [''],
            startTime2: [''],
            endTime2: [''],
            startIncrement2: [''],
            endIncrement2: [''],
            weekday3: [''],
            startTime3: [''],
            endTime3: [''],
            startIncrement3: [''],
            endIncrement3: [''],
            weekday4: [''],
            startTime4: [''],
            endTime4: [''],
            startIncrement4: [''],
            endIncrement4: [''],
            weekday5: [''],
            startTime5: [''],
            endTime5: [''],
            startIncrement5: [''],
            endIncrement5: [''],
            weekday6: [''],
            startTime6: [''],
            endTime6: [''],
            startIncrement6: [''],
            endIncrement6: ['']
        });
    };
    /**
     * Add item to the list
     */
    LocationComponent.prototype.addItem = function () {
        var control = this.locationDataForm.controls['items'];
        control.insert(0, this.initItem());
    };
    LocationComponent.prototype.confirmDeleteMessage = function (i, el) {
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
    LocationComponent.prototype.confirmDelete = function (i, itemVal, status) {
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
    LocationComponent.prototype.removeItem = function (i, itemVal) {
        var control = this.locationDataForm.controls['items'];
        control.removeAt(i);
        this.onSetLocationData(itemVal);
    };
    //End delete form item
    /**
     * Copy HTML/CSS markup to clipboard
     */
    LocationComponent.prototype.onCopyHTMLToClipboard = function () {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    };
    LocationComponent.prototype.onCopyCSSToClipboard = function () {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'dev-location',
            templateUrl: './location.component.html',
            styleUrls: ['./location.component.css']
        })
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map