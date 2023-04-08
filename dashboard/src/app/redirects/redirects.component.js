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
var RedirectsComponent = (function () {
    /**
     *
     * @param _copyDataToClipboardService
     * @param _siteContextProviderService
     * @param _redirectsService
     * @param _dataService
     * @param _dateService
     * @param _sitemapService
     * @param _fb
     */
    function RedirectsComponent(_copyDataToClipboardService, _siteContextProviderService, _redirectsService, _dataService, _fb, _customValidatorsService, _utilitiesService, _isLoadingService, prev_fb) {
        this._copyDataToClipboardService = _copyDataToClipboardService;
        this._siteContextProviderService = _siteContextProviderService;
        this._redirectsService = _redirectsService;
        this._dataService = _dataService;
        this._fb = _fb;
        this._customValidatorsService = _customValidatorsService;
        this._utilitiesService = _utilitiesService;
        this._isLoadingService = _isLoadingService;
        this.prev_fb = prev_fb;
        this.currentUrls = [];
        this.isLoading = false;
        this.contentAvailable = true;
        this.default = true;
        this.redirectsForm = new forms_1.FormGroup({ items: new forms_1.FormArray([]) });
        this.prevUrlForm = new forms_1.FormGroup({ prevItems: new forms_1.FormControl() });
        this.locUrl = 'http://garykingweb.com'; //this._siteContextProviderService.getCurrentDomainName()
        this.redirectDomainForm = new forms_1.FormGroup({
            previousdomainname: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, _customValidatorsService.protocolValidator]))
        });
    }
    RedirectsComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.default = true;
        this.contentAvailable = true;
    };
    /**
     * Get main-nav html
     * @param mainNav
     */
    RedirectsComponent.prototype.parseUrls = function (mainNav) {
        var sitemap = [];
        $('li a', mainNav).each(function () {
            sitemap.push($(this).attr('href'));
        });
        var uniqueNavItems = [];
        $.each(sitemap, function (i, el) {
            if ($.inArray(el, uniqueNavItems) === -1)
                uniqueNavItems.push(el);
        });
        sitemap = uniqueNavItems;
        return sitemap;
    };
    ;
    /**
     *
     * @param domainname
     */
    RedirectsComponent.prototype.onGetPreviousDomainUrls = function (domainname) {
        var _this = this;
        this.isLoading = true;
        this.default = true;
        this._siteContextProviderService.getCurrentContext().subscribe(function (data) {
            // Send account name to getPreviousSiteUrls
            _this.onGetUrlData(data.account, domainname);
        }, function (error) { return console.log(error); });
    };
    /**
     *
     * @param account
     * @param domainname
     */
    RedirectsComponent.prototype.onGetUrlData = function (account, domainname) {
        var _this = this;
        /**
         * Get previous site urls
         */
        this._redirectsService.getPreviousSiteUrls(domainname)
            .subscribe(function (previousUrls) {
            _this._dataService.getHubNavData(account)
                .subscribe(function (navHtml) {
                _this.currentUrls = _this.parseUrls(navHtml);
                // Create FormGroup array
                _this.prevUrlForm = _this.prev_fb.group({
                    prevItems: _this.prev_fb.array([])
                });
                var prevUrlForm = _this.prevUrlForm;
                var component = _this;
                // Create an array for the form
                collection_1.forEach(previousUrls, function (previtem) {
                    var control = prevUrlForm.controls['prevItems'];
                    control.push(component.prev_fb.group({
                        url: [previtem],
                        redirectto: ['']
                    }));
                });
                var contentAvailability = _this._isLoadingService.isLoadingContent(previousUrls);
                if (contentAvailability) {
                    _this.contentAvailable = false;
                    _this.isLoading = false;
                    _this.redirectDataMessage = 'Complete';
                    _this.default = false;
                }
                else {
                    _this.contentAvailable = true;
                    _this.isLoading = false;
                    _this.redirectDataMessage = 'No Data Available';
                    _this.default = false;
                }
                ;
            }),
                function (error) {
                    console.log(error);
                    _this.isLoading = false;
                    _this.redirectDataMessage = 'No data available! Check if is correct domain or site is live';
                };
        });
        this._dataService.getHubNavData(account)
            .subscribe(function (data) {
            // Site links pre unique filter
            var urls = _this.parseUrls(data);
            _this.redirectDataStatus = true;
            //this.redirectDataMessage = 'Enter a domain name (if site is live) or account name.';
            // Create FormGroup array
            _this.redirectsForm = _this._fb.group({
                items: _this._fb.array([])
            });
            var redirectsForm = _this.redirectsForm;
            var component = _this;
            urls.forEach(function (item) {
                var control = redirectsForm.controls['items'];
                control.push(component._fb.group({
                    redirectto: [item, forms_1.Validators.required]
                }));
            });
            _this.isLoading = false;
        }, function (error) {
            console.log(error);
            _this.isLoading = false;
            _this.redirectDataStatus = false;
            _this.redirectDataMessage = 'No data available! Correct domain (if site is live) or account name?';
        });
    };
    /**
     *
     * @param form
     */
    RedirectsComponent.prototype.onSetRedirectData = function (form) {
        var _this = this;
        this._siteContextProviderService.getCurrentContext().subscribe(function (data) {
            var redirects = {
                account: data.account,
                redirectsData: []
            };
            /**
             *
             * @type {Uint8ClampedArray|Int16Array|Uint16Array|Uint8Array|promise.Promise<any>|{url: any; redirectto: any}[]|any}
             */
            //map to objuect
            redirects.redirectsData = form.prevItems.map(function (currentValue) {
                return {
                    url: currentValue.url,
                    redirectto: currentValue.redirectto
                };
            });
            /**
             *
             * @type {any[]}
             */
            redirects.redirectsData = redirects.redirectsData.filter(function (redirect) {
                return redirect.redirectto !== null && redirect.redirectto !== '';
            });
            _this._redirectsService.setRedirectData(redirects).subscribe();
            console.log(redirects);
        }, function (error) { return console.log(error); });
    };
    /**
         * Copy to clipboard functions
         */
    RedirectsComponent.prototype.onCopyHTMLToClipboard = function () {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    };
    RedirectsComponent.prototype.onCopyCSSToClipboard = function () {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    };
    RedirectsComponent = __decorate([
        core_1.Component({
            selector: 'dev-redirects',
            templateUrl: './redirects.component.html',
            styleUrls: ['./redirects.component.css']
        })
    ], RedirectsComponent);
    return RedirectsComponent;
}());
exports.RedirectsComponent = RedirectsComponent;
//# sourceMappingURL=redirects.component.js.map