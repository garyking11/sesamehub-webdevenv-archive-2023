"use strict";
(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_home_home_module_ts"],{

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.html?ngResource */ 64715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-dashboard/admin/admin.service */ 18109);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let HomeComponent = (_class = class HomeComponent {
  constructor(_siteContextProviderService, _siteManagementService, _adminService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteManagementService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_adminService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ModalStatic", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localDirectories", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "admindata", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "backupFiles", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showDeletedSpinner", false);
    this._siteContextProviderService = _siteContextProviderService;
    this._siteManagementService = _siteManagementService;
    this._adminService = _adminService;
  }
  ngOnInit() {
    this.onGetLocalDirectories();
    this.getAdminData();
    // this.getBackupFilesList();
  }
  /**
   *  Get site buildkit directories
   */
  onGetLocalDirectories() {
    this._siteContextProviderService.getLocalDirectories().subscribe(data => {
      this.localDirectories = data;
    }, error => console.log(error));
  }
  /**
   * Get current admin data. ie: current release information
   */
  getAdminData() {
    this._adminService.getFormData().subscribe(data => {
      this.admindata = data.adminData;
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__.SiteContextProviderService
}, {
  type: _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_4__.SiteManagementService
}, {
  type: _admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_3__.AdminService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  ModalStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ['confirm', {
      static: false
    }]
  }]
}), _class);
HomeComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], HomeComponent);


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _modal_static_modal_static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-static/modal-static.module */ 29668);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-dashboard/admin/admin.service */ 18109);
/* harmony import */ var _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/modal-popup.service */ 85486);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _dev_tools_site_context_provider_site_metadata_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/site-metadata.module */ 8849);
/* harmony import */ var _home_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.routes */ 32339);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../dev-tools/services/site-management.service */ 88518);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _quick_links_quick_links_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../quick-links/quick-links.module */ 39621);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _site_backup_site_backup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./site-backup/site-backup.component */ 4081);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {AccordionModule} from 'ngx-bootstrap';












let HomeModule = class HomeModule {};
HomeModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  providers: [_dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService, _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_9__.SiteManagementService, _admin_dashboard_admin_admin_service__WEBPACK_IMPORTED_MODULE_4__.AdminService, _services_modal_popup_service__WEBPACK_IMPORTED_MODULE_5__.ModalPopupService],
  imports: [_menu_menu_module__WEBPACK_IMPORTED_MODULE_10__.MenuModule,
  // AccordionModule.forRoot(),
  _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _modal_static_modal_static_module__WEBPACK_IMPORTED_MODULE_1__.ModalStaticModule, _quick_links_quick_links_module__WEBPACK_IMPORTED_MODULE_11__.QuickLinksModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_6__.SharedFormattingModule, _dev_tools_site_context_provider_site_metadata_module__WEBPACK_IMPORTED_MODULE_7__.SiteMetaDataModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_12__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(_home_routes__WEBPACK_IMPORTED_MODULE_8__.ROUTES)],
  declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _site_backup_site_backup_component__WEBPACK_IMPORTED_MODULE_13__.SiteBackupComponent],
  exports: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_14__.CUSTOM_ELEMENTS_SCHEMA]
})], HomeModule);


/***/ }),

/***/ 32339:
/*!*************************************!*\
  !*** ./src/app/home/home.routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);

const ROUTES = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];

/***/ }),

/***/ 4081:
/*!***********************************************************!*\
  !*** ./src/app/home/site-backup/site-backup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteBackupComponent": () => (/* binding */ SiteBackupComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _site_backup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-backup.component.html?ngResource */ 76609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dev-tools/services/site-management.service */ 88518);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SiteBackupComponent = (_class = class SiteBackupComponent {
  constructor(siteManagementService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteManagementService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "site", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showDeletedSpinner", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleted", new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showSpinner", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "hasBackup", false);
    this.siteManagementService = siteManagementService;
  }
  ngOnInit() {
    this.checkBackup();
  }
  deleteSite() {
    this.siteManagementService.deleteSiteDirectory(this.site).then(val => {
      if (val.status = 200) {
        this.showDeletedSpinner = true;
        location.reload();
      } else {
        this.showDeletedSpinner = false;
      }
    });
  }
  checkBackup() {
    this.siteManagementService.backupFilesExist().subscribe(data => {
      this.hasBackup = data.filter(value => {
        return value === this.site + '.zip';
        // return value === this.site.split('.').pop().replace('.zip', '');
      }).length > 0;
    }, err => {
      console.error(err);
    });
  }
  backup() {
    this.showSpinner = true;
    return new Promise((resolve, reject) => {
      this.siteManagementService.backupBuildKit(this.site).then(() => {
        this.showSpinner = false;
        this.checkBackup();
        return resolve();
      }).catch(err => {
        this.showSpinner = false;
        // Uh-oh, something bad happened.
        return reject(err);
      });
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_services_site_management_service__WEBPACK_IMPORTED_MODULE_2__.SiteManagementService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  site: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
    args: ['site']
  }],
  showDeletedSpinner: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
  }],
  deleted: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
  }]
}), _class);
SiteBackupComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-site-backup',
  template: _site_backup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], SiteBackupComponent);


/***/ }),

/***/ 64715:
/*!*****************************************************!*\
  !*** ./src/app/home/home.component.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<dev-modal-static #confirm></dev-modal-static>\n\n<div class=\"container\">\n\n    <h1>Dashboard</h1>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n\n            <h2 id=\"btn btn-primary\">\n                <a class=\"cursor-pointer\" [routerLink]=\"['/sections']\"\n                [routerLinkActive]=\"['active']\">Buildkit</a>\n            </h2>\n        </div><!-- end col -->\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n\n            <h3>Changelog</h3>\n            <span class=\"content-data\" *ngFor=\"let formDataValue of admindata| keys; let i = index; let first = first;\">\n\n                <div *ngIf=\"i<3\">\n                    <div *ngIf=\"formDataValue.value.version\"><span\n                            *ngIf=\"first\">Current</span> Version: {{formDataValue.value.version}}&nbsp;{{formDataValue.value.date}}</div>\n                    <div *ngIf=\"formDataValue.value.comments\">{{formDataValue.value.comments}}</div>\n                <hr/>\n                </div>\n\n            </span>\n\n        </div><!-- end col -->\n\n    </div><!-- end row -->\n\n</div>\n";

/***/ }),

/***/ 76609:
/*!************************************************************************!*\
  !*** ./src/app/home/site-backup/site-backup.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n\n    <i class=\"fa fa-trash\" (click)=\"deleteSite();\"></i>\n\n    <span *ngIf=\"showDeletedSpinner\" class=\"confirm-backup small\"> Deleting buildkit ...\n        <!--<img class=\"show-inline\" src=\"assets/images/navSpinner.gif\" alt=\"Deleting\" style=\"width: 20px;\">-->\n    </span>\n\n\n    <i class=\"fa fa-download\" (click)=\"backup()\"></i> {{site}} &nbsp;\n    <span *ngIf=\"showSpinner\" class=\"confirm-backup\"><img class=\"show-inline\" src=\"assets/images/navSpinner.gif\" alt=\"Loading!\" style=\"width: 20px;\"></span>\n\n    <span class=\"text-warning\" *ngIf=\"hasBackup\">Backup created</span>\n    <span *ngIf=\"!hasBackup\">Needs Backup</span>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map