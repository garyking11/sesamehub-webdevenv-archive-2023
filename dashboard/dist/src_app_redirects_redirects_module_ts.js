(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_redirects_redirects_module_ts"],{

/***/ 43108:
/*!*******************************************!*\
  !*** ./src/app/pipes/remove-hash.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceHashPipe": () => (/* binding */ ReplaceHashPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceHashPipe = class ReplaceHashPipe {
  transform(value) {
    if (!value || !value.length) {
      return;
    }
    return value.replace('#', '');
  }
};
ReplaceHashPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceHash'
})], ReplaceHashPipe);


/***/ }),

/***/ 62860:
/*!**************************************************!*\
  !*** ./src/app/redirects/redirects.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectsComponent": () => (/* binding */ RedirectsComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _redirects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirects.component.html?ngResource */ 53797);
/* harmony import */ var _redirects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirects.component.css?ngResource */ 56748);
/* harmony import */ var _redirects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redirects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/custom-validators.service */ 46077);
/* harmony import */ var _services_is_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/is-loading.service */ 58229);
/* harmony import */ var _redirects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirects.service */ 76979);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let RedirectsComponent = (_class = class RedirectsComponent {
  /**
   *
   * @param _copyDataToClipboardService
   * @param _siteContextProviderService
   * @param _redirectsService
   * @param _dataService
   * @param _fb
   * @param _customValidatorsService
   * @param _isLoadingService
   * @param prev_fb
   */
  constructor(_copyDataToClipboardService, _siteContextProviderService, _redirectsService, _dataService, _fb, _customValidatorsService, _isLoadingService, prev_fb) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_redirectsService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dataService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_customValidatorsService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_isLoadingService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prev_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirectsForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prevUrlForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirectDomainForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUrls", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirectDataStatus", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirectDataMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentAvailable", true);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "locUrl", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "default", true);
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._siteContextProviderService = _siteContextProviderService;
    this._redirectsService = _redirectsService;
    this._dataService = _dataService;
    this._fb = _fb;
    this._customValidatorsService = _customValidatorsService;
    this._isLoadingService = _isLoadingService;
    this.prev_fb = prev_fb;
    this.redirectsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray([])
    });
    this.prevUrlForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      prevItems: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl()
    });
    this.locUrl = 'http://garykingweb.com'; //this._siteContextProviderService.getCurrentDomainName()
    this.redirectDomainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      previousdomainname: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _customValidatorsService.protocolValidator]))
    });
  }
  ngOnInit() {
    this.isLoading = false;
    this.default = true;
    this.contentAvailable = true;
  }
  /**
   * Get main-nav html
   * @param mainNav
   */
  parseUrls(mainNav) {
    var sitemap = [];
    $('li a', mainNav).each(function () {
      sitemap.push($(this).attr('href'));
    });
    var uniqueNavItems = [];
    $.each(sitemap, function (i, el) {
      if ($.inArray(el, uniqueNavItems) === -1) uniqueNavItems.push(el);
    });
    sitemap = uniqueNavItems;
    return sitemap;
  }
  /**
   *
   * @param domainname
   */
  onGetPreviousDomainUrls(domainname) {
    this.isLoading = true;
    this.default = true;
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.onGetUrlData(data.account, domainname);
    }, error => console.log(error));
  }
  /**
   *
   * @param account
   * @param domainname
   */
  onGetUrlData(account, domainname) {
    /**
     * Get previous site urls
     */
    this._redirectsService.getPreviousSiteUrls(domainname).subscribe(previousUrls => {
      /*this._dataService.getHubNavData(account)
          .subscribe(
              navHtml => {
                   this.currentUrls = this.parseUrls(navHtml);
                   // Create FormGroup array
                  this.prevUrlForm = this.prev_fb.group({
                      prevItems: this.prev_fb.array([])
                  });
                   var prevUrlForm = this.prevUrlForm;
                  var component = this;
                   // Create an array for the form
                  previousUrls.forEach(function (previtem) {
                       var control = <FormArray>prevUrlForm.controls['prevItems'];
                       control.push(component.prev_fb.group({
                          url: [previtem],
                          redirectto: [''],
                      }));
                  });
                   var contentAvailability = this._isLoadingService.isLoadingContent(previousUrls);
                  if (contentAvailability) {
                      this.contentAvailable = false;
                      this.isLoading = false;
                      this.redirectDataMessage = 'Complete';
                      this.default = false;
                  } else {
                      this.contentAvailable = true;
                      this.isLoading = false;
                      this.redirectDataMessage = 'No Data Available';
                      this.default = false;
                  }
               }
          ),
          error => {
              console.log(error);
              this.isLoading = false;
              this.redirectDataMessage = 'No data available! Check if is correct domain or site is live';
          };*/
    });
    /*  this._dataService.getHubNavData(account)
          .subscribe(
              data => {
                  // Site links pre unique filter
                  var urls: any[] = this.parseUrls(data);
                     this.redirectDataStatus = true;
                  //this.redirectDataMessage = 'Enter a domain name (if site is live) or account name.';
                     // Create FormGroup array
                  this.redirectsForm = this._fb.group({
                      items: this._fb.array([])
                  });
                     var redirectsForm = this.redirectsForm;
                  var component = this;
                     urls.forEach(function (item) {
                      var control = <FormArray>redirectsForm.controls['items'];
                      control.push(component._fb.group({
                          redirectto: [item, Validators.required]
                      }));
                  });
                     this.isLoading = false;
              },
              error => {
                  console.log(error);
                  this.isLoading = false;
                  this.redirectDataStatus = false;
                  this.redirectDataMessage = 'No data available! Correct domain (if site is live) or account name?';
              }
          );*/
  }
  /**
   *
   * @param form
   */
  onSetRedirectData(form) {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      var redirects = {
        account: data.account,
        redirectsData: []
      };
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
      this._redirectsService.setRedirectData(redirects).subscribe();
    }, error => console.log(error));
  }
  /**
   * Copy to clipboard functions
   * Utilities Module
   */
  onCopyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  onCopyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_7__.CopyDataToClipboardService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_8__.SiteContextProviderService
}, {
  type: _redirects_service__WEBPACK_IMPORTED_MODULE_6__.RedirectsService
}, {
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_4__.CustomValidatorsService
}, {
  type: _services_is_loading_service__WEBPACK_IMPORTED_MODULE_5__.IsLoadingService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}]), _class);
RedirectsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'dev-redirects',
  template: _redirects_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_redirects_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], RedirectsComponent);


/***/ }),

/***/ 78516:
/*!***********************************************!*\
  !*** ./src/app/redirects/redirects.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectsModule": () => (/* binding */ RedirectsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _redirects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redirects.component */ 62860);
/* harmony import */ var _redirects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirects.service */ 76979);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _redirects_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirects.routes */ 14245);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _services_is_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/is-loading.service */ 58229);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _pipes_remove_hash_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pipes/remove-hash.pipe */ 43108);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let RedirectsModule = class RedirectsModule {};
RedirectsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  providers: [_redirects_service__WEBPACK_IMPORTED_MODULE_3__.RedirectsService, _services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService, _services_is_loading_service__WEBPACK_IMPORTED_MODULE_7__.IsLoadingService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__.SharedFormattingModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_6__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_redirects_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES)],
  declarations: [_redirects_component__WEBPACK_IMPORTED_MODULE_2__.RedirectsComponent, _pipes_remove_hash_pipe__WEBPACK_IMPORTED_MODULE_9__.ReplaceHashPipe],
  exports: [_redirects_component__WEBPACK_IMPORTED_MODULE_2__.RedirectsComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.CUSTOM_ELEMENTS_SCHEMA]
})], RedirectsModule);


/***/ }),

/***/ 14245:
/*!***********************************************!*\
  !*** ./src/app/redirects/redirects.routes.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _redirects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.component */ 62860);

const ROUTES = [{
  path: '',
  component: _redirects_component__WEBPACK_IMPORTED_MODULE_0__.RedirectsComponent
}];

/***/ }),

/***/ 76979:
/*!************************************************!*\
  !*** ./src/app/redirects/redirects.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectsService": () => (/* binding */ RedirectsService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let RedirectsService = (_class = class RedirectsService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  getPreviousSiteUrls(previousdomainname) {
    const body = JSON.stringify(previousdomainname);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/redirects/301-redirects.php?v=' + new Date(), body, {
      headers: headers
    });
  }
  setRedirectData(redirects) {
    const body = JSON.stringify(redirects);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/redirects/301-redirects-set-data.endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
RedirectsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], RedirectsService);


/***/ }),

/***/ 58229:
/*!************************************************!*\
  !*** ./src/app/services/is-loading.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsLoadingService": () => (/* binding */ IsLoadingService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let IsLoadingService = (_class = class IsLoadingService {
  // Clear loading icon after process is complete

  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", false);
  }
  isLoadingContent(contentToLoad) {
    if (contentToLoad != '' || contentToLoad === null) {
      return this.isLoading = true;
    } else {
      return this.isLoading = false;
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
IsLoadingService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], IsLoadingService);


/***/ }),

/***/ 56748:
/*!**************************************************************!*\
  !*** ./src/app/redirects/redirects.component.css?ngResource ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 53797:
/*!***************************************************************!*\
  !*** ./src/app/redirects/redirects.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n\n            <h1>301 Redirects</h1>\n            <h2>Instructions</h2>\n            <div>\n                <ul>\n                    <p>Add previous url including the http:// or https://<span class=\"text-warning\"> Required</span></p>\n                    <p>Grab the and PHP on the right of the page.</p>\n                    <p>Paste it into the 301.php file in you /assets/includes directory.</p>\n                    <p>&nbsp;</p>\n                    <p class=\"text-danger\">NOTE: Some websites do not allow us to access their link via this tool. You\n                        will need to\n                        manually create the 301.php file.</p>\n                    <p class=\"text-danger\">Known bug: Remove trailing comma from php array.</p>\n                </ul>\n            </div>\n\n\n            <!-- Request previous and local urls -->\n            <form id=\"redirectDomainForm\" novalidate [formGroup]=\"redirectDomainForm\"\n                  (ngSubmit)=\"onGetPreviousDomainUrls(redirectDomainForm.value);\"\n                  class=\"sesame-light-gray rounded-top-bottom\">\n\n                <!-- buttons -->\n                <div>\n                    <button type=\"submit\" class=\"button50inline btn btn-primary\"\n                            [disabled]=\"!redirectDomainForm.valid\">\n                        Get Urls\n                    </button>\n\n                </div>\n\n                <div class=\"form-group rounded-top-bottom item5-10\">\n\n                    <div class=\"bg-info info-box-padding-rounded\">\n                        Note: <br/>Not all websites allow this form access. You may need to create your own 301.php\n                        redirect file.\n                    </div>\n\n                    <!-- messaging -->\n                    <div [ngClass]=\"{\n                    'bg-info' : default,\n                    'bg-success' : !contentAvailable,\n                    'bg-danger'  : contentAvailable && !default}\">\n                        {{redirectDataMessage}}\n                    </div>\n\n                    <div [ngClass]=\"{'hide' : !isLoading, 'show': isLoading }\">\n                        <i style=\"font-size: 1.5em; padding: 5px;\" class=\"fa fa-spinner fa-spin\" aria-hidden=\"true\"></i>\n                        Searching ... Please wait ...\n                    </div>\n\n                    <label>Previous Domain Name\n                        <span class=\"label-instructions\">http://boblaw.com (http:// required!)</span> </label>\n\n                    <input type=\"text\"\n                           class=\"form-control\"\n                           placeholder=\"Previous Domain Name\"\n                           #previousdomainname\n                           formControlName=\"previousdomainname\"\n                           name=\"previousdomainname\">\n                </div>\n\n                <div *ngIf=\"!redirectDomainForm.controls['previousdomainname'].valid\n            && ( redirectDomainForm.controls['previousdomainname'].pristine\n                && !redirectDomainForm.submitted)\"\n                     class=\"bg-danger small\">\n                    Domain Name is required<br/>\n                    'http://' or 'https://' is required\n                </div>\n\n            </form>\n            <!-- End request for previous and local urls -->\n\n            <!-- Start previous url form -->\n\n            <form id=\"prevUrlForm\" novalidate [formGroup]=\"prevUrlForm\"\n                  (ngSubmit)=\"onSetRedirectData(prevUrlForm.value);\"\n                  class=\"sesame-light-gray rounded-top-bottom\">\n\n                <!--<div>\n                    <button type=\"submit\" class=\"button50inline btn btn-primary\"\n                            [disabled]=\"!prevUrlForm.valid || !contentAvailable \">\n                        Set Redirects\n                    </button>\n                </div>-->\n\n                <div formArrayName=\"prevItems\">\n\n                    <div *ngFor=\"let previtem of prevUrlForm.controls['prevItems'].controls; let i = index; let even=even; let odd=odd;\"\n\n                         class=\"rounded-top-bottom item5-10\"\n                         [ngClass]=\"{ odd: odd, even: even }\">\n\n                        <div [formGroupName]=\"i\">\n\n                            <div class=\"form-group\">\n                                <label>Previous Site URL\n                                    <span class=\"label-instructions\">(http://yourdomainname.com)</span>\n                                </label>\n                                <input type=\"text\"\n                                       class=\"form-control\"\n                                       formControlName=\"url\"\n                                       #url\n                                       placeholder=\"URL\">\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <label>Current URL Redirect To</label>\n                                <select formControlName=\"redirectto\" #redirectto>\n                                    <option value=\"\" selected>No Redirect</option>\n                                    <option *ngFor=\"let item of currentUrls;\n                                let i = index; let even=even; let odd=odd;\"\n                                            class=\"rounded-top-bottom item5-10\"\n                                            [value]=\"item\"\n                                            [ngClass]=\"{ odd: odd, even: even }\">{{item | replaceHash}}\n                                    </option>\n                                </select>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </form>\n\n\n        </div><!-- end col -->\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n\n            <h3>Example Redirects (301.php)</h3>\n\n            <code>\n                &lt;&#36;php &#36;redirect = array(\"/plans/\" => \"/refer-a-patient\",<br/>\n                \"/patient-engagement/dental-ortho-sesame/\" => \"/office-visits\",<br/>\n                \"/index.php\" => \"/home\"<br/>\n                )<br/>\n\n                if(array_key_exists(&#36;_SERVER['REQUEST_URI'], &#36;redirect))&#123; Header( \"HTTP/1.1 301 Moved\n                Permanently\" ); Header( \"Location: \".$redirect[$_SERVER['REQUEST_URI']]); exit; &#125;<br/>\n                ?&gt;<br/>\n            </code>\n\n            <h3>Redirects</h3>\n\n            <div class=\"content-data\"\n                 *ngFor=\"let redirect of prevUrlForm.controls['prevItems'].value | keys; let i = index;\">\n\n                <div [hidden]=\"!redirect.value.redirectto\">\n\n                    <div><strong class=\"sesame-green\">Previous URL:</strong>\n                        {{redirect.value.url | addSpaceBeforeCapital |\n                        capitalize}}\n                    </div>\n\n                    <div><strong class=\"sesame-blue\">Redirects to:</strong>\n                        {{redirect.value.redirectto | addSpaceBeforeCapital |\n                        capitalize}}\n                    </div>\n\n                </div>\n\n            </div>\n\n            <h4><i style=\"cursor: pointer;\" class=\"fa fa-clipboard copy\" (click)=\"onCopyHTMLToClipboard('copy');\"\n                   data-target=\"#copy\"></i> Grab your HTML</h4>\n\n            <code id=\"copy\">\n\n                &lt;?php\n                $redirect = array( <br/><br/>\n\n                <div *ngFor=\"let markup of prevUrlForm.controls['prevItems'].value | keys; let i = index; let last = last\">\n                    <!-- <span [hidden]=\"last == false\">,</span> -->\n                    <span [hidden]=\"!markup.value.redirectto\">\n                            \"{{markup.value.url}}\" =></span>\n\n                    <span [hidden]=\"!markup.value.redirectto\">\n                        \"{{markup.value.redirectto | replaceHash}}\",<br/></span>\n\n                </div>\n\n                ); <!-- end array -->\n\n                <br/><br/>\n\n                if(array_key_exists($_SERVER['REQUEST_URI'], $redirect))&#123;\n                Header( \"HTTP/1.1 301 Moved Permanently\" );\n                Header( \"Location: \".$redirect[$_SERVER['REQUEST_URI']]);\n                exit;\n                &#125;\n                <br/><br/>\n                ?&gt;\n\n            </code>\n\n        </div><!-- end col -->\n\n    </div><!-- end row -->\n\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redirects_redirects_module_ts.js.map