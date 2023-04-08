(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_css-mixins_css-mixins_module_ts"],{

/***/ 84464:
/*!****************************************************!*\
  !*** ./src/app/css-mixins/css-mixins.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssMixinsComponent": () => (/* binding */ CssMixinsComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _css_mixins_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-mixins.component.html?ngResource */ 19168);
/* harmony import */ var _css_mixins_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-mixins.component.css?ngResource */ 42737);
/* harmony import */ var _css_mixins_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_mixins_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
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




let CssMixinsComponent = (_class = class CssMixinsComponent {
  constructor(router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.router = router;
  }
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}]), _class);
CssMixinsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-css-mixins',
  template: _css_mixins_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_css_mixins_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CssMixinsComponent);


/***/ }),

/***/ 31794:
/*!*************************************************!*\
  !*** ./src/app/css-mixins/css-mixins.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssMixinsModule": () => (/* binding */ CssMixinsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../subnav/subnav.module */ 9863);
/* harmony import */ var _css_mixins_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-mixins.component */ 84464);
/* harmony import */ var _css_mixins_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css-mixins.route */ 79089);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CssMixinsModule = class CssMixinsModule {};
CssMixinsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_css_mixins_route__WEBPACK_IMPORTED_MODULE_2__.ROUTES), _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_0__.SubnavModule],
  exports: [_css_mixins_component__WEBPACK_IMPORTED_MODULE_1__.CssMixinsComponent],
  declarations: [_css_mixins_component__WEBPACK_IMPORTED_MODULE_1__.CssMixinsComponent]
})], CssMixinsModule);


/***/ }),

/***/ 79089:
/*!************************************************!*\
  !*** ./src/app/css-mixins/css-mixins.route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _css_mixins_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-mixins.component */ 84464);

const ROUTES = [{
  path: '',
  component: _css_mixins_component__WEBPACK_IMPORTED_MODULE_0__.CssMixinsComponent
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

/***/ 42737:
/*!****************************************************************!*\
  !*** ./src/app/css-mixins/css-mixins.component.css?ngResource ***!
  \****************************************************************/
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

/***/ 19168:
/*!*****************************************************************!*\
  !*** ./src/app/css-mixins/css-mixins.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container css-mixins\">\n    <h1 class=\"less-mixins-list\">MIXINS</h1>\n    <dev-subnav *ngIf=\"router.url == '/css-mixins'\"></dev-subnav>\n    <div class=\"row vars\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n            <ul class=\"less-mixins-list\">\n                <li class=\"mixins-heading\">LESS MIXINS</li>\n                <li class=\"mixins-sub-heading\">FONT MIXINS</li>\n                <li>.th&#123; font-weight:100; &#125;</li>\n                <li>.xlt &#123;font-weight:200; &#125;</li>\n                <li>.lt&#123; font-weight:300; &#125;</li>\n                <li>.roman&#123; font-weight:400; &#125;</li>\n                <li>.mbold&#123; font-weight:500; &#125;</li>\n                <li>.sbold&#123; font-weight:600; &#125;</li>\n                <li>.bold&#123; font-weight:700; &#125;</li>\n                <li>.xbold&#123; font-weight:800; &#125;</li>\n                <li>.ubold, .black&#123; font-weight:900; &#125;</li>\n                <li>.ob&#123; font-style:oblique; &#125;</li>\n                <li>.italic&#123; font-style:italic; &#125;</li>\n\n                <li>.upp&#123; text-transform:uppercase; &#125;</li>\n                <li>.loww&#123; text-transform:lowercase; &#125;</li>\n                <li>.noo&#123; text-transform:none; &#125;</li>\n\n                <li>.supp&#123; font-variant:small-caps; &#125;</li>\n                <li>.normal&#123; font-style:normal; &#125;</li>\n\n                <li class=\"mixins-sub-heading\">LETTER SPACING, LINE HEIGHT and FONT-SIZE</li>\n                <li>.ls(@spacing)&#123; letter-spacing:@spacing; &#125;</li>\n                <li>.lh(@val) &#123; line-height:@val; &#125;</li>\n                <li>.fs(@val) &#123; font-size:@val; &#125;</li>\n\n                <li>.aligncenter&#123; text-align:center; &#125;</li>\n                <li>.alignright&#123; text-align:right; &#125;</li>\n                <li>.alignleft&#123; text-align:left; &#125;</li>\n                <li>.justify&#123; text-align:justify; &#125;</li>\n\n                <li class=\"mixins-sub-heading\">HELPER MIXINS</li>\n                <li>.clear&#123; clear:both; &#125;</li>\n                <li>.clearright&#123; clear:right; &#125;</li>\n                <li>.clearleft&#123; clear:left; &#125;</li>\n                <li>.near&#123; clear:none; &#125;</li>\n\n                <li>.wimp&#123; width:100%!important; &#125;</li>\n                <li>.wall&#123; width:100% &#125;</li>\n                <li>.hall&#123; height:100%; &#125;</li>\n\n                <li>.auto&#123; width:auto; &#125;</li>\n                <li>.autoy&#123; height:auto; &#125;</li>\n\n                <li>.autox&#123; width:auto;height:auto; &#125;</li>\n                <li>.zerox&#123; width:0;height:0; &#125;</li>\n\n                <li>.line&#123; .wall;height:1px; &#125;</li>\n\n                <li>.trbl(@val)&#123; top:@val;right:@val;bottom:@val;left:@val; &#125;</li>\n\n                <li>.show&#123; display:block; &#125;</li>\n                <li>.inline&#123; display:inline; &#125;</li>\n                <li>.inline-block, .ib&#123; display:inline-block; &#125;</li>\n                <li>.va(@args)&#123; vertical-align:@args; &#125;</li>\n\n                <li>.hide&#123; display:none; &#125;</li>\n                <li>.obliterate&#123;\n                    .lh(0);.fs(0);text-indent:-999em;width:0;height:0;padding:0;margin:0;display:none;visibility:hidden;\n                    &#125;\n                </li>\n\n                <li>.left&#123; float:left; &#125;</li>\n                <li>.right&#123; float:right; &#125;</li>\n                <li>.nofloat&#123; float:none; &#125;</li>\n\n                <li>.behave&#123; .show;.left; &#125;</li>\n                <li>.rehave&#123; .show;.right; &#125;</li>\n                <li>.restrain&#123; .auto;.inline-block;float:none; &#125;</li>\n\n                <li>.center&#123; margin-left:auto;margin-right:auto; &#125;</li>\n\n                <li>.trans&#123; .transition-duration(0.3s); &#125;</li>\n                <li>.fade&#123; opacity:0.5; &#125;</li>\n\n                <li>.round&#123; .rounded(50%); &#125;</li>\n                <li>.rounded(@radius)&#123; border-radius:@radius; &#125;</li>\n\n                <li>.bc(@color) &#123; background-color:@color; &#125;</li>\n\n                <li class=\"mixins-sub-heading\">FUNCTIONAL MIXINS</li>\n                <li>.vertical-align &#123; position:absolute;top:50%;.translate(0, -50%); &#125;</li>\n                <li>.vertical-align-nul &#123;position: relative;top:auto;.translate(0, 0); &#125;</li>\n\n                <li>.overlay&#123; .wall;.hall;.show;position:absolute;top:0;left:0; &#125;</li>\n                <li>.inlay&#123; .autox;.show;position:absolute; &#125;/* use with .trbl */</li>\n\n                <li>.grey, .gray&#123; -webkit-filter:grayscale(1); -webkit-filter:grayscale(100%); filter:gray;\n                    filter:grayscale(100%); &#125;\n                </li>\n\n                <!--<li>\n                    .mediaminmax(@val1, @val2)&#123;\n                    @media only screen and (min-width: @val1) and (max-width: @val2) &#123;&#125;\n                    &#125;\n                    <br /><br />\n                    .mediamin(@val)&#123;\n                    @media only screen and (min-width: @val) &#123;&#125;\n                    &#125;\n                    <br /><br />\n                    .mediamax(@val)&#123;\n                    @media only screen and (max-width: @val) &#123;&#125;\n                    &#125;\n\n                </li>-->\n            </ul>\n        </div>\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n            <!--<ul class=\"less-mixins-list\">\n                <li class=\"mixins-heading\">SCSS MIXINS</li>\n                <li class=\"mixins-sub-heading\">MEDIA QUERY MIXIN </li>\n                <br/>$tablet-breakpoint: 640px;\n                <br/>$desktop-breakpoint: 1027px;\n                <br/>$edge-breakpoint: 1440px;\n\n                <li>@mixin tablet &#123;\n                    @media only screen and (min-width: $tablet-breakpoint)&#123;\n                    @content;\n                    <br/>&#125;\n                    <br/>&#125;\n                    <br/>@mixin desktop &#123;\n                    <br/>@media only screen and (min-width: $desktop-breakpoint)&#123;\n                    <br/>@content;\n                    <br/>&#125;\n                    <br/>&#125;\n                    <br/>@mixin bigger-desktop &#123;\n                    <br/>@media only screen and (min-width: $edge-breakpoint)&#123;\n                    <br/>@content;\n                    <br/>&#125;\n                    <br/>&#125;\n\n                <li class=\"scss-useage-heading\">USEAGE</li>\n                <li>#section &#123;\n                    <br/> position: relative;\n                    <br/>\n                    <br/>.box&#123;\n                    <br/>background-color: #ccc;\n                    <br/>@include tablet&#123;\n                    <br/>background-color: #ddd;\n                    <br/>&#125;\n                    <br/> @include desktop&#123;\n                    <br/>background-color: #eee;\n                    <br/>background-color: #eee;\n                    <br/>&#125;\n                    <br/>background-color: #eee;<br/>\n                    <br/>@include bigger-desktop&#123;\n                    <br/>background-color: #000;\n                    <br/>&#125;\n                    <br/>&#125;\n                    <br/>&#125;\n                </li>\n            </ul>-->\n\n        </div>\n    </div>\n</div>";

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
//# sourceMappingURL=src_app_css-mixins_css-mixins_module_ts.js.map