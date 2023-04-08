(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_admin-dashboard_admin-image-manager_admin-image-manager_module_ts"],{

/***/ 62302:
/*!**************************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/admin-image-manager.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminImageManagerComponent": () => (/* binding */ AdminImageManagerComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _admin_image_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-image-manager.component.html?ngResource */ 54097);
/* harmony import */ var _admin_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-image-manager.component.css?ngResource */ 95438);
/* harmony import */ var _admin_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _manage_library_pages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-library-pages.service */ 24096);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/custom-validators.service */ 46077);
/* harmony import */ var _login_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../login/authentication.service */ 18422);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









/*
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {AuthenticationService} from "../login/authentication.service";
*/
let AdminImageManagerComponent = (_class = class AdminImageManagerComponent {
  constructor(_manageLibraryPagesService, _siteContextProviderService, _customValidatorsService, _fb, _authenticationService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_manageLibraryPagesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_customValidatorsService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_authenticationService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lib_page", new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "libraryPageForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "libraryPageData", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "libraryPageDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteData", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", void 0);
    this._manageLibraryPagesService = _manageLibraryPagesService;
    this._siteContextProviderService = _siteContextProviderService;
    this._customValidatorsService = _customValidatorsService;
    this._fb = _fb;
    this._authenticationService = _authenticationService;
    this.libraryPageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([])
    });
    this.libraryPageData = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      lib_page: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl()
    });
  }
  ngOnInit() {
    this.isLoading = false;
    this.onGetSiteContext();
    this._authenticationService.checkCredentials();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__.moveItemInArray)(this.libraryPageForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.libraryPageForm.controls['items'].updateValueAndValidity();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.sitecontext = data;
      this.onGetFormData();
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get current form data from selected account /www/assets/includes/data/form-data-json
   * @param account
   * @returns {any[]}
   */
  onGetFormData() {
    this._manageLibraryPagesService.getData().subscribe(res => {
      let data;
      try {
        data = res;
      } catch (e) {
        return;
      }
      this.libraryPageDataArray = data.library_pages;
      this.libraryPageForm = this._fb.group({
        items: this._fb.array([])
      });
      console.log(data);
      let libraryPageForm = this.libraryPageForm;
      let component = this;
      this.deleteConfirmationArray = [];
      //Create an array from account form-data.json
      data.library_pages.forEach(function (item) {
        let control = libraryPageForm.controls['items'];
        control.push(component._fb.group({
          lib_page: [item.lib_page, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
        }));
        component.deleteConfirmationArray.push(false);
      });
    }, error => console.log(error));
    return this.libraryPageDataArray.sort();
  }
  /**
   * Write updated form data to /dashboard/data/library-page-data.json
   * @param form
   */
  onSetFormData(form) {
    let librarypagedata = {
      library_pages: form.value.items
    };
    // Set new values
    this._manageLibraryPagesService.postData(librarypagedata).subscribe(data => {
      console.log(librarypagedata);
      this.libraryPageForm.controls['items'].updateValueAndValidity();
      console.log('Library Page data updated: ' + new Date().toUTCString());
    }, error => console.log(error));
  }
  /**
   * Create Form Group
   * @returns {FormGroup}
   *
   */
  initItem() {
    return this._fb.group({
      lib_page: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
    });
  }
  /**
   * Add item to the list
   */
  addItem() {
    const control = this.libraryPageForm.controls['items'];
    control.insert(0, this.initItem());
  }
  confirmDeleteMessage(i, el) {
    this.confirm = true;
    this.cancel = true;
    this.deleteConfirmationArray[i] = true;
  }
  /**
   * Delete form item
   * @param i
   * @param itemVal
   * @param status
   * @returns {boolean}
   */
  confirmDelete(i, itemVal, status) {
    if (status == "deleteItem") {
      this.removeItem(i, itemVal);
      this.deleteConfirmationArray[i] = false;
    } else if (status == 'cancelDeleteItem') {
      this.deleteConfirmationArray[i] = false;
      return false;
    }
  }
  /**
   * Remove items from the list
   * @param i
   * @param itemVal
   */
  removeItem(i, itemVal) {
    const control = this.libraryPageForm.controls['items'];
    control.removeAt(i);
    this.onSetFormData(itemVal);
  }
  //End delete form item
  logout() {
    this._authenticationService.logout();
  }
  onSortSuccessful(e) {
    this.libraryPageForm.controls['items'].updateValueAndValidity();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _manage_library_pages_service__WEBPACK_IMPORTED_MODULE_3__.ManageLibraryPagesService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_5__.CustomValidatorsService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_6__.AuthenticationService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  lib_page: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
  }]
}), _class);
AdminImageManagerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'dev-admin-image-manager',
  template: _admin_image_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminImageManagerComponent);


/***/ }),

/***/ 65347:
/*!***********************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/admin-image-manager.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminImageManagerModule": () => (/* binding */ AdminImageManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-nav/admin-nav/admin-nav.module */ 53415);
/* harmony import */ var _admin_image_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-image-manager.component */ 62302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _admin_image_manager_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-image-manager.routes */ 12487);
/* harmony import */ var _manage_library_pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-library-pages.service */ 24096);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/utilities.module */ 93081);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {AlertModule, ModalModule} from "ngx-bootstrap";
















let AdminImageManagerModule = class AdminImageManagerModule {};
AdminImageManagerModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  providers: [_manage_library_pages_service__WEBPACK_IMPORTED_MODULE_6__.ManageLibraryPagesService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_0__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_1__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_2__.SharedFileManageModule, _admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_3__.AdminNavModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_admin_image_manager_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES), _admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_3__.AdminNavModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_7__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_admin_image_manager_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES), _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_18__.DragDropModule],
  declarations: [_admin_image_manager_component__WEBPACK_IMPORTED_MODULE_4__.AdminImageManagerComponent],
  exports: [_admin_image_manager_component__WEBPACK_IMPORTED_MODULE_4__.AdminImageManagerComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.CUSTOM_ELEMENTS_SCHEMA]
})], AdminImageManagerModule);


/***/ }),

/***/ 12487:
/*!***********************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/admin-image-manager.routes.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _admin_image_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-image-manager.component */ 62302);

const ROUTES = [{
  path: '',
  component: _admin_image_manager_component__WEBPACK_IMPORTED_MODULE_0__.AdminImageManagerComponent
}];

/***/ }),

/***/ 86121:
/*!******************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-nav/admin-nav.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNavComponent": () => (/* binding */ AdminNavComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _admin_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-nav.component.html?ngResource */ 49472);
/* harmony import */ var _admin_nav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-nav.component.css?ngResource */ 11943);
/* harmony import */ var _admin_nav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_nav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login/authentication.service */ 18422);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {AuthenticationService} from "../../login/authentication.service";
//import {AuthenticationService} from "../login/authentication.service";
let AdminNavComponent = (_class = class AdminNavComponent {
  constructor(_authenticationService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_authenticationService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adminForm", void 0);
    this._authenticationService = _authenticationService;
  }
  ngOnInit() {
    this._authenticationService.checkCredentials();
  }
  logout() {
    this._authenticationService.logout();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.moveItemInArray)(this.adminForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.adminForm.controls['items'].updateValueAndValidity();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}]), _class);
AdminNavComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-admin-nav',
  template: _admin_nav_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_nav_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminNavComponent);


/***/ }),

/***/ 53415:
/*!*************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-nav/admin-nav/admin-nav.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNavModule": () => (/* binding */ AdminNavModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin-nav.component */ 86121);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84522);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let AdminNavModule = class AdminNavModule {};
AdminNavModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule],
  declarations: [_admin_nav_component__WEBPACK_IMPORTED_MODULE_0__.AdminNavComponent],
  exports: [_admin_nav_component__WEBPACK_IMPORTED_MODULE_0__.AdminNavComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.CUSTOM_ELEMENTS_SCHEMA]
})], AdminNavModule);


/***/ }),

/***/ 95438:
/*!**************************************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/admin-image-manager.component.css?ngResource ***!
  \**************************************************************************************************/
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

/***/ 11943:
/*!******************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-nav/admin-nav.component.css?ngResource ***!
  \******************************************************************************/
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

/***/ 54097:
/*!***************************************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-image-manager/admin-image-manager.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"image-manager-admin container\">\n\n    <h1>Image Manager Admin</h1>\n\n    <div class=\"row wow fadeIn\">\n\n        <dev-admin-nav></dev-admin-nav>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n\n            <form [formGroup]=\"libraryPageForm\" novalidate (ngSubmit)=\"onSetFormData(libraryPageForm)\"\n                  class=\"rounded-top-bottom\">\n\n                <div>\n                    <button mat-raised-button\n                            class=\"float-start\"\n                            style=\"margin-right: 5px;\"\n                            type=\"submit\"><mat-icon class=\" sesame-blue\">save</mat-icon> Save\n                    </button>\n                    <!-- add item -->\n                    <button type=\"button\" mat-raised-button (click)=\"addItem()\">\n                        <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon> Add\n                    </button>\n\n                    <br/> <br/>\n\n                </div>\n\n                <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                    <mat-accordion multi=\"false\">\n\n                        <div formArrayName=\"items\">\n\n                            <!--| sortBy : 'item'-->\n                            <div *ngFor=\"let item of libraryPageForm.controls['items'].controls ;\n                                let i = index; let even=even; let odd=odd;\" class=\"rounded-top-bottom\"\n                                 [ngClass]=\"{ odd: odd, even: even }\"\n                                 cdkDrag>\n\n                                <div [formGroupName]=\"i\"\n                                     [ngClass]=\"{ odd: odd, even: even }\">\n\n\n                                    <mat-expansion-panel hideToggle>\n\n                                        <mat-expansion-panel-header>\n                                            <mat-panel-title>\n                                                <div *ngIf=\"item.controls.lib_page.value as value; \">\n                                                    <span class=\"sesame-blue\">{{item.controls.lib_page.value | replaceDashSpace | titlecase}}</span>\n\n                                                </div>\n\n\n                                            </mat-panel-title>\n                                        </mat-expansion-panel-header>\n\n\n\n                                            <!-- item-info-bar -->\n                                            <div class=\"item-info-bar\">\n                                                <div class=\"delete-add-wrap\">\n\n                                                    <div class=\"delete-button\">\n\n                                                        <!-- add/delete buttons -->\n                                                        <div class=\"float-start\"\n                                                             style=\"width: 49%;\n                                                            text-align: center;\">\n                                                            <!--  add method -->\n                                                            <span class=\" text-info\"\n                                                                  (click)=\"addItem()\">\n                                                    <mat-icon>add</mat-icon>\n                                                </span>\n                                                        </div>\n\n                                                        <!-- delete method -->\n                                                        <div class=\"float-end\"\n                                                             style=\"width: 49%; text-align: center;\">\n                                                <span class=\"text-danger\"\n                                                      *ngIf=\"libraryPageForm.controls.items.controls.length > 0\"\n                                                      (click)=\"confirmDeleteMessage(i, $event)\"\n                                                      value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                </span>\n                                                        </div>\n\n                                                        <!-- confirmation or cancel -->\n                                                        <div *ngIf=\"deleteConfirmationArray[i]\" class=\"delete-confirm\">\n                                                            <!-- delete -->\n                                                            <span class=\"float-start sesame-danger \"\n                                                                  style=\"width: 49%; \"\n                                                                  (click)=\"confirmDelete(i, libraryPageForm, 'deleteItem')\">\n                                                Delete\n                                                </span>\n                                                            <!-- confirm delete -->\n                                                            <span type=\"button\"\n                                                                  class=\"float-end sesame-green-background\"\n                                                                  style=\"width: 49%;\"\n                                                                  (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                                    Cancel\n                                                </span>\n\n                                                        </div><!-- delete buttons -->\n                                                    </div><!-- end buttons -->\n\n                                                    <div class=\"clear\"></div>\n\n                                                </div>\n                                            </div><!-- end item-info bar -->\n\n\n                                            <div class=\"form-group pull-left\">\n                                                <label>Page Title</label>\n                                                <input class=\"form-control\" type=\"text\" formControlName=\"lib_page\"\n                                                       name=\"lib_page\" placeholder=\"Page Title\" #lib_page>\n                                            </div>\n                                            <div class=\"clear\"></div>\n                                            <div [hidden]=\"libraryPageForm.controls['items'].controls[i].controls.lib_page.valid\n                                        || (libraryPageForm.controls['items'].controls[i].controls.lib_page.pristine && !libraryPageForm.submitted)\"\n                                                 class=\"bg-danger small\">Page title is required\n                                            </div>\n\n                            </mat-expansion-panel>\n\n                            </div><!-- end formGroupName i -->\n                            </div>\n                        </div><!-- end ngFor -->\n                    </mat-accordion>\n\n                </div>\n\n            </form>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <!-- Show library pages -->\n            <h3>Library Page</h3>\n\n            <!--| sortBy: 'page'-->\n            <div *ngFor=\"let page of libraryPageForm.controls['items'].value | keys ;\n            let i = index; let even=even; let odd=odd;\">\n\n\n                <div class=\"\">\n                    <span *ngIf=\"page.value.lib_page\">{{page.value.lib_page | replaceCharactersExceptDash | replaceTrailingDash | replaceSpaceDash | toLowercase}}</span>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n";

/***/ }),

/***/ 49472:
/*!*******************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-nav/admin-nav.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Admin navigaton -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/admin']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Admin\n    </button>&nbsp;\n</span>\n\n<!-- Users -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/user']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Users\n    </button>&nbsp;\n</span>\n\n<!-- Library Pages -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/manage-image-manager']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Image Manager\n    </button>&nbsp;\n</span>\n\n<span>\n    <button mat-raised-button [routerLink]=\"['/changelog']\"\n            [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Changelog\n    </button>&nbsp;\n</span>\n\n<!-- Logout -->\n<span>\n    <button mat-raised-button  (click)=\"logout();\">\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n    </button>&nbsp;\n</span>\n\n\n<br/><br/>\n<hr/>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin-image-manager_admin-image-manager_module_ts.js.map