(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["common"],{

/***/ 24096:
/*!*************************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/manage-library-pages.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageLibraryPagesService": () => (/* binding */ ManageLibraryPagesService)
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


let ManageLibraryPagesService = (_class = class ManageLibraryPagesService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    this._http = _http;
  }
  /**
   *
   * @param data
   */
  postData(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/admin-image-manager-library-pages.php', body, {
      headers: headers
    });
  }
  /**
   *
   * @returns {Observable<Response>}
   */
  getData() {
    return this._http.get('/dashboard/data/image-manager-library-pages.json?v=' + new Date());
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
ManageLibraryPagesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ManageLibraryPagesService);


/***/ }),

/***/ 46626:
/*!**************************************************************************!*\
  !*** ./src/app/image-manager/image-manager-copy-to-local-dir.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageManagerCopyToLocalDirService": () => (/* binding */ ImageManagerCopyToLocalDirService)
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

// import {Headers, Response} from "@angular/http";
// import 'rxjs/Rx';

let ImageManagerCopyToLocalDirService = (_class = class ImageManagerCopyToLocalDirService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  /**
   * @param account
   * @param currentFile
   * @param newFile
   * @param ratio
   * @param category
   * @param imagerepo (image repository main directory on srwd)
   * @returns {Observable<Response>}
   */
  // TODO Remove unused parameters
  copyImagesToLocal(account, currentFile, newFile, ratio, category, imageRepo) {
    const body = JSON.stringify([account, currentFile, newFile]);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/copy-image-manager-files-to-local.php', body, {
      headers: headers
    });
  }
  /**
   * @param account
   * Get current contents of /account-name/www/assets/uploads/images
   * @returns {Observable<Response>}
   */
  listLocalAccountImages(account) {
    const body = JSON.stringify({
      account
    });
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-image-manager-local-files.php', body, {
      headers: headers
    });
  }
  listLocalSliderImages(account, directory) {
    // default
    if (directory === null) {
      directory = 'before-after-cycle';
    }
    const body = JSON.stringify([account, directory]);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-slider-local-files.php', body, {
      headers: headers
    });
  }
  /**
   * @param account
   * @param directory
   * @param fileToDelete
   * @returns {Observable<Response>}
   */
  deleteImageFromLocalDir(account, directory, fileToDelete) {
    const body = JSON.stringify({
      account,
      directory,
      fileToDelete
    });
    console.log(body);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
ImageManagerCopyToLocalDirService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ImageManagerCopyToLocalDirService);


/***/ }),

/***/ 87868:
/*!*************************************************************************!*\
  !*** ./src/app/partials/add-save-buttons/add-save-buttons.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSaveButtonsComponent": () => (/* binding */ AddSaveButtonsComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _add_save_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-save-buttons.component.html?ngResource */ 7082);
/* harmony import */ var _add_save_buttons_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-save-buttons.component.css?ngResource */ 2967);
/* harmony import */ var _add_save_buttons_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_save_buttons_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AddSaveButtonsComponent = (_class = class AddSaveButtonsComponent {
  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "addSaveButton", new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter());
  }
  addItem() {
    this.addSaveButton.emit();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  addSaveButton: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
}), _class);
AddSaveButtonsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'add-save-buttons',
  template: _add_save_buttons_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_add_save_buttons_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AddSaveButtonsComponent);


/***/ }),

/***/ 19367:
/*!**************************************************************!*\
  !*** ./src/app/partials/add-save-buttons/add-save-module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSaveButtonsModule": () => (/* binding */ AddSaveButtonsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _add_save_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-save-buttons.component */ 87868);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AddSaveButtonsModule = class AddSaveButtonsModule {};
AddSaveButtonsModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  providers: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule],
  declarations: [_add_save_buttons_component__WEBPACK_IMPORTED_MODULE_0__.AddSaveButtonsComponent],
  exports: [_add_save_buttons_component__WEBPACK_IMPORTED_MODULE_0__.AddSaveButtonsComponent]
})], AddSaveButtonsModule);


/***/ }),

/***/ 2967:
/*!*************************************************************************************!*\
  !*** ./src/app/partials/add-save-buttons/add-save-buttons.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7082:
/*!**************************************************************************************!*\
  !*** ./src/app/partials/add-save-buttons/add-save-buttons.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- buttons at top of pages used to submit to json files via parent, service, endpoint to account-name -->\n<div>\n    <button mat-raised-button\n            class=\"float-start\"\n            style=\"margin-right: 5px;\"\n            type=\"submit\"><mat-icon class=\" sesame-blue\">save</mat-icon> Save\n    </button>\n    <!-- add item -->\n    <!--<button type=\"button\" mat-raised-button (click)=\"addItem()\">\n        <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon>\n        Add\n    </button>-->\n\n    <br/> <br/>\n\n    <div class=\"clear\"></div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map