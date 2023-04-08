(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_css_css_module_ts"],{

/***/ 53379:
/*!**************************************!*\
  !*** ./src/app/css/css.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssComponent": () => (/* binding */ CssComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _css_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.component.html?ngResource */ 58127);
/* harmony import */ var _css_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.component.css?ngResource */ 54835);
/* harmony import */ var _css_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
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




let CssComponent = (_class = class CssComponent {
  constructor(router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.router = router;
  }
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}]), _class);
CssComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-css',
  template: _css_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_css_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CssComponent);


/***/ }),

/***/ 19433:
/*!***********************************!*\
  !*** ./src/app/css/css.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssModule": () => (/* binding */ CssModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _css_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.route */ 23192);
/* harmony import */ var _css_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.component */ 53379);
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subnav/subnav.module */ 9863);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CssModule = class CssModule {};
CssModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_css_route__WEBPACK_IMPORTED_MODULE_0__.ROUTES), _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_2__.SubnavModule],
  declarations: [_css_component__WEBPACK_IMPORTED_MODULE_1__.CssComponent],
  exports: [_css_component__WEBPACK_IMPORTED_MODULE_1__.CssComponent]
})], CssModule);


/***/ }),

/***/ 23192:
/*!**********************************!*\
  !*** ./src/app/css/css.route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _css_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.component */ 53379);

const ROUTES = [{
  path: '',
  component: _css_component__WEBPACK_IMPORTED_MODULE_0__.CssComponent
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

/***/ 54835:
/*!**************************************************!*\
  !*** ./src/app/css/css.component.css?ngResource ***!
  \**************************************************/
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

/***/ 58127:
/*!***************************************************!*\
  !*** ./src/app/css/css.component.html?ngResource ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n  <h1>VARIABLES</h1>\n  <div class=\"row vars\">\n    <div class=\"col-sm-12 col-md-12 col-lg-6 vars-sub\">\n\n      <dev-subnav *ngIf=\"router.url == '/css'\"></dev-subnav>\n      <ul>\n        <li>\n          <ul>\n            <li class=\"vars-heading\">LESS VARIABLES</li>\n            <li class=\"mixins-sub-heading\">COLOR VARIABLES</li>\n            <li>@color0:#0099cc; /* color */</li>\n            <li>@color1:#b9d233; /* color || hyperlinks */</li>\n          </ul>\n        </li>\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">LINE HEIGHT VARIABLES</li>\n            <li>@contentlineheight:36;</li>\n            <li>//line-height from main content area on psd proof</li>\n            <li>@contentfontsize:20;</li>\n            <li>//font size from main content area on psd proof (will affect .content-area only)</li>\n\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>h3&#123;</li>\n            <li>font-size:24em/@contentfontsize;</li>\n            <li>&#125;</li>\n\n            <li>@contentlineheight:36;</li>\n            <li>//line-height from main content area on psd proof</li>\n            <li>@contentfontsize:20; only)</li>\n            <li>//font size from main content area on psd proof (will affect .content-area</li>\n\n\n            <li>line-height:@contentlineheight/@contentfontsize;</li>\n            <li>&#125;</li>\n            <li>h3&#123;</li>\n            <li>font-size:24em/@contentfontsize;</li>\n            <li>>&#125;</li>\n\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">MAIN NAV VARIABLES</li>\n            <li>@mainnavstyle:'standard';</li>\n            <li>through desktop don't forget to alter breakpoint on local.js</li>\n            <li>@primary:15;</li>\n            <li>//main nav item font size from psd proof</li>\n            <li>@secondary:13;</li>\n            <li>//drop menu item font size from psd proof</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>a[id]&#123;</li>\n            <li>line-height:40/@primary;</li>\n            <li>font-size:@primary/20em;</li>\n            <li>height: 40em/@primary;</li>\n            <li>&#125;</li>\n\n            <li>a &#123;</li>\n            <li>line-height: 40/@secondary;</li>\n            <li>font-size: @secondary/20em;</li>\n            <li>height:40em/@secondary;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">LOGO VARIABLES</li>\n            <li>#logo&#123;</li>\n            <li>@logowidth:240;</li>\n            <li>//logo width from psd proof</li>\n            <li>@logoheight:94.3;</li>\n            <li>//logo height from psd proof</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>width: @logowidth/20em;</li>\n          </ul>\n        </li>\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">SOCIAL MEDIA VARIABLES</li>\n            <li>.socialmedia&#123;</li>\n            <li>@icondimensions:48;</li>\n            <li>//social-icon height (and often width) from psd proof</li>\n            <li>@iconfontsize:16;</li>\n            <li>//social-icon font-size from psd proof</li>\n            <li class=\"useage-heading\">USEAGE</li>\n\n            <li>line-height: @icondimensions/@iconfontsize;</li>\n            <li>font-size: @iconfontsize/20em;// default 15 - value may change per psd proof</li>\n            <li>color:#fff;</li>\n            <li>height:(@icondimensions/@iconfontsize)*1em;</li>\n            <li>width:(@icondimensions/@iconfontsize)*1em;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">SLIDESHOW VARIABLES</li>\n            <li>@slideshowstyle:'classic';</li>\n            <li>//SLIDESHOW style => video or classic</li>\n            <li>@slideshowheight:800;</li>\n            <li>//height of slideshow from psd proof - applies to classic slideshow only</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>& when (@slideshowstyle = 'classic')&#123; min-height:(@slideshowheight / 21) * 1vw;/*\n              adjust\n              to match slideshow height from proof */ &#125;\n            </li>\n            <li>& when (@slideshowstyle = 'video')&#123; min-height:55vw; &#125;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">SUBNAV VARIABLES</li>\n            <li>@subnavorientation:'top';</li>\n            <li>//SUBNAV ORIENTATION => side or top</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>/* TOP ORIENTED */</li>\n            <li>#subnav when (@subnavorientation = 'top')&#123;</li>\n            <li>@subnavlinkheight:18;</li>\n            <li>@subnavlinkfontsize:15;</li>\n            <li>@subnavbottompadding:42;</li>\n            <li>//space between links and bottom of section</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>padding:(@subnavbottompadding/20em) 0;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">CONTENT VARIABLES</li>\n            <li>@bdcontainerwidth:1200;</li>\n            <li>//pixel width of interior bd container on proof</li>\n            <li>@bdcontentwidth:840;</li>\n            <li>//pixel width of interior content area on proof</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>max-width:@bdcontentwidth/20em;</li>\n            <li>width:(@bdcontentwidth / @bdcontainerwidth) * 100%;</li>\n            <li>&#125;</li>\n            <li>#bd .container&#123;</li>\n            <li>max-width:@bdcontainerwidth/20em;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n        <li>\n          <ul>\n            <li>\n            <li class=\"mixins-sub-heading\">HOME PAGE VARIABLES</li>\n            <li>@homepagebdcontainerwidth:1140;</li>\n            <li>// pixel width of homepage bd container on proof</li>\n            <li>@homepagecontentwidth:660;</li>\n            <li>// pixel width of homepage content area on proof</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>.home #bd&#123;</li>\n            <li>@media only screen and (min-width: 48em) &#123;</li>\n            <li>padding:4em 0 2.6em;</li>\n            <li>/* midTab 780w */</li>\n            <li>&#125;</li>\n            <li>.container&#123;</li>\n            <li>max-width:@homepagebdcontainerwidth/20em;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">LIST VARIABLES</li>\n            <li>@ullineheight:35;</li>\n            <li>@ulfontsize:23;</li>\n            <li>@ulullineheight:39;</li>\n            <li>@ululfontsize:20;</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>ul a &#123;</li>\n            <li>line-height:(@ullineheight / @ulfontsize);</li>\n            <li>font-size:(@ulfontsize / @contentfontsize) * 1em;</li>\n            <li>-webkit-transition-duration:0s;</li>\n            <li>transition-duration:0s;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">SIDEBAR VARIABLES</li>\n            @sidebarwidth: 300;\n            <li>// sidebar width from psd proof usually matches width of sitepic\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>#sidebar&#123;</li>\n            <li>& when (@subnavorientation = 'side') &#123;</li>\n            <li>&#125;</li>\n            <li>& when (@subnavorientation = 'top') &#123;</li>\n            <li>max-width:@sidebarwidth/20em;</li>\n            <li>&#125;</li>\n            <li>@media only screen and (min-width: 48em) &#123;</li>\n            <li>width:(@sidebarwidth / @bdcontainerwidth) * 100%;</li>\n            <li>& when (@subnavorientation = 'side') &#123; padding-top:41%; } //adjust to make space for\n            </li>\n            <li>&#125;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">FOOTER VARIABLES</li>\n            <li>@ftaddressfontsize:18;</li>\n            <li>@ftphonefontsize:22;</li>\n            <li>@ftmapmarkerfontsize:66;</li>\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>.address &#123;</li>\n            <li>line-height:20/@ftaddressfontsize;</li>\n            <li>font-size:@ftaddressfontsize/20em;</li>\n            <li>&#125;</li>\n          </ul>\n        </li>\n\n        <li>\n          <ul>\n            <li class=\"mixins-sub-heading\">HR VARIABLES</li>\n            @hrcolor:#666;\n            <li>@hrheight:1px;\n            <li>@hrwidth:100%;//either 100% or the pixel value from the proof without the 'px'\n            <li>hr, .types-of-braces #content div.clear&#123;\n            <li>font-size:inherit;\n            <li>height:@hrheight;\n            <li class=\"useage-heading\">USEAGE</li>\n            <li>& when (@hrwidth = 100%) &#123;</li>\n            <li>width:@hrwidth;</li>\n            <li>margin:1.58em 0;</li>\n            <li>&#125;</li>\n            <li>& when not (@hrwidth = 100%)&#123;</li>\n            <li>width:(@hrwidth / @contentfontsize) * 1em;</li>\n            <li>margin:1.58em auto 1.58em 0;</li>\n            <li>&#125;</li>\n            <li>background:@hrcolor;</li>\n          </ul>\n        </li>\n\n      </ul>\n\n\n    </div>\n    <div class=\"col-sm-12 col-md-12 col-lg-6\">\n\n    </div>\n  </div>\n\n\n</div>";

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
//# sourceMappingURL=src_app_css_css_module_ts.js.map