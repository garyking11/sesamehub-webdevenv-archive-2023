(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_admin-dashboard_admin_admin_admin_module_ts"],{

/***/ 91935:
/*!**********************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component.html?ngResource */ 16756);
/* harmony import */ var _admin_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.css?ngResource */ 47346);
/* harmony import */ var _admin_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.service */ 18109);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AdminComponent = (_class = class AdminComponent {
  constructor(_adminService, _siteContextProviderService, _copyDataToClipboardService, _snackBarService, _fb) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_adminService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adminForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adminData", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "adminDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteData", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", void 0);
    this._adminService = _adminService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._snackBarService = _snackBarService;
    this._fb = _fb;
    this.adminForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArray([])
    });
    this.adminData = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
  }
  /**
   *
   * @type {{value: string; display: string}[]}
   */
  ngOnInit() {
    this.isLoading = false;
    this.onGetSiteContext();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.sitecontext = data;
      this.onGetFormData();
      // this.onGetProductType(data.account);
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get local product type from /account/www/assets/includes/data/data.json
   * @param account
   */
  /*onGetProductType(account) {
      this._siteContextProviderService.getProductType(account)
          .subscribe(
              data => {
                  const siteDataArray = [];
                   for (let key in data) {
                      siteDataArray.push(data[key]);
                  }
                  this.siteData = siteDataArray;
              },
              error => console.log(error)
          );
  };*/
  /**
   * Get current form data from selected account /www/assets/includes/data/form-data-json
   * @param account
   * @returns {any[]}
   */
  onGetFormData() {
    this._adminService.getFormData().subscribe(res => {
      let data;
      try {
        data = res;
      } catch (e) {
        return;
      }
      this.adminDataArray = data.adminData;
      this.adminForm = this._fb.group({
        items: this._fb.array([])
      });
      let adminForm = this.adminForm;
      let component = this;
      this.deleteConfirmationArray = [];
      // create an array from account form-data.json
      data.adminData.forEach(function (item) {
        let control = adminForm.controls['items'];
        control.push(component._fb.group({
          name: [item.name],
          version: [item.version, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
          date: [item.date],
          release: [item.release],
          angular_version: [item.angular_version],
          comments: [item.comments]
        }));
        component.deleteConfirmationArray.push(false);
      });
    }, error => console.log(error));
    return this.adminDataArray;
  }
  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * @param form
   */
  onSetFormData(form) {
    let admindata = {
      account: this.sitecontext.account,
      adminData: form.value.items
    };
    // Get new values
    this._adminService.setFormData(admindata).subscribe(data => {
      this._snackBarService.openSnackBar('Your admin data has been saved!', '');
    }, error => console.log(error));
  }
  /**
   * Create Form Group
   * @returns {FormGroup}
   *
   */
  initItem() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth(); // Be careful! January is 0 not 1
    let year = currentDate.getFullYear();
    let releaseDate = month + 1 + '-' + date + '-' + year;
    return this._fb.group({
      name: ['gking'],
      version: ['3.94.0'],
      date: [releaseDate],
      release: [''],
      angular_version: ['4.2.4'],
      comments: ['']
    });
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(this.adminForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.adminForm.controls['items'].updateValueAndValidity();
  }
  /**
   * Add item to the list
   */
  addItem() {
    console.log('add item fired');
    const control = this.adminForm.controls['items'];
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
    const control = this.adminForm.controls['items'];
    control.removeAt(i);
    this.onSetFormData(itemVal);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  onCopyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  onCopyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}]), _class);
AdminComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'admin',
  template: _admin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminComponent);


/***/ }),

/***/ 34272:
/*!*************************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin/admin.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../admin-nav/admin-nav/admin-nav.module */ 53415);
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.component */ 91935);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../login/authentication.service */ 18422);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _login_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../login/user/user.service */ 37365);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/utilities.module */ 93081);
/* harmony import */ var _admin_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.routes */ 65294);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _partials_add_save_buttons_add_save_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/add-save-buttons/add-save-module */ 19367);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _login_user_user_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../login/user/user.module */ 77656);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};























let AdminModule = class AdminModule {};
AdminModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  providers: [_login_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService, _login_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_10__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(_admin_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES), _admin_nav_admin_nav_admin_nav_module__WEBPACK_IMPORTED_MODULE_0__.AdminNavModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_7__.SharedDataModule, _partials_add_save_buttons_add_save_module__WEBPACK_IMPORTED_MODULE_8__.AddSaveButtonsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_9__.SharedFormattingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule, _login_user_user_module__WEBPACK_IMPORTED_MODULE_11__.UserModule],
  declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent],
  exports: [_admin_component__WEBPACK_IMPORTED_MODULE_1__.AdminComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_12__.CUSTOM_ELEMENTS_SCHEMA]
})], AdminModule);


/***/ }),

/***/ 65294:
/*!*************************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin/admin.routes.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin.component */ 91935);

const ROUTES = [{
  path: '',
  component: _admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent
}];

/***/ }),

/***/ 47346:
/*!**********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin.component.css?ngResource ***!
  \**********************************************************************/
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

/***/ 16756:
/*!***********************************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"admin-container container\">\n\n    <h1>Admin</h1>\n\n    <div class=\"row wow fadeIn\">\n\n        <dev-admin-nav></dev-admin-nav>\n<!--        <dev-user></dev-user>-->\n\n        <div class=\"clear\"></div>\n\n        <div class=\"col-lg-7 col-md-7 col-sm-12\">\n\n            <form [formGroup]=\"adminForm\" novalidate (ngSubmit)=\"onSetFormData(adminForm)\"\n                  class=\"rounded-top-bottom\">\n\n                <div>\n                    <button mat-raised-button\n                            class=\"float-start\"\n                            style=\"margin-right: 5px;\"\n                            type=\"submit\"><mat-icon class=\" sesame-blue\">save</mat-icon> Save\n                    </button>\n                    <!-- add item -->\n                    <button type=\"button\" mat-raised-button (click)=\"addItem()\">\n                        <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon> Add\n                    </button>\n\n                    <br/> <br/>\n\n                    <div class=\"clear\"></div>\n                </div>\n                <mat-accordion multi=\"false\">\n\n                    <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n                        <div formArrayName=\"items\">\n\n                            <div *ngFor=\"let item of adminForm.controls['items'].controls; let i = index; let even=even; let odd=odd;\"\n                                 class=\"item5-10\" [ngClass]=\"{ odd: odd, even: even }\"\n                                 cdkDrag>\n\n                                <div [formGroupName]=\"i\"  *ngIf=\"i<10\">\n\n                                    <mat-expansion-panel>\n                                        <mat-expansion-panel-header>\n                                            <mat-panel-title>\n                                                <div *ngIf=\"item.controls.version.value as value; \">\n                                                    <span class=\"sesame-blue\">{{item.controls.date.value | date}}</span>\n<!--                                                    <span class=\"sesame-blue\">{{item.controls.version.value | replaceDashSpace | titlecase}}</span>-->\n                                                    &nbsp;<span\n                                                        class=\"title-sub-text\">{{item.controls.release.value.substring(0, 32)}}</span>\n                                                </div>\n\n\n                                            </mat-panel-title>\n                                        </mat-expansion-panel-header>\n\n                                        <!-- item-info-bar -->\n                                        <div class=\"item-info-bar\">\n                                            <div class=\"delete-add-wrap\">\n\n                                                <div class=\"delete-button\">\n\n                                                    <!-- add/delete buttons -->\n                                                    <div class=\"float-start\"\n                                                         style=\"width: 49%;\n                                                            text-align: center;\">\n                                                        <!--  add method -->\n                                                        <span class=\" text-info\"\n                                                              (click)=\"addItem()\">\n                                                    <mat-icon>add</mat-icon>\n                                                </span>\n                                                    </div>\n\n                                                    <!-- delete method -->\n                                                    <div class=\"float-end\"\n                                                         style=\"width: 49%; text-align: center;\">\n                                                <span class=\"text-danger\"\n                                                      *ngIf=\"adminForm.controls.items.controls.length > 0\"\n                                                      (click)=\"confirmDeleteMessage(i, $event)\"\n                                                      value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                </span>\n                                                    </div>\n\n                                                    <!-- confirmation or cancel -->\n                                                    <div *ngIf=\"deleteConfirmationArray[i]\" class=\"delete-confirm\">\n                                                        <!-- delete -->\n                                                        <span class=\"float-start sesame-danger \"\n                                                              style=\"width: 49%; \"\n                                                              (click)=\"confirmDelete(i, adminForm, 'deleteItem')\">\n                                                Delete\n                                                </span>\n                                                        <!-- confirm delete -->\n                                                        <span type=\"button\"\n                                                              class=\"float-end sesame-green-background\"\n                                                              style=\"width: 49%;\"\n                                                              (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                                    Cancel\n                                                </span>\n\n                                                    </div><!-- delete buttons -->\n                                                </div><!-- end buttons -->\n\n                                                <div class=\"clear\"></div>\n\n                                            </div>\n                                        </div><!-- end item-info bar -->\n\n                                        <mat-form-field appearance=\"fill\"\n                                                        class=\"float-start\"\n                                                        style=\"width: 18%; margin-left: 2%;\">\n                                            <input matInput\n                                                   formControlName=\"name\"\n                                                   name=\"name\"\n                                                   placeholder=\"Name\" #name>\n                                        </mat-form-field>\n\n                                        <mat-form-field appearance=\"fill\"\n                                                        class=\"float-start\"\n                                                        style=\"width: 18%; margin-left: 2%;\">\n                                            <input matInput\n                                                   formControlName=\"version\"\n                                                   name=\"version\"\n                                                   placeholder=\"Version\"\n                                                   #version>\n                                        </mat-form-field>\n\n                                        <mat-form-field appearance=\"fill\"\n                                                        class=\"float-start\"\n                                                        style=\"width: 32%; margin-left: 2%;\">\n                                            <input matInput\n                                                   type=\"text\"\n                                                   formControlName=\"release\"\n                                                   name=\"release\"\n                                                   placeholder=\"Release\" #release>\n                                        </mat-form-field>\n\n\n                                        <mat-form-field appearance=\"fill\"\n                                                        class=\"float-start\"\n                                                        style=\"width: 22%; margin-left: 2%;\">\n\n                                            <input matInput type=\"text\"\n                                                   formControlName=\"date\"\n                                                   name=\"date\"\n                                                   placeholder=\"Release Date\"\n                                                   #date>\n                                        </mat-form-field>\n                                        <!--<div class=\"form-group pull-left\" style=\"width: 23%; margin-left: 2%;\">\n                                            <label>Angular -V</label>\n                                            <input class=\"form-control\" type=\"text\" formControlName=\"angular_version\"\n                                                   name=\"angular_version\" placeholder=\"Angular Version\" #angular_version>\n                                        </div>-->\n\n                                        <div class=\"clear\"></div>\n\n                                        <!--<div class=\"col-lg-12 col-md-12 col-sm-12\">-->\n\n                                        <div class=\"form-group\">\n                                            <label>Comments</label>\n                                            <textarea class=\"form-control\" type=\"text\" formControlName=\"comments\"\n                                                      style=\"width: 100%;\"\n                                                      name=\"comments\" placeholder=\"Comments\" #comments></textarea>\n                                        </div>\n\n                                        <!--</div>-->\n\n                                        <div class=\"clear\"></div>\n                                    </mat-expansion-panel>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                </mat-accordion>\n\n            </form>\n\n        </div><!-- end cols -->\n\n        <div class=\"col-lg-4 col-md-4 col-sm-12\">\n            <h3>Instructions</h3>\n            <p><span class=\"sesame-blue\">Blue placeholder text</span> indicates a required field.</p>\n\n            <h3>Changelog (last 3)</h3>\n\n            <div class=\"content-data\"\n                 *ngFor=\"let formDataValue of adminForm.controls['items'].value  | keys; let i = index; let first = first;\">\n                <div *ngIf=\"i<3\">\n                    <div *ngIf=\"formDataValue.value.version\"><span><span\n                            *ngIf=\"first\">CURRENT</span> Version: </span>{{formDataValue.value.version}}</div>\n                    <div *ngIf=\"formDataValue.value.name\"><span>Name: </span> {{formDataValue.value.name}}</div>\n                    <div *ngIf=\"formDataValue.value.name\"><span>Name: </span> {{formDataValue.value.release}}</div>\n                    <div *ngIf=\"formDataValue.value.date\"><span>Git Release Date: </span> {{formDataValue.value.date}}\n                    </div>\n                    <div *ngIf=\"formDataValue.value.angular_version\">\n                        <span>Angular -V:  </span>{{formDataValue.value.angular_version}}</div>\n                    <div *ngIf=\"formDataValue.value.comments\"><span>Comments:  </span>{{formDataValue.value.comments}}\n                    </div>\n\n                    <hr/>\n\n                </div>\n\n            </div>\n\n        </div><!-- end col -->\n    </div><!-- end row -->\n\n\n</div><!-- end container -->\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_admin_admin_admin_module_ts.js.map