(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["default-src_app_login_user_user_module_ts"],{

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

/***/ 6404:
/*!**********************************************!*\
  !*** ./src/app/login/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component.html?ngResource */ 52251);
/* harmony import */ var _user_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.css?ngResource */ 636);
/* harmony import */ var _user_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_user_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 18422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ 37365);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// const opSys = require('os');
// import * as  opSys from 'os';
let UserComponent = (_class = class UserComponent {
  /**
   *
   * @type {{role: string; display: string}[]}
   */

  constructor(_userService, _siteContextProviderService, _fb, _authenticationService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_userService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_authenticationService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userData", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "userDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteData", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sMdata", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "gulpVersion", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "username", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentUser", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "allUsers", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isAdmin", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "roles", [{
      'role': 'Admin',
      'display': 'Admin'
    }, {
      'role': 'Builder',
      'display': 'Builder'
    }, {
      'role': 'Production-Artist',
      'display': 'Production Artist'
    }, {
      'role': 'Producer',
      'display': 'Producer'
    }]);
    this._userService = _userService;
    this._siteContextProviderService = _siteContextProviderService;
    this._fb = _fb;
    this._authenticationService = _authenticationService;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([])
    });
    this.userData = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      singledbl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      ba_before_prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      ba_after_prefix: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      max_width_slide_image: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('600')
    });
  }
  ngOnInit() {
    this.isLoading = false;
    this.onGetSiteContext();
    this._authenticationService.checkCredentials();
    this.getSiteManagerData();
    this.validateCurrentUser();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.moveItemInArray)(this.userForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.userForm.controls['items'].updateValueAndValidity();
  }
  // TODO: get user role
  // TODO: show or hide all or specified user
  validateCurrentUser() {
    // get current user
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(this.isAdmin);
    this._userService.getData().subscribe(res => {
      let data;
      try {
        data = res;
      } catch (e) {
        return;
      }
      let isAdmin;
      data.users.forEach(function (item) {
        if (item.role === 'Admin') {
          isAdmin = true;
        }
      });
    });
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
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  getSiteManagerData() {
    const packageJSON = __webpack_require__(/*! ../../../../../package.json */ 99876);
    this.gulpVersion = packageJSON.devDependencies.gulp;
  }
  /**
   * Get current form data from selected account /www/assets/includes/data/form-data-json
   * @param account
   * @returns {any[]}
   */
  onGetFormData() {
    this._userService.getData().subscribe(res => {
      let data;
      try {
        data = res;
      } catch (e) {
        return;
      }
      this.userDataArray = data;
      this.userForm = this._fb.group({
        items: this._fb.array([])
      });
      let userForm = this.userForm;
      let component = this;
      this.deleteConfirmationArray = [];
      // Create an array from account form-data.json
      data.users.forEach(function (item) {
        let control = userForm.controls['items'];
        control.push(component._fb.group({
          username: [item.username],
          password: [item.password],
          confirm_password: [item.confirm_password],
          information: [item.information],
          role: [item.role],
          nodeVersion: [item.nodeVersion],
          gulpVersion: [item.gulpVersion]
        }));
        component.deleteConfirmationArray.push(false);
      });
    }, error => console.log(error));
    return this.userDataArray;
  }
  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * @param form
   */
  onSetFormData(form) {
    let userdata = {
      users: form.value.items
    };
    // Set new values
    this._userService.postData(userdata).subscribe(data => {
      console.log(userdata);
    }, error => console.log(error));
  }
  /**
   * Create Form Group
   * @returns {FormGroup}
   *
   */
  initItem() {
    return this._fb.group({
      username: [''],
      password: [''],
      confirm_password: [''],
      information: [''],
      role: ['']
    });
  }
  /**
   * Add item to the list
   */
  addItem() {
    const control = this.userForm.controls['items'];
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
    if (status === 'deleteItem') {
      this.removeItem(i, itemVal);
      this.deleteConfirmationArray[i] = false;
    } else if (status === 'cancelDeleteItem') {
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
    const control = this.userForm.controls['items'];
    control.removeAt(i);
    this.onSetFormData(itemVal);
  }
  // end delete form item
  logout() {
    this._authenticationService.logout();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_5__.SiteContextProviderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}]), _class);
UserComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'dev-user',
  template: _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_user_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], UserComponent);


/***/ }),

/***/ 77656:
/*!*******************************************!*\
  !*** ./src/app/login/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _user_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.routes */ 49129);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ 6404);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ 37365);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ 18422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_dashboard_admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin-dashboard/admin-nav/admin-nav/admin-nav.module */ 53415);
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/keys.pipe */ 81505);
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/sort.pipe */ 13282);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















let UserModule = class UserModule {};
UserModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  providers: [_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService, _authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService, _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_6__.KeysPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_user_routes__WEBPACK_IMPORTED_MODULE_0__.ROUTES), _admin_dashboard_admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_5__.AdminNavModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.DragDropModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_8__.SharedFormattingModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule],
  declarations: [_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent, _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_7__.SortPipe],
  exports: [_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent]
})], UserModule);


/***/ }),

/***/ 49129:
/*!*******************************************!*\
  !*** ./src/app/login/user/user.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 6404);
/* harmony import */ var _auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/authentication.guard */ 21395);


const ROUTES = [{
  path: '',
  canActivate: [_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard],
  component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent
}];

/***/ }),

/***/ 13282:
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SortPipe = class SortPipe {
  transform(array, args) {
    array.sort((a, b) => {
      if (a[args] < b[args]) {
        return -1;
      } else if (a[args] > b[args]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
};
SortPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: "sortBy"
})], SortPipe);


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

/***/ 636:
/*!**********************************************************!*\
  !*** ./src/app/login/user/user.component.css?ngResource ***!
  \**********************************************************/
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

/***/ 49472:
/*!*******************************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-nav/admin-nav.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Admin navigaton -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/admin']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Admin\n    </button>&nbsp;\n</span>\n\n<!-- Users -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/user']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Users\n    </button>&nbsp;\n</span>\n\n<!-- Library Pages -->\n<span>\n    <button mat-raised-button [routerLink]=\"['/manage-image-manager']\"\n       [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Image Manager\n    </button>&nbsp;\n</span>\n\n<span>\n    <button mat-raised-button [routerLink]=\"['/changelog']\"\n            [routerLinkActive]=\"['active']\">\n        <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i> Changelog\n    </button>&nbsp;\n</span>\n\n<!-- Logout -->\n<span>\n    <button mat-raised-button  (click)=\"logout();\">\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout\n    </button>&nbsp;\n</span>\n\n\n<br/><br/>\n<hr/>\n";

/***/ }),

/***/ 52251:
/*!***********************************************************!*\
  !*** ./src/app/login/user/user.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"user-container container\">\n\n    <h1>Manage Users</h1>\n\n    <div class=\"row  fadeIn\">\n\n        <dev-admin-nav></dev-admin-nav>\n\n        <div class=\"clear\"></div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n\n            <!-- start add user form -->\n\n            <div>\n\n                <form [formGroup]=\"userForm\" novalidate (ngSubmit)=\"onSetFormData(userForm)\"\n                      class=\"\">\n\n                    <div>\n                        <button mat-raised-button\n                                class=\"float-start\"\n                                style=\"margin-right: 5px;\"\n                                type=\"submit\">\n                            <mat-icon class=\" sesame-blue\">save</mat-icon>\n                            Save\n                        </button>\n                        <!-- add item -->\n                        <button type=\"button\" mat-raised-button (click)=\"addItem()\">\n                            <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon>\n                            Add\n                        </button>\n\n                        <br/> <br/>\n\n                        <div class=\"clear\"></div>\n                    </div>\n\n                    <mat-accordion multi=\"false\">\n\n                        <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                            <div formArrayName=\"items\">\n\n                                <div *ngFor=\"let item of userForm.controls['items'].controls; let i = index; let even=even; let odd=odd;\"\n                                     class=\"\" [ngClass]=\"{ odd: odd, even: even }\"\n                                     cdkDrag>\n\n                                    <div [formGroupName]=\"i\">\n\n                                        <mat-expansion-panel>\n\n                                            <mat-expansion-panel-header>\n                                                <mat-panel-title>\n                                                    <div *ngIf=\"userForm.controls['items'].controls[i].controls.username.value; \">\n                                                        <span class=\"sesame-blue\">{{userForm.controls['items'].controls[i].controls.username.value }}</span>\n                                                        &nbsp;<span\n                                                            class=\"sesame-green\">{{item.controls.role.value | replaceDashSpace}}</span>\n                                                    </div>\n                                                </mat-panel-title>\n                                            </mat-expansion-panel-header>\n\n                                            <br />\n\n                                            <!-- item-info-bar -->\n                                            <div class=\"item-info-bar\">\n                                                <div class=\"delete-add-wrap\">\n\n                                                    <div class=\"delete-button\">\n\n                                                        <!-- add/delete buttons -->\n                                                        <div class=\"float-start\"\n                                                             style=\"width: 49%;\n                                                            text-align: center;\">\n                                                            <!--  add method -->\n                                                            <span class=\" text-info\"\n                                                                  (click)=\"addItem()\">\n                                                    <mat-icon>add</mat-icon>\n                                                </span>\n                                                        </div>\n\n                                                        <!-- delete method -->\n                                                        <div class=\"float-end\"\n                                                             style=\"width: 49%; text-align: center;\">\n                                                <span class=\"text-danger\"\n                                                      *ngIf=\"userForm.controls.items.controls.length > 0\"\n                                                      (click)=\"confirmDeleteMessage(i, $event)\"\n                                                      value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                </span>\n                                                        </div>\n\n                                                        <!-- confirmation or cancel -->\n                                                        <div *ngIf=\"deleteConfirmationArray[i]\" class=\"delete-confirm\">\n                                                            <!-- delete -->\n                                                            <span class=\"float-start sesame-danger \"\n                                                                  style=\"width: 49%; \"\n                                                                  (click)=\"confirmDelete(i, adminForm, 'deleteItem')\">\n                                                Delete\n                                                </span>\n                                                            <!-- confirm delete -->\n                                                            <span type=\"button\"\n                                                                  class=\"float-end sesame-green-background\"\n                                                                  style=\"width: 49%;\"\n                                                                  (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                                    Cancel\n                                                </span>\n\n                                                        </div><!-- delete buttons -->\n                                                    </div><!-- end buttons -->\n\n                                                    <div class=\"clear\"></div>\n\n                                                </div>\n                                            </div><!-- end item-info bar -->\n\n                                            <div>\n                                                <mat-form-field class=\"float-start\"\n                                                                style=\"width: 48%;\n                                                                margin-right: 1%;\">\n                                                    <input matInput\n                                                           type=\"text\"\n                                                           formControlName=\"username\"\n                                                           name=\"username\"\n                                                           placeholder=\"Username\"\n                                                           #username>\n                                                </mat-form-field>\n\n                                                <mat-form-field class=\"float-end\"\n                                                                style=\"width: 48%; margin-left: 1%;\">\n                                                    <mat-select formControlName=\"role\"\n                                                                name=\"role\"\n                                                                placeholder=\"Role\"\n                                                                #role>\n\n                                                        <mat-option *ngFor=\"let item of roles;\" value=\"{{item.role}}\">\n                                                            {{item.display}}\n                                                        </mat-option>\n                                                    </mat-select>\n                                                </mat-form-field>\n                                            </div>\n                                            <div class=\"clear\"></div>\n\n                                            <div>\n                                                <mat-form-field\n                                                                class=\"float-start\"\n                                                                placeholder=\"password\"\n                                                                style=\"width: 48%; margin-right: 1%;\">\n                                                    <input matInput\n                                                           type=\"password\"\n                                                           formControlName=\"password\"\n                                                           name=\"password\"\n                                                           placeholder=\"Password\" #password>\n                                                </mat-form-field>\n\n                                                <mat-form-field\n                                                                placeholder=\"Confirm Password\"\n                                                                class=\"float-end\"\n                                                                style=\"width: 48%; margin-left: 1%;\">\n                                                    <input matInput\n                                                           type=\"password\"\n                                                           formControlName=\"confirm_password\"\n                                                           name=\"confirm_password\"\n                                                           placeholder=\"Confirm Password\"\n                                                           #confirm_password>\n                                                </mat-form-field>\n\n                                            </div>\n\n                                            <div class=\"clear\"></div>\n\n\n                                            <hr/>\n\n\n\n                                            <div class=\"form-group\">\n                                                <mat-label>User Information</mat-label>\n                                                <textarea type=\"text\"\n                                                          class=\"form-control\"\n                                                          formControlName=\"information\"\n                                                          name=\"information\" placeholder=\"Information\"\n                                                          #information></textarea>\n                                            </div>\n                                        </mat-expansion-panel>\n                                    </div>\n\n\n                                </div>\n\n                            </div>\n\n\n                        </div>\n                    </mat-accordion>\n\n                    <!--</div>-->\n                    <!--&lt;!&ndash; end ngFor &ndash;&gt;-->\n\n                </form>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 col-md-6 col-lg-6\">\n\n            <div\n                    *ngFor=\"let item of userForm.controls['items'].value\n                             let i = index; let first = first;\">\n\n                <span class=\"text-info bold\">USER: {{item.username}}</span><br/>\n                ROLE: {{item.role}}&nbsp;&#124;&nbsp;OS: {{os}}&nbsp;&#124;&nbsp;GULP:&nbsp;{{gulpVersion}}\n\n                <!-- {{item.password}} -->\n                <p class=\"border-d8d8d8\" style=\"padding: 10px;\">\n                    {{item.information}}\n                </p>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n</div>\n\n\n\n\n\n";

/***/ }),

/***/ 99876:
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"sesamepackage","version":"12.0.0","description":"Site Manager","main":"gulpfile.js","dependencies":{"@babel/core":"^7.16.10","babel-cli":"^6.26.0","babel-loader":"^8.2.3","babel-preset-env":"^1.7.0","browser-sync":"^2.26.14","del":"^6.0.0","file-system":"^2.2.2","fs-then":"^0.2.0","gulp-assemble":"^0.3.3","gulp-autoprefixer":"^7.0.1","gulp-cached":"^1.1.1","gulp-chug":"^0.5.1","gulp-concat":"^2.6.1","gulp-filter":"^7.0.0","gulp-group-css-media-queries":"^1.2.2","gulp-imagemin":"7.1.0","gulp-less":"^4.0.1","gulp-rename":"^2.0.0","gulp-uncache":"^0.4.0-beta1","imagemin":"","imagemin-gifsicle":"^7.0.0","imagemin-jpegtran":"^7.0.0","imagemin-optipng":"^7.1.0","imagemin-pngquant":"","imagemin-svgo":"^7.1.0","imagemin-webp":"","merge-stream":"^2.0.0","module":"^1.2.5","parse":"^3.2.0","require-uncached":"^2.0.0","rimraf":"^3.0.2"},"devDependencies":{"autoprefixer":"^9.8.6","browserslist":"^1.0.1","gulp":"^4.0.0","gulp-batch":"^1.0.5","gulp-cache-uncache":"^1.0.1","gulp-clean":"^0.4.0","gulp-ext-replace":"^0.3.0","gulp-install":"^1.1.0","gulp-livereload":"^4.0.2","gulp-plumber":"^1.2.1","gulp-postcss":"^8.0.0","gulp-run-task-if":"^1.0.3","gulp-sass":"^5.1.0","gulp-sourcemaps":"^3.0.0","gulp-util":"^3.0.8","livereload":"^0.9.3","sass":"^1.46.0"},"scripts":{"test":"test"},"repository":{"type":"git","url":"nul"},"keywords":["nul"],"license":"ISC"}');

/***/ })

}]);
//# sourceMappingURL=default-src_app_login_user_user_module_ts.js.map