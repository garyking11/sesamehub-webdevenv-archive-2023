(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["main"],{

/***/ 18109:
/*!********************************************************!*\
  !*** ./src/app/admin-dashboard/admin/admin.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": () => (/* binding */ AdminService)
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


let AdminService = (_class = class AdminService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    this._http = _http;
  }
  /**
   * Get current admin data. ie: current release information
   * @returns {Observable<R>}
   */
  getFormData() {
    return this._http.get('/dashboard/data/admin-data.json?v=' + new Date());
  }
  /**
   * Set current admin data. ie: current release information
   * @param data
   * @returns {Observable<Response>}
   */
  setFormData(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // console.log(data);
    return this._http.post('/dashboard/endpoints/admin-data-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
AdminService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], AdminService);


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
  selector: 'app',
  template: ``
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ 52468);
/* harmony import */ var _dev_tools_dev_tools_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dev-tools/dev-tools.module */ 36793);
/* harmony import */ var _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-hub-navigation/get-hub-navigation.module */ 99158);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.module */ 32825);
/* harmony import */ var _get_welcome_text_get_welcome_text_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-welcome-text/get-welcome-text.component */ 32893);
/* harmony import */ var _get_welcome_text_get_welcome_text_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-welcome-text/get-welcome-text-module */ 99676);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _support_support_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./support/support.module */ 96758);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _dev_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dev-tools */ 72402);
/* harmony import */ var _pipes_trim_content_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/trim-content.pipe */ 75599);
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-builder/form-builder.component */ 22608);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _pipes_sanitze_html_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/sanitze-html.pipe */ 10723);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _pipes_replace_space_with_underscore_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/replace-space-with-underscore.pipe */ 43505);
/* harmony import */ var _pipes_sanitze_hidden_required_field_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/sanitze-hidden-required-field.pipe */ 82669);
/* harmony import */ var _pipes_remove_trailing_comma_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/remove-trailing-comma.pipe */ 21774);
/* harmony import */ var _sections_get_image_size_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/get-image-size.service */ 17179);
/* harmony import */ var _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/get-local-files.service */ 83101);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.NgModule)({
  providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService, _sections_get_image_size_service__WEBPACK_IMPORTED_MODULE_16__.GetImageSizeService, _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_17__.GetLocalFilesService],
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _get_welcome_text_get_welcome_text_component__WEBPACK_IMPORTED_MODULE_5__.GetWelcomeTextComponent, _pipes_trim_content_pipe__WEBPACK_IMPORTED_MODULE_9__.TrimContentPipe, _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_10__.FormBuilderComponent, _pipes_sanitze_html_pipe__WEBPACK_IMPORTED_MODULE_11__.SanitzeHtmlPipe, _pipes_sanitze_hidden_required_field_pipe__WEBPACK_IMPORTED_MODULE_14__.SanitzeHiddenRequiredField, _pipes_replace_space_with_underscore_pipe__WEBPACK_IMPORTED_MODULE_13__.ReplaceSpaceWithUnderscorePipe, _pipes_remove_trailing_comma_pipe__WEBPACK_IMPORTED_MODULE_15__.RemoveTrailingCommaPipe],
  imports: [_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__.MenuModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _dev_tools_dev_tools_module__WEBPACK_IMPORTED_MODULE_2__.ToolbarModule, _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__.GetHubNavigationModule, _get_welcome_text_get_welcome_text_module__WEBPACK_IMPORTED_MODULE_6__.GetWelcomeTextModule,
  // ModalStaticModule,
  _support_support_module__WEBPACK_IMPORTED_MODULE_7__.SupportModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__.BrowserAnimationsModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_31__.DragDropModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_12__.SharedFormattingModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule],
  exports: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _dev_tools__WEBPACK_IMPORTED_MODULE_8__.ToolbarComponent]
})], AppModule);


/***/ }),

/***/ 39509:
/*!*************************************!*\
  !*** ./src/app/auth/admin.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _login_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/authentication.service */ 18422);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AdminGuard = (_class = class AdminGuard {
  constructor(auth, router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "auth", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    return this.auth.getUser()?.role === 'Admin' || this.router.createUrlTree(['/login']);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}]), _class);
AdminGuard = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AdminGuard);


/***/ }),

/***/ 21395:
/*!**********************************************!*\
  !*** ./src/app/auth/authentication.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationGuard": () => (/* binding */ AuthenticationGuard)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _login_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/authentication.service */ 18422);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AuthenticationGuard = (_class = class AuthenticationGuard {
  constructor(auth, router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "auth", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "user", void 0);
    this.auth = auth;
    this.router = router;
    console.log('AUTHENTICATION');
  }
  canActivate(route, state) {
    return this.auth.isLoggedIn() || this.router.createUrlTree(['/login']);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _login_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}]), _class);
AuthenticationGuard = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AuthenticationGuard);


/***/ }),

/***/ 3671:
/*!******************************************************************************!*\
  !*** ./src/app/create-seed/create-seed-modal/create-seed-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSeedModalComponent": () => (/* binding */ CreateSeedModalComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _create_seed_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-seed-modal.component.html?ngResource */ 94780);
/* harmony import */ var _create_seed_modal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-seed-modal.component.css?ngResource */ 9499);
/* harmony import */ var _create_seed_modal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_create_seed_modal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {ModalDirective} from 'ngx-bootstrap/modal';

let CreateSeedModalComponent = (_class = class CreateSeedModalComponent {
  // @ViewChild('autoShownModal', { static: false }) public autoShownModal: ModalDirective;
  constructor(_siteManagementService, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteManagementService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errorMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buttonText", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "popupBody", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isModalShown", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteBuildKit", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alertType", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmButtonText", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteDuplicateBuildkit", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localDirectories", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isDuplicate", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "backupStatus", void 0);
    this._siteManagementService = _siteManagementService;
    this._siteContextProviderService = _siteContextProviderService;
  }
  /**
   * @param site
   * @param err
   * @param btntext
   * @param popupbody
   * @param alertType
   */
  showModal(site, err, btntext, popupbody, alertType, confirmbuttontext) {
    this.isModalShown = true;
    this.errorMessage = err;
    this.siteBuildKit = site;
    this.buttonText = btntext;
    this.popupBody = popupbody;
    this.alertType = alertType;
    this.confirmButtonText = confirmbuttontext;
    /**
     * Get local directories
     */
    this._siteContextProviderService.getLocalDirectories().subscribe(data => {
      this.localDirectories = data;
      if (this.localDirectories.indexOf(this.siteBuildKit) > -1) {
        this.isDuplicate = true;
      }
    }, error => console.log(error));
  }
  hideModal() {
    // this.autoShownModal.hide();
  }
  onHidden() {
    this.isModalShown = false;
  }
  /**
   * Confirm creation of new buildkit
   * @param bool
   */
  confirmCreate(bool) {
    if (bool) {
      this.hideModal();
      if (this.isDuplicate) {
        this._siteManagementService.deleteSiteDirectory(this.siteBuildKit).then(response => {
          this._siteManagementService.createSeed({
            siteSeed: this.siteBuildKit
          }).toPromise().then(response => {
            location.reload();
          });
        });
      } else {
        console.log('false');
      }
    }
  }
  /**
   * Create zip and backup local buildkit to archives directory
   * @param accountname
   */
  backupAccountBuildkit(accountname) {
    this._siteManagementService.backupBuildKit(accountname);
    this.backupStatus = true;
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_3__.SiteManagementService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}]), _class);
CreateSeedModalComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-create-seed-modal',
  template: _create_seed_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_create_seed_modal_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], CreateSeedModalComponent);


/***/ }),

/***/ 75934:
/*!***************************************************************************!*\
  !*** ./src/app/create-seed/create-seed-modal/create-seed-modal.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSeedModalModule": () => (/* binding */ CreateSeedModalModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _create_seed_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-seed-modal.component */ 3671);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/modal-popup.service */ 85486);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {ModalModule} from "ngx-bootstrap";



let CreateSeedModalModule = class CreateSeedModalModule {};
CreateSeedModalModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  providers: [_dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_1__.SiteManagementService, _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_2__.ModalPopupService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
  // ModalModule.forRoot()
  ],

  declarations: [_create_seed_modal_component__WEBPACK_IMPORTED_MODULE_0__.CreateSeedModalComponent],
  exports: [_create_seed_modal_component__WEBPACK_IMPORTED_MODULE_0__.CreateSeedModalComponent]
})], CreateSeedModalModule);


/***/ }),

/***/ 84051:
/*!******************************************************!*\
  !*** ./src/app/create-seed/create-seed.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSeedComponent": () => (/* binding */ CreateSeedComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _create_seed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-seed.component.html?ngResource */ 93952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CreateSeedComponent = (_class = class CreateSeedComponent {
  // preprocessors
  // preProcessorsArray = ['scss', 'less'];
  constructor(_siteManagementService, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteManagementService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ModalStatic", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "createSiteSeedForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localDirectories", void 0);
    this._siteManagementService = _siteManagementService;
    this._siteContextProviderService = _siteContextProviderService;
    // Create site seed form
    this.createSiteSeedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      'siteSeed': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }
  ngOnInit() {
    this.onGetLocalDirectories();
  }
  /**
   *  Get already created site buildkit directories
   */
  onGetLocalDirectories() {
    this._siteContextProviderService.getLocalDirectories().subscribe(data => {
      this.localDirectories = data;
    }, error => console.log(error));
  }
  /**
   * Clone a psds-buildkit into local environment
   */
  onCreateSiteSeed(form) {
    let seedname = this.createSiteSeedForm.value; // Form values
    // Duplicate directory?
    let seed = form.value.siteSeed;
    if (this.localDirectories.indexOf(seed.value) > -1) {
      /**
       * @param site
       * @param err
       * @param btntext
       * @param popupbody
       * @param alertType
       */
      this.ModalStatic.showModal(seed, 'Create site and delete old site directory?', 'Cancel', 'Re-creating this site is not undoable and will overwrite existing buildkit directory!  Make a backup if needed!', 'confirm', 'Replace ' + seed + ' buildkit!');
      return;
    } else {
      // write to site-context-data.json
      this._siteManagementService.createSeed(seedname).subscribe(data => {}, error => console.log(error));
      location.reload();
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_2__.SiteManagementService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  ModalStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['confirmCreateSeed', {
      static: false
    }]
  }]
}), _class);
CreateSeedComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-create-seed',
  template: _create_seed_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], CreateSeedComponent);


/***/ }),

/***/ 33422:
/*!***************************************************!*\
  !*** ./src/app/create-seed/create-seed.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSeedModule": () => (/* binding */ CreateSeedModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _create_seed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-seed.component */ 84051);
/* harmony import */ var _modal_static_modal_static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-static/modal-static.module */ 29668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../get-hub-navigation/get-hub-navigation.module */ 99158);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/modal-popup.service */ 85486);
/* harmony import */ var _create_seed_modal_create_seed_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-seed-modal/create-seed-modal.module */ 75934);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 84522);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {HttpClientModule} from '@angular/http';





// import {AccordionModule} from 'ngx-bootstrap';













let CreateSeedModule = class CreateSeedModule {};
CreateSeedModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  providers: [_dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_4__.SiteManagementService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_6__.SiteContextProviderService, _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_7__.ModalPopupService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
  // AccordionModule.forRoot(),
  _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_5__.SharedFormattingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__.GetHubNavigationModule, _modal_static_modal_static_module__WEBPACK_IMPORTED_MODULE_1__.ModalStaticModule, _create_seed_modal_create_seed_modal_module__WEBPACK_IMPORTED_MODULE_8__.CreateSeedModalModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule],
  declarations: [_create_seed_component__WEBPACK_IMPORTED_MODULE_0__.CreateSeedComponent],
  exports: [_create_seed_component__WEBPACK_IMPORTED_MODULE_0__.CreateSeedComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.CUSTOM_ELEMENTS_SCHEMA]
})], CreateSeedModule);


/***/ }),

/***/ 22608:
/*!********************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBuilderComponent": () => (/* binding */ FormBuilderComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _form_builder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-builder.component.html?ngResource */ 21378);
/* harmony import */ var _form_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-builder.component.css?ngResource */ 78266);
/* harmony import */ var _form_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _form_builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-builder.service */ 61294);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let FormBuilderComponent = (_class = class FormBuilderComponent {
  constructor(_formBuilderService, _siteContextProviderService, _copyDataToClipboardService, _snackBarService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_formBuilderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", ' Form Builder');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "FBInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formTypeArray", [{
      value: "text",
      display: "Text"
    }, {
      value: "textarea",
      display: "Textarea"
    }, {
      value: "select",
      display: "Select"
    }, {
      value: "checkbox",
      display: "Checkbox"
    }]);
    this._formBuilderService = _formBuilderService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._snackBarService = _snackBarService;
  }
  get formFieldNamesConcatenation() {
    return this.FBInterface?.formFieldArray.filter(f => f.required).map(f => f.name).join(",") ?? "";
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.FBInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.moveItemInArray)(this.FBInterface.formFieldArray, event.previousIndex, event.currentIndex);
  }
  ngOnInit() {
    this.getSiteContext();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
      this.sitecontext = siteContext.account;
      this.getFormBuilderProperties(this.sitecontext);
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get form field properties from account-name/assets/includes/form-field-data.json
   * @param sitecontext
   */
  getFormBuilderProperties(sitecontext) {
    this._formBuilderService.getFormBuilderProperties(sitecontext).subscribe({
      next: FBInterface => {
        this.FBInterface = FBInterface;
      }
    });
  }
  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * @param form
   */
  setFormBuilderProperties() {
    // Set new values
    this.FBInterface.account = this.sitecontext;
    this._formBuilderService.setSiteFormBuilderProperties(this.FBInterface).subscribe(form => {
      this._snackBarService.openSnackBar('Your form has been saved!', '');
      console.log('Form Builder properties updated: ' + new Date().toUTCString());
    }, error => console.log(error));
  }
  /**
   * Add Form Block
   */
  addFormBlock() {
    if (!this.FBInterface) return;
    this.FBInterface.formFieldArray.unshift({
      type: "text",
      name: "",
      label: "",
      required: false
    });
  }
  removeFormBlock(index) {
    this.FBInterface?.formFieldArray.splice(index, 1);
  }
  /**
   *
   * @param index
   */
  addFormFieldOption(index) {
    if (!this.FBInterface) return;
    if (!this.FBInterface.formFieldArray[index].options) {
      this.FBInterface.formFieldArray[index].options = [];
    }
    this.FBInterface.formFieldArray[index].options.unshift({
      display: ''
    });
  }
  /**
   *
   * @param fieldIndex
   * @param optionIndex
   */
  removeFormFieldOption(fieldIndex, optionIndex) {
    this.FBInterface?.formFieldArray[fieldIndex].options?.splice(optionIndex, 1);
  }
  /**
   * Copy HTML markup to clipboard
   */
  copyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  /**
   * Prevent special characters in name fields and hidden required field
   * @param event
   */
  fieldNameChanged(event) {
    if (event.key.match(/[^a-zA-Z0-9\s]/)) {
      event.preventDefault();
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _form_builder_service__WEBPACK_IMPORTED_MODULE_3__.FormBuilderService
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService
}]), _class);
FormBuilderComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'dev-form-builder',
  template: _form_builder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_form_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FormBuilderComponent);


/***/ }),

/***/ 61294:
/*!******************************************************!*\
  !*** ./src/app/form-builder/form-builder.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBuilderService": () => (/* binding */ FormBuilderService)
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


let FormBuilderService = (_class = class FormBuilderService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "properties", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    this._http = _http;
  }
  getFormBuilderProperties(account) {
    return this._http.get('../../' + account + '/assets/includes/data/form-builder-data.json?' + Date.now().toString());
  }
  setSiteFormBuilderProperties(properties) {
    console.log(properties);
    const body = JSON.stringify(properties);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/form-builder-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
FormBuilderService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], FormBuilderService);


/***/ }),

/***/ 119:
/*!********************************************************************!*\
  !*** ./src/app/get-hub-navigation/get-hub-navigation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetHubNavigationComponent": () => (/* binding */ GetHubNavigationComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _get_hub_navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-hub-navigation.component.html?ngResource */ 57854);
/* harmony import */ var _Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/get-hub-navigation/get-hub-navigation.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgLmJ0bi1ncm91cC1zbSA%2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg!./src/app/get-hub-navigation/get-hub-navigation.component.ts */ 9782);
/* harmony import */ var _Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let GetHubNavigationComponent = (_class = class GetHubNavigationComponent {
  constructor(_dataService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dataService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "navResponse", new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hub_navigation", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nResponse", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitename", void 0);
    this._dataService = _dataService;
    // console.log(this.navResponse);
  }

  ngOnInit() {
    this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
    const sitename = this.sitename;
    return sitename;
  }
  /**
   * Get actual navigation from sesamehub.com
   */
  getHubNavData() {
    /* this._dataService.getHubNavData(this.sitename)
         .subscribe(
             data => {
                 this.nResponse = data;
             },
             error => console.log(error)
         );*/
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
      // this.navResponse.emit(this.hub_navigation);
      if (this.nResponse === undefined) {
        console.log('Please enter a value');
        return;
      }
      // console.log(this.response);
      window.location.reload();
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  navResponse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
}), _class);
GetHubNavigationComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-get-hub-navigation',
  template: _get_hub_navigation_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg_Applications_MAMP_www_dashboard_src_app_get_hub_navigation_get_hub_navigation_component_ts__WEBPACK_IMPORTED_MODULE_2___default())]
})], GetHubNavigationComponent);


/***/ }),

/***/ 99158:
/*!*****************************************************************!*\
  !*** ./src/app/get-hub-navigation/get-hub-navigation.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetHubNavigationModule": () => (/* binding */ GetHubNavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _get_hub_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-hub-navigation.component */ 119);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 52468);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let GetHubNavigationModule = class GetHubNavigationModule {};
GetHubNavigationModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  declarations: [_get_hub_navigation_component__WEBPACK_IMPORTED_MODULE_0__.GetHubNavigationComponent],
  exports: [_get_hub_navigation_component__WEBPACK_IMPORTED_MODULE_0__.GetHubNavigationComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
})], GetHubNavigationModule);


/***/ }),

/***/ 99676:
/*!*************************************************************!*\
  !*** ./src/app/get-welcome-text/get-welcome-text-module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetWelcomeTextModule": () => (/* binding */ GetWelcomeTextModule)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 52468);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let GetWelcomeTextModule = (_class = class GetWelcomeTextModule {
  constructor() {
    // console.log('GetWelcomeTextModule');
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
GetWelcomeTextModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
})], GetWelcomeTextModule);


/***/ }),

/***/ 32893:
/*!****************************************************************!*\
  !*** ./src/app/get-welcome-text/get-welcome-text.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetWelcomeTextComponent": () => (/* binding */ GetWelcomeTextComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _get_welcome_text_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-welcome-text.component.html?ngResource */ 44506);
/* harmony import */ var _Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA_3D_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/get-welcome-text/get-welcome-text.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgLmJ0bi1ncm91cC1zbSA%2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA%3D!./src/app/get-welcome-text/get-welcome-text.component.ts */ 81398);
/* harmony import */ var _Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA_3D_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA_3D_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 52468);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let GetWelcomeTextComponent = (_class = class GetWelcomeTextComponent {
  constructor(_dataService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dataService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "response", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitename", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "welcomeTextForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "html", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "welTextResponse", new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter());
    this._dataService = _dataService;
  }
  /**
   * Post Welcome Text to Application.php via data.service
   * @param hub_welcome_text
   */
  welcomeTextPost(hub_welcome_text, sitename) {
    this._dataService.postWelcomeTextData(sitename, hub_welcome_text).subscribe(data => {
      this.welTextResponse.emit('hub_welcome_text');
      if (this.response === undefined) {
        console.log('Welcome text required');
        return;
      } else {
        console.log('this.welTextResponse: ' + this.welTextResponse);
      }
    }, error => console.log(error));
  }
  /**
   * Get actual welcome text from hub
   */
  getWelcomeTextData() {
    this._dataService.getWelcomeTextData(this.sitename).subscribe(data => {
      this.response = data;
      console.log(this.response);
    }, error => console.log(error));
  }
  /**
   * Get pseudo navigation from /dev
   */
  getStockWelcomeData() {
    this._dataService.loadWelcomeTextData().subscribe(data => {
      this.response = data;
      // console.log('WELCOME TEXT in "getStockWelcomeTextData": ' + this.response);
    }, error => console.log(error));
  }
  ngOnInit() {
    this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
    const sitename = this.sitename;
    return sitename;
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  welTextResponse: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
}), _class);
GetWelcomeTextComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'get-welcome-text',
  template: _get_welcome_text_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts_css_ngResource_Applications_MAMP_www_dashboard_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgICAgLmJ0bi1ncm91cC1zbSA_2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA_3D_Applications_MAMP_www_dashboard_src_app_get_welcome_text_get_welcome_text_component_ts__WEBPACK_IMPORTED_MODULE_2___default())]
})], GetWelcomeTextComponent);


/***/ }),

/***/ 42909:
/*!**************************************!*\
  !*** ./src/app/login/auth.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/private.component */ 13405);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ 98458);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.service */ 18422);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.service */ 37365);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {AccordionModule} from "ngx-bootstrap";










let AuthModule = class AuthModule {};
AuthModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService, _user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_6__.SiteContextProviderService, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder],
  imports: [
  // AccordionModule,
  _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_3__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule],
  declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _private_private_component__WEBPACK_IMPORTED_MODULE_0__.PrivateComponent],
  exports: [_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _private_private_component__WEBPACK_IMPORTED_MODULE_0__.PrivateComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.CUSTOM_ELEMENTS_SCHEMA]
})], AuthModule);


/***/ }),

/***/ 18422:
/*!*************************************************!*\
  !*** ./src/app/login/authentication.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Define users using UserService instead of var ...
// getData()
/*let users = [
    new User('sesame', 'sesame'),
    new User('admin', 'admin'),
    new User('gking', 'admin')
];*/
// TODO: get users from database
let AuthenticationService = (_class = class AuthenticationService {
  constructor(_router, _http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_router", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "users", void 0);
    this._router = _router;
    this._http = _http;
  }
  /**** NOT FUNCTIONAL getFormData() ***/
  /**
   * Get current admin data. ie: current release information
   * @returns {Observable<R>}
   * NOT FUNCTIONAL
   */
  getUsers() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      if (this.users) {
        return subscriber.next(this.users);
      }
      this._http.get('/dashboard/data/user-data.json?v=' + new Date()).subscribe(userData => {
        this.users = userData.users;
        subscriber.next(this.users);
      });
    });
  }
  /**
   * Log user or admin out
   * Needs connection to db instead of localStorage
   */
  logout() {
    localStorage.removeItem('user');
    window.sessionStorage.removeItem('AUTH_USER');
    this._router.navigate(['login']);
  }
  login(username, password) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      this.getUsers().subscribe(users => {
        let authenticatedUser = users.find(u => u.username === username);
        if (authenticatedUser && authenticatedUser.password === password) {
          this._router.navigate(['admin']);
          window.sessionStorage.setItem('AUTH_USER', JSON.stringify(authenticatedUser));
          return subscriber.next(true);
        }
        window.sessionStorage.removeItem('AUTH_USER');
        return subscriber.next(false);
      });
    });
  }
  isLoggedIn() {
    const user = window.sessionStorage.getItem('AUTH_USER');
    return !!user;
  }
  getUser() {
    const user = window.sessionStorage.getItem('AUTH_USER');
    return JSON.parse(user);
  }
  /* hasPermissions(){
       return of(true);
   }*/
  /**
   * If user is in localStorage proceed?
   */
  checkCredentials() {
    // console.log('checkCredentials: user authentication service');
    // console.log(users)
    /*if (localStorage.getItem('user') === null) {
        this._router.navigate(['login']);
    }*/
    return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}]), _class);
AuthenticationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], AuthenticationService);


/***/ }),

/***/ 96284:
/*!**************************************************!*\
  !*** ./src/app/login/builder/builder.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderService": () => (/* binding */ BuilderService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BuilderService = (_class = class BuilderService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  postBuilderData(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this._http.post('/dashboard/endpoints/builder-endpoint.php', body, {
      headers: headers
    }).subscribe();
  }
  /**
   *
   * @returns {Observable<Response>}
   */
  getBuilderData() {
    const subj = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._http.get('/dashboard/data/builder-data.json?v=' + new Date()).subscribe(data => {
      let obj = Object.assign({}, {
        builder: null,
        items: []
      }, data);
      subj.next(obj);
    }, error => {
      subj.next({
        builder: null,
        items: []
      });
    });
    return subj.asObservable();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
BuilderService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], BuilderService);


/***/ }),

/***/ 98458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 82010);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css?ngResource */ 61049);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ 18422);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let LoginComponent = (_class = class LoginComponent {
  get isLoggedIn() {
    return this._auth.isLoggedIn();
  }
  constructor(_auth) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_auth", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "username", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "password", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errorMsg", '');
    this._auth = _auth;
  }
  login() {
    this._auth.login(this.username, this.password).subscribe(loggedIn => {
      if (!loggedIn) {
        this.errorMsg = 'Username or Password not found, please try again';
      }
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}]), _class);
LoginComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LoginComponent);


/***/ }),

/***/ 13405:
/*!****************************************************!*\
  !*** ./src/app/login/private/private.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivateComponent": () => (/* binding */ PrivateComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _private_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private.component.html?ngResource */ 83272);
/* harmony import */ var _private_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private.component.css?ngResource */ 15233);
/* harmony import */ var _private_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_private_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ 18422);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let PrivateComponent = (_class = class PrivateComponent {
  constructor(_authenticationService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_authenticationService", void 0);
    this._authenticationService = _authenticationService;
  }
  ngOnInit() {
    this._authenticationService.checkCredentials();
  }
  logout() {
    this._authenticationService.logout();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}]), _class);
PrivateComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-private',
  template: _private_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_private_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PrivateComponent);


/***/ }),

/***/ 37365:
/*!********************************************!*\
  !*** ./src/app/login/user/user.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
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


// const path = require('path');
let UserService = (_class = class UserService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    this._http = _http;
  }
  postData(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    console.log('test');
    return this._http.post('/dashboard/endpoints/user-endpoint.php', body, {
      headers: headers
    });
  }
  /**
   *
   * @returns {Observable<Response>}
   */
  getData() {
    return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
UserService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], UserService);


/***/ }),

/***/ 51105:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 32283);
/* harmony import */ var _menu_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.component.css?ngResource */ 78845);
/* harmony import */ var _menu_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MenuComponent = (_class = class MenuComponent {
  constructor() {}
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
MenuComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'dev-menu',
  template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_menu_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MenuComponent);


/***/ }),

/***/ 32825:
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ 51105);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MenuModule = class MenuModule {};
MenuModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  providers: [],
  imports: [_utilities_utilities_module__WEBPACK_IMPORTED_MODULE_0__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
  declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
  exports: [_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA]
})], MenuModule);


/***/ }),

/***/ 42316:
/*!********************************************************!*\
  !*** ./src/app/modal-static/modal-static.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalStaticComponent": () => (/* binding */ ModalStaticComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _modal_static_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-static.component.html?ngResource */ 29447);
/* harmony import */ var _modal_static_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-static.component.css?ngResource */ 57227);
/* harmony import */ var _modal_static_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_static_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {ModalDirective} from 'ngx-bootstrap/modal';

let ModalStaticComponent = (_class = class ModalStaticComponent {
  // @ViewChild('autoShownModal', { static: false }) public autoShownModal: ModalDirective;
  constructor(_siteManagementService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteManagementService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "errorMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buttonText", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "popupBody", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isModalShown", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteBuildKit", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "alertType", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "backupStatus", void 0);
    this._siteManagementService = _siteManagementService;
  }
  /**
   * @param site
   * @param err
   * @param btntext
   * @param popupbody
   * @param alertType
   */
  showModal(site, err, btntext, popupbody, alertType) {
    this.isModalShown = true;
    this.errorMessage = err;
    this.siteBuildKit = site;
    this.buttonText = btntext;
    this.popupBody = popupbody;
    this.alertType = alertType;
  }
  hideModal() {
    // this.autoShownModal.hide();
  }
  onHidden() {
    this.isModalShown = false;
  }
  /**
   * Confirm delete buildkit
   * @param bool
   */
  confirm(bool) {
    if (bool) {
      this.hideModal();
      this._siteManagementService.deleteSiteDirectory(this.siteBuildKit);
      location.reload();
    } else {
      console.log('false');
    }
  }
  /**
   * Create zip and backup local buildkit to archives directory
   * @param accountname
   */
  backupAccountBuildkit(accountname) {
    this._siteManagementService.backupBuildKit(accountname);
    this.backupStatus = true;
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_3__.SiteManagementService
}]), _class);
ModalStaticComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-modal-static',
  template: _modal_static_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_modal_static_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ModalStaticComponent);


/***/ }),

/***/ 29668:
/*!*****************************************************!*\
  !*** ./src/app/modal-static/modal-static.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalStaticModule": () => (/* binding */ ModalStaticModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _modal_static_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-static.component */ 42316);
/* harmony import */ var _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/modal-popup.service */ 85486);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {ModalModule} from "ngx-bootstrap";
let ModalStaticModule = class ModalStaticModule {};
ModalStaticModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  providers: [_dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_0__.SiteManagementService, _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_2__.ModalPopupService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
  // ModalModule.forRoot(),
  ],

  declarations: [_modal_static_component__WEBPACK_IMPORTED_MODULE_1__.ModalStaticComponent],
  exports: [_modal_static_component__WEBPACK_IMPORTED_MODULE_1__.ModalStaticComponent]
})], ModalStaticModule);


/***/ }),

/***/ 60751:
/*!***************************************************!*\
  !*** ./src/app/pipes/add-space-before-capital.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSpaceBeforeCapitalPipe": () => (/* binding */ AddSpaceBeforeCapitalPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AddSpaceBeforeCapitalPipe = class AddSpaceBeforeCapitalPipe {
  transform(value) {
    if (value) {
      return value = value.replace(/([A-Z])/g, ' $1').trim();
    }
    return value;
  }
};
AddSpaceBeforeCapitalPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'addSpaceBeforeCapital'
})], AddSpaceBeforeCapitalPipe);


/***/ }),

/***/ 45862:
/*!*****************************************!*\
  !*** ./src/app/pipes/add-width.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddWidthPipe": () => (/* binding */ AddWidthPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AddWidthPipe = class AddWidthPipe {
  transform(value) {
    if (!value || !value.length) {
      return;
    }
    return value.replace('style="', 'style="width: 100%; ');
  }
};
AddWidthPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'addWidth'
})], AddWidthPipe);


/***/ }),

/***/ 54238:
/*!***********************************************!*\
  !*** ./src/app/pipes/capitalize-each-word.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizeEachWord": () => (/* binding */ CapitalizeEachWord)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CapitalizeEachWord = class CapitalizeEachWord {
  transform(value) {
    if (value) {
      return value.toLowerCase().replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
        return letter.toUpperCase();
      });
    }
    return value;
  }
};
CapitalizeEachWord = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'capitalizeEachWord'
})], CapitalizeEachWord);


/***/ }),

/***/ 65091:
/*!***********************************************!*\
  !*** ./src/app/pipes/capitalize-word.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizeWordPipe": () => (/* binding */ CapitalizeWordPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CapitalizeWordPipe = class CapitalizeWordPipe {
  transform(value) {
    if (value) {
      return value.toUpperCase();
    }
    return value;
  }
};
CapitalizeWordPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'capitalizeWord'
})], CapitalizeWordPipe);


/***/ }),

/***/ 45098:
/*!******************************************!*\
  !*** ./src/app/pipes/capitalize.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapitalizePipe": () => (/* binding */ CapitalizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CapitalizePipe = class CapitalizePipe {
  transform(value) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
};
CapitalizePipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'capitalize'
})], CapitalizePipe);


/***/ }),

/***/ 50364:
/*!*********************************************!*\
  !*** ./src/app/pipes/get-extension.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetExtensionPipe": () => (/* binding */ GetExtensionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GetExtensionPipe = class GetExtensionPipe {
  transform(value, args) {
    if (value) {
      return value.split('.').pop();
    }
  }
};
GetExtensionPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'getExtension'
})], GetExtensionPipe);


/***/ }),

/***/ 44293:
/*!**********************************************************!*\
  !*** ./src/app/pipes/google-map-remove-iframe-border.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapRemoveIframeBorderPipe": () => (/* binding */ GoogleMapRemoveIframeBorderPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GoogleMapRemoveIframeBorderPipe = class GoogleMapRemoveIframeBorderPipe {
  transform(value) {
    if (!value || !value.length) {
      return;
    }
    return value.replace('frameborder="0"', ' ');
  }
};
GoogleMapRemoveIframeBorderPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'googleMapRemoveIframeBorder'
})], GoogleMapRemoveIframeBorderPipe);


/***/ }),

/***/ 56876:
/*!*******************************************************!*\
  !*** ./src/app/pipes/google-map-remove-width.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapRemoveWidthPipe": () => (/* binding */ GoogleMapRemoveWidthPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GoogleMapRemoveWidthPipe = class GoogleMapRemoveWidthPipe {
  transform(value) {
    if (!value || !value.length) {
      return;
    }
    return value.replace('width="600"', ' ');
  }
};
GoogleMapRemoveWidthPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'googleMapRemoveWidth'
})], GoogleMapRemoveWidthPipe);


/***/ }),

/***/ 81505:
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeysPipe": () => (/* binding */ KeysPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let KeysPipe = class KeysPipe {
  transform(value, args) {
    let keys = [];
    for (let key in value) {
      keys.push({
        key: key,
        value: value[key]
      });
    }
    return keys;
  }
};
KeysPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'keys'
})], KeysPipe);


/***/ }),

/***/ 60455:
/*!**************************************************!*\
  !*** ./src/app/pipes/remove-parenthesis.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveParenthesisPipe": () => (/* binding */ RemoveParenthesisPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RemoveParenthesisPipe = class RemoveParenthesisPipe {
  transform(value) {
    if (value) {
      return value.replace(/[\(\)\s+\-]/g, '');
    }
  }
};
RemoveParenthesisPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'removeParenthesis'
})], RemoveParenthesisPipe);


/***/ }),

/***/ 21774:
/*!*****************************************************!*\
  !*** ./src/app/pipes/remove-trailing-comma.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveTrailingCommaPipe": () => (/* binding */ RemoveTrailingCommaPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RemoveTrailingCommaPipe = class RemoveTrailingCommaPipe {
  transform(value) {
    if (value) {
      return value.replace(/,\s*$/, "");
    }
  }
};
RemoveTrailingCommaPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'removeTrailingComma'
})], RemoveTrailingCommaPipe);


/***/ }),

/***/ 3781:
/*!**************************************************************!*\
  !*** ./src/app/pipes/replace-characters-except-dash.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceCharactersExceptDashPipe": () => (/* binding */ ReplaceCharactersExceptDashPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceCharactersExceptDashPipe = class ReplaceCharactersExceptDashPipe {
  transform(value, args) {
    if (value) {
      return value = value.replace(/[^a-zA-Z0-9]/g, '-').replace(/--/g, '-').trim();
    }
    return value;
  }
};
ReplaceCharactersExceptDashPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceCharactersExceptDash'
})], ReplaceCharactersExceptDashPipe);

//var stripped = string.replace(/[^0-9\-]/g,'');
//return value  = value.replace(/[^a-zA-Z0-9]+/g, "").trim();

/***/ }),

/***/ 7104:
/*!**********************************************************!*\
  !*** ./src/app/pipes/replace-curly-brace-entity.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceCurlyBraceEntityPipe": () => (/* binding */ ReplaceCurlyBraceEntityPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceCurlyBraceEntityPipe = class ReplaceCurlyBraceEntityPipe {
  transform(value) {
    if (value) {
      return value = value.replace(/'&#123;'/g, '{').replace(/'&#125;'/g, '}');
    }
    return value;
  }
};
ReplaceCurlyBraceEntityPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceCurlyBraceEntity'
})], ReplaceCurlyBraceEntityPipe);


/***/ }),

/***/ 21895:
/*!*********************************************!*\
  !*** ./src/app/pipes/replace-dash-space.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceDashSpace": () => (/* binding */ ReplaceDashSpace)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceDashSpace = class ReplaceDashSpace {
  transform(value) {
    if (value) {
      return value = value.replace(/-/g, ' ').trim();
    }
    return value;
  }
};
ReplaceDashSpace = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceDashSpace'
})], ReplaceDashSpace);


/***/ }),

/***/ 84101:
/*!************************************************!*\
  !*** ./src/app/pipes/replace-email-at.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceEmailAtPipe": () => (/* binding */ ReplaceEmailAtPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceEmailAtPipe = class ReplaceEmailAtPipe {
  transform(value) {
    if (!value || !value.length) {
      return;
    }
    return value.replace(/\@/g, '|');
  }
};
ReplaceEmailAtPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceEmailAt'
})], ReplaceEmailAtPipe);


/***/ }),

/***/ 38759:
/*!**************************************************!*\
  !*** ./src/app/pipes/replace-space-dash.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceSpaceDash": () => (/* binding */ ReplaceSpaceDash)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceSpaceDash = class ReplaceSpaceDash {
  transform(value) {
    if (value) {
      return value.trim().replace(/\s+/g, '-');
    }
    return value;
  }
};
ReplaceSpaceDash = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceSpaceDash'
})], ReplaceSpaceDash);


/***/ }),

/***/ 43505:
/*!*************************************************************!*\
  !*** ./src/app/pipes/replace-space-with-underscore.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceSpaceWithUnderscorePipe": () => (/* binding */ ReplaceSpaceWithUnderscorePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceSpaceWithUnderscorePipe = class ReplaceSpaceWithUnderscorePipe {
  transform(value) {
    if (value) {
      return value.trim().replace(/\s+/g, '_');
    }
    return value;
  }
};
ReplaceSpaceWithUnderscorePipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceSpaceWithUnderscore'
})], ReplaceSpaceWithUnderscorePipe);


/***/ }),

/***/ 85794:
/*!*****************************************************!*\
  !*** ./src/app/pipes/replace-trailing-dash.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceTrailingDashPipe": () => (/* binding */ ReplaceTrailingDashPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceTrailingDashPipe = class ReplaceTrailingDashPipe {
  transform(value, args) {
    if (value) {
      return value = value.replace(/-$/, '').trim();
    }
    return value;
  }
};
ReplaceTrailingDashPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceTrailingDash'
})], ReplaceTrailingDashPipe);


/***/ }),

/***/ 51503:
/*!**************************************************!*\
  !*** ./src/app/pipes/replace-underscore.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaceUnderscoreSpace": () => (/* binding */ ReplaceUnderscoreSpace)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ReplaceUnderscoreSpace = class ReplaceUnderscoreSpace {
  transform(value) {
    if (value) {
      return value = value.replace(/_/g, ' ').trim();
    }
    return value;
  }
};
ReplaceUnderscoreSpace = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'replaceUnderscoreSpace'
})], ReplaceUnderscoreSpace);


/***/ }),

/***/ 82669:
/*!*************************************************************!*\
  !*** ./src/app/pipes/sanitze-hidden-required-field.pipe.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitzeHiddenRequiredField": () => (/* binding */ SanitzeHiddenRequiredField)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SanitzeHiddenRequiredField = class SanitzeHiddenRequiredField {
  transform(value) {
    if (value) {
      return value.replace(/\?/g, '').replace(/[^\w\d\s,]/g, '').trim();
    }
    return "";
  }
};
SanitzeHiddenRequiredField = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'sanitzeHiddenRequiredField'
})], SanitzeHiddenRequiredField);


/***/ }),

/***/ 10723:
/*!********************************************!*\
  !*** ./src/app/pipes/sanitze-html.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SanitzeHtmlPipe": () => (/* binding */ SanitzeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SanitzeHtmlPipe = class SanitzeHtmlPipe {
  transform(value) {
    if (value) {
      return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return "";
  }
};
SanitzeHtmlPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'sanitzeHtml'
})], SanitzeHtmlPipe);


/***/ }),

/***/ 82897:
/*!********************************************!*\
  !*** ./src/app/pipes/to-lowercase.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToLowercasePipe": () => (/* binding */ ToLowercasePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ToLowercasePipe = class ToLowercasePipe {
  transform(value, args) {
    if (value) {
      return value.toLowerCase();
    }
    return value;
  }
};
ToLowercasePipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'toLowercase'
})], ToLowercasePipe);


/***/ }),

/***/ 75599:
/*!********************************************!*\
  !*** ./src/app/pipes/trim-content.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrimContentPipe": () => (/* binding */ TrimContentPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TrimContentPipe = class TrimContentPipe {
  transform(value) {
    if (value) {
      return value.trim();
    }
    return value;
  }
};
TrimContentPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'trimContent'
})], TrimContentPipe);


/***/ }),

/***/ 19158:
/*!******************************************************!*\
  !*** ./src/app/quick-links/quick-links.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickLinksComponent": () => (/* binding */ QuickLinksComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _quick_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-links.component.html?ngResource */ 45614);
/* harmony import */ var _quick_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quick-links.component.css?ngResource */ 65429);
/* harmony import */ var _quick_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quick_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let QuickLinksComponent = (_class = class QuickLinksComponent {
  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "quickLinks", [{
      'url': '//dental.drsesame.com/',
      'display': 'dental.drsesame.com'
    }, {
      'url': '//ortho.drsesame.com/',
      'display': 'ortho.drsesame.com'
    }, {
      'url': '//pediatric.drsesame.com/',
      'display': 'pediatric.drsesame.com'
    }, {
      'url': '//sesame-perio.sesamehub.com/',
      'display': 'sesame-perio.drsesame.com'
    }, {
      'url': '//sesamewebdesign.com/',
      'display': 'sesamewebdesign.com'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "quickLinksForm", new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      quicklink: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [])
    }));
  }
  ngOnInit() {}
  /**
   *
   * @returns {boolean}
   */
  onGetQuickLink() {
    let selectedlink = this.quickLinksForm.value; // Form values
    let url = selectedlink.quicklink;
    if (url !== '') {
      window.open(url, '_blank');
    } else {
      return false;
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
QuickLinksComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'dev-quick-links',
  template: _quick_links_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_quick_links_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], QuickLinksComponent);


/***/ }),

/***/ 39621:
/*!***************************************************!*\
  !*** ./src/app/quick-links/quick-links.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickLinksModule": () => (/* binding */ QuickLinksModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _quick_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quick-links.component */ 19158);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let QuickLinksModule = class QuickLinksModule {};
QuickLinksModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  providers: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_1__.SharedFormattingModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_3__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
  declarations: [_quick_links_component__WEBPACK_IMPORTED_MODULE_2__.QuickLinksComponent],
  exports: [_quick_links_component__WEBPACK_IMPORTED_MODULE_2__.QuickLinksComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA]
})], QuickLinksModule);


/***/ }),

/***/ 95717:
/*!**************************************************!*\
  !*** ./src/app/resources/resources.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesComponent": () => (/* binding */ ResourcesComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _resources_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources.component.html?ngResource */ 68629);
/* harmony import */ var _resources_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources.component.css?ngResource */ 99665);
/* harmony import */ var _resources_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_resources_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ResourcesComponent = (_class = class ResourcesComponent {
  showExpandIcon() {
    this.icon = !this.icon;
  }
  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'resources');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "item", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "icon", false);
  }
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
ResourcesComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'dev-resources',
  template: _resources_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_resources_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ResourcesComponent);


/***/ }),

/***/ 93882:
/*!***********************************************!*\
  !*** ./src/app/resources/resources.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourcesModule": () => (/* binding */ ResourcesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _resources_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources.component */ 95717);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ResourcesModule = class ResourcesModule {};
ResourcesModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule],
  declarations: [_resources_component__WEBPACK_IMPORTED_MODULE_0__.ResourcesComponent],
  exports: [_resources_component__WEBPACK_IMPORTED_MODULE_0__.ResourcesComponent]
})], ResourcesModule);


/***/ }),

/***/ 17179:
/*!****************************************************!*\
  !*** ./src/app/sections/get-image-size.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetImageSizeService": () => (/* binding */ GetImageSizeService)
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


let GetImageSizeService = (_class = class GetImageSizeService {
  constructor(_httpClient) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    this._httpClient = _httpClient;
  }
  /**
   *
   * @param account
   * @param directory
   */
  getImageSizes(account, directory) {
    console.log(account + ' ' + directory);
    const body = JSON.stringify({
      account,
      directory
    });
    console.log(body);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/get-local-files.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
GetImageSizeService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], GetImageSizeService);


/***/ }),

/***/ 78236:
/*!************************************************************!*\
  !*** ./src/app/services/copy-css-to-local-file.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyCssToLocalFileService": () => (/* binding */ CopyCssToLocalFileService)
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


let CopyCssToLocalFileService = (_class = class CopyCssToLocalFileService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  copyCssToLocalSite(account, cssstring, cssfile) {
    console.log(cssfile);
    const body = JSON.stringify({
      cssString: cssstring,
      account: account,
      cssFile: cssfile
    });
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/css');
    return this._http.post('/dashboard/endpoints/copy-css-to-local-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
CopyCssToLocalFileService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], CopyCssToLocalFileService);


/***/ }),

/***/ 26011:
/*!*******************************************************!*\
  !*** ./src/app/services/copy-to-clipboard.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyDataToClipboardService": () => (/* binding */ CopyDataToClipboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CopyDataToClipboardService = class CopyDataToClipboardService {
  // Copy to clipboard ( single copy per page )
  copyHTMLDataToClipboard() {
    var $tgt = $($('body .copy').attr('data-target'));
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($tgt.get(0));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    //console.log('HTML copied to clipboard!')
  }
  // Copy specific id to clipboard ( multiple copy per page )
  copyThisHTMLDataToClipboard(id) {
    var $tgt = $(id);
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($tgt.get(0));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    //console.log('HTML copied to clipboard!')
  }
  // Copy CSS to clipboard ( single copy per page )
  copyCSSDataToClipboard() {
    var $tgt = $($('body .copycss').attr('data-target'));
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents($tgt.get(0));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copycss');
    //console.log('CSS copied to clipboard!')
  }
};

CopyDataToClipboardService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], CopyDataToClipboardService);


/***/ }),

/***/ 46077:
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorsService": () => (/* binding */ CustomValidatorsService)
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

let CustomValidatorsService = (_class = class CustomValidatorsService {
  constructor() {}
  /**
   * Validate http/https in 301-Redirects
   * @param control
   * @returns {any}
   */
  protocolValidator(control) {
    if (!control.value.match('^(http|https)://')) {
      return {
        protocol: true
      };
    }
    return null;
  }
  validateEmail(control) {
    {
      if (!control.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {
          email: true
        };
      }
      return null;
    }
  }
  verifyExtensionExists(control) {
    {
      if (!control.value.match(/(\.pdf|\.doc|\.html|\.htm|\.docx|\.txt|\.php|\.img|\.html|\.xml|\.xlt|\.xls)$/)) {
        return {
          ext: true
        };
      }
      return null;
    }
  }
  verifyImageExtensionExists(control) {
    //console.log(control);
    {
      if (!control.value.match(/(\.gif|\.jpg|\.jpeg|\.jif|\.jfif|\.jp2|\.jpx|\.j2k|\.j2c|\.png|\.GIF|\.JPG|\.JPEG|\.JIF|\.JFIF|\.JP2|\.JPX|\.J2K|\.J2C|\.PNG)$/)) {
        return {
          imgext: true
        };
      }
      return null;
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
CustomValidatorsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], CustomValidatorsService);


/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DataService = (_class = class DataService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    this._http = _http;
  }
  ngOnInit() {
    this.getLocalDirectories();
  }
  /**
   *
   * @param data
   * @returns {Observable<Response>}
   */
  postData(data) {
    const body = JSON.stringify(data);
    const httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.post('/dashboard/endpoints/data-endpoint.php', body, httpOptions);
  }
  /**
   *
   * @returns {Observable<Response>}
   */
  getData() {
    return this._http.get('/dashboard/data/data.json?v=' + new Date());
  }
  /**
   * @param doctorName
   */
  getHubNavData(doctorName) {
    return this._http.get('/.well-known/.hub-navigation/' + doctorName, {
      responseType: "text"
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
      let html = response;
      let nav = $('#main-nav  .collapsible > ul', $.parseHTML(html));
      return nav[0].outerHTML;
    }));
  }
  /**
   * @param doctorName
   * Load stock welcome text html into textarea
   */
  getWelcomeTextData(doctorName) {
    return this._http.get('/.well-known/.hub-welcome-text/' + doctorName, {
      responseType: "text"
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (response) {
      let html = response;
      let welText = $('#content header h1', $.parseHTML(html));
      return welText[0].outerHTML;
    }));
  }
  /**
   * Load stock welcome text html from endpoints/stock-welcome-text.html.html
   */
  loadWelcomeTextData() {
    return this._http.get('/dashboard/endpoints/stock-welcome-text.html.html', {
      responseType: "text"
    });
  }
  /**
   * Load stock nav html into textareaw
   */
  loadStockNavData() {
    return this._http.get('/dashboard/endpoints/stock-nav-html.html', {
      responseType: "text"
    });
  }
  getLocalDirectories() {
    return this._http.get('../helpers.php').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response));
  }
  /**
   * @param doctorName
   * @param html
   */
  postHubNavData(doctorName, html) {
    return this._http.post('/.well-known/.hub-navigation/' + doctorName + '/update', html);
  }
  /**
   * @param doctorName
   * @param html
   */
  postWelcomeTextData(doctorName, html) {
    return this._http.post('/.well-known/.hub-welcome-text/' + doctorName + '/update', html);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
DataService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], DataService);


/***/ }),

/***/ 83101:
/*!*****************************************************!*\
  !*** ./src/app/services/get-local-files.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLocalFilesService": () => (/* binding */ GetLocalFilesService)
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


let GetLocalFilesService = (_class = class GetLocalFilesService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  listLocalFiles(account, directory) {
    const body = JSON.stringify({
      account,
      directory
    });
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-local-files.php', body, {
      headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
GetLocalFilesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], GetLocalFilesService);


/***/ }),

/***/ 85486:
/*!*************************************************!*\
  !*** ./src/app/services/modal-popup.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupService": () => (/* binding */ ModalPopupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {ModalDirective} from "ngx-bootstrap";
let ModalPopupService = class ModalPopupService {
  /*@ViewChild('autoShownModal') public autoShownModal:ModalDirective;
     private errorMessage: string;
  private buttonText: string;
  private popupBody: string;
     public isModalShown:boolean = false;
     public showModal(err, btntext, popupbody):void {
    this.isModalShown = true;
    this.errorMessage = err;
    this.buttonText = btntext;
    this.popupBody = popupbody;
  }
     public hideModal():void {
    this.autoShownModal.hide();
  }
     public onHidden():void {
    this.isModalShown = false;
  }*/
  confirm(bool) {
    if (bool) {
      console.log('true');
    }
  }
};
ModalPopupService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], ModalPopupService);


/***/ }),

/***/ 97907:
/*!***********************************************************!*\
  !*** ./src/app/services/product-type-redirect.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductTypeRedirectService": () => (/* binding */ ProductTypeRedirectService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ProductTypeRedirectService = (_class = class ProductTypeRedirectService {
  // implements CanActivate

  constructor(_siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "product_type", []);
    this._siteContextProviderService = _siteContextProviderService;
  }
  /**
   *
   * @returns {any}
   */
  /*canActivate() {
       this._siteContextProviderService.getCurrentContext().subscribe(
          data => {
              this.account = data.account;
              this.product_type = data.product_type;
              this.onGetProductType(this.account);
          },
          error => console.log(error)
      );
       return this.account;
   }*/
  /**
   *
   * @param account
   */
  onGetProductType(account) {
    this._siteContextProviderService.getProductType(account).subscribe(data => {
      const siteDataArray = [];
      for (let key in data) {
        siteDataArray.push(data[key]);
      }
      this.product_type = siteDataArray;
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}]), _class);
ProductTypeRedirectService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ProductTypeRedirectService);


/***/ }),

/***/ 71464:
/*!*******************************************************!*\
  !*** ./src/app/services/show-hide-content.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowHideContentService": () => (/* binding */ ShowHideContentService)
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

let ShowHideContentService = (_class = class ShowHideContentService {
  constructor() {}
  showHideContent(item) {
    return item;
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
ShowHideContentService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], ShowHideContentService);


/***/ }),

/***/ 45832:
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarService": () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SnackbarService = (_class = class SnackbarService {
  constructor(_snackBar) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBar", void 0);
    this._snackBar = _snackBar;
  }
  openSnackBar(message, action) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar
}]), _class);
SnackbarService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], SnackbarService);


/***/ }),

/***/ 29004:
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
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

let UtilitiesService = (_class = class UtilitiesService {
  constructor() {}
  /**
   *
   * @param field
   * @returns {RegExpMatchArray|boolean}
   */
  getFileExtension(field) {
    {
      //useage:
      /**
       *
       * @param field
       * @returns {string}
       */
      /*getFileExtension(field){
       this.ext = this._utilities.getFileExtension(field.value);
       console.log('ext: '  + this.ext);
       console.log(field.value);
       return this.ext;
       }*/
      let ext = field.match(/\.[0-9a-z]{1,5}$/i);
      /*console.log('ext: ' + ext);
      console.log(field);*/
      return ext;
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
UtilitiesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)()], UtilitiesService);


/***/ }),

/***/ 61948:
/*!**********************************************************!*\
  !*** ./src/app/shared/shared-data/shared-data.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDataModule": () => (/* binding */ SharedDataModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/keys.pipe */ 81505);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SharedDataModule = class SharedDataModule {};
SharedDataModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  declarations: [_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_0__.KeysPipe],
  exports: [_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_0__.KeysPipe]
})], SharedDataModule);


/***/ }),

/***/ 1806:
/*!************************************************************************!*\
  !*** ./src/app/shared/shared-file-manage/shared-file-manage.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFileManageModule": () => (/* binding */ SharedFileManageModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_get_extension_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/get-extension.pipe */ 50364);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Manage extensions and other file related tasks */
let SharedFileManageModule = class SharedFileManageModule {};
SharedFileManageModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  declarations: [_pipes_get_extension_pipe__WEBPACK_IMPORTED_MODULE_0__.GetExtensionPipe],
  exports: [_pipes_get_extension_pipe__WEBPACK_IMPORTED_MODULE_0__.GetExtensionPipe]
})], SharedFileManageModule);


/***/ }),

/***/ 82744:
/*!**********************************************************************!*\
  !*** ./src/app/shared/shared-formatting/shared-formatting.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedFormattingModule": () => (/* binding */ SharedFormattingModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pipes_add_space_before_capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/add-space-before-capital */ 60751);
/* harmony import */ var _pipes_add_width_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pipes/add-width.pipe */ 45862);
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/capitalize.pipe */ 45098);
/* harmony import */ var _pipes_capitalize_each_word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/capitalize-each-word */ 54238);
/* harmony import */ var _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/capitalize-word.pipe */ 65091);
/* harmony import */ var _pipes_remove_parenthesis_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/remove-parenthesis.pipe */ 60455);
/* harmony import */ var _pipes_replace_characters_except_dash_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/replace-characters-except-dash.pipe */ 3781);
/* harmony import */ var _pipes_replace_curly_brace_entity_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/replace-curly-brace-entity.pipe */ 7104);
/* harmony import */ var _pipes_replace_dash_space__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/replace-dash-space */ 21895);
/* harmony import */ var _pipes_replace_space_dash_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/replace-space-dash.pipe */ 38759);
/* harmony import */ var _pipes_replace_trailing_dash_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/replace-trailing-dash.pipe */ 85794);
/* harmony import */ var _pipes_replace_underscore_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/replace-underscore.pipe */ 51503);
/* harmony import */ var _pipes_to_lowercase_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/to-lowercase.pipe */ 82897);
/* harmony import */ var _pipes_google_map_remove_iframe_border__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/google-map-remove-iframe-border */ 44293);
/* harmony import */ var _pipes_google_map_remove_width_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pipes/google-map-remove-width.pipe */ 56876);
/* harmony import */ var _pipes_replace_email_at_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pipes/replace-email-at.pipe */ 84101);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 2508);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















let SharedFormattingModule = class SharedFormattingModule {};
SharedFormattingModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
  providers: [],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__.MatExpansionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule],
  declarations: [_pipes_add_space_before_capital__WEBPACK_IMPORTED_MODULE_0__.AddSpaceBeforeCapitalPipe, _pipes_add_width_pipe__WEBPACK_IMPORTED_MODULE_1__.AddWidthPipe, _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe, _pipes_replace_email_at_pipe__WEBPACK_IMPORTED_MODULE_15__.ReplaceEmailAtPipe, _pipes_google_map_remove_iframe_border__WEBPACK_IMPORTED_MODULE_13__.GoogleMapRemoveIframeBorderPipe, _pipes_google_map_remove_width_pipe__WEBPACK_IMPORTED_MODULE_14__.GoogleMapRemoveWidthPipe, _pipes_capitalize_each_word__WEBPACK_IMPORTED_MODULE_3__.CapitalizeEachWord, _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_4__.CapitalizeWordPipe, _pipes_remove_parenthesis_pipe__WEBPACK_IMPORTED_MODULE_5__.RemoveParenthesisPipe, _pipes_replace_characters_except_dash_pipe__WEBPACK_IMPORTED_MODULE_6__.ReplaceCharactersExceptDashPipe, _pipes_replace_curly_brace_entity_pipe__WEBPACK_IMPORTED_MODULE_7__.ReplaceCurlyBraceEntityPipe, _pipes_replace_dash_space__WEBPACK_IMPORTED_MODULE_8__.ReplaceDashSpace, _pipes_replace_space_dash_pipe__WEBPACK_IMPORTED_MODULE_9__.ReplaceSpaceDash, _pipes_replace_trailing_dash_pipe__WEBPACK_IMPORTED_MODULE_10__.ReplaceTrailingDashPipe, _pipes_replace_underscore_pipe__WEBPACK_IMPORTED_MODULE_11__.ReplaceUnderscoreSpace, _pipes_to_lowercase_pipe__WEBPACK_IMPORTED_MODULE_12__.ToLowercasePipe],
  exports: [_pipes_add_space_before_capital__WEBPACK_IMPORTED_MODULE_0__.AddSpaceBeforeCapitalPipe, _pipes_add_width_pipe__WEBPACK_IMPORTED_MODULE_1__.AddWidthPipe, _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_2__.CapitalizePipe, _pipes_replace_email_at_pipe__WEBPACK_IMPORTED_MODULE_15__.ReplaceEmailAtPipe, _pipes_google_map_remove_iframe_border__WEBPACK_IMPORTED_MODULE_13__.GoogleMapRemoveIframeBorderPipe, _pipes_google_map_remove_width_pipe__WEBPACK_IMPORTED_MODULE_14__.GoogleMapRemoveWidthPipe, _pipes_capitalize_each_word__WEBPACK_IMPORTED_MODULE_3__.CapitalizeEachWord, _pipes_capitalize_word_pipe__WEBPACK_IMPORTED_MODULE_4__.CapitalizeWordPipe, _pipes_remove_parenthesis_pipe__WEBPACK_IMPORTED_MODULE_5__.RemoveParenthesisPipe, _pipes_replace_characters_except_dash_pipe__WEBPACK_IMPORTED_MODULE_6__.ReplaceCharactersExceptDashPipe, _pipes_replace_curly_brace_entity_pipe__WEBPACK_IMPORTED_MODULE_7__.ReplaceCurlyBraceEntityPipe, _pipes_replace_dash_space__WEBPACK_IMPORTED_MODULE_8__.ReplaceDashSpace, _pipes_replace_space_dash_pipe__WEBPACK_IMPORTED_MODULE_9__.ReplaceSpaceDash, _pipes_replace_trailing_dash_pipe__WEBPACK_IMPORTED_MODULE_10__.ReplaceTrailingDashPipe, _pipes_replace_underscore_pipe__WEBPACK_IMPORTED_MODULE_11__.ReplaceUnderscoreSpace, _pipes_to_lowercase_pipe__WEBPACK_IMPORTED_MODULE_12__.ToLowercasePipe]
})], SharedFormattingModule);


/***/ }),

/***/ 72689:
/*!**********************************************!*\
  !*** ./src/app/support/support.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportComponent": () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.component.html?ngResource */ 54098);
/* harmony import */ var _support_component_less_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component.less?ngResource */ 83353);
/* harmony import */ var _support_component_less_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_support_component_less_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SupportComponent = (_class = class SupportComponent {
  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'Support');
  }
  ngOnInit() {}
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), _class);
SupportComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'dev-support',
  template: _support_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_support_component_less_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SupportComponent);


/***/ }),

/***/ 96758:
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportModule": () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.component */ 72689);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _support_support_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../support/support.routes */ 37202);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _resources_resources_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/resources.module */ 93882);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let SupportModule = class SupportModule {};
SupportModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_support_support_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES), _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule, _resources_resources_module__WEBPACK_IMPORTED_MODULE_2__.ResourcesModule],
  declarations: [_support_component__WEBPACK_IMPORTED_MODULE_0__.SupportComponent]
})], SupportModule);


/***/ }),

/***/ 37202:
/*!*******************************************!*\
  !*** ./src/app/support/support.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.component */ 72689);

const ROUTES = [{
  path: '',
  component: _support_component__WEBPACK_IMPORTED_MODULE_0__.SupportComponent
}];

/***/ }),

/***/ 93081:
/*!***********************************************!*\
  !*** ./src/app/utilities/utilities.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesModule": () => (/* binding */ UtilitiesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/custom-validators.service */ 46077);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-dashboard/admin/admin.service */ 18109);
/* harmony import */ var _services_copy_css_to_local_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/copy-css-to-local-file.service */ 78236);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utilities.service */ 29004);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let UtilitiesModule = class UtilitiesModule {};
UtilitiesModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  providers: [_admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService, _services_copy_css_to_local_file_service__WEBPACK_IMPORTED_MODULE_4__.CopyCssToLocalFileService, _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_0__.CopyDataToClipboardService, _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_1__.CustomValidatorsService, _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_5__.ShowHideContentService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__.SiteContextProviderService, _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__.UtilitiesService]
})], UtilitiesModule);


/***/ }),

/***/ 32371:
/*!**********************************************!*\
  !*** ./src/dev-tools/dev-tools.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _templates_dev_tools_template_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/dev-tools.template.html?ngResource */ 40595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_dev_tools_sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/dev-tools-sidebar.service */ 31625);
/* harmony import */ var _app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/data.service */ 52468);
/* harmony import */ var _site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _app_services_product_type_redirect_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/services/product-type-redirect.service */ 97907);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ToolbarComponent = (_class = class ToolbarComponent {
  constructor(_resetNavHtml, _dataService, _productTypeRedirectService, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_resetNavHtml", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dataService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_productTypeRedirectService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteItems", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitename", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "type", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "product_type", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "accountChanged", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isClassVisible", void 0);
    this._resetNavHtml = _resetNavHtml;
    this._dataService = _dataService;
    this._productTypeRedirectService = _productTypeRedirectService;
    this._siteContextProviderService = _siteContextProviderService;
  }
  /**
   * SDS? PSDS?
   */
  onCheckProductType() {
    // this._productTypeRedirectService.canActivate();
  }
  /**
   *
   * @returns {string}
   */
  ngOnInit() {
    // keep to designate dev-tools dashboard page
    this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
    this.onGetData();
    this.onGetSiteContext();
    this.onCheckProductType();
    return this.sitename;
  }
  /**
   * Reset navigation textarea in buildkit
   */
  onResetNavigation() {
    this._resetNavHtml.resetNavBar(this.sitename).subscribe(data => {
      window.location.reload();
    }, error => console.log(error));
  }
  /**
   * Get account name
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.account = data.account;
    }, error => console.log(error));
    return this.product_type;
  }
  /**
   *
   * @param account
   */
  /* onGetProductType(account) {
       this._siteContextProviderService.getProductType(account)
           .subscribe(
               data => {
                   const siteDataArray = [];
                    for (let key in data) {
                       siteDataArray.push(data[key]);
                   }
                   this.product_type = siteDataArray;
               },
               error => console.log(error)
           );
   };*/
  /**
   *
   */
  onGetData() {
    this._dataService.getData().subscribe(data => {
      const siteData = [];
      for (let key in data) {
        siteData.push(data[key]);
      }
      this.siteItems = siteData;
      return this.siteItems;
    });
  }
  /**
   * Deprecated and removed from app
   * Open dashboard and tools
   */
  onOpenDashboard() {
    let url = 'http://localhost/dashboard/#/home';
    window.open(url, '_blank');
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_dev_tools_sidebar_service__WEBPACK_IMPORTED_MODULE_2__.ResetNavHtml
}, {
  type: _app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService
}, {
  type: _app_services_product_type_redirect_service__WEBPACK_IMPORTED_MODULE_5__.ProductTypeRedirectService
}, {
  type: _site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}]), _class);
ToolbarComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)(), (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'dev-tools',
  template: _templates_dev_tools_template_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], ToolbarComponent);


/***/ }),

/***/ 36793:
/*!*******************************************!*\
  !*** ./src/dev-tools/dev-tools.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarModule": () => (/* binding */ ToolbarModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-tools.component */ 32371);
/* harmony import */ var _services_dev_tools_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dev-tools-sidebar.service */ 31625);
/* harmony import */ var _app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services/data.service */ 52468);
/* harmony import */ var _app_services_product_type_redirect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/services/product-type-redirect.service */ 97907);
/* harmony import */ var _site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _app_quick_links_quick_links_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/quick-links/quick-links.module */ 39621);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _site_context_provider_site_metadata_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site-context-provider/site-metadata.module */ 8849);
/* harmony import */ var _dev_tools_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev-tools.routes */ 274);
/* harmony import */ var _app_login_auth_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/login/auth.module */ 42909);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import {LoginComponent} from '../app/login/login.component';
// import {AuthenticationService} from '../app/login/authentication.service';
let ToolbarModule = class ToolbarModule {};
ToolbarModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_dev_tools_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _app_quick_links_quick_links_module__WEBPACK_IMPORTED_MODULE_5__.QuickLinksModule, _site_context_provider_site_metadata_module__WEBPACK_IMPORTED_MODULE_6__.SiteMetaDataModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(_dev_tools_routes__WEBPACK_IMPORTED_MODULE_7__.ToolsRoutes, {
    useHash: true
  }), _app_login_auth_module__WEBPACK_IMPORTED_MODULE_8__.AuthModule],
  exports: [_dev_tools_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent],
  providers: [_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService, _app_services_product_type_redirect_service__WEBPACK_IMPORTED_MODULE_3__.ProductTypeRedirectService, _services_dev_tools_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.ResetNavHtml, _site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService],
  bootstrap: [_dev_tools_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent]
})], ToolbarModule);


/***/ }),

/***/ 274:
/*!*******************************************!*\
  !*** ./src/dev-tools/dev-tools.routes.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolsRoutes": () => (/* binding */ ToolsRoutes)
/* harmony export */ });
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/login/login.component */ 98458);
/* harmony import */ var _app_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/auth/authentication.guard */ 21395);
/* harmony import */ var _app_auth_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/auth/admin.guard */ 39509);



const ToolsRoutes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
}, {
  path: 'home',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/home/home.module */ 3467)).then(m => m.HomeModule)
}, {
  path: 'login',
  component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'admin',
  canActivate: [_app_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_login_user_user_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-dashboard_admin_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/admin-dashboard/admin/admin/admin.module */ 34272)).then(m => m.AdminModule)
}, {
  path: 'user',
  canActivate: [_app_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard, _app_auth_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_login_user_user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/login/user/user.module */ 77656)).then(m => m.UserModule)
}, {
  path: 'manage-image-manager',
  canActivate: [_app_auth_authentication_guard__WEBPACK_IMPORTED_MODULE_1__.AuthenticationGuard, _app_auth_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin-dashboard_admin-image-manager_admin-image-manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/admin-dashboard/admin-image-manager/admin-image-manager.module */ 65347)).then(m => m.AdminImageManagerModule)
}, {
  path: 'canadian-content',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_canadian-content_canadian-content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/canadian-content/canadian-content.module */ 30919)).then(m => m.CanadianContentModule)
}, {
  path: 'github-cheat-sheet',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_github-cheat-sheet_github-cheat-sheet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/github-cheat-sheet/github-cheat-sheet.module */ 11413)).then(m => m.GithubCheatSheetModule)
}, {
  path: 'image-manager',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_image-manager_image-manager_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/image-manager/image-manager.module */ 4255)).then(m => m.ImageManagerModule)
}, {
  path: 'redirects',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_redirects_redirects_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/redirects/redirects.module */ 78516)).then(m => m.RedirectsModule)
}, {
  path: 'sections',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_subnav_subnav_module_ts-node_modules_angular_material_fesm2020_list_mjs"), __webpack_require__.e("src_app_sections_sections_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/sections/sections.module */ 54065)).then(m => m.SectionsModule)
}, {
  path: 'css',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_css_css_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/css/css.module */ 19433)).then(m => m.CssModule)
}, {
  path: 'css-mixins',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_css-mixins_css-mixins_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/css-mixins/css-mixins.module */ 31794)).then(m => m.CssMixinsModule)
}, {
  path: 'buildkit-links',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_buildkit-links_buildkit-links_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/buildkit-links/buildkit-links.module */ 99995)).then(m => m.BuildkitLinksModule)
}, {
  path: 'support',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../app/support/support.module */ 96758)).then(m => m.SupportModule)
}, {
  path: 'changelog',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin-dashboard_changelog_changelog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../app/admin-dashboard/changelog/changelog.module */ 16585)).then(m => m.ChangelogModule)
}, {
  path: 'builder',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_builder_builder_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/login/builder/builder.module */ 60553)).then(m => m.BuilderModule)
}, {
  path: 'pages',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/pages/pages.module */ 18950)).then(m => m.PagesModule)
}, {
  path: 'form-builder',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_subnav_subnav_module_ts-node_modules_angular_material_fesm2020_list_mjs"), __webpack_require__.e("src_app_form-builder_form-builder_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/form-builder/form-builder.module */ 5675)).then(m => m.FormBuilderModule)
}, {
  path: 'ddu',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_drag-drop-to-upload_drag-drop-to-upload_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../app/drag-drop-to-upload/drag-drop-to-upload.module */ 6289)).then(m => m.DragDropToUploadModule)
}
/*,
{    path: '/!**!/',
    component: PageNotFoundComponent
 }*/];

/***/ }),

/***/ 72402:
/*!********************************!*\
  !*** ./src/dev-tools/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* reexport safe */ _dev_tools_component__WEBPACK_IMPORTED_MODULE_0__.ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _dev_tools_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev-tools.component */ 32371);


/***/ }),

/***/ 31625:
/*!*************************************************************!*\
  !*** ./src/dev-tools/services/dev-tools-sidebar.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetNavHtml": () => (/* binding */ ResetNavHtml)
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


let ResetNavHtml = (_class = class ResetNavHtml {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  resetNavBar(doctorName) {
    return this._http.get('/.well-known/.hub-navigation/' + doctorName + '/delete');
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
ResetNavHtml = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ResetNavHtml);


/***/ }),

/***/ 88518:
/*!***********************************************************!*\
  !*** ./src/dev-tools/services/site-management.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteManagementService": () => (/* binding */ SiteManagementService)
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


let SiteManagementService = (_class = class SiteManagementService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  createSeed(siteSeed) {
    console.log(siteSeed);
    if (siteSeed === 'dashboard' || siteSeed === 'dev' || siteSeed === 'MAMP' || siteSeed === 'wampthemes' || siteSeed === 'archives' || siteSeed === 'form-template') {
      alert('Cannot overwrite root directories');
      return;
    }
    const body = JSON.stringify(siteSeed);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // copy stock psds-buildkit contents to root directory
    return this._http.post('/dashboard/endpoints/create-seed-endpoint.php', body, {
      headers: headers
    });
  }
  /**
   *
   * @param siteDirName
   */
  deleteSiteDirectory(siteDirName) {
    if (siteDirName === 'dashboard' || siteDirName === 'dev' || siteDirName === 'wamplangues' || siteDirName === 'MAMP' || siteDirName === 'wampthemes' || siteDirName === 'srwd') {
      console.log('Cannot delete root directories');
      return;
    }
    let siteDirectory = {
      'siteDirectoryName': siteDirName
    };
    let body = JSON.stringify(siteDirectory);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // Post to delete endpoint
    return this._http.post('/dashboard/endpoints/delete-site-directory-endpoint.php', body, {
      headers: headers
    }).toPromise();
  }
  /**
   * @param accountname
   * @returns {any}
   */
  backupBuildKit(accountname) {
    let body = JSON.stringify(accountname);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // Post to backup endpoint
    return this._http.post('/dashboard/endpoints/backup-buildkit-endpoint.php', body, {
      headers: headers
    }).toPromise();
  }
  /**
   * @returns {Observable<R>}
   */
  backupFilesExist() {
    const body = JSON.stringify('archives');
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/backup-exists-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
SiteManagementService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], SiteManagementService);


/***/ }),

/***/ 16991:
/*!******************************************************!*\
  !*** ./src/dev-tools/site-context-provider/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteContextProviderService": () => (/* reexport safe */ _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_0__.SiteContextProviderService)
/* harmony export */ });
/* harmony import */ var _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/site-context-provider.service */ 51987);


/***/ }),

/***/ 51987:
/*!***************************************************************************************!*\
  !*** ./src/dev-tools/site-context-provider/services/site-context-provider.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteContextProviderService": () => (/* binding */ SiteContextProviderService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ 99464);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let SiteContextProviderService = (_class = class SiteContextProviderService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_localDirectories", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_currentContextSubscribers", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getLocalDirectoriesError", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "os", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "osxClass", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pcClass", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_smdata", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "launchShowHide", 'hide');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "osRelease", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    this._http = _http;
  }
  ngOnInit() {
    this.getCurrentContext();
    this.getOS();
  }
  /**
   * Get local direcno
   * tories
   * @returns {any}
   */
  getLocalDirectories() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      if (this._localDirectories) {
        subscriber.next(this._localDirectories);
        subscriber.complete();
        return;
      }
      // path is correct here
      this._http.get('/dashboard/endpoints/get-local-directories-endpoint.php').subscribe(data => {
        this._localDirectories = data;
        subscriber.next(data);
        subscriber.complete();
      }, error => {
        subscriber.error('Error at getLocalDirectories in site-context-provider service');
      });
    });
  }
  /**
   * Get operating system info
   */
  getOS() {
    let platform = navigator.userAgent;
    let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Intel Mac OS'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    if (macosPlatforms.some(p => platform.indexOf(p) !== -1)) {
      this.os = 'OSX';
    } else if (iosPlatforms.some(p => platform.indexOf(p) !== -1)) {
      this.os = 'iOS';
    } else if (windowsPlatforms.some(p => platform.indexOf(p) !== -1)) {
      this.os = 'PC';
    } else if (/Android/.test(platform)) {
      this.os = 'PC';
    } else if (/Linux/.test(platform)) {
      this.os = 'PC';
    }
    if (this.os === 'OSX') {
      this.osxClass = 'show';
      this.pcClass = 'hide';
    }
    if (this.os === 'PC') {
      this.osxClass = 'hide';
      this.pcClass = 'show';
    }
    return this.os;
  }
  /**
   * Get current context from /dashboard/data/site-context.json
   * getCurrentContext()
   * @returns {any}
   */
  getCurrentContext() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._currentContextSubscribers.push(subscriber);
      if (this._currentContext) {
        subscriber.next(this._currentContext);
        return;
      }
      // Get from data site-context.json
      this._http.get('/dashboard/data/site-context.json?v=' + new Date()).subscribe(data => {
        this._currentContext = data;
        this.account = data.account;
        subscriber.next(data);
      }, error => {
        subscriber.error('Error at getCurrentContext in site-context-provider service');
      });
    });
  }
  /**
   * Get siteData from local site
   * @param account
   * @returns {Observable<R>}
   */
  getProductType(account) {
    return this._http.get('../../' + account + '/assets/includes/data/data.json?v=' + new Date());
  }
  /**
   * Click event triggers onSetSiteData(form values) which calls setCurrentContext()
   * @param context
   */
  setCurrentContext(context) {
    let siteContext = {
      'account': context.value.account,
      "builder": context.value.builder,
      'sm_version': context.value.sm_version,
      'buildversion': context.value.buildversion,
      'data_version': context.value.data_version,
      'css_preprocessor': context.value.css_preprocessor,
      'product_type': context.value.product_type,
      'template_layout': context.value.template_layout
    };
    let body = JSON.stringify(siteContext);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // Post to active account-name/assets/includes/data/ **disable to allow removal of data folder
    this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, {
      headers: headers
    }).subscribe(data => {
      this._currentContext = siteContext;
      this._currentContextSubscribers.forEach(subscriber => {
        subscriber.next(this._currentContext);
      });
    }, error => {
      this.getLocalDirectoriesError = 'The site being added must exist on the hub. ' + 'Make sure the account has been created and is spelled correctly.';
      // tslint:disable-next-line:no-unused-expression
      'Error at setCurrentContext()';
    });
  }
  /**
   * Get domain name from address bar
   */
  getCurrentDomainName() {
    let domainName = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    return domainName;
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}]), _class);
SiteContextProviderService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], SiteContextProviderService);


/***/ }),

/***/ 53913:
/*!************************************************************************!*\
  !*** ./src/dev-tools/site-context-provider/site-metadata.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteMetaDataComponent": () => (/* binding */ SiteMetaDataComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _templates_site_metadata_template_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/site-metadata.template.html?ngResource */ 16489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/site-context-provider.service */ 51987);
/* harmony import */ var _app_admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/admin-dashboard/admin/admin.service */ 18109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _app_login_builder_builder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/login/builder/builder.service */ 96284);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let SiteMetaDataComponent = (_class = class SiteMetaDataComponent {
  /**
   *
   * @param _siteContextProviderService
   * @param _adminService
   * @param _builderService
   * @param router
   */
  constructor(_siteContextProviderService, _adminService, _builderService, router) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_adminService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_builderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "router", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "parentValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentAccount", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "accountChanged", new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localDirectories", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "heading", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "snippetTitle", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "snippet", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "product_type", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "response", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectSiteMetadataForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "metadata", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builderData", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "admindata", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "os", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cssPreprocessor", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sm_version", '14.2.0');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "buildversion", '14.2.0');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builder", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "date", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "version", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getLocalDirectoriesError", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "osxClass", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pcClass", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "launchShowHide", 'hide');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectSiteShowHide", 'hide');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "mainMenuArray", [{
      display: 'Create Buildkit',
      routerLink: 'sections'
    }, {
      display: 'Standard Pages',
      routerLink: 'pages'
    }, {
      display: 'Stock Photo Manager',
      routerLink: 'image-manager'
    }, {
      display: 'Image Manager',
      routerLink: 'ddu'
    }, {
      display: 'Form Builder',
      routerLink: 'form-builder'
    }, {
      display: 'Builder Notes',
      routerLink: 'builder'
    }, {
      display: 'Canadian Content',
      routerLink: 'canadian-content'
    }, {
      display: 'Support',
      routerLink: 'support'
    }]);
    this._siteContextProviderService = _siteContextProviderService;
    this._adminService = _adminService;
    this._builderService = _builderService;
    this.router = router;
    // log site-context changes to console
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.account = data.account;
      this.builder = data.builder;
      this.buildversion = data.buildversion;
      this.cssPreprocessor = data.css_preprocessor;
      this.sm_version = data.sm_version;
      this.selectSiteMetadataForm.patchValue({
        'buildversion': this.buildversion,
        'builder': this.builder,
        'account': this.account
      });
    }, error => {
      'Current Site Data Unavailable';
    });
    // The Form
    this.selectSiteMetadataForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      'account': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      'builder': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      'sm_version': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('14.2.0'),
      'version': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      'data_version': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('1.2.0'),
      'css_preprocessor': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('less'),
      'buildversion': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('14.2.0'),
      'lessversion': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('2.6')
    });
    /**
     * Load Site button
     * gets selected account directory from /dashboard/data/...
     */
    this.selectSiteMetadataForm.valueChanges.subscribe(
      // (data: any) => console.log(data)
    );
  } // end constructor
  /**
   * Acquire available accounts (directories) and initialize current data form /data/site-context.json onInit
   */
  ngOnInit() {
    this.onGetLocalDirectories();
    // this.getAdminData();
    this.initCurrentSite();
  }
  /**
   * Initialize current site/account name from /data/site-context.json
   */
  initCurrentSite() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.account = data.account;
      this.heading = data.account;
      this.builder = data.builder;
      this.buildversion = data.buildversion;
    }, error => {
      console.log('Current Site Data Unavailable');
    });
  }
  /**
   * Get current admin data
   */
  getAdminData() {
    this._adminService.getFormData().subscribe(data => {
      this.admindata = data.adminData;
      return;
    });
  }
  /**
   * Get current package.json values
   */
  /* getPackageData() {
      /!* const packageJSON = require(' ../../../../package.json');
       this.cssPreprocessor = packageJSON.devDependencies.;
       console.log(this.cssPreprocessor);*!/
    }*/
  /**
   * Acquire list of local accounts (directories) using service
   */
  onGetLocalDirectories() {
    this._siteContextProviderService.getLocalDirectories().subscribe(data => {
      this.localDirectories = data;
    }, error => console.log('Local directories unavailable'));
  }
  /* getbuilderFormData() {
       this._builderService.getBuilderData().subscribe(res => {
           console.log(res);
           this.builderData = res[0]['items'];
           this.account = res.account;
           this.snippetTitle = res.items.snippetTitle;
           this.snippet = res.items.snippet;
       });
    }*/
  /**
   * Write current selected account to /data/site-context.json when click event is triggered from site-metadata.template
   */
  onSetSiteData(form) {
    // get all builder data
    this._builderService.getBuilderData().subscribe(data => {
      this.builderData = data;
      this.builderData.builder = form.controls['builder'].value;
      this.builderData.items.unshift({
        account: form.controls['account'].value,
        date: new Date().toUTCString(),
        snippetTitle: "",
        snippet: ""
      });
      this._builderService.postBuilderData(this.builderData);
      let selectSiteMetadataForm = this.selectSiteMetadataForm; // Form values
      this._siteContextProviderService.setCurrentContext(selectSiteMetadataForm);
      location.reload();
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__.SiteContextProviderService
}, {
  type: _app_admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService
}, {
  type: _app_login_builder_builder_service__WEBPACK_IMPORTED_MODULE_4__.BuilderService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}]), _class);
SiteMetaDataComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'site-metadata',
  template: _templates_site_metadata_template_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['currentAccount', 'parentValue'],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['accountChanged']
})], SiteMetaDataComponent);


/***/ }),

/***/ 8849:
/*!*********************************************************************!*\
  !*** ./src/dev-tools/site-context-provider/site-metadata.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteMetaDataModule": () => (/* binding */ SiteMetaDataModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _site_metadata_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-metadata.component */ 53913);
/* harmony import */ var _app_shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _app_get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/get-hub-navigation/get-hub-navigation.module */ 99158);
/* harmony import */ var _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/site-context-provider.service */ 51987);
/* harmony import */ var _app_admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/admin-dashboard/admin/admin.service */ 18109);
/* harmony import */ var _app_create_seed_create_seed_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/create-seed/create-seed.module */ 33422);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _app_login_builder_builder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/login/builder/builder.service */ 96284);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import {HttpModule} from '@angular/http';






















let SiteMetaDataModule = class SiteMetaDataModule {};
SiteMetaDataModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  providers: [_app_admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService, _services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService, _app_login_builder_builder_service__WEBPACK_IMPORTED_MODULE_6__.BuilderService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _app_shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_1__.SharedDataModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _app_get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_2__.GetHubNavigationModule, _app_create_seed_create_seed_module__WEBPACK_IMPORTED_MODULE_5__.CreateSeedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule],
  declarations: [_site_metadata_component__WEBPACK_IMPORTED_MODULE_0__.SiteMetaDataComponent],
  exports: [_site_metadata_component__WEBPACK_IMPORTED_MODULE_0__.SiteMetaDataComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_7__.CUSTOM_ELEMENTS_SCHEMA]
})], SiteMetaDataModule);


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `!angular-cli.json-v5.0.0`.
const environment = {
  production: false
};

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ 7435);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 36747);





//import { AppModule } from './app/';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule);

/***/ }),

/***/ 7435:
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es6/symbol */ 56588);
/* harmony import */ var core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es6/object */ 499);
/* harmony import */ var core_js_es6_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_object__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es6/function */ 27398);
/* harmony import */ var core_js_es6_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es6/parse-int */ 82956);
/* harmony import */ var core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es6/parse-float */ 47543);
/* harmony import */ var core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_parse_float__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es6/number */ 77500);
/* harmony import */ var core_js_es6_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es6/math */ 97030);
/* harmony import */ var core_js_es6_math__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_math__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es6/string */ 91858);
/* harmony import */ var core_js_es6_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es6/date */ 62522);
/* harmony import */ var core_js_es6_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es6/array */ 67959);
/* harmony import */ var core_js_es6_array__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_array__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es6/regexp */ 85484);
/* harmony import */ var core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es6/map */ 37794);
/* harmony import */ var core_js_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es6/set */ 59590);
/* harmony import */ var core_js_es6_set__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_set__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es6/reflect */ 64100);
/* harmony import */ var core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es6_reflect__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/es7/reflect */ 92294);
/* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! zone.js */ 64924);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_15__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.

















/***/ }),

/***/ 81398:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/get-welcome-text/get-welcome-text.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgLmJ0bi1ncm91cC1zbSA%2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CgogICAgICAgIC5pbnZhbGlkLXNlbGVjdGlvbiB7CiAgICAgICAgICAgIGNvbG9yOiAjZmZmOwogICAgICAgIH0KICAgICAgICBsYWJlbCB7CiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgICAgICBtYXJnaW4tdG9wOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAxMHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB0ZXh0YXJlYSB7CiAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7CiAgICAgICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDsKICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0OwogICAgICAgICAgICBjb2xvcjogIzMzMzsKICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4OwogICAgICAgIH0KICAgICAgICAuZm9ybS1ncm91cCB7CiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsKICAgICAgICB9CiAgICA%3D!./src/app/get-welcome-text/get-welcome-text.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        .btn-group-sm > .btn, .btn-sm {\n            padding: .25rem .5rem;\n            font-size: .875rem;\n            border-radius: .2rem;\n        }\n        .btn {\n            display: inline-block;\n            font-weight: 400;\n            line-height: 1.25;\n            text-align: center;\n            white-space: nowrap;\n            vertical-align: middle;\n            cursor: pointer;\n            -webkit-user-select: none;\n            user-select: none;\n            border: 1px solid transparent;\n            padding: .5rem 1rem;\n            font-size: 1rem;\n            border-radius: .25rem;\n            margin: 3px 0;\n        }\n        .btn:hover {\n            background-color: #0099cc;\n        }\n\n        .invalid-selection {\n            color: #fff;\n        }\n        label {\n            display: block;\n            margin-top: 0;\n            padding: 10px;\n        }\n        .form-group textarea {\n            resize: vertical;\n            width: 100%;\n            font-family: inherit;\n            font-size: inherit;\n            color: #333;\n            height: 50px;\n            max-height: 50px;\n        }\n        .form-group {\n            text-align: center;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/get-welcome-text/get-welcome-text.component.ts"],"names":[],"mappings":";QACQ;YACI,qBAAqB;YACrB,kBAAkB;YAClB,oBAAoB;QACxB;QACA;YACI,qBAAqB;YACrB,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,mBAAmB;YACnB,sBAAsB;YACtB,eAAe;YACf,yBAAyB;YAGzB,iBAAiB;YACjB,6BAA6B;YAC7B,mBAAmB;YACnB,eAAe;YACf,qBAAqB;YACrB,aAAa;QACjB;QACA;YACI,yBAAyB;QAC7B;;QAEA;YACI,WAAW;QACf;QACA;YACI,cAAc;YACd,aAAa;YACb,aAAa;QACjB;QACA;YACI,gBAAgB;YAChB,WAAW;YACX,oBAAoB;YACpB,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,gBAAgB;QACpB;QACA;YACI,kBAAkB;QACtB","sourcesContent":["\n        .btn-group-sm > .btn, .btn-sm {\n            padding: .25rem .5rem;\n            font-size: .875rem;\n            border-radius: .2rem;\n        }\n        .btn {\n            display: inline-block;\n            font-weight: 400;\n            line-height: 1.25;\n            text-align: center;\n            white-space: nowrap;\n            vertical-align: middle;\n            cursor: pointer;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            border: 1px solid transparent;\n            padding: .5rem 1rem;\n            font-size: 1rem;\n            border-radius: .25rem;\n            margin: 3px 0;\n        }\n        .btn:hover {\n            background-color: #0099cc;\n        }\n\n        .invalid-selection {\n            color: #fff;\n        }\n        label {\n            display: block;\n            margin-top: 0;\n            padding: 10px;\n        }\n        .form-group textarea {\n            resize: vertical;\n            width: 100%;\n            font-family: inherit;\n            font-size: inherit;\n            color: #333;\n            height: 50px;\n            max-height: 50px;\n        }\n        .form-group {\n            text-align: center;\n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9782:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/get-hub-navigation/get-hub-navigation.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgICAgLmJ0bi1ncm91cC1zbSA%2BIC5idG4sIC5idG4tc20gewogICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW0gLjVyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg3NXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjJyZW07CiAgICAgICAgfQogICAgICAgIC5idG4gewogICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7CiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7CiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1OwogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7CiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7CiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7CiAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIDFyZW07CiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTsKICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtOwogICAgICAgICAgICBtYXJnaW46IDNweCAwOwogICAgICAgIH0KICAgICAgICAuYnRuOmhvdmVyIHsKICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTljYzsKICAgICAgICB9CiAgICAgICAgbGFiZWwgewogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgICAgICAgbWFyZ2luLXRvcDogMDsKICAgICAgICAgICAgcGFkZGluZzogMTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgdGV4dGFyZWEgewogICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsKICAgICAgICAgICAgY29sb3I6ICMzMzM7CiAgICAgICAgICAgIGhlaWdodDogNTBweDsKICAgICAgICAgICAgbWF4LWhlaWdodDogNTBweDsKICAgICAgICB9CiAgICAgICAgLmZvcm0tZ3JvdXAgewogICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICAgICAgfQogICAg!./src/app/get-hub-navigation/get-hub-navigation.component.ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n        .btn-group-sm > .btn, .btn-sm {\n            padding: .25rem .5rem;\n            font-size: .875rem;\n            border-radius: .2rem;\n        }\n        .btn {\n            display: inline-block;\n            font-weight: 400;\n            line-height: 1.25;\n            text-align: center;\n            white-space: nowrap;\n            vertical-align: middle;\n            cursor: pointer;\n            -webkit-user-select: none;\n            user-select: none;\n            border: 1px solid transparent;\n            padding: .5rem 1rem;\n            font-size: 1rem;\n            border-radius: .25rem;\n            margin: 3px 0;\n        }\n        .btn:hover {\n            background-color: #0099cc;\n        }\n        label {\n            display: block;\n            margin-top: 0;\n            padding: 10px;\n        }\n        .form-group textarea {\n            resize: vertical;\n            width: 100%;\n            font-family: inherit;\n            font-size: inherit;\n            color: #333;\n            height: 50px;\n            max-height: 50px;\n        }\n        .form-group {\n            text-align: center;\n        }\n    ", "",{"version":3,"sources":["webpack://./src/app/get-hub-navigation/get-hub-navigation.component.ts"],"names":[],"mappings":";QACQ;YACI,qBAAqB;YACrB,kBAAkB;YAClB,oBAAoB;QACxB;QACA;YACI,qBAAqB;YACrB,gBAAgB;YAChB,iBAAiB;YACjB,kBAAkB;YAClB,mBAAmB;YACnB,sBAAsB;YACtB,eAAe;YACf,yBAAyB;YAGzB,iBAAiB;YACjB,6BAA6B;YAC7B,mBAAmB;YACnB,eAAe;YACf,qBAAqB;YACrB,aAAa;QACjB;QACA;YACI,yBAAyB;QAC7B;QACA;YACI,cAAc;YACd,aAAa;YACb,aAAa;QACjB;QACA;YACI,gBAAgB;YAChB,WAAW;YACX,oBAAoB;YACpB,kBAAkB;YAClB,WAAW;YACX,YAAY;YACZ,gBAAgB;QACpB;QACA;YACI,kBAAkB;QACtB","sourcesContent":["\n        .btn-group-sm > .btn, .btn-sm {\n            padding: .25rem .5rem;\n            font-size: .875rem;\n            border-radius: .2rem;\n        }\n        .btn {\n            display: inline-block;\n            font-weight: 400;\n            line-height: 1.25;\n            text-align: center;\n            white-space: nowrap;\n            vertical-align: middle;\n            cursor: pointer;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            border: 1px solid transparent;\n            padding: .5rem 1rem;\n            font-size: 1rem;\n            border-radius: .25rem;\n            margin: 3px 0;\n        }\n        .btn:hover {\n            background-color: #0099cc;\n        }\n        label {\n            display: block;\n            margin-top: 0;\n            padding: 10px;\n        }\n        .form-group textarea {\n            resize: vertical;\n            width: 100%;\n            font-family: inherit;\n            font-size: inherit;\n            color: #333;\n            height: 50px;\n            max-height: 50px;\n        }\n        .form-group {\n            text-align: center;\n        }\n    "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 9499:
/*!******************************************************************************************!*\
  !*** ./src/app/create-seed/create-seed-modal/create-seed-modal.component.css?ngResource ***!
  \******************************************************************************************/
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

/***/ 78266:
/*!********************************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.css?ngResource ***!
  \********************************************************************/
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

/***/ 61049:
/*!******************************************************!*\
  !*** ./src/app/login/login.component.css?ngResource ***!
  \******************************************************/
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

/***/ 15233:
/*!****************************************************************!*\
  !*** ./src/app/login/private/private.component.css?ngResource ***!
  \****************************************************************/
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

/***/ 78845:
/*!****************************************************!*\
  !*** ./src/app/menu/menu.component.css?ngResource ***!
  \****************************************************/
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

/***/ 57227:
/*!********************************************************************!*\
  !*** ./src/app/modal-static/modal-static.component.css?ngResource ***!
  \********************************************************************/
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

/***/ 65429:
/*!******************************************************************!*\
  !*** ./src/app/quick-links/quick-links.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 49579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 60931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "select {\n    width: 100%;\n    outline: none;\n    color: #0099cc;\n}", "",{"version":3,"sources":["webpack://./src/app/quick-links/quick-links.component.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;IACb,cAAc;AAClB","sourcesContent":["select {\n    width: 100%;\n    outline: none;\n    color: #0099cc;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99665:
/*!**************************************************************!*\
  !*** ./src/app/resources/resources.component.css?ngResource ***!
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

/***/ 83353:
/*!***********************************************************!*\
  !*** ./src/app/support/support.component.less?ngResource ***!
  \***********************************************************/
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

/***/ 94780:
/*!*******************************************************************************************!*\
  !*** ./src/app/create-seed/create-seed-modal/create-seed-modal.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!--\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"\n     class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title pull-left text-danger\">{{errorMessage}}</h6>\n\n                <div *ngIf=\"alertType == 'confirm'\">\n\n                    <button type=\"button\" class=\"btn btn-primary\"\n                            style=\"margin-top: 15px !important; width: 100%; \"\n                            aria-label=\"Confirm\"\n                            (click)=\"confirmCreate(true)\">\n                        {{confirmButtonText}}\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\"\n                            style=\"margin-top: 15px !important; width: 100%; \"\n                            aria-label=\"Close\"\n                            (click)=\"hideModal()\">\n                        <span aria-hidden=\"true\">{{buttonText}}</span>\n                    </button>\n                    &lt;!&ndash;<button type=\"button\" class=\"btn btn-primary\"\n                            style=\"margin-top: 15px !important;\"\n                            aria-label=\"Backup Account Buildkit\"\n                            (click)=\"backupAccountBuildkit(siteBuildKit)\">\n                        Backup {{siteBuildKit}}\n                    </button>&ndash;&gt;\n                    <div class=\"text-warning\" *ngIf=\"backupStatus\">Backup created</div>\n                </div>\n\n            </div>\n\n            <div class=\"modal-body\">\n                <p class=\"modal-body-text\">{{popupBody}}</p>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>-->\n";

/***/ }),

/***/ 93952:
/*!*******************************************************************!*\
  !*** ./src/app/create-seed/create-seed.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form [formGroup]=\"createSiteSeedForm\"\n      (ngSubmit)=\"onCreateSiteSeed(createSiteSeedForm);\">\n    <button mat-raised-button\n            [disabled]=\"!siteSeed.value\"\n            type=\"submit\">\n        Create Directory\n    </button>\n\n    <mat-form-field>\n        <input matInput\n               ngModel\n               required\n               placeholder=\"Create Directory\"\n               formControlName=\"siteSeed\"\n               name=\"siteSeed\"\n                #siteSeed>\n    </mat-form-field>\n</form>\n";

/***/ }),

/***/ 21378:
/*!*********************************************************************!*\
  !*** ./src/app/form-builder/form-builder.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"form-builder-container\" class=\"form-builder-container\" *ngIf=\"FBInterface\">\n\n    <h1>{{title}}</h1>\n<!--    wow fadeIn data-wow-duration=\".5s\"-->\n    <div class=\"row\">\n\n        <div class=\"col-lg-5 col-md-5 col-sm-12\">\n\n            <!--<button mat-raised-button\n                    class=\"float-start\"\n                    style=\"margin-right: 5px;\"\n                    type=\"button\"\n                    (click)=\"setFormBuilderProperties()\">Save\n            </button>-->\n            <button mat-raised-button type=\"button\" (click)=\"addFormBlock()\">\n                <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon> Add Form Field\n            </button>\n\n            <br/>\n\n            <div class=\"clear\"></div>\n\n            <mat-form-field style=\"margin-top: 20px;\">\n                <mat-label>Page Name </mat-label>\n                <input [(ngModel)]=\"FBInterface.pageName\"\n                       (keydown)=\"fieldNameChanged($event)\"\n                       type=\"text\"\n                       matInput\n                       name=\"pageName\"\n                       #pageName>\n            </mat-form-field>\n\n            <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                <mat-accordion multi=\"false\">\n                    <mat-card *ngFor=\"let formField of this.FBInterface.formFieldArray; let i = index\"\n                              cdkDrag>\n                        <mat-expansion-panel class=\"border-sesame-blue\" hideToggle>\n                            <mat-expansion-panel-header>\n                                <mat-icon class=\"text-danger float-start\" (click)=\"removeFormBlock(i)\">delete</mat-icon>\n                                <mat-panel-title>\n                                    <div *ngIf=\"formField.label; else nolabel\">\n\n                                        <span class=\"sesame-blue\"> {{formField.label}}</span>\n                                    </div>\n                                    <ng-template #nolabel>\n                                   <span class=\"sesame-blue\">\n                                    Enter form details</span><span class=\"sesame-green\"> &nbsp;(same as field label)</span>\n                                    </ng-template>\n                                </mat-panel-title>\n                            </mat-expansion-panel-header>\n\n                            <br/>\n\n                            <mat-card-content>\n                                <mat-form-field>\n                                    <mat-label>Field Type</mat-label>\n                                    <mat-select [(ngModel)]=\"formField.type\">\n                                        <mat-option *ngFor=\"let fieldType of formTypeArray\" [value]=\"fieldType.value\">\n                                            {{ fieldType.display}}\n                                        </mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n\n                                <mat-form-field [color]=\"fieldName.errors?.pattern ? 'warn' : 'primary'\">\n                                    <mat-label>Field Name </mat-label>\n                                    <input matInput name=\"\" [(ngModel)]=\"formField.name\" #fieldName=\"ngModel\" pattern=\"^[a-zA-Z0-9\\s]*$\" (keydown)=\"fieldNameChanged($event)\">\n                                     <mat-error *ngIf=\"fieldName.errors\">You may not use special characters in the field name</mat-error>\n                                </mat-form-field>\n\n                                <mat-form-field>\n                                    <mat-label>Field Label</mat-label>\n                                    <input matInput required  [(ngModel)]=\"formField.label\" >\n                                </mat-form-field>\n\n                                <mat-checkbox (change)=\"formFieldNamesConcatenation\" [(ngModel)]=\"formField.required\">Required?</mat-checkbox>\n\n                                <div *ngIf=\"formField.type == 'select'\" >\n                                    <h3>SELECT OPTIONS</h3>\n\n                                    <div><button mat-raised-button type=\"button\" (click)=\"this.addFormFieldOption(i)\">Add Option</button></div>\n\n\n                                    <mat-card class=\"border-sesame-green\" style=\"margin-bottom: 5px;\" *ngFor=\"let formFieldOption of formField.options; let optionIndex = index\">\n                                        <mat-form-field>\n                                            <mat-label>Option Label</mat-label>\n                                            <input matInput name=\"\" [(ngModel)]=\"formFieldOption.display\">\n\n                                        </mat-form-field>\n                                    <button mat-button\n                                           class=\"\"\n                                           type=\"button\"\n                                           color=\"warn\"\n                                           (click)=\"this.removeFormFieldOption(i, optionIndex)\">Delete Option</button>\n\n                                    </mat-card>\n                                </div>\n                                <mat-card-footer>\n                                    <button mat-button color=\"warn\" (click)=\"removeFormBlock(i)\">Delete Form Field</button>\n                                </mat-card-footer>\n                            </mat-card-content>\n\n                        </mat-expansion-panel>\n                    </mat-card><!-- end for -->\n\n\n                    <div>\n                        <button mat-raised-button\n                                class=\"save-button\"\n                                (click)=\"setFormBuilderProperties()\"\n                                type=\"button\">\n                            <mat-icon>save</mat-icon>\n                            Save\n                        </button>\n\n                    </div>\n\n\n\n\n                </mat-accordion>\n            </div>\n\n        </div><!-- end col -->\n        <div class=\"col-lg-7 col-md-7 col-sm-12>\">\n\n            <p class=\"copy sesame-blue\" (click)=\"copyHTMLToClipboard();\" data-target=\"#copy\">\n                <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n                Grab your HTML\n            </p>\n\n            <code id=\"copy\">\n\n                &lt;form action=\"/{{FBInterface.pageName | toLowercase | replaceSpaceDash | trimContent}}\"\n                class=\"full validate\" method=\"post\"\n                name=\"{{FBInterface.pageName | toLowercase | replaceSpaceDash | trimContent}}\"&gt;<br />\n\n                <!-- hidden field for required names -->\n                <br/> &lt;input id=\"required_values\" name=\"required_values\" type=\"hidden\"\n                value=\"{{ formFieldNamesConcatenation | sanitzeHiddenRequiredField | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | trimContent}}\" /&gt;<br/><br/>\n\n                <p class=\"notice width1 box-round\">&lt;p&gt;&lt;span class=\"bold\"&gt;Bold&lt;/span&gt; fields are required&lt;/p&gt;</p>\n\n                <div *ngFor=\"let form of FBInterface.formFieldArray; let i = index;\">\n\n                    <!-- text -->\n                    <div *ngIf=\"form.type == 'text'\">\n                        <span *ngIf=\"form.required;  else notRequiredblock;\">&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;&lt;strong&gt;{{form.label}}&lt;/strong&gt;&lt;/label&gt;</span>\n                        <ng-template #notRequiredblock>&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;{{form.label}}&lt;/label&gt;</ng-template><br />\n                        &lt;input\n                        type=\"text\"\n                        name=\"sc_form[{{form.name | sanitzeHiddenRequiredField | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | trimContent}}]\"\n                        id=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\" {{form.required ? \"required\" : \"\"}} /&gt;<br/><br/>\n                    </div>\n\n                    <!-- textarea -->\n                    <div *ngIf=\"form.type == 'textarea'\">\n                        <span *ngIf=\"form.required;  else notRequiredblock;\">&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;&lt;strong&gt;{{form.label}}&lt;/strong&gt;&lt;/label&gt;</span>\n                        <ng-template #notRequiredblock>&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;{{form.label}}&lt;/label&gt;</ng-template><br />\n                        &lt;textarea\n                        name=\"sc_form[{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}]\"\n                        id=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"\n                        {{form.required ? \"required\" : \"\"}}&gt;&lt;/textarea&gt;<br/><br/>\n                    </div>\n\n                    <!-- select -->\n                    <div *ngIf=\"form.type == 'select'\">\n                        <span *ngIf=\"form.required;  else notRequiredblock;\">&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;&lt;strong&gt;{{form.label}}&lt;/strong&gt;&lt;/label&gt;</span>\n                        <ng-template #notRequiredblock>&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;{{form.label}}&lt;/label&gt;</ng-template><br />\n\n                        &lt;select name=\"sc_form[{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore| sanitzeHiddenRequiredField | trimContent}}]\" {{form.required ? \"required\" : \"\"}}\n                        id=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;<br />\n                        <span *ngFor=\"let option of form.options\">&lt;option&gt;{{option.display|sanitzeHiddenRequiredField}}&lt;/option&gt;<br />\n                </span>&lt;/select&gt;<br/><br/>\n                    </div>\n\n                    <!-- checkbox -->\n                    <div *ngIf=\"form.type == 'checkbox'\">\n                        <span *ngIf=\"form.required;  else notRequiredblock;\">&lt;label for=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\"&gt;&lt;strong&gt;{{form.label}}&lt;/strong&gt;</span>\n                        <ng-template #notRequiredblock>&lt;label for=\"{{form.name| toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent }}\"&gt;{{form.label}}</ng-template><br />\n                        &lt;input type=\"checkbox\"\n                        id=\"{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}\" name=\"sc_form[{{form.name | toLowercase | capitalizeEachWord | replaceSpaceWithUnderscore | sanitzeHiddenRequiredField | trimContent}}]\" {{form.required ? \"required\" : \"\"}} /&gt;&lt;/label&gt;<br/><br/>\n                    </div>\n                </div>\n                &lt;/form&gt;\n            </code>\n\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 57854:
/*!*********************************************************************************!*\
  !*** ./src/app/get-hub-navigation/get-hub-navigation.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"dev-dashboard\" class=\"container\">\n\n    <div class=\"col span6 offset3\">\n\n        <div id=\"dev-set-navigation\" class=\"row\" [ngClass]=\"{'hide': sitename == 'dashboard'}\">\n\n            <div class=\"col span6 offset3 \">\n\n                <form class=\"form-group\">\n                    <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                            (click)=\"getHubNavData(sitename)\">Get #main-nav\n                    </button>\n                    <button id=\"getStockNavData\"\n                            class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                            (click)=\"getStockNavData()\">Get STOCK #main-nav\n                    </button>\n                    <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                            (click)=\"onHubPost(nResponse, sitename)\">Apply\n                    </button>\n                    <div class=\"form-group\"\n                         style=\"background-color: #0099cc; line-height:2em; text-align: center\">\n\n                        <label style=\"color: #fff; \">{{ sitename }}</label>\n                        <textarea id=\"hub_navigation\" name=\"navigation\" class=\"form-control\"\n                                  [(ngModel)]=\"nResponse\"\n                        ></textarea>\n                        <!-- [(ngModel)]=\"response\" -->\n                        <div style=\"color: #fff; font-size: 0.9em;\" *ngIf=\"nResponse === undefined || nResponse === ''\">\n                            <span style=\"color: #fff;\">required ... Select Hub Navigation Option</span>\n                        </div>\n                    </div>\n\n                </form>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 44506:
/*!*****************************************************************************!*\
  !*** ./src/app/get-welcome-text/get-welcome-text.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"dev-welcome-text\" class=\"container\">\n\n    <div class=\"col span6 offset3\">\n\n        <div id=\"get-welcome-text\" class=\"row\" [ngClass]=\"{'hide': sitename == 'dashboard'}\">\n\n            <div class=\"col span6 offset3 \">\n\n                <div class=\"form-group\">\n\n                    <form>\n\n                        <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                                (click)=\"getWelcomeTextData(sitename)\">HUB Welcome Text\n                        </button>\n                        <button id=\"getStockWelcomeData\"\n                                class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                                (click)=\"getStockWelcomeData()\">STOCK Welcome text\n                        </button>\n                        <button class=\"btn btn-small button button-medium site-button-color box-round box-shadow\"\n                                (click)=\"welcomeTextPost(response, sitename)\">Apply\n                        </button>\n                        <div class=\"form-group\" style=\"background-color: #0099cc; line-height:2em; text-align: center\">\n                            <label style=\"color: #fff; \">{{ sitename }}</label>\n                            <textarea id=\"hub_welcome_text\" name=\"hub_welcome_text\"\n                                      class=\"form-control\"\n                                      [(ngModel)]=\"response\" #hub_welcome_text></textarea>\n\n                            <div class=\"invalid-selection\" style=\"color: #fff;\" *ngIf=\"response === undefined || response === ''\">\n                                <span style=\"color: #fff;\">*required ... Select Welcome Text Option</span>\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>";

/***/ }),

/***/ 82010:
/*!*******************************************************!*\
  !*** ./src/app/login/login.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <h1>Login</h1>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 wow fadeIn\">\n            <!--[formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onLogin(contentDataForm)\" -->\n\n            <div class=\"title\">\n                Welcome\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input [(ngModel)]=\"username\" id=\"username\"\n                           type=\"username\" class=\"validate form-control\">\n\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input [(ngModel)]=\"password\" id=\"password\"\n                           type=\"password\" class=\"validate form-control\">\n\n                </div>\n\n                <p class=\"text-danger\">{{errorMsg}}</p>\n                <button (click)=\"login()\"\n                        class=\"btn\"\n                        type=\"submit\" name=\"action\">Login\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>\n";

/***/ }),

/***/ 83272:
/*!*****************************************************************!*\
  !*** ./src/app/login/private/private.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  private works!\n</p>\n";

/***/ }),

/***/ 32283:
/*!*****************************************************!*\
  !*** ./src/app/menu/menu.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"col-lg-12 col-md-12 col-sm-12 \">\n    <div class=\"home-page-link-icons\">\n\n        <span><a [routerLink]=\"['/home']\" [routerLinkActive]=\"['active']\">\n                    <img class=\"image-manager-icon\" src=\"assets/images/home-icon.png\" alt=\"Home\"/>\n            <div class=\"small\">Dashboard</div></a></span>\n\n        <span><a [routerLink]=\"['/image-manager']\" [routerLinkActive]=\"['active']\">\n                    <img class=\"image-manager-icon\" src=\"assets/images/image-icon.png\" alt=\"Image Manager\"/>\n            <div class=\"small\">Images</div></a></span>\n\n        <span><a [routerLink]=\"['/sitemap']\" [routerLinkActive]=\"['active']\">\n                    <img class=\"image-manager-icon\"\n                         src=\"assets/images/sitemap-xxl.png\"\n                         alt=\"Sitemap\"/>\n            <div class=\"small\">Sitemap</div></a></span>\n\n        <span><a [routerLink]=\"['/redirects']\" [routerLinkActive]=\"['active']\">\n                    <img class=\"image-manager-icon\"\n                         src=\"assets/images/redirects.png\"\n                         alt=\"Redirects\"/>\n            <div class=\"small\">Redirects</div></a></span>\n\n        <span><a [routerLink]=\"['/canadian-content']\" [routerLinkActive]=\"['active']\">\n                    <img class=\"image-manager-icon\"\n                         src=\"assets/images/canadian-content.png\"\n                         alt=\"Canadian Content\"/>\n            <div class=\"small\">Canadian</div></a></span>\n\n    </div>\n</div>";

/***/ }),

/***/ 29447:
/*!*********************************************************************!*\
  !*** ./src/app/modal-static/modal-static.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\n    <!-- *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\"\n     class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"> -->\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title pull-left text-danger\">ALERT: {{errorMessage}}</h6>\n\n                <button type=\"button\" class=\"btn btn-primary\" aria-label=\"Close\"\n                        (click)=\"hideModal()\">\n                    <span aria-hidden=\"true\">{{buttonText}}</span>\n                </button>\n\n\n                <div *ngIf=\"alertType == 'confirm'\">\n\n                    <button type=\"button\" class=\"btn btn-primary\"\n                            style=\"margin-top: 15px !important;\"\n                            aria-label=\"Confirm\"\n                            (click)=\"confirm(true)\">\n                        Confirm delete!\n                    </button>\n\n                    <!--<button type=\"button\" class=\"btn btn-primary\"\n                            style=\"margin-top: 15px !important;\"\n                            aria-label=\"Backup Account Buildkit\"\n                            (click)=\"backupAccountBuildkit(siteBuildKit)\">\n                        Backup {{siteBuildKit}}\n                    </button>\n                    <div class=\"text-warning\" *ngIf=\"backupStatus\">Backup created</div>-->\n\n                </div>\n\n            </div>\n\n            <div class=\"modal-body\">\n                <p>{{popupBody}}</p>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n\n<!-- this goes into the component's html. -->\n<!--<dev-modal-static #duplicateError></dev-modal-static>-->\n\n<!--<div *ngIf=\"isModalShown\" [config]=\"{ show: true }\" (onHidden)=\"onHidden()\" bsModal #autoShownModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h6 class=\"modal-title pull-left text-danger\">Error: {{errorMessage}}</h6>\n                <button type=\"button\" class=\"btn btn-primary pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n                    <span aria-hidden=\"true\">{{buttonText}}</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{popupBody}}</p>\n            </div>\n        </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"launchSectionError(e)\">Render auto-shown modal</button>\n</div>\n-->\n\n\n\n<!--<p class=\"panel danger-panel\" *ngIf=\"hasDuplicates\"><strong class=\"text-danger\">You have duplicates\n    sections.</strong> <br/><span\n        class=\"text-warning\">The only allowed section duplicates are Spotlight. <br/></span>\n    <span *ngFor=\"let dupe of dupeArray\">{{dupe}}<br/></span>\n</p>-->\n";

/***/ }),

/***/ 45614:
/*!*******************************************************************!*\
  !*** ./src/app/quick-links/quick-links.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<form [formGroup]=\"quickLinksForm\" (change)=\"onGetQuickLink();\" class=\"form-fields-100\">\n\n    <h2><i class=\"fa fa-link\" aria-hidden=\"true\"></i> Sesame Content PagesRoutes</h2>\n    <select\n            id=\"\"\n            class=\"form-control \"\n            formControlName=\"quicklink\"\n            name=\"quicklink\"\n            >\n\n        <option value=\"\">\n            Select Sesame Demo Site\n        </option>\n\n        <option *ngFor=\"let qlink of quickLinks\"\n                value=\"{{qlink.url}}\">{{qlink.display}}\n        </option>\n\n    </select>\n\n</form>\n\n";

/***/ }),

/***/ 68629:
/*!***************************************************************!*\
  !*** ./src/app/resources/resources.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"resources-container\" class=\"container\">\n\n    <!--    <h1>((title))</h1>-->\n\n    <!--<div class=\"row\">\n\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">-->\n    <h4>Buildkit Changelog</h4>\n\n    <mat-accordion multi=\"false\">\n\n\n        <!--<mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>March 5 , 2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>content goes here</p>\n        </mat-expansion-panel>-->\n\n        <mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>03-26-2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <h4>Changelog 03/26/2023</h4><h5>CSS/LESS:</h5>\n            <ul>\n                <li>testimonial slideshow ‘.controls’ element and ‘button’ elements within it have ‘pointer-events’\n                    rules added so that the buttons behave as expected, without the ‘.controls’ element causing an\n                    un-targetable band across the slideshow itself on tablet/desktop device widths.\n                </li>\n                <li>testimonial slideshow ‘.controls’ rules updated to reflect ‘.icon’ class on controls vs previously\n                    targeting\n                    <pre>\n                </pre>\n                    element.\n                </li>\n                <li>ALL less ‘@variables’ uniformly placed directly above parent sections of the elements they affect in\n                    order to unlock global scope for more powerful/meaningful use opportunities. Previously *some*\n                    elements had variables nested within them, most noticeable example is on elements within\n                    ‘#contactinfo’ where ‘@addresslh, @addressfs, @phonelh, @phonefs’ used to be enclosed with the\n                    ‘.address’ and ‘.phone’ element, ex:<br> <em>Used to be like this:</em><br>\n                    <pre> .address&#123;\n                        @addresslh:30;//line-height @addressfs:20;//font-size line-height:@addresslh/@addressfs; font-size:@addressfs/20em; other:rules; et:cetera; } .phone&#123;\n                        @phonelh:30;//line-height @phonefs:20;//font-size line-height:@phonelh/@phonefs; font-size:@phonefs/20em; other:rules; et:cetera; } </pre>\n                    <br> <em>Now live above the ‘#contactinfo’ element:</em><br>\n                    <pre> /* =============================================== contact info =============================================== */ @addresslh:30;//line-height @addressfs:20;//font-size @phonelh:30;//line-height @phonefs:20;//font-size #contactinfo&#123;\n                        .address&#123; other:rules; } .phone&#123; et:cetera; } } </pre>\n                </li>\n                <li> '@bttlineheight' variable added for ‘a#backtotop’ element. It is is still set equal to\n                    ‘@linkslineheight’ for common use but in the event that it needs to be different, it can now be\n                    adjusted via the variable minimizing the need for re-factoring code within.\n                </li>\n                <li>generic button class ‘intbtn’ added for use by PM/PAs to add quick buttons to pages to streamline\n                    the post-build editing process. (Thank you for recommending this Mike)\n                </li>\n                <li>‘invisalign-videos’ page added to list of centered content pages with .before-after, .office-tour,\n                    etc…\n                </li>\n                <li> ’embed-container’ enhancement added for modern browsers improving the rendering and capping the\n                    size so they aren’t so visually imposing on larger devices.\n                </li>\n            </ul>\n            <h5>LAYOUT:</h5>\n            <ul>\n                <li>Scripts section updated to make all javaScript es6 standard. this includes:\n                    <ul>\n\n                        <li>use of arrow functions instead of the ‘function’ keyword where appropriate:<br> <a\n                                target=\"_blank\" rel=\"noreferrer noopener\"\n                                href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions\">more\n                            about Arrow Functions</a></li>\n                        <li>use of the const keyword to declare constant variables (since they do not need to be\n                            re-assigned):<br>\n                            <a target=\"_blank\" rel=\"noreferrer noopener\"\n                               href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const\">more\n                                about const keyword</a></li>\n                        <li>use of let keyword to declare limited block scoped local variables:<br> <a target=\"_blank\"\n                                                                                                       rel=\"noreferrer noopener\"\n                                                                                                       href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let\">more\n                            about let keyword</a></li>\n                    </ul>\n                </li>\n                <li> 'slideshow.php' include corrected - slide4 was duplicated instead of having a slide5.</li>\n                <li>’fetchpriority’ attribute added to all img tags as they no longer flag errors in w3c validation\n                    (after almost exactly an entire year!)<br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"https://web.dev/priority-hints/\">more about\n                        priority hints</a></li>\n                <li> 'GA code' publication has now been automated, i.e. the builder no longer needs to uncomment the\n                    section; If the '$gacode' field is populated on the site manager or posthumously at the top of\n                    layout.php, the GA code script will automatically activate.\n                </li>\n                <li>'mediaslider' control's icons have ‘icon’ class added and FA font-weight specific class ‘fa-solid’\n                    added\n                </li>\n            </ul>\n            <h5>JS:</h5>\n\n            <ul>\n                <li>lazysizes updated to v5.3.2.</li>\n                <li>curated version of 'modernizer.js' added to '/concat-js-files/' directory to be included as standard\n                    until Sesame officially stops supporting ie11. This is necessary to ease support for es6\n                    standards.<br> <strong>Instructions on how to use this to target ie11 more easily via Javascript and\n                        css:</strong><br>\n                    <ul>\n                        <li><strong>CSS -</strong> modernizr adds a class of ’.appearance’ to the\n                            <pre>html</pre>\n                            elements if its not ie11 and ‘,no-apeparance’ if it is ie11:<br>\n                            <pre> .no-appearance .box  &#123;to target ie11 only. &#125; .appearance .box &#123; to hide your cutting edge styling from expired non-compliant browsers that shouldn’t even be out there for use anymore. &#125; </pre>\n                        </li>\n                        <li><strong>JS -</strong> javascript can be used to target non-ie11 browsers utilizing the same\n                            ‘appearance’ keyword:<br>\n                            <pre> if (Modernizr.appearance) &#123; // supported &#125; else &#123; // not-supported &#125; </pre>\n                        </li>\n                    </ul>\n                </li>\n                <li><strong>local.js:</strong><br>parallax script for slideshow upgraded:\n                    <ol>\n                        <li>to include `will-change: transform` when transforming to improve performance, and</li>\n                        <li>only activates on desktop devices so that it doesn’t highjack styling that occurs mobile\n                            devices.\n                        </li>\n                    </ol>\n                </li>\n            </ul>\n        </mat-expansion-panel>\n        <mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>01-24-2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>Here's the compilation of everything that has been done since late sept/early oct of\n                2022:</p>\n\n            <h3>Buildkit:CSS:</h3>\n\n            <h2>Changelog 02/15/2023</h2>\n\n            <h3>CSS/LESS:</h3>\n            <ul>\n                <li>actually changed 'meet-the-doctor' class mentioned in previous change log</li>\n\n                <li>all css files reviewed for rule order, redundancies, and comment relevancy - adjustments made to\n                    reduce errors/redundancies in all categories, including but not limited to:\n                    <ul>\n                        <li>comments for custom HP line-height and font-size updated and marked with\n                            <pre>'&lt;&lt; customHP'</pre>\n                            signposts to be more easily identified within the less document\n                        </li>\n                        <li>duplicate and unnecessary rules removed between mobile main-nav to desktop main-nav</li>\n                    </ul>\n                </li>\n                <li>added ‘max-width:none;’ to '.home #bd #content' from '768 to 1300' due to cascade of subpage rules\n                    of the same type causing latent misstyles\n                </li>\n                <li>‘max-width’ rule on ‘.home #bd #content’ adjusted from kicking in at 1024 to 1300 instead;</li>\n\n                <li>added ‘screenreader’ class to superlatives section for descriptive text on vaguely worded buttons to\n                    facilitate higher accessibility rankings:<br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\"\n                       href=\"https://gomakethings.com/hidden-content-for-better-a11y/#hidden-labels\">gomakethings.com:\n                        hidden content for better accessibility (a11y)</a>\n                </li>\n                <li>'.spotlight a( border-radius: 50% )' removed because child element '.decoration' also has\n                    border-radius, causing an unnecessary doubling of the effect\n                </li>\n\n                <li>@trigger var grouped with other main-nav vars</li>\n                <li>@trigger value Increased to 48px in line with mobile minimum link dimensions as defined in google\n                    pageSpeed Insights and WCAG AAA standards.<br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\" href=\"https://web.dev/accessible-tap-targets/\">Accessible\n                        tap targets article from web.dev</a><br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\"\n                       href=\"https://www.w3.org/WAI/WCAG21/Understanding/target-size.html\">w3.org standards and\n                        exception to this rule</a>\n                </li>\n                <li>#hd container default padding updated to reflect @trigger value as well</li>\n\n                <li>rules added to video and slideshow to facilitate a default ‘full bloom’ at 1300px-1999px device\n                    width and continue flexing after 2000px\n                </li>\n\n                <li>‘#subnav a’ rules adjusted (namely padding and margin) to increase clickable area of individual\n                    links for mobile devices\n                </li>\n\n                <li>‘locationimg’ class added for sitemanager's location page generator feature</li>\n\n                <li>'svg ( display:inline-block; )' rule added for enhanced svg styling</li>\n\n                <li>styling added to blog sidebar elements contained in sharethiswidget.php include: 'blog_search' and\n                    'share-text' elements adjusted for design consistency\n                </li>\n\n                <li>`.mediaslider` rules updated to reflect\n                    <pre><button></button></pre>\n                    element for previous/next controls\n                </li>\n\n                <li>mobile main-nav fly-in animation updated to utilize compositor-only properties</li>\n            </ul>\n\n            <h3>LAYOUT:</h3>\n            <ul>\n                <li>socialmedia link `aria-labels` enhanced with more descriptive text</li>\n\n                <li>'favicon.svg' and 'pinned-tab.svg' link tags removed from head due to non-use. Physical vector image\n                    files moved from '/images/icons/' to '/resources/' folder for continued utilization in branding\n                    enhancement.<br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\"\n                       href=\"https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/pinnedTabs/pinnedTabs.html\">Apple\n                        guidance for creating mask-icon</a>\n                </li>\n\n                <li>'meta name=“viewport”' content attribute updated to 'user-scalable=5' - in line with scalability\n                    minimum as defined in google pageSpeed Insights to respond to audit flag: '[user-scalable=\"no\"] is\n                    used in the\n                    <pre><meta name=\"viewport\"></pre>\n                    element or the [maximum-scale] attribute is less than 5.'<br>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\"\n                       href=\"https://web.dev/learn/html/document-structure/#viewport-metadata\">web.dev info about\n                        Viewport metadata</a>\n                    <a target=\"_blank\" rel=\"noreferrer noopener\"\n                       href=\"https://dequeuniversity.com/rules/axe/4.6/meta-viewport\">WCAG Guidelines: Zooming and\n                        scaling must not be disabled</a>\n                </li>\n\n                <li>url parser for blog page moved into an include called 'parseblogpage.php' in the includes directory.\n                    (Thank you for recommending this Peter)\n                </li>\n\n                <li>'sharethiswidget.php' include updated so 'share on social media' blog post options actually appear\n                </li>\n\n                <li>added `aria-haspopup=\"menu\"` to trigger element to indicate the availability of interactive popup\n                    main-nav element for non-visual web-users\n                </li>\n\n                <li>`assets/resources/mediaslider.php` file updated to reflect\n                    <pre><button></button></pre>\n                    element for previous and next controls. <strong>Please update your local snippets libraries to\n                        reflect these changes and be sure to only use the updated version moving forward.</strong></li>\n\n                <li>link to local.js: 'defer' attribute added as all code contained is not onLoad critical</li>\n            </ul>\n\n            <h3>JS:</h3>\n            <ul>\n                <li>jQuery version updated to v3.6.3.<br>\n                    <strong>ATTENTION BUILDERS and PAs:</strong><br>\n                    <h4>The load() method was deprecated in jQuery version 1.8 and removed in version 3.0:</h4><br>\n                    <pre>$(window).load(function(e) ( *** ));</pre>\n                    <br>\n\n                    <h4>Use the on() or trigger() method instead:</h4><br>\n                    <pre>$(window).on(\"load\",function(e) ( *** ));</pre>\n                </li>\n                <li>'global.js' adjustments made to remain compatible with updated jQuery version</li>\n                <li>'cycle2.js' adjustments made to remain compatible with updated jQuery version</li>\n            </ul>\n\n            <h3>ALL:</h3>\n            <ul>\n                <li>main-nav trigger updated to a\n                    <pre><button>button</button></pre>\n                    element for enhanced accessibility on layout.<br> instantiation updated in scripting area on layout.<br>\n                    Styles updated on less\n                </li>\n            </ul>\n        </mat-expansion-panel>\n        <mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>01-06-2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <ul>\n                <li>option added for fractional sub bdbg image</li>\n                <li>added light blur to map marker shadow bg on ‘alt’ &amp; ‘classic’ options</li>\n                <li>exception for sidebar suppression on mobile devices for meet the doctor pages changed because rule\n                    was discovered to be insufficient under some circumstances:\n                    <ul>\n                        <li>from: body[class^=“meet-dr-”]</li>\n                        <li>to: body[class*=“meet-dr-”]</li>\n                    </ul>\n                </li>\n                <li>rule added for 'office-tour' and 'before-after' page '#content' to center it</li>\n                <li>styling added for\n                    <pre><blockquote></blockquote></pre>\n                    element\n                </li>\n                <li>LESS calculation for map marker shadow adjusted for accuracy and intended responsive resizing when\n                    font-size changes\n                </li>\n                <li>map marker style added for ‘simplerev’</li>\n            </ul>\n            <h3>LAYOUT:</h3>\n            <ul>\n                <li>\n                    <pre>‘/&gt;’</pre>\n                    closing html slash removed on self closing elements\n                </li>\n                <li>quotes in footer scripting area standardized to all be single quotes</li>\n                <li>language on instructions for hg preloaded icon changed from ‘delete’ to ‘comment’ if !is hg icon\n                </li>\n                <li>masthead markup changed from\n                    <pre><div></div></pre>\n                    to\n                    <pre><header></header></pre>\n                    as html5 standards have recently changed to allow for this\n                </li>\n            </ul>\n            <h3>BOTH:</h3>\n            <ul>\n                <li>Testimonials slideshow controls updated from\n                    <pre><a></a></pre>\n                    <a> tags to\n                        <pre><button>button</button></pre>\n                        tags. Styles required to undo button defaults added to local.less</a></li>\n                <a>\n                </a></ul>\n        </mat-expansion-panel>\n\n    </mat-accordion>\n\n\n    <mat-accordion multi=\"false\">\n        <h4>Site Manager changelog</h4>\n        <!--<mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>March 9, 2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <p>content goes here</p>\n        </mat-expansion-panel>-->\n\n        <mat-expansion-panel hideToggle>\n            <mat-expansion-panel-header>\n                <mat-panel-title>03-29-2023</mat-panel-title>\n            </mat-expansion-panel-header>\n            <ul>\n                <li>Updated admin section with authentication</li>\n                <li>Added drag and drop image uploader which provides an easy drag and drop way to select images for the\n                    website\n                </li>\n                <li>Site Manager and buildkit changelog appear on home page for easy access.</li>\n                <li>Added the image selector module that gathers information about images located in the local\n                    account-name assets folder and prints the size of the images\n                    automatically in the \"Grab your HTML\" markup within the site tools\n                </li>\n                <li>Updated PC script to open newly formed buildkit in a new browser.</li>\n                <li>\n                    Moved text from \"Create Buildkit\" to newly created support page for site manager tools\n                </li>\n                <li>\n                    Added changelog documentation to home page\n                </li>\n                <li>Added new resources/support page</li>\n                <li>Updated .gitignore to prevent necessity of deleting certain files on update</li>\n                <li>Under the hood improvements. Bug fixes</li>\n            </ul>\n        </mat-expansion-panel>\n    </mat-accordion>\n\n\n</div>\n<!--    </div>\n</div>-->\n";

/***/ }),

/***/ 54098:
/*!***********************************************************!*\
  !*** ./src/app/support/support.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"support-container\" class=\"container\">\n\n    <h1>{{title}}</h1>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n            <h2>Tools and Utilities</h2>\n\n            <mat-accordion multi=\"false\">\n\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n\n                        <mat-panel-title>Create Buildkit</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">This is the process to create the initial buildkit.</p>\n                    <ol>\n                        <li>In your terminal, type cd into your install location:</li>\n                        <li class=\"sesame-green\">- macOS: /Applications/MAMP/www</li>\n                        <li class=\"sesame-green\">- PC: c:/MAMP/www</li>\n                        <li>In your terminal, type gulp watch, then enter\n                        <li>At the top of the page ADD THE ACCOUNT-NAME of the website you are building in the Create\n                            Directory input field ie:\n                            jones-bob.\n                        </li>\n                        <li>CLICK CREATE DIRECTORY</li>\n                        <li>Using Select Account dropdown located under Select Account, select the account name that you\n                            have just entered.\n                        </li>\n                        <li>CLICK SELECT ACCOUNT ie: account-name</li>\n                        <li>ADD builder name</li>\n                        <li>After creating the directory and selecting the account, run 'gulp watch' in your terminal\n                        </li>\n                        <li>If there is an error in the terminal, restart gulp by typing 'gulp watch'</li>\n\n                    </ol>\n                    <li class=\"text-warning\">NOTE: If you are unable to retrieve main-nav or welcome text, upload\n                        the new layout.php to the account-name you are working on.\n                    </li>\n                    <h3>Hub Welcome Text</h3>\n\n                    <p class=\"sesame-blue\">This button will load the welcome text as defined within the Sesame Hub\n                        Dashboard into your\n                        buildkit. It is also editable within the textarea containing the markup.</p>\n\n                    <ul>\n                        <li>This account-name must be present on the HUB!</li>\n                        <li>Alternatively if you do not have an internet connection you can use \"STOCK welcome text.\"\n                        </li>\n                        <li>Click Apply after content is loaded.</li>\n                    </ul>\n\n\n                    <h3>HUB #main-nav</h3>\n                    <p class=\"sesame-blue\">This button will load the current hub sitemap as defined within the Sesame\n                        Hub Dashboard into\n                        your main-nav html within the buildkit. Alternatively if you do not have a internet connection\n                        you can use \"STOCK\n                        #main-nav.\"</p>\n                    <ul>\n                        <li>Click Apply after content is loaded</li>\n                    </ul>\n\n                    <h4>Select Options</h4>\n                    <ul>\n                        <li>Add the GA CODE in the provided form field</li>\n                        <li>Add the tagline for slideshow or video (if present)</li>\n                        <li>This is the tagline this is positioned over the Hero (HTML allowed)</li>\n                    </ul>\n\n                    <h4>Add the following components to buildkit</h4>\n                    <ul>\n                        <li>Hero - Select either the \"classic\" or \"video\"</li>\n                        <li class=\"text-warning\">Content (required). Select Top Subnav or Side Subnav</li>\n                        <li><span class=\"bold\">Add Spotlights</span> After reviewing the design select the appropriate\n                            layout\n                        </li>\n                        <ul>\n                            <li>Spotlight One Horizontal</li>\n                            <li>Spotlight Two Horizontal</li>\n                            <li>Spotlight Three Horizontal</li>\n                            <li>Spotlight FourHorizontal</li>\n                            <li>Spotlight Five Horizontal</li>\n                            <li>Spotlight Column Img Left</li>\n                            <li>Spotlight Column img Right</li>\n                            <li>Testimonial Rotator</li>\n                            <li>Association Logos</li>\n                        </ul>\n                        <li>Only the Spotlights and Testimonial Rotators are allowed to have more than one item. If for\n                            example you\n                            want to have 2 slideshows in the\n                            build, add it manually.\n                        </li>\n                    </ul>\n\n                    <p>Restart Gulp! (important)\n                        ERROR TIP: if Gulp quits with an error, type control C from the active terminal and restart Gulp\n                        by typing gulp-watch in the terminal.\n\n                    <h4>webP converter</h4>\n                    <p class=\"sesame-blue\">The site manager has a built-in webP converter. This function will\n                        automatically convert images\n                        placed into their appropriate directories ie: assets/images/office-tour,\n                        assets/before-after-cycle, assets/ uploads/images/ etc.\n                        <br>\n\n                        A new directory will be created in the assets/ directory with the newly created webP images.\n                        These can then be uploaded to the hub.</p>\n\n\n                    <h3>Save/Finish</h3>\n                    <p class=\"text-warning\">WARNING: If you click the SAVE/FINISH' button after the site has been\n                        created and you perhaps have done\n                        some work,\n                        the existing buildkit with that account-name will be overwritten with a new buildkit.</p>\n\n\n                    <h3>Ready to build ...</h3>\n                    <ul>\n                        <li>Navigate to the newly created starter buildkit</li>\n                        <li>Go to the newly created browser tab and hard refresh the starter buildkit<br>\n                            Mac: http\"//localhost:8888/account-name/#/<br>\n                            PC: http\"//localhost/account-name/#/<br></li>\n                        <li>While Gulp is running your buildkit changes ie: .less and html markup will automatically be\n                            updated and\n                            be\n                            visible on your machine in the starter buildkit.\n                        </li>\n                        <li>The page will then reload automatically to show the changes you have made.</li>\n\n                    </ul>\n\n                    <p>After the build is completed locally\n                        Upload the 'www' directory to the account-name/ on the hub.</p>\n\n                    <p>DELETE AND REPLACE THE HUB 'www' DIRECTORY with the files in your buildkit.</p>\n\n                    <p class=\"strong\">DO NOT UPLOAD the following files/directory:</p>\n\n                    <ul>\n                        <li>.metadata</li>\n                        <li>.hub-welcome-text</li>\n                        <li>Upload the 'www' directory and it's contents to the account-name on the hub.</li>\n                        <li>Finish the build on the HUB.</li>\n                        <li class=\"text-warning\">NOTE: Do not change the current directory structure. ie:\n                            images/callouts etc, includes,\n                            uploads/images.\n                        </li>\n                        <li class=\"text-warning\">NOTE: Do not remove the /assets/includes/data directory or it's\n                            contents.\n                        </li>\n\n                        <li>NOTE: You can reset welcome text and main-nav text only after you have clicked 'Apply' once\n                            during the\n                            creation\n                            of the template.\n                        </li>\n                        <li>Sub navigation menus are hard coded and are not pulled from the hub.</li>\n                    </ul>\n\n                    <h3>RE-STARTING A PROJECT</h3>\n                    <p>You can restart the build by clicking the 'SAVE/FINISH' button.\n                        This will overwrite your current account-name directory and any work you have done.\n                    </p>\n\n                    <h4>KNOWN ERRORS:</h4>\n                    <p>\"... Uhoh. Got error write EPIPE ...\n                        Error: write EPIPE\n                        at WriteWrap.onWriteComplete [as oncomplete] (internal/stream_base_commons.js:83:16)\"\n                        gulp automatically continues and you can continue also.</p>\n\n                    <p>Restart gulp to fix these errors. (control C, gulp watch)\n                        When a local account-name directory is deleted, gulp will throw an error and quit. Restart gulp\n                        to fix this error. type control C, gulp watch from the terminal.</p>\n\n                    <p>When you re-visit an existing account-name local buildkit. This error will be visible in the\n                        terminal\n                        running\n                        gulp. type control C, gulp watch from the terminal</p>\n\n                    <p>.less syntax errors may cause Gulp to quit and fail. Usually though, the error will show up in\n                        the\n                        terminal\n                        and\n                        direct you to the syntax error. However, if Gulp fails and stops, Fix the error and restart\n                        Gulp.\n                        type\n                        control\n                        C, gulp watch from the terminal</p>\n\n\n                </mat-expansion-panel>\n\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Image Manager</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">The image manager will allow you to drag and drop images into the appropriate\n                        directories.</p>\n                    <ul>\n                        <li>Use the dropdown menu to select and copy where you want the image placed.</li>\n                        <li>Drag and drop or click to select and upload from the directory where your image are\n                            located.\n                        </li>\n                        <li>webP images will automatically be created and placed in the assets directory</li>\n                    </ul>\n                </mat-expansion-panel>\n\n\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Stock Photo Manager</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">This page will add images to assets/uploads/images. These images are used for\n                        internal pages.\n                    </p>\n                    <ol>\n                        <li>Select desired ratio (1x1, 3x4 etc)</li>\n                        <li>Select desired category (adult, braces etc)</li>\n                        <li>Select library page</li>\n                        <li>Select image to associate with library page</li>\n\n                        <li>Repeat ...</li>\n\n                        <li>Your selected image will be copied into the local buildkit.\n                            (account-name/assets/uploads/images/)\n                        </li>\n                    </ol>\n\n                    <p>\n                        <img style=\"width: 100%; max-width: 500px;\" src=\"assets/images/stock-photos-page.png\">\n                    </p>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Builder Notes</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">The Site Manager now has a place to store snippets of code that you may want\n                        to use in the\n                        future.\n                        You will be able to add, save and delete notes and snippets.\n                    </p>\n\n                    <ul>\n                        <li>Create (Add) a snippet item in the Builder Notes page and save your snippet. This will be\n                            stored for future use.\n                        </li>\n                        <li>There is a backup made for these snippets to prevent mistakenly overwriting this file. It is\n                            located under MAMP/data/builder-data.json\n                        </li>\n                    </ul>\n                </mat-expansion-panel>\n\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Form Builder</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">The form builder can be used to create custom forms requested by the\n                        producer.</p>\n                    <ul>\n                        <li>Click the Add Form Field Button</li>\n                        <li>Add the page name as it will be named in the HUB dashboard.</li>\n                        <li>Select the desired form type. ie: text, select, textarea, checkbox.</li>\n                        <li>Add the field name.</li>\n                        <li>Special characters are not allowed and the field name will not allow them to be entered.\n                        </li>\n                        <li>Add the Field label -- Special characters ARE allowed.</li>\n                        <li>Select required if desired by checking the 'Required' checkbox.</li>\n                        <li>Form fields can be deleted using the \"Delete Form Field.\" text.</li>\n                        <li>Select form fields allow the builder to add and delete selectable values.</li>\n                        <li>All formatting is done automatically. There is no need to alter the provided HTML.</li>\n                        <li>Form fields are sortable. Sort the order of the form fields desired by dragging and dropping\n                            the fields.\n                        </li>\n                        <li>Click Grab your HTML -- This will copy the HTML markup to the clipboard.</li>\n                        <li>Place the HTML into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n\n                    <div><img src=\"assets/images/form-image1.png\"></div>\n                    <div><img src=\"assets/images/form-image2.png\"></div>\n                    <div><img src=\"assets/images/form-image3.png\"></div>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Office Tour</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <h3></h3>\n                    <ul>\n                        <li>Start by first placing the office tour images (if available) into the\n                            assets/images/office-tour\n                            directory. (use the drag and drop \"Image Manager\"). This will also create webP images for\n                            the\n                            images you select.\n                        </li>\n                        <li>Select the image from the select form.</li>\n                        <li>After selecting the image desired, \"Image Height\" and \"Image Width\" are automatically\n                            inserted\n                            into the html.\n                        </li>\n                        <li>Add an alt text if captions are desired.</li>\n                        <li>Click the \"Grab your HTML\" button to select and copy the HTML markup.</li>\n                        <li>Place the code into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Before and After</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <ul>\n                        <li>Start by first placing the office tour images (if available) into the\n                            assets/images/before-after-cycle\n                            directory. (use the drag and drop \"Image Manager\"). This will also create webP images for\n                            the\n                            images you select.\n                        </li>\n                        <li>After selecting the image desired, \"image Height\" and \"Image Width\" are automatically\n                            inserted\n                            into the html.\n                        </li>\n                        <li>Select the image from the select form.</li>\n                        <li>Add an alt text if captions are desired.</li>\n                        <li>Click the \"Grab your HTML\" button to select and copy the HTML markup.</li>\n                        <li>Place the code into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n                </mat-expansion-panel>\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Meet The Team</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <ul>\n                        <li>Start by first placing the office tour images (if available) into the assets/uploads/images\n                            directory. (use the drag and drop \"Image Manager\"). This will also create webP images for\n                            the\n                            images you select.\n                        </li>\n                        <li>After selecting the image desired, \"image Height\" and \"Image Width\" are automatically\n                            inserted\n                            into the html.\n                        </li>\n                        <li>Add the team member name</li>\n                        <li>Add the team member position</li>\n                        <li>Add the team member bio</li>\n                        <li>Click the \"Grab your HTML\" button to select and copy the HTML markup.</li>\n                        <li>Place the code into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n                </mat-expansion-panel>\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Location(s)</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <ul>\n                        <li>Start by first placing the office tour images (if available) into the assets/uploads/images\n                            directory. (use the drag and drop \"Image Manager\"). This will also create webP images for\n                            the\n                            images you select.\n                        </li>\n                        <li>After selecting the image desired, \"image Height\" and \"Image Width\" are automatically\n                            inserted\n                            into the html.\n                        </li>\n                        <li>Add practice name, doctor names (up to 3. Additional doctors will need to be added\n                            manually),\n                            address.\n                        </li>\n                        <li>phone, fax, email, office hours, and any additional information.</li>\n                        <li>Add the Google embed scripts, formatting will be automatic.</li>\n                        <li>Click the \"Grab your HTML\" button to select and copy the HTML markup.</li>\n                        <li>Place the code into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n                </mat-expansion-panel>\n\n\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>Canadian Content</mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p class=\"sesame-blue\">Sesame has Canadian customers and their pages are different from USA pages.\n                        This is a list\n                        of\n                        pages\n                        that are appropriate for their country.\n                    </p>\n                    <ul>\n                        <li>Select the category and page name.</li>\n                        <li>Place the code into the appropriate page in the HUB dashboard.</li>\n                    </ul>\n\n                </mat-expansion-panel>\n\n                <!--<mat-expansion-panel hideToggle>\n         <mat-expansion-panel-header>\n             <mat-panel-title>March 5 , 2023</mat-panel-title>\n         </mat-expansion-panel-header>\n         <p>content goes here</p>\n     </mat-expansion-panel>-->\n\n\n\n            </mat-accordion>\n\n\n        </div>\n\n\n        <div class=\"col-sm-12 col-md-12 col-lg-6\">\n\n            <dev-resources></dev-resources>\n\n        </div>\n    </div>\n</div>";

/***/ }),

/***/ 16489:
/*!**********************************************************************************************!*\
  !*** ./src/dev-tools/site-context-provider/templates/site-metadata.template.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"masthead\">\n    <div class=\"site-context-container container\">\n\n        <div class=\"row\">\n\n            <div class=\"col-sm-12 col-md-3 col-lg-3 \">\n\n                <h1 class=\"sm-logo\">\n                    <a class=\"\" style=\"background-color: inherit; font-size: .9em;\" [routerLink]=\"['/sections']\"\n                   [routerLinkActive]=\"['active']\">SM Dashboard</a>\n                </h1>\n\n                <div style=\"text-transform: lowercase; font-size: 1.5em;\">{{heading}}</div>\n                <div style=\"font-size: 1.250em;\">{{builder.value}}</div>\n\n            </div>\n\n            <!-- create-seed component -->\n            <div class=\"col-sm-12 col-md-3 col-lg-3\">\n\n                <div>\n                    <dev-create-seed></dev-create-seed>\n                    <div>{{getLocalDirectoriesError}}</div>\n                </div>\n            </div>\n\n            <!-- select account form -->\n            <div class=\"col-sm-12 col-md-3 col-lg-3\">\n\n                <form [formGroup]=\"selectSiteMetadataForm\"\n                      (ngSubmit)=\"onSetSiteData(selectSiteMetadataForm);\" >\n\n                    <!-- -->\n                    <button mat-raised-button\n                            [disabled]=\"!builder.value || !account.value\"\n                            type=\"submit\">\n                        <span>Select Account</span>\n                    </button>\n\n                    <br /><br />\n\n                    <mat-form-field color=\"accent\">\n                        <mat-label>Select Account Name</mat-label>\n                        <mat-select id=\"account\"\n                                    required\n                                    #account\n                                    formControlName=\"account\"\n                                    placeholder=\"Account\"\n                                    name=\"account\">\n                            <mat-option *ngFor=\"let dir of localDirectories\"\n                                        value=\"{{dir}}\">{{dir}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                    <div class=\"bgdanger\" *ngIf=\"selectSiteMetadataForm.get('account').touched\n                    && !account.value\">Account is a required field</div>\n                    <div>\n                        <mat-form-field>\n                            <input matInput\n                                 ngModel\n                                   #builder\n                                   required\n                                   type=\"text\"\n                                   name=\"builder\"\n                                   formControlName=\"builder\"\n                                   placeholder=\"Builder Name\">\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"bgdanger\" *ngIf=\"selectSiteMetadataForm.get('builder').touched\n                    && !builder.value\">Name is a required field</div>\n\n                </form>\n\n            </div>\n\n            <div class=\"col-sm-12 col-md-3 col-lg-3\">\n\n                <nav class=\"navbar navbar-expand-lg\">\n\n                        <div id=\"navbarSupportedContent\">\n                            <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\n                                <li class=\"nav-item dropdown\">\n                                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n                                       data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                                        Pages\n                                    </a>\n                                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                        <li><a class=\"dropdown-item\" *ngFor=\"let item of mainMenuArray\"\n                                               [routerLink]=\"[item.routerLink]\">{{item.display}}</a>\n                                        </li>\n                                    </ul>\n                                </li>\n\n                                <li class=\"nav-item dropdown\">\n                                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\"\n                                       data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n                                        Resources\n                                    </a>\n                                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                                        <li><a class=\"dropdown-item\" [routerLink]=\"['/css']\"\n                                               [routerLinkActive]=\"['active']\">Variables</a></li>\n                                        <li><a class=\"dropdown-item\" [routerLink]=\"['/css-mixins']\"\n                                               [routerLinkActive]=\"['active']\">Mixins</a></li>\n                                        <!--<li><a class=\"dropdown-item\" [routerLink]=\"['/build-info']\"\n                                               [routerLinkActive]=\"['active']\">Support (beta)</a></li>-->\n                                        <li><a class=\"dropdown-item\"\n                                               href=\"https://confluence.internetbrands.com/display/PD/Web+Team+Home\"\n                                               target=\"_blank\">WebDev WIKI</a></li>\n                                        <li><a class=\"dropdown-item\"\n                                               href=\"https://confluence.internetbrands.com/pages/viewpage.action?pageId=162453771\"\n                                               target=\"_blank\">SM WIKI</a></li>\n\n                                       <!-- <li><a class=\"dropdown-item\" [routerLink]=\"['/form-builder']\"\n                                               [routerLinkActive]=\"['active']\">Form Builder</a></li>-->\n                                    </ul>\n                                </li>\n\n                            </ul>\n\n                        </div>\n\n                </nav>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>\n";

/***/ }),

/***/ 40595:
/*!********************************************************************!*\
  !*** ./src/dev-tools/templates/dev-tools.template.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"site-manager\">\n    <div [ngClass]=\"{'hide': sitename != 'dashboard'}\">\n        <div class=\"masthead\">\n            <!-- Site Context -->\n            <site-metadata></site-metadata>\n        </div>\n\n        <div class=\"content container\" style=\"z-index: 1; \">\n            <!-- Main route output -->\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map