(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_buildkit-links_buildkit-links_module_ts"],{

/***/ 74522:
/*!************************************************************!*\
  !*** ./src/app/buildkit-links/buildkit-links.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildkitLinksComponent": () => (/* binding */ BuildkitLinksComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _buildkit_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildkit-links.component.html?ngResource */ 72397);
/* harmony import */ var _buildkit_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildkit-links.component.css?ngResource */ 98151);
/* harmony import */ var _buildkit_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_buildkit_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let BuildkitLinksComponent = (_class = class BuildkitLinksComponent {
  constructor(router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.router = router;
  }
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}]), _class);
BuildkitLinksComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-buildkit-links',
  template: _buildkit_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_buildkit_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BuildkitLinksComponent);


/***/ }),

/***/ 99995:
/*!*********************************************************!*\
  !*** ./src/app/buildkit-links/buildkit-links.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuildkitLinksModule": () => (/* binding */ BuildkitLinksModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _buildkit_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildkit-links.component */ 74522);
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subnav/subnav.module */ 9863);
/* harmony import */ var _buildkit_links_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildkit-links.route */ 93942);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let BuildkitLinksModule = class BuildkitLinksModule {};
BuildkitLinksModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_buildkit_links_route__WEBPACK_IMPORTED_MODULE_2__.ROUTES), _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_1__.SubnavModule],
  declarations: [_buildkit_links_component__WEBPACK_IMPORTED_MODULE_0__.BuildkitLinksComponent],
  exports: [_buildkit_links_component__WEBPACK_IMPORTED_MODULE_0__.BuildkitLinksComponent]
})], BuildkitLinksModule);


/***/ }),

/***/ 93942:
/*!********************************************************!*\
  !*** ./src/app/buildkit-links/buildkit-links.route.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _buildkit_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildkit-links.component */ 74522);

const ROUTES = [{
  path: '',
  component: _buildkit_links_component__WEBPACK_IMPORTED_MODULE_0__.BuildkitLinksComponent
}];

/***/ }),

/***/ 31137:
/*!********************************************!*\
  !*** ./src/app/subnav/subnav.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubnavComponent": () => (/* binding */ SubnavComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _subnav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subnav.component.html?ngResource */ 23006);
/* harmony import */ var _subnav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subnav.component.css?ngResource */ 92519);
/* harmony import */ var _subnav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_subnav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let SubnavComponent = (_class = class SubnavComponent {
  constructor(_siteContextProviderService, _showHideContent, router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContent", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this._siteContextProviderService = _siteContextProviderService;
    this._showHideContent = _showHideContent;
    this.router = router;
  }
  ngOnInit() {
    // console.log(this.router.url);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_4__.ShowHideContentService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}]), _class);
SubnavComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'dev-subnav',
  template: _subnav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_subnav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SubnavComponent);


/***/ }),

/***/ 9863:
/*!*****************************************!*\
  !*** ./src/app/subnav/subnav.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubnavModule": () => (/* binding */ SubnavModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _subnav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subnav.component */ 31137);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SubnavModule = class SubnavModule {};
SubnavModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: [_subnav_component__WEBPACK_IMPORTED_MODULE_0__.SubnavComponent],
  exports: [_subnav_component__WEBPACK_IMPORTED_MODULE_0__.SubnavComponent]
})], SubnavModule);


/***/ }),

/***/ 98151:
/*!************************************************************************!*\
  !*** ./src/app/buildkit-links/buildkit-links.component.css?ngResource ***!
  \************************************************************************/
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

/***/ 92519:
/*!********************************************************!*\
  !*** ./src/app/subnav/subnav.component.css?ngResource ***!
  \********************************************************/
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

/***/ 72397:
/*!*************************************************************************!*\
  !*** ./src/app/buildkit-links/buildkit-links.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container buildkit-links\">\n\n    <h1>Links and resources</h1>\n\n    <dev-subnav *ngIf=\"router.url == '/buildkit-links'\"></dev-subnav>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n\n            <ul class=\"less-mixins-list\">\n\n                <li>\n                    <a href=\"https://validator.w3.org/\" target=\"_blank\">W3C Validator</a>\n                </li>\n                <li>\n                    <a href=\"https://fonts.google.com/\" target=\"_blank\">Google Fonts</a>\n                </li>\n                <li>\n                    <a href=\"https://validator.w3.org/\" target=\"_blank\">W3C Markup Validator</a>\n                </li>\n\n                <li>\n                    <a href=\"https://developers.google.com/speed/pagespeed/insights\" target=\"_blank\">Page Speed</a>\n                </li>\n                <li>\n                    <a href=\"https://fonts.google.com/\" target=\"_blank\">W3C Link Checker</a>\n                </li>\n                <li><a href=\"https://www.sesamecommunications.com\" target=\"_blank\">Sesame Communications</a></li>\n                <li><a href=\"http://sesamehub.com/designer_resources\" target=\"_blank\">Designer Resources</a></li>\n                <li><a href=\"https://www.dreamstime.com\" target=\"_blank\">Dreamstime</a></li>\n                <li><a href=\"https://www.flickr.com\" target=\"_blank\">Flickr</a></li>\n                <li><a href=\"http://fontawesome.io/icons\" target=\"_blank\">Font Awesome</a></li>\n                <li><a href=\"https://caniuse.com/\" target=\"_blank\">Can I Use</a></li>\n\n\n            </ul>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n            <ul class=\"less-mixins-list\">\n                <li>\n                    <a href=\"https://www.w3schools.com/cssref/default.asp\" target=\"_blank\">CSS Reference</a>\n                </li>\n\n                <li>\n                    <a href=\"https://www.tinypng.com\" target=\"_blank\">Tiny PNG WebP</a>\n                </li>\n\n                <li>\n                    <a href=\"https://www.compressor.io\" target=\"_blank\">Compressor.io</a>\n                </li>\n\n                <li>\n                    <a href=\"https://www.colorzilla.com/gradient-editor\" target=\"_blank\">Gradient Generator</a>\n                </li>\n                <li>\n                    <a href=\"https://css-tricks.com/examples/nth-child-tester/\" target=\"_blank\">:nth tester</a>\n                </li>\n                <li>\n                    <a href=\"https://css-tricks.com/\" target=\"_blank\">CSS Tricks</a>\n                </li>\n\n                <li>\n                    <a href=\"https://bennettfeely.com/clippy/\" target=\"_blank\">CSS Clip path maker</a>\n                </li>\n                <li>\n                    <a href=\"https://maketintsandshades.com/\" target=\"_blank\">Instant Color Shades</a>\n                </li>\n                <li><strong>FONTS</strong></li>\n                <li><a href=\"https://www.fontsquirrel.com/matcherator\" target=\"_blank\">Font Squirrel Matcherator</a>\n                </li>\n                <li><a href=\"http://www.identifont.com/index.html\" target=\"_blank\">Identifont</a> </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n\n            <h2>Github</h2>\n            <ul class=\"less-mixins-list\">\n\n                <li>\n                    <a href=\"https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication\"\n                       target=\"_blank\">\n                        Configuring Github two-factor authorization</a>\n                </li>\n\n                <li>\n                    <a href=\"https://github.com/settings/keys\" target=\"_blank\">SSH Keys</a>\n                </li>\n\n                <li><a href=\"https://github.com/sesacom/sesamehub-webdevenv\" target=\"_blank\">Github\n                    sesamehub-webdevenv</a>\n                </li>\n\n                <li>\n                    <a href=\"https://support.apple.com/guide/keychain-access/add-a-password-to-a-keychain-kyca1120/mac\" target=\"_blank\">\n                        Add a password to keychain on Mac</a>\n                </li>\n                <li>\n\n                    <strong>How to update Sesame Dev Environment from the terminal:</strong>\n\n                    <code>\n                        <ul class=\"list-unstyled\">\n                            <li><strong>FIRST TIME OR IF THERE HAS BEEN A MAJOR UPDATE</strong></li>\n                            <li><strong>(OSX/PC)</strong></li>\n                            <li>cd MAMP/www</li>\n                            <li>git status</li>\n                            <li>git fetch</li>\n                            <li>git checkout psds-buildkit- &lt;current version&gt;</li>\n                            <li>git pull</li>\n                            <li>git branch (should display current version)</li>\n                            <li><strong>MINOR UPDATES</strong></li>\n                            <LI>cd into MAMP/www</LI>\n                            <li>git pull</li>\n                        </ul>\n                    </code>\n                </li>\n\n            </ul>\n        </div>\n\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n            <h2>sesamehub-webdevenv</h2>\n            <ul class=\"less-mixins-list\">\n                <li><a href=\"https://wiki.sesamecommunications.com:8443/display/DT/Sesame+Web+Dev+Environment\"\n                       target=\"_blank\">Sesame Web Dev Environment WIKI</a>\n                </li>\n                <li><a class=\"cursor-pointer\" [routerLink]=\"['/build-info']\" [routerLinkActive]=\"['active']\">\n                    How to Run GULP</a>\n                </li>\n\n            </ul>\n        </div>\n\n    </div><!-- end row -->\n\n</div>";

/***/ }),

/***/ 23006:
/*!*********************************************************!*\
  !*** ./src/app/subnav/subnav.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\" style=\"z-index: 420; position: relative;\">\n\n    <!--<ul class=\"subnav nav nav-tabs \" role=\"tablist\">\n        <li><a class=\"cursor-pointer\" [routerLink]=\"['/sections']\"\n               [routerLinkActive]=\"['active']\">Buildkit</a></li>\n\n\n        <li class=\"dropdown\"><a class=\"cursor-pointer\" [routerLink]=\"['/buildkit-links']\"\n               [routerLinkActive]=\"['active']\">Resources</a>\n            <ul class=\"resources dropdown-content\">\n                <li><a class=\"cursor-pointer\" [routerLink]=\"['/css']\"\n                       [routerLinkActive]=\"['active']\">Variables</a></li>\n\n                <li><a class=\"cursor-pointer\" [routerLink]=\"['/css-mixins']\"\n                       [routerLinkActive]=\"['active']\">Mixins</a></li>\n                <li><a class=\"cursor-pointer\" [routerLink]=\"['/build-info']\" [routerLinkActive]=\"['active']\">Support (beta)</a></li>\n                <li><a class=\"cursor-pointer\" href=\"https://confluence.internetbrands.com/display/PD/Web+Team+Home\"\n                       target=\"_blank\">WebDev WIKI</a></li>\n                <li><a class=\"cursor-pointer\" href=\"https://confluence.internetbrands.com/display/PD/Site+Manager\"\n                       target=\"_blank\">SM WIKI</a></li>\n            </ul>\n        </li>\n\n\n    </ul>-->\n    <!--<li style=\"text-align: center;\">\n           <button class=\"btn btn-default\" style=\" color: #fff; width: 220px;\">\n               <a class=\"bold\" style=\"text-decoration: none; color: #fff;\"\n                  href=\"https://confluence.internetbrands.com/display/PD/Site+Manager\" target=\"_blank\">\n                   Web Team Home WIKI</a>\n           </button>\n       </li>\n\n       <li style=\"text-align: center;\">\n           <button class=\"btn btn-default\" style=\" color: #fff; width: 220px;\">\n               <a class=\"bold\" style=\"color: #fff; text-decoration: none; max-width: 130px;\"\n                  href=\"https://confluence.internetbrands.com/display/PD/Site+Manager\" target=\"_blank\">\n                   Site Manager WIKI</a>\n           </button>\n       </li>-->\n\n\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_buildkit-links_buildkit-links_module_ts.js.map