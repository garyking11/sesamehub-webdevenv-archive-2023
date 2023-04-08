(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_canadian-content_canadian-content_module_ts"],{

/***/ 8050:
/*!****************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanadianContentComponent": () => (/* binding */ CanadianContentComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _canadian_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canadian-content.component.html?ngResource */ 8109);
/* harmony import */ var _canadian_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canadian-content.component.css?ngResource */ 21756);
/* harmony import */ var _canadian_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_canadian_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _canadian_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canadian-content.service */ 42907);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CanadianContentComponent = (_class = class CanadianContentComponent {
  constructor(_copyDataToClipboardService, _canadianContentService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_canadianContentService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageName", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageType", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "canadiancontent", void 0);
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._canadianContentService = _canadianContentService;
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  onCopyThisHTMLToClipboard(id) {
    this._copyDataToClipboardService.copyThisHTMLDataToClipboard(id);
  }
  /**
   *
   * @param type
   * @param file
   */
  onGetCanadianContent(type, file) {
    let canadiancontent = {
      type: type,
      file: file
    };
    this.pageName = canadiancontent.file;
    this.pageType = canadiancontent.type;
    this._canadianContentService.getCanadianContent(canadiancontent).subscribe(data => {
      this.canadiancontent = data;
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__.CopyDataToClipboardService
}, {
  type: _canadian_content_service__WEBPACK_IMPORTED_MODULE_3__.CanadianContentService
}]), _class);
CanadianContentComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-canadian-content',
  template: _canadian_content_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_canadian_content_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CanadianContentComponent);


/***/ }),

/***/ 30919:
/*!*************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanadianContentModule": () => (/* binding */ CanadianContentModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _canadian_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canadian-content.component */ 8050);
/* harmony import */ var _canadian_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canadian-content.service */ 42907);
/* harmony import */ var _canadian_content_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./canadian-content.routes */ 63946);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import {AccordionModule} from "ngx-bootstrap";



let CanadianContentModule = class CanadianContentModule {};
CanadianContentModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  providers: [_canadian_content_service__WEBPACK_IMPORTED_MODULE_3__.CanadianContentService],
  imports: [
  // AccordionModule.forRoot(),
  _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__.SharedFormattingModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_canadian_content_routes__WEBPACK_IMPORTED_MODULE_4__.ROUTES), _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule],
  declarations: [_canadian_content_component__WEBPACK_IMPORTED_MODULE_2__.CanadianContentComponent],
  exports: [_canadian_content_component__WEBPACK_IMPORTED_MODULE_2__.CanadianContentComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_ELEMENTS_SCHEMA]
})], CanadianContentModule);


/***/ }),

/***/ 63946:
/*!*************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.routes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _canadian_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canadian-content.component */ 8050);

const ROUTES = [{
  path: '',
  component: _canadian_content_component__WEBPACK_IMPORTED_MODULE_0__.CanadianContentComponent
}];

/***/ }),

/***/ 42907:
/*!**************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CanadianContentService": () => (/* binding */ CanadianContentService)
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

// import 'rxjs/Rx';

let CanadianContentService = (_class = class CanadianContentService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  getCanadianContent(data) {
    return this._http.get('/dashboard/assets/canadian-site-content/canadian-formatted/' + data.type + '/' + data.file + '.html', {
      responseType: 'text'
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
CanadianContentService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], CanadianContentService);


/***/ }),

/***/ 21756:
/*!****************************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div a {\n    color: #0099cc;\n    cursor: pointer;\n}\n\n\ndiv a:hover{\n    color: #9ac628;\n}\n", "",{"version":3,"sources":["webpack://./src/app/canadian-content/canadian-content.component.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,eAAe;AACnB;;;AAGA;IACI,cAAc;AAClB","sourcesContent":["div a {\n    color: #0099cc;\n    cursor: pointer;\n}\n\n\ndiv a:hover{\n    color: #9ac628;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8109:
/*!*****************************************************************************!*\
  !*** ./src/app/canadian-content/canadian-content.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"canadian-content-container container\">\n\n    <h1>Canadian Content</h1>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12 wow fadeIn\">\n\n            <!-- DENTAL -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Dental\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <div><a (click)=\"onGetCanadianContent('dental', 'common-procedures')\">Common Procedures</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'dental-exams-and-cleanings')\">Dental Exams and\n                    Cleaning</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'dental-faqs')\">Dental FAQs</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'dentures')\">Dentures</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'fluoride')\">Fluoride</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'office-visits')\">Office Visits</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'maxillofacial-surgery')\">Maxillofacial\n                    Surgery</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'oral-cancer')\">Oral Cancer</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'oral-cancer-screening')\">Oral Cancer\n                    Screening</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'oral-surgery')\">Oral Surgery</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'prosthodontics')\">Prosthodontics</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'sedation-dentistry')\">Sedation Dentistry</a>\n                </div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'sleep-apnea')\">Sleep Apnea</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'teeth-for-life')\">Teeth For Life</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'velscope')\">VELscope</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'vizilite')\">ViziLite</a></div>\n                <div><a (click)=\"onGetCanadianContent('dental', 'tmj-tmd')\">TMJ-TMD</a></div>\n            </mat-expansion-panel>\n\n            <!-- ENDO -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Endo\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <div><a (click)=\"onGetCanadianContent('endo', 'what-is-an-endodontist')\">What Is An\n                    Endodontist</a>\n                </div>\n\n            </mat-expansion-panel>\n\n            <!-- ORTHO -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Ortho\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n\n                <div><a (click)=\"onGetCanadianContent('ortho', 'early-prevention')\">Early Prevention</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'fluoride')\">Fluoride</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'for-all-ages')\">For All Ages</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'for-children')\">For Children</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'how-to-choose-an-orthodontist')\">How To Choose An\n                    Orthodontist</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'mouthguards')\">Mouthguards</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'ortho-faqs')\">Ortho FAQs</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'sleep-apnea')\">Sleep Apnea</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'treatment-options')\">Treatment Options</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'about-orthodontics')\">About Orthodontics</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'damon-smile')\">Damon Smile</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'damon-smile-costs')\">Damon Smile Costs</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'damon-smile-faqs')\">Damon Smile FAQS</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'damon-smile-for-adults')\">Damon Smile For\n                    Adults</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'insignia')\">Insignia</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'invisalign-teen')\">Invisalign Teen</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'invisalign')\">Invisalign</a>\n                    <div class=\"small indent28\">(REMOVE INVISALIGN FOOTER/SOCIAL LINKS IN ALL PROPACK PAGES)\n                    </div>\n                </div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'office-visits')\">Office Visits</a></div>\n                <div><a (click)=\"onGetCanadianContent('ortho', 'two-phase-treatment')\">Two Phase Treatment</a>\n                </div>\n\n            </mat-expansion-panel>\n\n            <!-- PEDO -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Pedo\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n                <!-- sub groups -->\n\n                <div><a (click)=\"onGetCanadianContent('pedo', 'fluoride')\">Fluoride</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'how-to-choose-a-pediatric-dentist')\">How To Choose\n                    A Pediatric Dentist</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'mouthguards')\">Mouthguards</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'office-visits')\">Office Visits</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'pedo-dental-faqs')\">Pediatric Dental FAQs</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'pediatric-dentistry')\">Pediatric Dentistry</a>\n                </div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'special-needs-dentistry')\">Special Needs\n                    Dentistry</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'teeth-for-life')\">Teeth For Life</a></div>\n                <div><a (click)=\"onGetCanadianContent('pedo', 'thumb-sucking')\">Thumb Sucking</a></div>\n\n            </mat-expansion-panel>\n\n            <!-- PERIO -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Perio\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n\n                <div><a (click)=\"onGetCanadianContent('perio', 'gum-disease')\">Gum Disease</a></div>\n                <div><a (click)=\"onGetCanadianContent('perio', 'gum-disease-prevention')\">Gum Disease\n                    Prevention</a></div>\n                <div><a (click)=\"onGetCanadianContent('perio', 'oral-health-tips-to-prevent')\">Oral Health Tips\n                    To Avoid Gum Disease</a></div>\n                <div><a (click)=\"onGetCanadianContent('perio', 'periodontal-faqs')\">Periodontal FAQs</a></div>\n                <div><a (click)=\"onGetCanadianContent('perio', 'sedation-dentistry')\">Sedation Dentistry</a></div>\n                <div><a (click)=\"onGetCanadianContent('perio', 'what-is-gum-disease')\">What Is Gum Disease?</a>\n                </div>\n\n            </mat-expansion-panel>\n\n            <!-- PROSTHO -->\n            <mat-expansion-panel hideToggle>\n                <mat-expansion-panel-header>\n                    <mat-panel-title class=\"text-uppercase sesame-blue\">\n                        Prostho\n                    </mat-panel-title>\n                </mat-expansion-panel-header>\n\n\n                <div><a (click)=\"onGetCanadianContent('prostho', 'dentures')\">Dentures</a></div>\n                <div><a (click)=\"onGetCanadianContent('prostho', 'prosthodontics')\">Prosthodontics</a></div>\n                <div><a (click)=\"onGetCanadianContent('prostho', 'what-is-a-prosthodontist')\">What Is A\n                    Prosthodontiist</a></div>\n\n            </mat-expansion-panel>\n\n        </div><!-- end col -->\n\n        <div class=\"col-lg-8 col-md-8 col-sm-12 wow fadeIn\"  *ngIf=\"canadiancontent\">\n            <h3 class=\"sesame-green\">[{{pageType | capitalizeEachWord}}] {{pageName | replaceDashSpace |\n                capitalizeEachWord }}</h3>\n\n            <div class=\"sesame-blue\" (click)=\"onCopyThisHTMLToClipboard('#canadian-content');\"\n                 data-target=\"#canadian-content\">\n                <mat-icon >file_copy\n            </mat-icon>  Grab your HTML</div>\n\n            <div *ngIf=\"canadiancontent\" class=\"copy sesame-blue\">\n                <pre id=\"canadian-content\" class=\"wow fadeIn\">{{canadiancontent}}</pre>\n            </div>\n\n        </div><!-- end col2 -->\n\n    </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_canadian-content_canadian-content_module_ts.js.map