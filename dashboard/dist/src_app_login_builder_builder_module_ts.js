(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_login_builder_builder_module_ts"],{

/***/ 49023:
/*!****************************************************!*\
  !*** ./src/app/login/builder/builder.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderComponent": () => (/* binding */ BuilderComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _builder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.component.html?ngResource */ 67161);
/* harmony import */ var _builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder.component.css?ngResource */ 35775);
/* harmony import */ var _builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _builder_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./builder.service */ 96284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/show-hide-content.service */ 71464);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let BuilderComponent = (_class = class BuilderComponent {
  constructor(_builderService, _showHideContent, _snackBarService, _fb) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_builderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContent", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builderForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builder", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "date", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "snippetTitle", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "snippet", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "builderFormDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    this._builderService = _builderService;
    this._showHideContent = _showHideContent;
    this._snackBarService = _snackBarService;
    this._fb = _fb;
    this.builderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      builder: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      account: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      snippetTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      snippet: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArray([])
    });
  }
  ngOnInit() {
    this.getFormData();
  }
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.moveItemInArray)(this.builderForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.builderForm.controls['items'].updateValueAndValidity();
  }
  getFormData() {
    this._builderService.getBuilderData().subscribe(res => {
      let data = res;
      console.log('Builder data retrieved: ' + new Date().toUTCString());
      this.builderFormDataArray = data.items;
      this.builderForm = this._fb.group({
        builder: [data.builder],
        items: this._fb.array([])
      });
      let builderForm = this.builderForm;
      let component = this;
      this.deleteConfirmationArray = [];
      // create an array from builder-data.json
      this.builderFormDataArray.forEach(function (item) {
        let control = builderForm.controls['items'];
        control.push(component._fb.group({
          // builder: [item.builder],
          account: [item.account],
          date: [item.date],
          snippetTitle: [item.snippetTitle],
          snippet: [item.snippet]
        }));
        component.deleteConfirmationArray.push(false);
      });
    }, error => console.log(error));
    return this.builderFormDataArray;
  }
  setBuilderData(form) {
    let builderform = this.builderForm; // Form values
    console.log(form.value.snippetTitle);
    let builderdata = {
      builder: form.value.builder,
      items: form.value.items
    };
    // console.log(form.value['items'][0].account);
    console.log(builderdata);
    this._builderService.postBuilderData(builderdata);
    // location.reload();
  }
  /**
   * Create Form Group
   * @returns {FormGroup}
   *
   */
  initItem() {
    return this._fb.group({
      account: [''],
      date: [''],
      snippetTitle: [''],
      snippet: ['']
    });
  }
  /**
   * Add item to the list
   */
  addItem(e) {
    const control = this.builderForm.controls['items'];
    control.insert(0, this.initItem());
  }
  /**
   *
   * @param i
   * @param el
   */
  confirmDeleteMessage(i) {
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
    const control = this.builderForm.controls['items'];
    control.removeAt(i);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _builder_service__WEBPACK_IMPORTED_MODULE_3__.BuilderService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_4__.ShowHideContentService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__.SnackbarService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}]), _class);
BuilderComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'dev-builder',
  template: _builder_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_builder_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BuilderComponent);


/***/ }),

/***/ 60553:
/*!*************************************************!*\
  !*** ./src/app/login/builder/builder.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuilderModule": () => (/* binding */ BuilderModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _builder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder.service */ 96284);
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder.component */ 49023);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../get-hub-navigation/get-hub-navigation.module */ 99158);
/* harmony import */ var _create_seed_create_seed_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../create-seed/create-seed.module */ 33422);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _login_builder_builder_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../login/builder/builder.routes */ 7971);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _pipes_replace_dash_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/replace-dash-space */ 21895);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _partials_add_save_buttons_add_save_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/add-save-buttons/add-save-module */ 19367);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























let BuilderModule = class BuilderModule {};
BuilderModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  providers: [_builder_service__WEBPACK_IMPORTED_MODULE_0__.BuilderService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__.SnackbarService, _pipes_replace_dash_space__WEBPACK_IMPORTED_MODULE_7__.ReplaceDashSpace],
  declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_1__.BuilderComponent],
  exports: [_builder_component__WEBPACK_IMPORTED_MODULE_1__.BuilderComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_login_builder_builder_routes__WEBPACK_IMPORTED_MODULE_5__.ROUTES), _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_2__.SharedDataModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_8__.SharedFormattingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _get_hub_navigation_get_hub_navigation_module__WEBPACK_IMPORTED_MODULE_3__.GetHubNavigationModule, _create_seed_create_seed_module__WEBPACK_IMPORTED_MODULE_4__.CreateSeedModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_22__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _partials_add_save_buttons_add_save_module__WEBPACK_IMPORTED_MODULE_9__.AddSaveButtonsModule]
})], BuilderModule);


/***/ }),

/***/ 7971:
/*!*************************************************!*\
  !*** ./src/app/login/builder/builder.routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder.component */ 49023);

const ROUTES = [{
  path: '',
  component: _builder_component__WEBPACK_IMPORTED_MODULE_0__.BuilderComponent
}];

/***/ }),

/***/ 35775:
/*!****************************************************************!*\
  !*** ./src/app/login/builder/builder.component.css?ngResource ***!
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

/***/ 67161:
/*!*****************************************************************!*\
  !*** ./src/app/login/builder/builder.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"builder-container container\">\n\n    <h1>Builder</h1>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-8 col-md-8 col-sm-12 wow fadeIn\" data-wow-duration=\".5s\">\n\n            <form [formGroup]=\"builderForm\" novalidate (ngSubmit)=\"setBuilderData(builderForm)\">\n\n                <add-save-buttons (addSaveButton)=\"addItem($event)\"></add-save-buttons>\n\n                <div class=\"ba-ot-standard-wrap\">\n\n                    <!--  height width -->\n                    <mat-form-field class=\" float-start\" style=\"width: 38%; margin-left: 2%;\">\n\n                        <input matInput type=\"text\"\n                               formControlName=\"builder\"\n                               Placeholder=\"Builder\"\n                               name=\"builder\" #builder>\n                    </mat-form-field>\n\n                    <div class=\"clear\"></div>\n\n                    <mat-accordion multi=\"false\">\n\n                        <div id=\"office-tour-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                            <div formArrayName=\"items\">\n\n                                <div *ngFor=\"let item of builderForm.controls['items'].controls;\n                                 let i = index; let even=even; let odd=odd;\"\n                                     [ngClass]=\"{ odd: odd, even: even }\"\n                                     cdkDrag>\n\n                                    <div [formGroupName]=\"i\"\n                                         [ngClass]=\"{ odd: odd, even: even }\">\n\n                                        <mat-expansion-panel hideToggle>\n\n                                            <mat-expansion-panel-header>\n                                                <mat-panel-title >\n                                                    <!-- add delete buttons -->\n                                                    <div class=\"add-delete-wrap \"\n                                                         (click)=\"$event.stopPropagation();\">\n\n                                                        <div class=\"delete-button\">\n\n                                                            <!-- add/delete buttons -->\n                                                            <div class=\"float-start\"\n                                                                 style=\"width: 49%;\n                                                                     text-align: center;\">\n                                                                <!--  add method -->\n                                                                <span class=\" text-info\"\n                                                                      (click)=\"addItem(i)\">\n                                                            <mat-icon>add</mat-icon>\n                                                            </span>\n                                                            </div>\n\n                                                            <!-- delete method -->\n                                                            <div class=\"float-end\"\n                                                                 style=\"width: 49%; text-align: center;\">\n                                                                <span class=\"text-danger\"\n                                                                      *ngIf=\"builderForm.controls.items.controls.length > 0\"\n                                                                      (click)=\"confirmDeleteMessage(i)\"\n                                                                      value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                                </span>\n                                                            </div>\n\n                                                            <!-- confirmation or cancel -->\n                                                            <div *ngIf=\"deleteConfirmationArray[i]\"\n                                                                 class=\"delete-confirm\">\n                                                                <!-- delete -->\n                                                                <span class=\"float-start sesame-danger \"\n                                                                      style=\"width: 49%; \"\n                                                                      (click)=\"confirmDelete(i, builderForm, 'deleteItem')\">\n                                                                    Delete\n                                                                    </span>\n                                                                <!-- confirm delete -->\n                                                                <span type=\"button\"\n                                                                      class=\"float-end sesame-green-background\"\n                                                                      style=\"width: 49%;\"\n                                                                      (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                                                    Cancel\n                                                                    </span>\n\n                                                            </div><!-- delete buttons -->\n                                                        </div><!-- end buttons -->\n\n                                                        <div class=\"clear\"></div>\n\n\n                                                    </div><!-- end add-delete-wrap -->\n                                                    <div *ngIf=\"item.controls.account.value as value; \">\n\n                                                        <span class=\"sesame-blue\">{{item.controls.account.value | replaceDashSpace | titlecase}}</span>\n\n                                                        &nbsp;<span\n                                                            class=\"title-sub-text\">{{item.controls.date.value | date}}</span>\n                                                        &nbsp;<span\n                                                            class=\"sesame-green\">{{item.controls.snippetTitle.value }}</span>\n                                                    </div>\n\n\n\n                                                </mat-panel-title>\n\n                                            </mat-expansion-panel-header>\n\n                                            <br/>\n\n                                            <div class=\"clear\"></div>\n\n                                            <mat-form-field float-end\n                                                            style=\"width: 38%; margin-left: 2%;\"\n                                                            color=\"primary\">\n\n                                                <mat-label>Account</mat-label>\n                                                <input matInput\n                                                       type=\"text\"\n                                                       formControlName=\"account\"\n                                                       name=\"account\"\n                                                       placeholder=\"Account\"\n                                                       #account>\n                                            </mat-form-field>\n\n                                            <br/>\n\n                                            <mat-form-field float-end\n                                                            style=\"width: 38%; margin-left: 2%;\"\n                                                            color=\"primary\">\n                                                <mat-label>Snippet Title</mat-label>\n                                                <input matInput\n                                                       type=\"text\"\n                                                       formControlName=\"snippetTitle\"\n                                                       name=\"snippetTitle\"\n                                                       #snippetTitle>\n                                            </mat-form-field>\n\n                                            <div class=\"snippet-wrap\">\n                                                <label>Snippet</label>\n                                                <textarea name=\"snippet\"\n                                                          formControlName=\"snippet\"\n                                                          name=\"snippet\"\n                                                          placeholder=\"Snippet\"\n                                                          #snippet>\n\n                                                </textarea>\n\n                                            </div><!-- end item-info bar -->\n\n                                        </mat-expansion-panel>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </mat-accordion>\n\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_builder_builder_module_ts.js.map