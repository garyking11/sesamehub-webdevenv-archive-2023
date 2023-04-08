(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_sections_sections_module_ts"],{

/***/ 87210:
/*!*************************************************************!*\
  !*** ./src/app/get-hub-data/get-hub-data-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetHubDataRoutingModule": () => (/* binding */ GetHubDataRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const routes = [];
let GetHubDataRoutingModule = class GetHubDataRoutingModule {};
GetHubDataRoutingModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
})], GetHubDataRoutingModule);


/***/ }),

/***/ 54944:
/*!********************************************************!*\
  !*** ./src/app/get-hub-data/get-hub-data.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetHubDataComponent": () => (/* binding */ GetHubDataComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _get_hub_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-hub-data.component.html?ngResource */ 18750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 52468);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let GetHubDataComponent = (_class = class GetHubDataComponent {
  constructor(_dataService, _siteContextProviderService, _snackBarService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dataService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitename", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sm_version", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builder", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "response", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "success", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getHubNavShowHide", 'hide');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getWelTextShowHide", 'show');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "welcomeDisabled", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navResponse", new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hub_navigation", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nResponse", void 0);
    this._dataService = _dataService;
    this._siteContextProviderService = _siteContextProviderService;
    this._snackBarService = _snackBarService;
  }
  ngOnInit() {
    this.getSiteContext();
    this.account = this.sitecontext;
    const sitename = this.account;
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  // SHOULD BE CONVERTED TO INTERFACE EVENTUALLY
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(context => {
      this.sitecontext = context.account;
      this.account = context.account;
      this.sm_version = context.sm_version;
      this.builder = context.builder;
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Post Welcome Text to Application.php via data.service
   * @param hub_welcome_text
   */
  welcomeTextPost(hub_welcome_text, sitename) {
    this._dataService.postWelcomeTextData(sitename, hub_welcome_text).subscribe(data => {
      if (this.response === undefined) {
        console.log('Welcome text required');
        this.getHubNavShowHide = 'hide';
        this.getWelTextShowHide = 'show';
        return;
      } else {
        this.getHubNavShowHide = 'show';
        this.getWelTextShowHide = 'hide';
        this.welcomeDisabled = false;
        this._snackBarService.openSnackBar('Your welcome text has been applied!', '');
      }
    }, error => console.log(error));
  }
  /**
   * Get actual welcome text from hub
   */
  getWelcomeTextData() {
    this._dataService.getWelcomeTextData(this.account).subscribe(data => {
      this.response = data;
    }, error => console.log(error));
  }
  /**
   * Get pseudo navigation from /dev
   */
  getStockWelcomeData() {
    this._dataService.loadWelcomeTextData().subscribe(data => {
      this.response = data;
    }, error => console.log(error));
  }
  /**
   * Get actual navigation from sesamehub.com
   */
  getHubNavData() {
    this._dataService.getHubNavData(this.account).subscribe(data => {
      this.nResponse = data;
    }, error => console.log(error));
  }
  /**
   * Get stock navigation from /dev
   */
  getStockNavData() {
    this._dataService.loadStockNavData().subscribe(data => {
      this.nResponse = data;
    }, error => console.log(error));
  }
  /**
   * Set data into page (layout.php) via app.component
   * @param hub_navigation
   * @param sitename
   */
  onHubPost(hub_navigation, sitename) {
    this._dataService.postHubNavData(sitename, hub_navigation).subscribe(data => {
      if (this.nResponse === undefined) {
        console.log('Please enter a value');
        return;
      }
      this._snackBarService.openSnackBar('Your hub navigation has been applied!', '');
      // reload the page
      location.reload();
      // repopulate with no values
      this.nResponse = '';
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  sitename: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  navResponse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
}), _class);
GetHubDataComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-get-hub-data',
  template: _get_hub_data_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], GetHubDataComponent);


/***/ }),

/***/ 86329:
/*!*****************************************************!*\
  !*** ./src/app/get-hub-data/get-hub-data.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetHubDataModule": () => (/* binding */ GetHubDataModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _get_hub_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-hub-data-routing.module */ 87210);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let GetHubDataModule = class GetHubDataModule {};
GetHubDataModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _get_hub_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.GetHubDataRoutingModule
  // MatSnackBarModule
  ],

  declarations: []
})], GetHubDataModule);


/***/ }),

/***/ 81632:
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsComponent": () => (/* binding */ SectionsComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _sections_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections.component.html?ngResource */ 82134);
/* harmony import */ var _sections_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections.component.css?ngResource */ 13845);
/* harmony import */ var _sections_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sections_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections.service */ 75639);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/filter */ 31796);
/* harmony import */ var rxjs_add_operator_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/find */ 43109);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import {Router} from '@angular/router';




/*
GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS
1. CONTENT IS REQUIRED
2. ONLY SPOTLIGHT DUPLICATES ALLOWED
3. UPDATE VALUES FROM SUBITEMS
4. VALDIATION MESSAGE


Some of this was working prior to the current error
*/
let SectionsComponent = (_class = class SectionsComponent {
  // interface

  // PROBLEMATIC as there are no more controls ////////////////////////////

  // layout_styles

  // slideshow layout array

  // spotlight array

  // testimonialRotator array

  // assnLogos array

  // subnavOptions array not used

  // navOptions array

  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * Check for duplicates and return if there are duplicates
   * @type {boolean}
   */

  /**
   * Main level section types array
   * @type {{value: string; display: string}[]}
   */

  /**
   *
   * @param _sectionsService
   * @param _siteContextProviderService
   * @param _copyDataToClipboardService
   * @param _showHideContent
   * @param _fb
   * @param _compiler
   */
  constructor(_sectionsService, _siteContextProviderService, _copyDataToClipboardService,
  // private _showHideContent: ShowHideContentService,
  // public selectedContentValue,
  // public _adminService: AdminService,
  // private router: Router,
  _snackBarService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_sectionsService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sectionSaveBtn", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "secInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sectionDataForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sectionDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Hero", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Services", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Content", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Maps", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Association_Logos", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "Testimonial_Rotator", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "os", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "admindata", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buildkitversion", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navOptions", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subnavOptions", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sm_version", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builder", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gacode", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "launchUrl", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedHeroValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedSpotlightValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedTestimonialValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedAssociationLogoValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "invalidControls", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "contentLayoutArray", [{
      value: 'content-top-oriented-subnav',
      display: 'Top Subnav'
    }, {
      value: 'content-side-oriented-subnav',
      display: 'Side Subnav'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slideshowLayoutArray", [{
      value: 'classic',
      display: 'Classic'
    }, {
      value: 'video',
      display: 'Video'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "spotlightLayoutArray", [{
      value: 'spotlight-one-horizontal',
      display: 'Spotlight One Horizontal'
    }, {
      value: 'spotlight-two-horizontal',
      display: 'Spotlight Two Horizontal'
    }, {
      value: 'spotlight-three-horizontal',
      display: 'Spotlight Three Horizontal'
    }, {
      value: 'spotlight-four-horizontal',
      display: 'Spotlight Four Horizontal'
    }, {
      value: 'spotlight-five-horizontal',
      display: 'Spotlight Five Horizontal'
    }, {
      value: 'spotlight-column-img-left',
      display: 'Image Left '
    }, {
      value: 'spotlight-column-img-right',
      display: 'Image Right '
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "testimoniaRotatorLayoutArray", [{
      value: 'testimonials',
      display: 'Testimonials'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "assnLogosLayoutArray", [{
      value: 'association-logos',
      display: ' '
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "subnavOptionsArray", [{
      value: 'top',
      display: 'Page Top'
    }, {
      value: 'side',
      display: 'Page Side'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navOptionsArray", [{
      value: 'standard',
      display: 'Page Top'
    }, {
      value: 'fullmob',
      display: 'Full Mobile'
    }, {
      value: 'tertiary',
      display: 'Page Top Tertiary'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hasDuplicates", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "missingContent", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dupeArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "duplicateSectionArray", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sectionTypes", [{
      value: 'Hero',
      display: 'Hero',
      name: 'Hero'
    }, {
      value: 'Content',
      display: 'Content',
      name: 'content'
    }, {
      value: 'Spotlight',
      display: 'Spotlight',
      name: 'Spotlight'
    }, {
      value: 'Testimonial_Rotator',
      display: 'Testimonial Rotator',
      name: 'Testimonial Rotator'
    }, {
      value: 'Association_Logos',
      display: 'Association Logos',
      name: 'Association Logos'
    }]);
    this._sectionsService = _sectionsService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._snackBarService = _snackBarService;
  }
  /**
   *
   * @type {{value: string; display: string}[]}
   */
  ngOnInit() {
    this.getSiteContext();
    // this.getFormData(null);
    // this.getAdminData();
    this.getCreateBuildkitValues();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.secInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(this.secInterface.formData, event.previousIndex, event.currentIndex);
  }
  /*getAdminData() {
      this._adminService.getFormData().subscribe(
          data => {
              this.admindata = data.adminData;
              this.buildkitversion = this.admindata[0].version;
              // console.log(this.buildkitversion);
          }
      );
  }*/
  /**
   * Update child components (notify)="onNotify($event)"
   */
  onNotify() {
    // this.sectionDataForm.controls['items'].updateValueAndValidity();
  }
  /**
   * Oad component into sections component
   * @param comp
   */
  loadComp(comp) {
    return comp;
  }
  /**
   * Show hide content areas within forms
   * @param item
   */
  showHide(item) {
    // this._showHideContent.showHideContent(item);
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  // SHOULD BE CONVERTED TO INTERFACE EVENTUALLY
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(context => {
      this.sitecontext = context;
      this.account = context.account;
      this.sm_version = context.sm_version;
      this.builder = context.builder;
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get current form data from selected account /www/assets/includes/data/form-data-json
   * @param account
   * @returns {any[]}
   */
  getCreateBuildkitValues() {
    this._sectionsService.getSectionsValues().subscribe({
      next: secInterface => {
        this.secInterface = secInterface;
      }
    });
  }
  /**
   * Clear all spotlights
   */
  clearComponents() {
    function isContentName(element, index, array) {
      return element >= 10;
    }
    let contentSection = [].filter(isContentName);
    let formdata = {
      account: this.sitecontext.account,
      formData: [{
        name: '',
        spotlight_layout_style: '',
        slideshow_layout_style: '',
        content_layout_style: '',
        testimonial_rotator_layout_style: 'testimonials',
        spotlight_flip_layout_style: '',
        assn_logo_layout_style: 'association-logos'
      }]
    };
    this._sectionsService.setBuildkitValues(formdata).subscribe(data => {}, error => console.log(error));
    this._snackBarService.openSnackBar('Your spotlights have been cleared and saved!', '');
    location.reload();
  }
  /**
   * Save buildkit component values
   * @param form
   */
  saveBuildkitValues() {
    const form = this.secInterface;
    let ctrl = this;
    let valueArr = this.secInterface.formData.map(function (item) {
      console.log(item.name);
      return item.name;
    });
    /**
     * Allow spotlight duplicates
     */
    // PROBLEMATIC  ctrl ///////////////////////////
    /*ctrl.duplicateSectionArray = valueArr;
    let isDuplicate = ctrl.duplicateSectionArray.some(function (item, idx) {
         return valueArr.indexOf(item) !== idx && item !== 'Spotlight';
    });
     if (this.missingContent) {
        return;
    }
     if (this.hasDuplicates) {
        return
    }*/
    let formdata = {
      account: this.sitecontext.account,
      sm_version: this.sitecontext.sm_version,
      navOptions: this.secInterface.navOptions,
      subnavOptions: this.secInterface.subnavOptions,
      tagline: this.secInterface.tagline,
      gacode: this.secInterface.gacode,
      formData: this.secInterface.formData
    };
    this._sectionsService.setBuildkitValues(formdata).subscribe(data => {}, error => console.log(error));
    this._snackBarService.openSnackBar('Your project has been saved!', '');
    this.launchBuildkitTemplate();
  }
  /**
   * get OS
   */
  launchBuildkitTemplate() {
    this.os = this._siteContextProviderService.getOS();
    console.log(this.os);
    // launch account-name buildkit
    if (this.os === 'OSX') {
      console.log(this.os);
      this.launchUrl = 'http://localhost:8888/' + this.account + '/#/';
      window.open(this.launchUrl, '_blank');
    }
    if (this.os === 'PC') {
      console.log(this.os);
      this.launchUrl = 'http://localhost/' + this.account + '/#/';
      window.open(this.launchUrl, '_blank');
    }
  }
  /**
   * Add item to the list
   */
  addItem() {
    const i = 0;
    this.secInterface?.formData.push({
      name: '',
      spotlight_layout_style: '',
      slideshow_layout_style: '',
      content_layout_style: '',
      testimonial_rotator_layout_style: 'testimonials',
      spotlight_flip_layout_style: '',
      assn_logo_layout_style: 'association-logos'
    });
  }
  /**
   * Remove items from the list
   * @param i
   * @param itemVal
   */
  removeItem(index) {
    this.secInterface?.formData.splice(index, 1);
  }
  /**
   *
   * Add testimonials to allowed multiple selections
   */
  getAvailableTypes() {
    const used = this.secInterface.formData.filter(i => i.name !== 'Spotlight' && i.name !== 'Testimonial_Rotator');
    return ['Spotlight', 'Hero', 'Content', 'Testimonial_Rotator', 'Association_Logos'].filter(i => !used.some(s => s.name === i));
  }
  isContentSectionAdded() {
    return this.secInterface.formData.some(i => i.name === 'Content');
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _sections_service__WEBPACK_IMPORTED_MODULE_5__.SectionsService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__.CopyDataToClipboardService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  sectionSaveBtn: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ['sectionSaveBtn', {
      static: false
    }]
  }]
}), _class);
SectionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'dev-sections',
  template: _sections_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_sections_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SectionsComponent);


/***/ }),

/***/ 54065:
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsModule": () => (/* binding */ SectionsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections.component */ 81632);
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections.service */ 75639);
/* harmony import */ var _sections_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections.routes */ 71273);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../subnav/subnav.module */ 9863);
/* harmony import */ var _get_hub_data_get_hub_data_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../get-hub-data/get-hub-data.module */ 86329);
/* harmony import */ var _get_hub_data_get_hub_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../get-hub-data/get-hub-data.component */ 54944);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _resources_resources_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resources/resources.module */ 93882);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























let SectionsModule = class SectionsModule {};
SectionsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  providers: [_sections_service__WEBPACK_IMPORTED_MODULE_4__.SectionsService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_6__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(_sections_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES), _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_8__.SubnavModule, _get_hub_data_get_hub_data_module__WEBPACK_IMPORTED_MODULE_9__.GetHubDataModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_24__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_29__.MatListModule, _resources_resources_module__WEBPACK_IMPORTED_MODULE_12__.ResourcesModule],
  declarations: [_sections_component__WEBPACK_IMPORTED_MODULE_3__.SectionsComponent, _get_hub_data_get_hub_data_component__WEBPACK_IMPORTED_MODULE_10__.GetHubDataComponent],
  exports: [_sections_component__WEBPACK_IMPORTED_MODULE_3__.SectionsComponent, _get_hub_data_get_hub_data_component__WEBPACK_IMPORTED_MODULE_10__.GetHubDataComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.CUSTOM_ELEMENTS_SCHEMA]
})], SectionsModule);


/***/ }),

/***/ 71273:
/*!*********************************************!*\
  !*** ./src/app/sections/sections.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections.component */ 81632);

const ROUTES = [{
  path: '',
  component: _sections_component__WEBPACK_IMPORTED_MODULE_0__.SectionsComponent
}];

/***/ }),

/***/ 75639:
/*!**********************************************!*\
  !*** ./src/app/sections/sections.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsService": () => (/* binding */ SectionsService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SectionsService = (_class = class SectionsService {
  constructor(_httpClient, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentContextSubscribers", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getLocalDirectoriesError", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buildkitResourcesDirectories", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    this._httpClient = _httpClient;
    this._siteContextProviderService = _siteContextProviderService;
  }
  ngOnInit() {
    // this._siteContextProviderService.getCurrentContext().subscribe();
    // console.log(console.log(this._currentContext.account));
  }
  /**
   *
   * @param data
   * @returns {Observable<Response>}
   */
  setBuildkitValues(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/sections-data-endpoint.php', body, {
      headers: headers
    });
  }
  /**
   *
   * @returns {Observable<Response>}
   */
  getData(account) {
    return this._httpClient.get('/dashboard/data/markup-data.json?v=' + new Date());
  }
  getSectionsValues() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
      this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
        const path = `/dashboard/data/markup-data.json?v=${new Date()}`;
        return this._httpClient.get(path).subscribe(sections => {
          subscriber.next(sections);
        });
      });
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}]), _class);
SectionsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], SectionsService);


/***/ }),

/***/ 22782:
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/filter.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var rxjs_1 = __webpack_require__(/*! rxjs */ 25906);
var filter_1 = __webpack_require__(/*! ../../operator/filter */ 76145);
rxjs_1.Observable.prototype.filter = filter_1.filter;

/***/ }),

/***/ 52069:
/*!*******************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/find.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var rxjs_1 = __webpack_require__(/*! rxjs */ 25906);
var find_1 = __webpack_require__(/*! ../../operator/find */ 82913);
rxjs_1.Observable.prototype.find = find_1.find;

/***/ }),

/***/ 76145:
/*!*****************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/filter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var operators_1 = __webpack_require__(/*! rxjs/operators */ 26370);
/* tslint:enable:max-line-length */
/**
 * Filter items emitted by the source Observable by only emitting those that
 * satisfy a specified predicate.
 *
 * <span class="informal">Like
 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
 * it only emits a value from the source if it passes a criterion function.</span>
 *
 * <img src="./img/filter.png" width="100%">
 *
 * Similar to the well-known `Array.prototype.filter` method, this operator
 * takes values from the source Observable, passes them through a `predicate`
 * function and only emits those values that yielded `true`.
 *
 * @example <caption>Emit only click events whose target was a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
 * clicksOnDivs.subscribe(x => console.log(x));
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 * @see {@link ignoreElements}
 * @see {@link partition}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted, if `false` the value is not passed to the output
 * Observable. The `index` parameter is the number `i` for the i-th source
 * emission that has happened since the subscription, starting from the number
 * `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of values from the source that were
 * allowed by the `predicate` function.
 * @method filter
 * @owner Observable
 */
function filter(predicate, thisArg) {
  return operators_1.filter(predicate, thisArg)(this);
}
exports.filter = filter;

/***/ }),

/***/ 82913:
/*!***************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/find.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var operators_1 = __webpack_require__(/*! rxjs/operators */ 26370);
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
  return operators_1.find(predicate, thisArg)(this);
}
exports.find = find;

/***/ }),

/***/ 31796:
/*!**************************************************!*\
  !*** ./node_modules/rxjs/add/operator/filter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! rxjs-compat/add/operator/filter */ 22782);

/***/ }),

/***/ 43109:
/*!************************************************!*\
  !*** ./node_modules/rxjs/add/operator/find.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! rxjs-compat/add/operator/find */ 52069);

/***/ }),

/***/ 13845:
/*!************************************************************!*\
  !*** ./src/app/sections/sections.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h3 a.support-link {\n    color: #be9a00;\n    text-decoration: none;\n\n}\n\nh3 a.support-link:hover {\n    color: #0099cc!important;\n }", "",{"version":3,"sources":["webpack://./src/app/sections/sections.component.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,qBAAqB;;AAEzB;;AAEA;IACI,wBAAwB;CAC3B","sourcesContent":["h3 a.support-link {\n    color: #be9a00;\n    text-decoration: none;\n\n}\n\nh3 a.support-link:hover {\n    color: #0099cc!important;\n }"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 18750:
/*!*********************************************************************!*\
  !*** ./src/app/get-hub-data/get-hub-data.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"get-hub-data-container\">\n\n    <div id=\"get-welcome-text\" [ngClass]=\"{'show': sitename == 'sections'}\">\n\n        <div class=\"get-hub-data-wrap {{getWelTextShowHide}} \" style=\"position:relative;\">\n\n            <form>\n\n                <h2>Get Welcome Text</h2>\n\n                <button id=\"getHubWelcomeText\"\n                        mat-raised-button\n                        (click)=\"getWelcomeTextData(sitename)\">\n                    HUB Welcome Text\n                </button>\n                <button id=\"getStockWelcomeText\"\n                        mat-raised-button\n                        style=\"width: 48%;\"\n                        (click)=\"getStockWelcomeData()\">\n                    STOCK Welcome text\n                </button>\n\n                <button mat-raised-button\n                        [disabled]=\"!hub_welcome_text.value\"\n                        (click)=\"welcomeTextPost(response, sitename)\">\n                    Apply\n                </button>\n\n                <div class=\"get-welcome-text\">\n                    <textarea id=\"hub_welcome_text\"\n                              name=\"hub_welcome_text\"\n                              required\n                              [(ngModel)]=\"response\"\n                              #hub_welcome_text></textarea>\n\n                    <div class=\"invalid-selection\"\n                         *ngIf=\"response === undefined || response === ''\">\n                        <span class=\"text-warning\">*required ... Select Welcome Text Option/HUB #main-nav</span>\n                    </div>\n\n                </div>\n\n            </form>\n\n        </div>\n\n    </div>\n\n</div>\n<!----------------- end get-welcome-text ------------>\n<!----------------- start get-hub-navigation ------------>\n<div id=\"dev-get-hub-nav\" class=\"get-hub-data-container\">\n\n    <div id=\"dev-set-navigation\" [ngClass]=\"{'show': sitename == 'sections'}\">\n\n        <form class=\"{{getHubNavShowHide}}\" name=\"getHubNavigation\">\n\n            <h2>Get Navigation</h2>\n\n            <div>\n                <button id=\"getHubNavigation\" mat-raised-button\n                        (click)=\"getHubNavData(sitename)\">HUB #main-nav\n                </button>\n            </div>\n            <div>\n                <button id=\"getStockNavigation\" mat-raised-button\n                        (click)=\"getStockNavData()\">STOCK #main-nav\n                </button>\n            </div>\n            <div>\n                <button mat-raised-button\n                        [disabled]=\"!navigation.value\"\n                        (click)=\"onHubPost(nResponse, sitename)\">Apply\n                </button>\n            </div>\n\n            <div class=\"get-welcome-text\">\n                    <textarea cdkTextareaAutosize\n                              id=\"hub_navigation\"\n                              required\n                              name=\"navigation\"\n                              #navigation\n                              [(ngModel)]=\"nResponse\"></textarea>\n\n                <div style=\"color: #fff; font-size: 0.9em;\" *ngIf=\"nResponse === undefined || nResponse === ''\">\n                    <span class=\"text-warning\">required ... Select Hub Navigation Option</span>\n                </div>\n            </div>\n\n        </form>\n\n    </div>\n\n</div>\n\n";

/***/ }),

/***/ 82134:
/*!*************************************************************!*\
  !*** ./src/app/sections/sections.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"section-container\" class=\"section-container container\" *ngIf=\"secInterface\">\n\n    <h1>Create Buildkit</h1>\n\n    <div class=\"row\">\n\n        <!-- left column -->\n        <div class=\"col-lg-5 col-md-5 col-sm-12 center-column\">\n\n            <div class=\"get-hub-data-wrap\">\n                <!-- get welcome text and main nav from the hub -->\n                <dev-get-hub-data sitename=\"{{account}}\"></dev-get-hub-data>\n            </div>\n\n            <br/>\n\n            <!-- create buildkit form -->\n            <div class=\"create-buildkit-wrap\">\n\n                <h2>Create Buildkit</h2>\n\n                <!-- page settings -->\n                <mat-form-field class=\"float-start\" style=\"width: 46%;\">\n                    <mat-label>Nav Options</mat-label>\n                    <mat-select name=\"navOptions\"\n                                [(ngModel)]=\"secInterface.navOptions\"\n                                placeholder=\"Main Nav Options\">\n                        <mat-option *ngFor=\"let nav of navOptionsArray\"\n                                    [value]=\"nav.value\">{{nav.display}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n\n                <mat-form-field class=\"float-end\" style=\"width: 46%;\">\n                    <mat-label>GA Code <span class=\"label-instructions\">(UA-XXXXXXXXX)</span></mat-label>\n                    <input matInput\n                           name=\"gacode\"\n                           [(ngModel)]=\"secInterface.gacode\"\n                           placeholder=\"GA Code\">\n                </mat-form-field>\n\n                <div class=\"clear\"></div>\n\n                <!-- tagline -->\n                <mat-form-field>\n                    <mat-hint class=\"text-warning\">\n                        Smiles for a &lt;span class=\"trait\"&gt;lifetime &lt;/span&gt;\n                    </mat-hint>\n                    <mat-label>Tagline</mat-label>\n                    <textarea matInput\n                              [(ngModel)]=\"secInterface.tagline\"\n                              name=\"tagline\"\n                              placeholder=\"Tagline\"></textarea>\n                </mat-form-field>\n\n                <br/> <br/>\n\n                <div class=\"clear\"></div>\n\n                <!-- add/reset component buttons -->\n                <button id=\"btn-reset-component\"\n                        mat-raised-button\n                        type=\"button\"\n                        (click)=\"clearComponents()\">Reset Sections\n                </button>\n\n                <button id=\"btn-add-component\"\n                        type=\"button\"\n                        mat-raised-button\n                        (click)=\"addItem()\">Add Section\n                </button>\n\n                <div class=\"clear\"></div>\n\n\n                <mat-accordion multi=\"false\">\n                    <div id=\"\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                        <div *ngFor=\"let item of secInterface.formData;\n                                  let i = index; let even=even; let odd=odd;\" cdkDrag>\n                            <div>\n\n                                <mat-expansion-panel>\n\n                                    <!-- header and title -->\n                                    <mat-expansion-panel-header [ngClass]=\"{ odd: odd, even: even }\">\n                                        <mat-panel-title>\n                                            <!-- add delete buttons -->\n                                            <div class=\"add-delete-wrap \"\n                                                 (click)=\"$event.stopPropagation();\">\n\n                                                <div class=\"delete-button\">\n\n                                                    <!-- add/delete buttons -->\n                                                    <div class=\"float-start\"\n                                                         style=\"width: 49%;\n                                                                   text-align: center;\">\n                                                        <!--  add method -->\n                                                        <span class=\" text-info\"\n                                                              (click)=\"addItem()\">\n                                                          <mat-icon>add</mat-icon>\n                                                          </span>\n                                                    </div>\n\n                                                    <!-- delete method -->\n                                                    <div class=\"float-end\"\n                                                         style=\"width: 49%; text-align: center;\">\n                                                              <span class=\"text-danger\"\n                                                                    (click)=\"removeItem(i)\"\n                                                                    value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                              </span>\n                                                    </div>\n                                                </div><!-- end buttons -->\n\n                                                <div class=\"clear\"></div>\n\n                                            </div><!-- end add-delete-wrap -->\n\n                                            <span class=\"sesame-blue\" *ngIf=\"item.name else selectSpotlight\">\n\n                                                <!-- hide if selected does not equal Spotlight -->\n                                                   <span class=\"sesame-blue\" [ngSwitch]=\"item.name\">\n<!--                                                       [{{ item.name | replaceDashSpace | replaceUnderscoreSpace| titlecase }}]-->\n\n                                                       <span *ngSwitchCase=\"'Spotlight'\">\n                                                           <span *ngIf=\"item.spotlight_layout_style; else selectLayout\">\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-one-horizontal'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] One Horizontal') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-two-horizontal'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Two Horizontal') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-three-horizontal'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Three Horizontal') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-four-horizontal'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Four Horizontal') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-five-horizontal'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Five Horizontal') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-column-img-left'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Image Left') | titlecase | replaceDashSpace }}</span>\n                                                                <span class=\"sesame-blue\"\n                                                                      *ngIf=\"item.spotlight_layout_style  == 'spotlight-column-img-right'\">{{ item.spotlight_layout_style.replace(item.spotlight_layout_style, '[Spotlight] Image right') | titlecase | replaceDashSpace }}</span>\n                                                           </span>\n                                                       </span>\n                                                       <span *ngSwitchCase=\"'Hero'\">\n                                                           <span class=\"sesame-blue\"\n                                                                 *ngIf=\"item.slideshow_layout_style; else selectLayout\">\n                                                               <span class=\"sesame-blue\"\n                                                                     *ngIf=\"item.slideshow_layout_style  == 'classic'\">\n                                                                   {{ item.slideshow_layout_style.replace(item.spotlight_layout_style, '[Hero] ') | titlecase | replaceDashSpace }}</span>\n                                                               <span class=\"sesame-blue\"\n                                                                     *ngIf=\"item.slideshow_layout_style  == 'video'\">\n                                                                   {{ item.slideshow_layout_style.replace(item.spotlight_layout_style, '[Hero] ') | titlecase | replaceDashSpace }}</span>\n\n                                                           </span>\n                                                       </span>\n                                                       <span *ngSwitchCase=\"'Content'\">\n                                                           <span class=\"sesame-blue\"\n                                                                 *ngIf=\"item.content_layout_style; else selectLayout\">\n                                                               <span *ngIf=\"item.content_layout_style  == 'content-top-oriented-subnav'\">\n                                                                   {{ item.content_layout_style.replace(item.content_layout_style, '[Content] Top SubNav') | titlecase | replaceDashSpace }}</span>\n                                                               <span class=\"sesame-blue\"\n                                                                     *ngIf=\"item.content_layout_style  == 'content-side-oriented-subnav'\">\n                                                                   {{ item.content_layout_style.replace(item.content_layout_style, '[Content] Side SubNav ') | titlecase | replaceDashSpace }}</span>\n                                                           </span>\n                                                       </span>\n                                                       <span *ngSwitchCase=\"'Testimonial_Rotator'\">\n                                                           <span class=\"sesame-blue\"\n                                                                 *ngIf=\"item.testimonial_rotator_layout_style; else selectLayout\">\n                                                               {{ item.testimonial_rotator_layout_style | titlecase | replaceDashSpace }}\n                                                           </span>\n                                                       </span>\n                                                       <span *ngSwitchCase=\"'Association_Logos'\">\n                                                           <span class=\"sesame-blue\"\n                                                                 *ngIf=\"item.assn_logo_layout_style; else selectLayout\">\n                                                               {{ item.assn_logo_layout_style | titlecase | replaceDashSpace }}\n                                                           </span>\n                                                       </span>\n                                                    </span>\n                                                  </span>\n\n                                            <!-- if not selected -->\n                                            <ng-template #selectSpotlight><span\n                                                    class=\"text-warning\"> * Select a Spotlight Type</span>\n                                            </ng-template>\n\n                                            <ng-template #selectLayout><span\n                                                    class=\"text-warning\"> * Select a Layout</span>\n                                            </ng-template>\n\n                                        </mat-panel-title>\n                                    </mat-expansion-panel-header>\n\n                                    <br/>\n\n                                    <!-- select a component -->\n                                    <div>\n                                        <div class=\"float-start\" style=\"width: 49%; \">\n                                            <div>\n                                                <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                    <mat-label>Select a Spotlight</mat-label>\n                                                    <mat-select [(ngModel)]=\"item.name\"\n                                                                required\n                                                                name=\"name\">\n\n                                                        <mat-option *ngIf=\"item.name\"\n                                                                    value=\"{{ item.name }}\">{{ item.name }}</mat-option>\n\n                                                        <mat-option\n                                                                *ngFor=\"let type of getAvailableTypes()\"\n                                                                value=\"{{type}}\"> {{type | replaceDashSpace | replaceUnderscoreSpace | capitalizeEachWord}}\n                                                        </mat-option>\n                                                    </mat-select>\n                                                    <!--  <mat-hint></mat-hint>-->\n                                                </mat-form-field>\n\n                                                <!-- <div [hidden]=\"item.name || item.name\" class=\"bg-danger small\"> Name is required </div>-->\n\n                                            </div><!-- end form group -->\n                                        </div>\n\n                                        <!-------------------- start layout styles ----------------------->\n                                        <div class=\"float-end\" style=\"width: 49%; \">\n                                            <div>\n\n                                                <!-- spotlight -->\n                                                <div *ngIf=\"item.name === 'Spotlight'\">\n\n                                                    <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                        <mat-label>Select a Layout</mat-label>\n                                                        <mat-select\n                                                                [(ngModel)]=\"item.spotlight_layout_style\"\n                                                                name=\"spotlight_layout_style\"\n                                                                required=\"required\">\n\n                                                            <mat-option\n                                                                    *ngFor=\"let style of spotlightLayoutArray\"\n                                                                    value=\"{{style.value}}\">{{style.display | replaceDashSpace | capitalizeEachWord}}\n                                                            </mat-option>\n\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </div><!-- end spotlight -->\n\n                                                <!-- slideshow -->\n                                                <div *ngIf=\"item.name === 'Hero'\">\n                                                    <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                        <mat-label>Select a Layout</mat-label>\n                                                        <mat-select [(ngModel)]=\"item.slideshow_layout_style\"\n                                                                    name=\"slideshow_layout_style\"\n                                                                    required=\"required\">\n\n                                                            <mat-option\n                                                                    *ngFor=\"let style of slideshowLayoutArray\"\n                                                                    value=\"{{style.value}}\">{{style.display | replaceDashSpace | capitalizeEachWord}}\n                                                            </mat-option>\n\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </div><!-- end slideshow -->\n\n                                                <!-- testimonials -->\n                                                <div *ngIf=\"item.name === 'Testimonial_Rotator'\">\n                                                    <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                        <mat-label>Select a Layout</mat-label>\n                                                        <mat-select\n                                                                [(ngModel)]=\"item.testimonial_rotator_layout_style\"\n                                                                name=\"testimonial_rotator_layout_style\"\n                                                                required=\"required\">\n\n                                                            <mat-option\n                                                                    *ngFor=\"let style of testimoniaRotatorLayoutArray\"\n                                                                    value=\"{{style.value}}\"\n                                                            >{{style.display | replaceDashSpace | capitalizeEachWord}}\n                                                            </mat-option>\n\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </div>\n                                                <!-- end testimonials -->\n\n                                                <!-- association-logos -->\n                                                <div *ngIf=\"item.name === 'Association_Logos'\">\n                                                    <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                        <mat-label>Select a Layout</mat-label>\n                                                        <mat-select [(ngModel)]=\"item.assn_logo_layout_style\"\n                                                                    name=\"assn_logo_layout_style\"\n                                                                    required=\"required\">\n\n                                                            <mat-option *ngIf=\"item.assn_logo_layout_style !== ''\"\n                                                                        selected=\"selected\"\n                                                                        value=\"{{item.assn_logo_layout_style}}\">\n                                                                {{item.assn_logo_layout_style | replaceDashSpace | replaceUnderscoreSpace | capitalizeEachWord}}\n                                                            </mat-option>\n\n                                                            <mat-option\n                                                                    *ngFor=\"let style of assnLogosLayoutArray\"\n                                                                    value=\"{{style.value}}\">{{style.display | replaceDashSpace | capitalizeEachWord}}\n                                                            </mat-option>\n\n                                                        </mat-select>\n                                                    </mat-form-field>\n\n                                                </div><!-- end association-logos -->\n\n                                                <!-- content -->\n                                                <div *ngIf=\"item.name === 'Content'\">\n                                                    <mat-form-field appearance=\"fill\" hideRequiredMarker>\n                                                        <mat-label>Select a Layout</mat-label>\n                                                        <mat-select [(ngModel)]=\"item.content_layout_style\"\n                                                                    name=\"content_layout_style\"\n                                                                    required=\"required\">\n                                                            <mat-option\n                                                                    *ngFor=\"let style of contentLayoutArray\"\n                                                                    value=\"{{style.value}}\">{{style.display | replaceDashSpace | capitalizeEachWord}}\n\n                                                            </mat-option>\n\n                                                        </mat-select>\n                                                    </mat-form-field>\n\n                                                </div>\n\n                                            </div><!-- end form group -->\n\n                                        </div><!-- end layout styles -->\n\n                                    </div><!-- end bg-info -->\n\n                                </mat-expansion-panel>\n                            </div><!-- end ngFor -->\n\n                        </div><!-- end items -->\n                    </div>\n                </mat-accordion>\n\n                <br/>\n\n                <div>\n                    <!--<p class=\"panel danger-panel\" *ngIf=\"hasDuplicates\"><strong class=\"text-danger\">You have\n                        duplicates\n                        sections.</strong> <br/><span\n                            class=\"text-warning\">The only allowed section duplicates are Spotlight. <br/></span>\n                        <span *ngFor=\"let dupe of dupeArray\">{{dupe}}<br/></span>\n                    </p>-->\n\n                    <p class=\"panel danger-panel\" *ngIf=\"!isContentSectionAdded()\">\n                        <strong class=\"text-danger\">Content component is required</strong> <br/>\n                        <span class=\"text-warning\">The 'Content' component is missing and is required!</span>\n                    </p>\n\n                    <p class=\"text-info\">7. <span class=\"text-warning\"\n                                                  style=\"font-size: 1.25em;text-transform: uppercase;\">Restart Gulp</span>\n                        to turn on webP converter.<br/>(Control C, then 'gulp watch' in your terminal).</p>\n\n                    <h2>CLICK FINISH</h2>\n\n                    <p class=\"text-warning\"><span class=\"text-danger\">WARNING: </span>If you click the finish\n                        button\n                        after the site has been\n                        created and you perhaps have done some work, <span class=\"alert-danger\"> &nbsp;the existing buildkit with that account-name\n                              will be overwritten with a new buildkit. &nbsp;</span></p>\n\n                </div>\n                <div>\n                    <button (click)=\"saveBuildkitValues()\"\n                            [disabled]=\"!isContentSectionAdded()\"\n                            id=\"sectionSaveBtn\"\n                            mat-raised-button\n                            type=\"button\"\n                            class=\"finish-button sesame-blue-background\"\n                            style=\"width: 100%;\">SAVE/FINISH\n                    </button>\n\n\n                </div>\n                <br/>\n\n                <h2>Refresh Browser</h2>\n                <p class=\"steps-to-create\">8. Go to the newly created browser tab and hard refresh the starter\n                    buildkit</p>\n                <p>Mac: http://localhost:8888/{{account}}\n                    <br/>PC: http://localhost/{{account}}/#/</p>\n\n                <p class=\"steps-to-create\">9. READY TO BUILD</p>\n\n                <p><span> RE-STARTING A PROJECT: </span>You can restart the build by clicking the\n                    'FINISH'\n                    button. This will overwrite your current account-name directory.\n                </p>\n\n\n            </div>\n\n        </div>\n\n\n        <!-- right column -->\n        <div class=\"col-lg-7 col-md-7 col-sm-12\">\n\n            <p><a class=\"support-link\" [routerLink]=\"['/support']\" style=\"text-decoration: none;\">\n                <span><span class=\"material-icons\" style=\"font-size: 1.0em; vertical-align: text-bottom; color: #0099cc;\">arrow_forward arrow_forward&nbsp;&nbsp;</span>NEW! Support and documentation page </span>\n            </a></p>\n\n            <dev-resources></dev-resources>\n\n        </div><!-- end row -->\n    </div>\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <div>\n                <div style=\"border-top: 1px solid #d8d8d8; padding: 10px 0;\">\n                    <ul>\n                        <li><strong>Maintained by</strong></li>\n                        <li>Gary King</li>\n                        <li>James Stillion</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_sections_sections_module_ts.js.map