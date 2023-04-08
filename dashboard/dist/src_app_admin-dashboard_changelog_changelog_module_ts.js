(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_admin-dashboard_changelog_changelog_module_ts"],{

/***/ 5765:
/*!******************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogComponent": () => (/* binding */ ChangelogComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _changelog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changelog.component.html?ngResource */ 24387);
/* harmony import */ var _changelog_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changelog.component.css?ngResource */ 80231);
/* harmony import */ var _changelog_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_changelog_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _changelog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changelog.service */ 95369);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ChangelogComponent = (_class = class ChangelogComponent {
  ngOnInit() {
    console.log('I am changelog');
    this.getChangeLogUpdates();
  }
  constructor(_fb, _snackBarService, _changelogService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_changelogService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'Changelog');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "CLInterface", void 0);
    this._fb = _fb;
    this._snackBarService = _snackBarService;
    this._changelogService = _changelogService;
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.CLInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(this.CLInterface.updates, event.previousIndex, event.currentIndex);
  }
  /**
   * Get office tour data
   */
  getChangeLogUpdates() {
    this._changelogService.getChangelogUpdates().subscribe({
      next: CLInterface => {
        this.CLInterface = CLInterface;
        console.log(this.CLInterface);
      }
    });
  }
  /**
   * JSON data
   * @param MTTInterface
   */
  saveOfficeTourImages(CLInterface) {
    let CLupdates = {
      updates: this.CLInterface.updates
    };
    // this._officeTourService.sendOfficeTourImage(OTImages).subscribe();
    // this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
  }

  addUpdate() {
    this.CLInterface?.updates.push({
      name: 'update name',
      version: '',
      date: '',
      comments: ''
    });
  }
  removeUpdate(index) {
    this.CLInterface?.updates.splice(index, 1);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService
}, {
  type: _changelog_service__WEBPACK_IMPORTED_MODULE_4__.ChangelogService
}]), _class);
ChangelogComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'changelog',
  template: _changelog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_changelog_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ChangelogComponent);


/***/ }),

/***/ 16585:
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogModule": () => (/* binding */ ChangelogModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog.component */ 5765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _changelog_changelog_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../changelog/changelog.route */ 38823);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let ChangelogModule = class ChangelogModule {};
ChangelogModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  providers: [_services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(_changelog_changelog_route__WEBPACK_IMPORTED_MODULE_1__.ROUTES), _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule],
  exports: [_changelog_component__WEBPACK_IMPORTED_MODULE_0__.ChangelogComponent],
  declarations: [_changelog_component__WEBPACK_IMPORTED_MODULE_0__.ChangelogComponent]
})], ChangelogModule);


/***/ }),

/***/ 38823:
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.route.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _changelog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changelog.component */ 5765);

const ROUTES = [{
  path: '',
  component: _changelog_component__WEBPACK_IMPORTED_MODULE_0__.ChangelogComponent
}];

/***/ }),

/***/ 95369:
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangelogService": () => (/* binding */ ChangelogService)
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


let ChangelogService = (_class = class ChangelogService {
  constructor(_httpClient) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "url", '/dashboard/data/changelog-data.json');
    this._httpClient = _httpClient;
  }
  getChangelogUpdates() {
    return this._httpClient.get(this.url, {
      responseType: 'text'
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
ChangelogService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], ChangelogService);


/***/ }),

/***/ 80231:
/*!******************************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.component.css?ngResource ***!
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

/***/ 24387:
/*!*******************************************************************************!*\
  !*** ./src/app/admin-dashboard/changelog/changelog.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"changelog-container\" class=\"admin-container container\" *ngIf=\"CLInterface\">\n\n    <h1>{{title}}</h1>\n\n\n    <div class=\"col-lg-7 col-md-7 col-sm-12\">\n\n\n        <!--<div>\n            <button mat-raised-button\n                    class=\"float-start\"\n                    style=\"margin-right: 5px;\"\n                    type=\"submit\">\n                <mat-icon class=\" sesame-blue\">save</mat-icon>\n                Save\n            </button>\n            &lt;!&ndash; add item &ndash;&gt;\n            <button type=\"button\" mat-raised-button (click)=\"addUpdate()\">\n                <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon>\n                Add\n            </button>\n\n            <br/> <br/>\n\n            <div class=\"clear\"></div>\n        </div>-->\n        <mat-accordion multi=\"false\">\n\n<!--            <div id=\"changelog-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">-->\n\n                    <div *ngFor=\"let update of CLInterface.updates; let i = index; let even=even; let odd=odd;\"\n                         class=\"item5-10\" [ngClass]=\"{ odd: odd, even: even }\"\n                         cdkDrag>\n\n                        {{update.name}}\n\n                        <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    <!-- add delete buttons-->\n                                    <div class=\"add-button\">\n                                      <span class=\" text-info\"\n                                            (click)=\"addUpdate(); $event.stopPropagation()\">\n                                            <mat-icon>add</mat-icon>\n                                     </span>\n                                    </div>\n\n                                    <div class=\"delete-button\">\n                                     <span class=\" text-danger\"\n                                           (click)=\"removeUpdate(i); $event.stopPropagation()\">\n                                        <mat-icon>delete</mat-icon>\n                                        </span>\n                                    </div>\n\n                                </mat-panel-title>\n                            </mat-expansion-panel-header>\n\n\n                            <mat-form-field appearance=\"fill\"\n                                            class=\"float-start\"\n                                            style=\"width: 18%; margin-left: 2%;\">\n                                <input matInput\n                                       type=\"text\"\n                                       [(ngModel)]=\"update.name\"\n                                       name=\"name\"\n                                       class=\"float-end\"\n                                       placeholder=\"Add a name\">\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"fill\"\n                                            class=\"float-start\"\n                                            style=\"width: 18%; margin-left: 2%;\">\n                                <input matInput\n                                       [(ngModel)]=\"update.version\"\n                                       name=\"version\"\n                                       placeholder=\"Version\"\n                                       #version>\n                            </mat-form-field>\n\n                            <mat-form-field appearance=\"fill\"\n                                            class=\"float-start\"\n                                            style=\"width: 32%; margin-left: 2%;\">\n                                <input matInput\n                                       type=\"text\"\n                                       [(ngModel)]=\"update.date\"\n                                       name=\"release\"\n                                       placeholder=\"Release\" #release>\n                            </mat-form-field>\n\n\n                            <mat-form-field appearance=\"fill\"\n                                            class=\"float-start\"\n                                            style=\"width: 22%; margin-left: 2%;\">\n\n                                <input matInput type=\"text\"\n                                       [(ngModel)]=\"update.comments\"\n                                       name=\"date\"\n                                       placeholder=\"Release Date\"\n                                       #date>\n                            </mat-form-field>\n\n                        </mat-expansion-panel>\n                    </div>\n<!--                </div>-->\n\n        </mat-accordion>\n    </div>\n\n</div>\n\n\n<div class=\"col-lg-4 col-md-4 col-sm-12\">\n    <!--<h3>Instructions</h3>\n    <p><span class=\"sesame-blue\">Blue placeholder text</span> indicates a required field.</p>\n\n    <h3>Changelog (last 3)</h3>\n\n    <div class=\"content-data\"\n         *ngFor=\"let formDataValue of adminForm.controls['items'].value  | keys; let i = index; let first = first;\">\n        <div *ngIf=\"i<3\">\n            <div *ngIf=\"formDataValue.value.version\"><span><span\n                    *ngIf=\"first\">CURRENT</span> Version: </span>{{formDataValue.value.version}}</div>\n            <div *ngIf=\"formDataValue.value.name\"><span>Name: </span> {{formDataValue.value.name}}</div>\n            <div *ngIf=\"formDataValue.value.name\"><span>Name: </span> {{formDataValue.value.release}}</div>\n            <div *ngIf=\"formDataValue.value.date\"><span>Git Release Date: </span> {{formDataValue.value.date}}\n            </div>\n            <div *ngIf=\"formDataValue.value.angular_version\">\n                <span>Angular -V:  </span>{{formDataValue.value.angular_version}}</div>\n            <div *ngIf=\"formDataValue.value.comments\"><span>Comments:  </span>{{formDataValue.value.comments}}\n            </div>\n\n            <hr/>\n\n        </div>\n\n    </div>-->\n\n</div><!-- end col -->\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin-dashboard_changelog_changelog_module_ts.js.map