"use strict";
(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_form-builder_form-builder_module_ts"],{

/***/ 5675:
/*!*****************************************************!*\
  !*** ./src/app/form-builder/form-builder.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormBuilderModule": () => (/* binding */ FormBuilderModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _form_builder_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-builder.routes */ 44295);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subnav/subnav.module */ 9863);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6517);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























let FormBuilderModule = class FormBuilderModule {};
FormBuilderModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  providers: [_services_snackbar_service__WEBPACK_IMPORTED_MODULE_7__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_5__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_4__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_form_builder_routes__WEBPACK_IMPORTED_MODULE_3__.ROUTES), _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_6__.SubnavModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__.MatSnackBarModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule],
  declarations: [
    // FormBuilderComponent
  ],
  // exports: [FormBuilderComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_8__.CUSTOM_ELEMENTS_SCHEMA]
})], FormBuilderModule);


/***/ }),

/***/ 44295:
/*!*****************************************************!*\
  !*** ./src/app/form-builder/form-builder.routes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _form_builder_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-builder.component */ 22608);

const ROUTES = [{
  path: '',
  component: _form_builder_component__WEBPACK_IMPORTED_MODULE_0__.FormBuilderComponent
}];

/***/ })

}]);
//# sourceMappingURL=src_app_form-builder_form-builder_module_ts.js.map