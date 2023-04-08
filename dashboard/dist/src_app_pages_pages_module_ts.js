(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 57105:
/*!****************************************************************!*\
  !*** ./src/app/before-and-after/before-and-after.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeAndAfterComponent": () => (/* binding */ BeforeAndAfterComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _before_and_after_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before-and-after.component.html?ngResource */ 34773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _before_and_after_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./before-and-after.service */ 63764);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let BeforeAndAfterComponent = (_class = class BeforeAndAfterComponent {
  constructor(_getLocalImagesService, _siteContextProviderService, _beforeAndAfterService, _copyDataToClipboardService, _showHideContentService, _snackBarService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_getLocalImagesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_beforeAndAfterService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContentService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'Before and After');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nbsp", '\u0026nbsp;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lCurly", '&#123;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rCurly", '&#125;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "BAInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showBAInst", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageDirectory", 'images/before-after-cycle');
    this._getLocalImagesService = _getLocalImagesService;
    this._siteContextProviderService = _siteContextProviderService;
    this._beforeAndAfterService = _beforeAndAfterService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._showHideContentService = _showHideContentService;
    this._snackBarService = _snackBarService;
  }
  ngOnInit() {
    this.getSiteContext();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(res => {
      this.siteContext = res;
      this.getBeforeAfterValues(); // data
    }, error => console.log(error));
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.BAInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(this.BAInterface.images, event.previousIndex, event.currentIndex);
  }
  /**
   * JSON data
   */
  getBeforeAfterValues() {
    this._beforeAndAfterService.getBAImageValues().subscribe({
      next: BAInterface => {
        this.BAInterface = BAInterface;
      }
    });
  }
  saveBeforeAfterImages(BAInterface) {
    let siteContext = this.siteContext.account;
    let BAImages = {
      account: siteContext,
      images: this.BAInterface.images
    };
    this._beforeAndAfterService.sendBeforeAfterImage(BAImages).subscribe();
    this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
  }
  addImage() {
    this.BAInterface?.images.push({
      path: null,
      imageAlt: '',
      altCaption: ''
    });
  }
  removeImage(index) {
    this.BAInterface?.images.splice(index, 1);
  }
  /**
   * Show hide content areas within forms
   * @param item
   * Utilities Module
   */
  showHide(item) {
    this._showHideContentService.showHideContent(item);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  copyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  copyThisHTMLToClipboard(x) {
    this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
  }
  copyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_2__.GetLocalImagesService
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_7__.SiteContextProviderService
}, {
  type: _before_and_after_service__WEBPACK_IMPORTED_MODULE_4__.BeforeAndAfterService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__.ShowHideContentService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_3__.SnackbarService
}]), _class);
BeforeAndAfterComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'before-and-after',
  template: _before_and_after_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], BeforeAndAfterComponent);


/***/ }),

/***/ 49893:
/*!*************************************************************!*\
  !*** ./src/app/before-and-after/before-and-after.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeAndAfterModule": () => (/* binding */ BeforeAndAfterModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _before_and_after_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./before-and-after.component */ 57105);
/* harmony import */ var _before_and_after_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./before-and-after.service */ 63764);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/custom-validators.service */ 46077);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _office_tour_office_tour_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../office-tour/office-tour.service */ 55855);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../image-selector/image-selector.module */ 81201);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























let BeforeAndAfterModule = class BeforeAndAfterModule {};
BeforeAndAfterModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  providers: [_before_and_after_service__WEBPACK_IMPORTED_MODULE_4__.BeforeAndAfterService, _office_tour_office_tour_service__WEBPACK_IMPORTED_MODULE_11__.OfficeTourService, _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_5__.SiteContextProviderService, _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_6__.CopyDataToClipboardService, _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_7__.CustomValidatorsService, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder, _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_10__.GetLocalImagesService, _office_tour_office_tour_service__WEBPACK_IMPORTED_MODULE_11__.OfficeTourService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_12__.SnackbarService, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Compiler],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_8__.UtilitiesModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_25__.DragDropModule, _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_13__.ImageSelectorModule],
  declarations: [_before_and_after_component__WEBPACK_IMPORTED_MODULE_3__.BeforeAndAfterComponent],
  // , OfficeTourComponent
  exports: [_before_and_after_component__WEBPACK_IMPORTED_MODULE_3__.BeforeAndAfterComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_14__.CUSTOM_ELEMENTS_SCHEMA]
})], BeforeAndAfterModule);


/***/ }),

/***/ 63764:
/*!**************************************************************!*\
  !*** ./src/app/before-and-after/before-and-after.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeAndAfterService": () => (/* binding */ BeforeAndAfterService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import 'rxjs/Rx';


let BeforeAndAfterService = (_class = class BeforeAndAfterService {
  // private pathToBeforeAfterJson = '../assets/db-json/before-after.json';
  constructor(_siteContextProviderService, _httpClient) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    this._siteContextProviderService = _siteContextProviderService;
    this._httpClient = _httpClient;
  }
  /**
   * data
   */
  getBAImageValues() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
        const path = `../../${siteContext.account}/assets/includes/data/before-and-after.json?v=${new Date()}`;
        return this._httpClient.get(path).subscribe(BeforeAfter => {
          subscriber.next(BeforeAfter);
        });
      });
    });
  }
  /**
   *
   * @param data
   * @returns {Observable<Response>}
   */
  // send to endpoint
  sendBeforeAfterImage(baf) {
    const body = JSON.stringify(baf);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/before-and-after-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}]), _class);
BeforeAndAfterService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], BeforeAndAfterService);


/***/ }),

/***/ 73537:
/*!************************************************************!*\
  !*** ./src/app/image-selector/image-selector.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSelectorComponent": () => (/* binding */ ImageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _image_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-selector.component.html?ngResource */ 87432);
/* harmony import */ var _image_selector_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-selector.component.css?ngResource */ 73731);
/* harmony import */ var _image_selector_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_selector_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/get-local-files.service */ 83101);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ImageSelectorComponent = (_class = class ImageSelectorComponent {
  constructor(_siteContextProviderService, _getLocalFilesService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_getLocalFilesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "directory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image", null);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "caption", "Image");
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "images", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    this._siteContextProviderService = _siteContextProviderService;
    this._getLocalFilesService = _getLocalFilesService;
  }
  ngOnInit() {
    this.account = this._siteContextProviderService.account;
    this._getLocalFilesService.listLocalFiles(this.account, this.directory).subscribe(files => {
      this.images = files.filter(f => f.mime && f.mime.startsWith('image/'));
    });
  }
  updateSize() {
    let image = this.images.find(i => i.path === this.image.path);
    if (image) {
      this.image.width = image.width;
      this.image.height = image.height;
    }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_3__.GetLocalFilesService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  directory: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  image: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  caption: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
}), _class);
ImageSelectorComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'image-selector',
  template: _image_selector_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_image_selector_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ImageSelectorComponent);


/***/ }),

/***/ 81201:
/*!*********************************************************!*\
  !*** ./src/app/image-selector/image-selector.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSelectorModule": () => (/* binding */ ImageSelectorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _image_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-selector.component */ 73537);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ImageSelectorModule = class ImageSelectorModule {};
ImageSelectorModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  providers: [],
  imports: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOptionModule],
  declarations: [_image_selector_component__WEBPACK_IMPORTED_MODULE_0__.ImageSelectorComponent],
  // , OfficeTourComponent
  exports: [_image_selector_component__WEBPACK_IMPORTED_MODULE_0__.ImageSelectorComponent]
})], ImageSelectorModule);


/***/ }),

/***/ 10179:
/*!************************************************!*\
  !*** ./src/app/location/location.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationComponent": () => (/* binding */ LocationComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.component.html?ngResource */ 97642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.service */ 27501);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let LocationComponent = (_class = class LocationComponent {
  constructor(_siteContextProviderService, _locationService, _copyDataToClipboardService, _showHideContentService, _snackBarService, _imageManagerCopyToLocalDirService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_locationService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContentService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_imageManagerCopyToLocalDirService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'location');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "locInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedSliderImage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nbsp", '\u0026nbsp;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lCurly", '&#123;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rCurly", '&#125;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showLocationInst", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "noImagesMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageDirectory", "uploads/images");
    this._siteContextProviderService = _siteContextProviderService;
    this._locationService = _locationService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._showHideContentService = _showHideContentService;
    this._snackBarService = _snackBarService;
    this._imageManagerCopyToLocalDirService = _imageManagerCopyToLocalDirService;
  }
  ngOnInit() {
    this.getSiteContext();
    this._siteContextProviderService.getCurrentContext();
    this.getLocations();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(res => {
      this.siteContext = res;
      this.getLocations(); // data
    }, error => console.log(error));
  }
  /**
   * data
   */
  getLocations() {
    this._locationService.getLocations().subscribe({
      next: locInterface => {
        this.locInterface = locInterface;
      }
    });
  }
  saveLocations(locInterface) {
    let siteContext = this.siteContext.account;
    let locations = {
      standardWidth: locInterface.standardWidth,
      standardHeight: locInterface.standardHeight,
      account: siteContext,
      locations: locInterface.locations
    };
    this._locationService.sendLocations(locations).subscribe();
    this._snackBarService.openSnackBar('Your location data has been saved!', '');
  }
  /**
   *
   * @param e
   */
  selectedImageChanged(e) {
    if (!this.siteContext) {
      return;
    }
    if (e.value) {
      this.selectedSliderImage = `../${this.siteContext.account}/assets/${this.imageDirectory}/${e.value}`;
      this._snackBarService.openSnackBar('You have updated location image!', '');
    } else {
      this.selectedSliderImage = null;
      // this._snackBarService.openSnackBar('Add ' + this.imageDirectory + ' images to assets/images/' + this.imageDirectory, '');
    }
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.locInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.moveItemInArray)(this.locInterface.locations, event.previousIndex, event.currentIndex);
  }
  addLocation() {
    this.locInterface?.locations.push({
      notes: '',
      addressLineOne: '',
      addressLineTwo: '',
      doctorOne: '',
      doctorThree: '',
      doctorTwo: '',
      email: '',
      emailText: '',
      fax: '',
      googleEmbedCode: '',
      googleShareLink: '',
      officeHours: '',
      image: {},
      imageAlt: '',
      imageClass: '',
      practiceName: '',
      telephone: '',
      days: {
        sunday: '',
        monday: '',
        tuesday: '',
        wednesday: '',
        thursday: '',
        friday: '',
        saturday: ''
      }
    });
  }
  removeLocation(index) {
    this.locInterface?.locations.splice(index, 1);
  }
  /**
   * Show hide content areas within forms
   * @param item
   * Utilities Module
   */
  showHide(item) {
    this._showHideContentService.showHideContent(item);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  copyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  copyThisHTMLToClipboard(x) {
    this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
  }
  copyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_2__.SiteContextProviderService
}, {
  type: _location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__.ShowHideContentService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService
}, {
  type: _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_7__.ImageManagerCopyToLocalDirService
}]), _class);
LocationComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'dev-location',
  template: _location_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], LocationComponent);


/***/ }),

/***/ 97718:
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationModule": () => (/* binding */ LocationModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.component */ 10179);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location.service */ 27501);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/if-file-exists.service */ 61782);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-selector/image-selector.module */ 81201);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























let LocationModule = class LocationModule {};
LocationModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  providers: [_location_service__WEBPACK_IMPORTED_MODULE_4__.LocationService, _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__.IfFileExistsService, _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_8__.ImageManagerCopyToLocalDirService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_26__.CdkAccordionModule, _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_10__.ImageSelectorModule],
  declarations: [_location_component__WEBPACK_IMPORTED_MODULE_3__.LocationComponent],
  exports: [_location_component__WEBPACK_IMPORTED_MODULE_3__.LocationComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA]
})], LocationModule);


/***/ }),

/***/ 27501:
/*!**********************************************!*\
  !*** ./src/app/location/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let LocationService = (_class = class LocationService {
  constructor(_httpClient, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    this._httpClient = _httpClient;
    this._siteContextProviderService = _siteContextProviderService;
  }
  /**
   * JSON data
   */
  getLocations() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
        const path = `../../${siteContext.account}/assets/includes/data/locations-data.json?v=${new Date()}`;
        return this._httpClient.get(path).subscribe(location => {
          subscriber.next(location);
        });
      });
    });
  }
  // send to endpoint
  sendLocations(locations) {
    const body = JSON.stringify(locations);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/locations-data-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}]), _class);
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], LocationService);


/***/ }),

/***/ 30761:
/*!**********************************************************!*\
  !*** ./src/app/meet-the-team/meet-the-team.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetTheTeamComponent": () => (/* binding */ MeetTheTeamComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _meet_the_team_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meet-the-team.component.html?ngResource */ 61174);
/* harmony import */ var _meet_the_team_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meet-the-team.component.css?ngResource */ 51612);
/* harmony import */ var _meet_the_team_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_meet_the_team_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _meet_the_team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meet-the-team.service */ 31854);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/if-file-exists.service */ 61782);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);
/* harmony import */ var _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/get-local-files.service */ 83101);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let MeetTheTeamComponent = (_class = class MeetTheTeamComponent {
  constructor(_meetTheTeamService, _siteContextProviderService, _copyDataToClipboardService, _imageManagerCopyToLocalDirService, _showHideContent, _listLocalFiles, _getLocalImagesService, _fb, _snackBarService, _getLocalFilesService, _compiler) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_meetTheTeamService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_imageManagerCopyToLocalDirService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContent", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_listLocalFiles", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_getLocalImagesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_getLocalFilesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_compiler", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", "Meet the Team");
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "MTTInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "noImagesMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedSliderImage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "local_images", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageDirectory", 'uploads/images');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showOfficeTourInst", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localMeetTheTeamImages", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image", void 0);
    this._meetTheTeamService = _meetTheTeamService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._imageManagerCopyToLocalDirService = _imageManagerCopyToLocalDirService;
    this._showHideContent = _showHideContent;
    this._listLocalFiles = _listLocalFiles;
    this._getLocalImagesService = _getLocalImagesService;
    this._fb = _fb;
    this._snackBarService = _snackBarService;
    this._getLocalFilesService = _getLocalFilesService;
    this._compiler = _compiler;
  }
  /**
   *
   * @type {{value: string; display: string}[]}
   */
  ngOnInit() {
    this.getSiteContext();
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.MTTInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__.moveItemInArray)(this.MTTInterface.members, event.previousIndex, event.currentIndex);
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(res => {
      this.siteContext = res;
      this.getMeetTheTeamMembers(); // data
      this.getAccountImageFiles(); // images
      this.verifySiteContext(this.siteContext.account);
    }, error => console.log(error));
  }
  /**
   * Verify account name has been selected
   * @param siteContext.account
   */
  verifySiteContext(siteContext) {
    if (!siteContext || siteContext == '') {
      this._snackBarService.openSnackBar('Please select an account name!', '');
    }
  }
  /**
   * Get account image files from assets/uploads/images
   * JSON data
   */
  getMeetTheTeamMembers() {
    this._meetTheTeamService.getMeetTheTeamMembers().subscribe(MTTInterface => {
      this.MTTInterface = MTTInterface;
      if (MTTInterface) {} else {
        this.noImagesMessage = 'No images available';
      }
    }, error => {
      console.log(error.message);
    });
  }
  /**
   * JSON data
   * @param MTTInterface
   */
  saveMeetTheTeamMembers(MTTInterface) {
    let siteContext = this.siteContext.account;
    let acctMembers = {
      account: siteContext,
      members: MTTInterface.members
    };
    this._meetTheTeamService.sendTheTeamMembers(acctMembers).subscribe();
    this._snackBarService.openSnackBar('Your \'meet the team\' data has been saved!', '');
  }
  /**
   * Get local office tour images - not data
   */
  getAccountImageFiles() {
    if (!this.siteContext) {
      return;
    }
    this._getLocalFilesService.listLocalFiles(this.siteContext.account, this.imageDirectory).subscribe(files => {
      this.localMeetTheTeamImages = files.filter(f => f.mime && f.mime.startsWith('image/'));
      if (!this.localMeetTheTeamImages) {
        this._snackBarService.openSnackBar('Add ' + this.imageDirectory + ' images to assets/images/' + this.imageDirectory, '');
      }
    }, error => console.log(error));
  }
  /**
   * Update image sizes on change
   * @param image
   */
  updateSize(image) {
    let imageInfo = this.localMeetTheTeamImages.find(i => i.path == image.image);
    if (imageInfo) {
      image.width = imageInfo.width;
      image.height = imageInfo.height;
    }
  }
  /**
   * Populate form field control name onInit
   * @param $event
   */
  sliderImagesChanged(e) {
    if (!this.siteContext) {
      return;
    }
    if (e.value) {
      this.selectedSliderImage = `../${this.siteContext.account}/assets/${this.imageDirectory}/${e.value}`;
      this._snackBarService.openSnackBar('You have updated meet the team image!', '');
    } else {
      this.selectedSliderImage = null;
    }
  }
  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * @param form
   */
  addMember() {
    this.MTTInterface?.members.push({
      name: '',
      position: '',
      bio: '',
      image: {},
      imageAlt: '',
      imageClass: ''
    });
  }
  removeMember(index) {
    this.MTTInterface?.members.splice(index, 1);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  copyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  copyThisHTMLToClipboard(x) {
    this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
  }
  copyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
  /**
   * Show hide content areas within forms
   * @param item
   */
  showHide(item) {
    this._showHideContent.showHideContent(item);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _meet_the_team_service__WEBPACK_IMPORTED_MODULE_3__.MeetTheTeamService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_10__.ImageManagerCopyToLocalDirService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__.ShowHideContentService
}, {
  type: _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__.IfFileExistsService
}, {
  type: _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_8__.GetLocalImagesService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__.SnackbarService
}, {
  type: _services_get_local_files_service__WEBPACK_IMPORTED_MODULE_11__.GetLocalFilesService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Compiler
}]), _class);
MeetTheTeamComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'dev-meet-the-team',
  template: _meet_the_team_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_meet_the_team_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MeetTheTeamComponent);


/***/ }),

/***/ 51060:
/*!*******************************************************!*\
  !*** ./src/app/meet-the-team/meet-the-team.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetTheTeamModule": () => (/* binding */ MeetTheTeamModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _meet_the_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meet-the-team.component */ 30761);
/* harmony import */ var _meet_the_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meet-the-team.service */ 31854);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/if-file-exists.service */ 61782);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../image-selector/image-selector.module */ 81201);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























let MeetTheTeamModule = class MeetTheTeamModule {};
MeetTheTeamModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
  providers: [_meet_the_team_service__WEBPACK_IMPORTED_MODULE_4__.MeetTheTeamService, _services_if_file_exists_service__WEBPACK_IMPORTED_MODULE_7__.IfFileExistsService, _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_8__.GetLocalImagesService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_9__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_25__.CdkAccordionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule, _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_10__.ImageSelectorModule],
  declarations: [_meet_the_team_component__WEBPACK_IMPORTED_MODULE_3__.MeetTheTeamComponent],
  exports: [_meet_the_team_component__WEBPACK_IMPORTED_MODULE_3__.MeetTheTeamComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_11__.CUSTOM_ELEMENTS_SCHEMA]
})], MeetTheTeamModule);


/***/ }),

/***/ 31854:
/*!********************************************************!*\
  !*** ./src/app/meet-the-team/meet-the-team.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeetTheTeamService": () => (/* binding */ MeetTheTeamService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let MeetTheTeamService = (_class = class MeetTheTeamService {
  constructor(_httpClient, _siteContextProviderService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    this._httpClient = _httpClient;
    this._siteContextProviderService = _siteContextProviderService;
  }
  /**
   * JSON data
   */
  getMeetTheTeamMembers() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
        const path = `../../${siteContext.account}/assets/includes/data/meet-the-team-data.json?v=${new Date()}`;
        return this._httpClient.get(path).subscribe(meetTheTeam => {
          subscriber.next(meetTheTeam);
        });
      });
    });
  }
  // send to endpoint
  sendTheTeamMembers(data) {
    console.log(data);
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers.append('Content-Type', 'mime');
    return this._httpClient.post('/dashboard/endpoints/meet-the-team-data-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}]), _class);
MeetTheTeamService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], MeetTheTeamService);


/***/ }),

/***/ 91049:
/*!******************************************************!*\
  !*** ./src/app/office-tour/office-tour.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficeTourComponent": () => (/* binding */ OfficeTourComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _office_tour_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./office-tour.component.html?ngResource */ 87585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _office_tour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./office-tour.service */ 55855);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let OfficeTourComponent = (_class = class OfficeTourComponent {
  ngAfterViewInit() {}
  ngOnInit() {
    this.getOfficeTourImages();
    this.getSiteContext();
  }
  constructor(_fb, _officeTourService, _siteContextProviderService, _copyDataToClipboardService, _showHideContentService, _snackBarService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_officeTourService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContentService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", 'Office Tour');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "officeTourInst", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "OTInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nbsp", '\u0026nbsp;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "lCurly", '&#123;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "rCurly", '&#125;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageDirectory", 'images/office-tour');
    this._fb = _fb;
    this._officeTourService = _officeTourService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._showHideContentService = _showHideContentService;
    this._snackBarService = _snackBarService;
  }
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(res => {
      this.siteContext = res;
      this.getOfficeTourImages(); // data
      this.verifySiteContext(this.siteContext.account);
    }, error => console.log(error));
  }
  /**
   * Verify account name has been selected
   * @param siteContext.account
   */
  verifySiteContext(siteContext) {
    if (!siteContext || siteContext == '') {
      this._snackBarService.openSnackBar('Please select an account name!', '');
    }
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    if (!this.OTInterface) {
      return;
    }
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.moveItemInArray)(this.OTInterface.images, event.previousIndex, event.currentIndex);
  }
  /**
   * Get office tour data
   */
  getOfficeTourImages() {
    this._officeTourService.getOfficeImages().subscribe({
      next: OTInterface => {
        this.OTInterface = OTInterface; // data not images
      }
    });
  }
  /**
   * JSON data
   * @param MTTInterface
   */
  saveOfficeTourImages(OTInterface) {
    let siteContext = this.siteContext.account;
    let OTImages = {
      account: siteContext,
      images: this.OTInterface.images
    };
    this._officeTourService.sendOfficeTourImage(OTImages).subscribe();
    this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
  }
  addImage() {
    this.OTInterface?.images.push({
      path: null,
      imageAlt: '',
      altCaption: ''
    });
  }
  removeImage(index) {
    this.OTInterface?.images.splice(index, 1);
  }
  /**
   * Show hide content areas within forms
   * @param item
   * Utilities Module
   */
  showHide(item) {
    this._showHideContentService.showHideContent(item);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  copyHTMLToClipboard() {
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  /**
   * Copy specific HTML/Css markup to clipboard
   * @param x
   */
  copyThisHTMLToClipboard(x) {
    this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
  }
  copyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _office_tour_service__WEBPACK_IMPORTED_MODULE_3__.OfficeTourService
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_6__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_4__.CopyDataToClipboardService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_5__.ShowHideContentService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService
}]), _class);
OfficeTourComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'office-tour',
  template: _office_tour_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], OfficeTourComponent);


/***/ }),

/***/ 66080:
/*!***************************************************!*\
  !*** ./src/app/office-tour/office-tour.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficeTourModule": () => (/* binding */ OfficeTourModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _office_tour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./office-tour.component */ 91049);
/* harmony import */ var _office_tour_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./office-tour.service */ 55855);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image-selector/image-selector.module */ 81201);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























let OfficeTourModule = class OfficeTourModule {};
OfficeTourModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  providers: [_office_tour_service__WEBPACK_IMPORTED_MODULE_4__.OfficeTourService, _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_7__.GetLocalImagesService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOptionModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__.DragDropModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_24__.CdkAccordionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule, _image_selector_image_selector_module__WEBPACK_IMPORTED_MODULE_9__.ImageSelectorModule],
  declarations: [_office_tour_component__WEBPACK_IMPORTED_MODULE_3__.OfficeTourComponent],
  exports: [_office_tour_component__WEBPACK_IMPORTED_MODULE_3__.OfficeTourComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.CUSTOM_ELEMENTS_SCHEMA]
})], OfficeTourModule);


/***/ }),

/***/ 55855:
/*!****************************************************!*\
  !*** ./src/app/office-tour/office-tour.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficeTourService": () => (/* binding */ OfficeTourService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let OfficeTourService = (_class = class OfficeTourService {
  constructor(_siteContextProviderService, _httpClient) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    this._siteContextProviderService = _siteContextProviderService;
    this._httpClient = _httpClient;
  }
  getOfficeImages() {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
      this._siteContextProviderService.getCurrentContext().subscribe(siteContext => {
        const path = `../../${siteContext.account}/assets/includes/data/office-tour-data.json?v=${new Date()}`;
        return this._httpClient.get(path).subscribe(officeTour => {
          subscriber.next(officeTour);
        });
      });
    });
  }
  // send to endpoint
  sendOfficeTourImage(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/office-tour-data-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_1__.SiteContextProviderService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
}]), _class);
OfficeTourService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], OfficeTourService);


/***/ }),

/***/ 37664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _pages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component.html?ngResource */ 80599);
/* harmony import */ var _pages_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component.css?ngResource */ 2603);
/* harmony import */ var _pages_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let PagesComponent = (_class = class PagesComponent {
  constructor(_siteContextProviderService, _getLocalImagesService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_getLocalImagesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "local_images", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "noImagesMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "directory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slider_images", void 0);
    this._siteContextProviderService = _siteContextProviderService;
    this._getLocalImagesService = _getLocalImagesService;
  }
  ngOnInit() {
    this.onGetSiteContext();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.sitecontext = data;
      this.getLocalFiles();
      this.getLocalSliderFiles();
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get directory pertinent images files. ie: before and after, office-tour
   */
  getLocalSliderFiles() {
    this._getLocalImagesService.listLocalSliderImages(this.sitecontext.account, 'before-after-cycle').subscribe(localImageData => {
      this.slider_images = localImageData;
    }, error => console.log(error));
  }
  /**
   * Get account image files from assets/uploads/images/
   *  Not being used in this component
   */
  getLocalFiles() {
    this._getLocalImagesService.listLocalAccountImages(this.sitecontext.account).subscribe(localImageData => {
      this.local_images = localImageData;
      if (localImageData) {} else {
        this.noImagesMessage = 'No images available';
      }
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_3__.GetLocalImagesService
}]), _class);
PagesComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'dev-pages',
  template: _pages_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_pages_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PagesComponent);


/***/ }),

/***/ 18950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 37664);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pages_pages_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/pages.routes */ 50974);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _patient_forms_patient_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patient-forms/patient-forms.component */ 99157);
/* harmony import */ var _before_and_after_before_and_after_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../before-and-after/before-and-after.service */ 63764);
/* harmony import */ var _office_tour_office_tour_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../office-tour/office-tour.service */ 55855);
/* harmony import */ var _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/get-local-images.service */ 95545);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _meet_the_team_meet_the_team_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../meet-the-team/meet-the-team.service */ 31854);
/* harmony import */ var _patient_forms_patient_forms_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../patient-forms/patient-forms.service */ 1373);
/* harmony import */ var _location_location_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../location/location.service */ 27501);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _pipes_remove_extension_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pipes/remove-extension.pipe */ 54868);
/* harmony import */ var _before_and_after_before_and_after_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../before-and-after/before-and-after.module */ 49893);
/* harmony import */ var _office_tour_office_tour_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../office-tour/office-tour.module */ 66080);
/* harmony import */ var _meet_the_team_meet_the_team_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../meet-the-team/meet-the-team.module */ 51060);
/* harmony import */ var _location_location_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../location/location.module */ 97718);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































let PagesModule = class PagesModule {};
PagesModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.NgModule)({
  providers: [_before_and_after_before_and_after_service__WEBPACK_IMPORTED_MODULE_8__.BeforeAndAfterService, _office_tour_office_tour_service__WEBPACK_IMPORTED_MODULE_9__.OfficeTourService, _meet_the_team_meet_the_team_service__WEBPACK_IMPORTED_MODULE_12__.MeetTheTeamService, _patient_forms_patient_forms_service__WEBPACK_IMPORTED_MODULE_13__.PatientFormsService, _services_get_local_images_service__WEBPACK_IMPORTED_MODULE_10__.GetLocalImagesService, _location_location_service__WEBPACK_IMPORTED_MODULE_14__.LocationService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_11__.SnackbarService, _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_15__.ImageManagerCopyToLocalDirService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_1__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_3__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_4__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_5__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forChild(_pages_pages_routes__WEBPACK_IMPORTED_MODULE_6__.ROUTES), _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOptionModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelectModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__.MatExpansionModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_33__.CdkAccordionModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__.MatSnackBarModule,
  // AddSaveButtonsModule,
  _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCardModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_36__.DragDropModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__.MatCheckboxModule, _before_and_after_before_and_after_module__WEBPACK_IMPORTED_MODULE_17__.BeforeAndAfterModule, _office_tour_office_tour_module__WEBPACK_IMPORTED_MODULE_18__.OfficeTourModule, _meet_the_team_meet_the_team_module__WEBPACK_IMPORTED_MODULE_19__.MeetTheTeamModule, _location_location_module__WEBPACK_IMPORTED_MODULE_20__.LocationModule],
  declarations: [_pipes_remove_extension_pipe__WEBPACK_IMPORTED_MODULE_16__.RemoveExtensionPipe, _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent, _patient_forms_patient_forms_component__WEBPACK_IMPORTED_MODULE_7__.PatientFormsComponent]
})], PagesModule);


/***/ }),

/***/ 50974:
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.component */ 37664);

const ROUTES = [{
  path: '',
  component: _pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent
}];

/***/ }),

/***/ 99157:
/*!**********************************************************!*\
  !*** ./src/app/patient-forms/patient-forms.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientFormsComponent": () => (/* binding */ PatientFormsComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _patient_forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patient-forms.component.html?ngResource */ 78095);
/* harmony import */ var _patient_forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-forms.component.scss?ngResource */ 21526);
/* harmony import */ var _patient_forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_patient_forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _patient_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-forms.service */ 1373);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/copy-to-clipboard.service */ 26011);
/* harmony import */ var _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/custom-validators.service */ 46077);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let PatientFormsComponent = (_class = class PatientFormsComponent {
  constructor(_patientFormsService, _siteContextProviderService, _copyDataToClipboardService, _customValidatorService, _showHideContent, _snackBarService, _fb, _compiler) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_patientFormsService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_copyDataToClipboardService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_customValidatorService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContent", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_fb", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_compiler", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientFormsForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientFormsDataArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteData", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "name", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "isLoading", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formValue", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "nbsp", '\u0026nbsp;');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pedo", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "officeCategory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientForm", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "url", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientFormText", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "headerName", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientFormExtension", [{
      value: null,
      display: 'Select Standard Form'
    }, {
      value: '.pdf',
      display: '.pdf'
    }, {
      value: '.doc',
      display: '.doc'
    }, {
      value: '.docx',
      display: '.docx'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formCategory", [{
      value: null,
      display: 'Select Office Category'
    }, {
      value: 'pediatric',
      display: 'Pediatric'
    }, {
      value: 'ortho-dental',
      display: 'Ortho | Dental'
    }]);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "patientFormType", [{
      id: 0,
      value: 'create new',
      display: 'Create New',
      name: 'create new',
      url: ''
    }, {
      id: 1,
      value: 'Child New Patient PDF',
      display: 'Child New Patient PDF',
      name: 'Child New Patient PDF',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child.pdf'
    }, {
      id: 2,
      value: 'Child New Patient DOC',
      display: 'Child New Patient DOC',
      name: 'Child New Patient DOC',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child.doc'
    }, {
      id: 3,
      value: 'Adult New Patient PDF',
      display: 'Adult New Patient PDF',
      name: 'Adult New Patient PDF',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-adult.pdf'
    }, {
      id: 4,
      value: 'Adult New Patient DOC',
      display: 'Adult New Patient DOC',
      name: 'Adult New Patient DOC',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-adult.doc'
    }, {
      id: 5,
      value: 'Child and Adult PDF',
      display: 'Child and Adult PDF',
      name: 'Child and Adult PDF',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child-adult.pdf'
    }, {
      id: 6,
      value: 'Child and Adult DOC',
      display: 'Child and Adult DOC',
      name: 'Child and Adult DOC',
      url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child-adult.doc'
    }]);
    this._patientFormsService = _patientFormsService;
    this._siteContextProviderService = _siteContextProviderService;
    this._copyDataToClipboardService = _copyDataToClipboardService;
    this._customValidatorService = _customValidatorService;
    this._showHideContent = _showHideContent;
    this._snackBarService = _snackBarService;
    this._fb = _fb;
    this._compiler = _compiler;
    this.patientFormsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      items: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray([]),
      officeCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('')
    });
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
   * Update url to corresponding object value
   * @param name
   * @param i
   */
  updateUrl(name, i) {
    let obj = this.patientFormType.find(x => x.name === name);
    this.patientFormsForm.controls['items'].controls[i].get('name').setValue(obj.name);
    this.patientFormsForm.controls['items'].controls[i].get('url').setValue(obj.url);
  }
  /**
   * Update name values when dropping and sorting
   * mat-expansion-panel drag and drop method
   * @param event
   */
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.moveItemInArray)(this.patientFormsForm.controls['items'].controls, event.previousIndex, event.currentIndex);
    this.patientFormsForm.controls['items'].updateValueAndValidity();
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.sitecontext = data;
      // Send account name to onGetLocalFormData
      this.onGetFormData(data.account);
      // this.onGetProductType(data.account);
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get local product type from /account/www/assets/includes/data/data.json
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
  onGetFormData(account) {
    this._patientFormsService.getFormData(account).subscribe(res => {
      var data = res;
      this._compiler.clearCache();
      console.log('Patient Forms data retrieved: ' + new Date().toUTCString());
      this.patientFormsDataArray = data.patientFormsData;
      this.patientFormsForm = this._fb.group({
        officeCategory: [data.officeCategory],
        items: this._fb.array([])
      });
      var patientFormsForm = this.patientFormsForm;
      var component = this;
      this.deleteConfirmationArray = [];
      // Create an array from account form-data.json
      data.patientFormsData.forEach(function (item) {
        var control = patientFormsForm.controls['items'];
        control.push(component._fb.group({
          name: [item.name],
          ext: [item.ext],
          url: [item.url],
          patientFormText: [item.patientFormText]
        }));
        // this._customValidatorService.verifyExtensionExists
        component.deleteConfirmationArray.push(false);
      });
    }, error => console.log(error));
    return this.patientFormsDataArray;
  }
  /**
   * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
   * @param form
   */
  onSetPatientFormData(form) {
    var patientformsdata = {
      officeCategory: form.value.officeCategory,
      account: this.sitecontext.account,
      patientFormsData: form.value.items
    };
    // Get new values
    this._patientFormsService.setFormData(patientformsdata).subscribe(data => {
      this._compiler.clearCache();
      this.patientFormsForm.controls['items'].updateValueAndValidity();
      this._snackBarService.openSnackBar('Your patient forms data has been saved!', '');
      console.log('Patient Form data updated: ' + new Date().toUTCString());
    }, error => console.log(error));
  }
  /**
   * Create Form Group
   * @returns {FormGroup}
   *
   */
  initItem() {
    return this._fb.group({
      name: [''],
      url: [''],
      ext: [''],
      patientFormText: ['']
    });
  }
  /**
   * Add item to the list
   */
  addItem(e) {
    const control = this.patientFormsForm.controls['items'];
    control.insert(0, this.initItem());
  }
  /* confirmDeleteMessage(i) {
       this.confirm = true;
       this.cancel = true;
       this.deleteConfirmationArray[i] = true;
   }
     /!**
    * Delete form item
    * @param i
    * @param itemVal
    * @param status
    * @returns {boolean}
    *!/
   confirmDelete(i, itemVal, status) {
       if (status === 'deleteItem') {
           this.removeItem(i, itemVal);
           this.deleteConfirmationArray[i] = false;
       } else if (status === 'cancelDeleteItem') {
           this.deleteConfirmationArray[i] = false;
           return false
       }
   }*/
  /**
   * Remove items from the list
   * @param i
   * @param itemVal
   */
  removeItem(i) {
    const control = this.patientFormsForm.controls['items'];
    control.removeAt(i);
  }
  //End delete form item
  /**
   * Show hide content areas within forms
   * @param item
   * Utilities Module
   */
  showHide(item) {
    this._showHideContent.showHideContent(item);
  }
  /**
   * Copy HTML/CSS markup to clipboard
   */
  onCopyHTMLToClipboard() {
    console.log('FORED CTCLOP');
    this._copyDataToClipboardService.copyHTMLDataToClipboard();
  }
  onCopyCSSToClipboard() {
    this._copyDataToClipboardService.copyCSSDataToClipboard();
  }
  onSortSuccessful(e) {
    this.patientFormsForm.controls['items'].updateValueAndValidity();
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _patient_forms_service__WEBPACK_IMPORTED_MODULE_3__.PatientFormsService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _services_copy_to_clipboard_service__WEBPACK_IMPORTED_MODULE_5__.CopyDataToClipboardService
}, {
  type: _services_custom_validators_service__WEBPACK_IMPORTED_MODULE_6__.CustomValidatorsService
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_7__.ShowHideContentService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Compiler
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  patientForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Input
  }]
}), _class);
PatientFormsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'dev-patient-forms',
  template: _patient_forms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_patient_forms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], PatientFormsComponent);


/***/ }),

/***/ 1373:
/*!********************************************************!*\
  !*** ./src/app/patient-forms/patient-forms.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PatientFormsService": () => (/* binding */ PatientFormsService)
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


let PatientFormsService = (_class = class PatientFormsService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    this._http = _http;
  }
  /**
   *
   * @param account
   * @returns {Observable<R>}
   */
  getFormData(account) {
    return this._http.get('../../' + account + '/assets/includes/data/patient-forms-data.json?v=' + new Date());
  }
  /**
   *
   * @param data
   * @returns {Observable<Response>}
   */
  setFormData(data) {
    const body = JSON.stringify(data);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/patient-forms-data-endpoint.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
PatientFormsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], PatientFormsService);


/***/ }),

/***/ 54868:
/*!************************************************!*\
  !*** ./src/app/pipes/remove-extension.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveExtensionPipe": () => (/* binding */ RemoveExtensionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RemoveExtensionPipe = class RemoveExtensionPipe {
  transform(value, args) {
    if (value) {
      return value.split('.').slice(0, -1).join('.');
    }
  }
};
RemoveExtensionPipe = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'removeExtension'
})], RemoveExtensionPipe);


/***/ }),

/***/ 95545:
/*!******************************************************!*\
  !*** ./src/app/services/get-local-images.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetLocalImagesService": () => (/* binding */ GetLocalImagesService)
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


let GetLocalImagesService = (_class = class GetLocalImagesService {
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
    const body = JSON.stringify(account);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-image-manager-local-files.php', body, {
      headers: headers
    });
  }
  /**
   * Get current contents of /account-name/www/assets/images/<image directory>/*
   * @param account
   * @param directory
   */
  listLocalSliderImages(account, directory) {
    const body = JSON.stringify([account, directory]);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-slider-local-files.php', body, {
      headers: headers
    });
  }
  /**
   * @param account
   * @param fileToDelete
   * @returns {Observable<Response>}
   */
  deleteImageFromLocalDir(account, fileToDelete) {
    const body = JSON.stringify([account, fileToDelete]);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
GetLocalImagesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], GetLocalImagesService);


/***/ }),

/***/ 61782:
/*!****************************************************!*\
  !*** ./src/app/services/if-file-exists.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IfFileExistsService": () => (/* binding */ IfFileExistsService)
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


let IfFileExistsService = (_class = class IfFileExistsService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    this._http = _http;
  }
  /**
   * @param account
   * Currently used by location page, meet the team
   * Get current contents of /account-name/www/assets/uploads/images
   * @returns {Observable<Response>}
   */
  listLocalAccountImages(account) {
    const body = JSON.stringify(account);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/get-image-manager-local-files.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
IfFileExistsService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], IfFileExistsService);


/***/ }),

/***/ 73731:
/*!************************************************************************!*\
  !*** ./src/app/image-selector/image-selector.component.css?ngResource ***!
  \************************************************************************/
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

/***/ 51612:
/*!**********************************************************************!*\
  !*** ./src/app/meet-the-team/meet-the-team.component.css?ngResource ***!
  \**********************************************************************/
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

/***/ 2603:
/*!******************************************************!*\
  !*** ./src/app/pages/pages.component.css?ngResource ***!
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

/***/ 21526:
/*!***********************************************************************!*\
  !*** ./src/app/patient-forms/patient-forms.component.scss?ngResource ***!
  \***********************************************************************/
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

/***/ 34773:
/*!*****************************************************************************!*\
  !*** ./src/app/before-and-after/before-and-after.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"before-after-container\" *ngIf=\"BAInterface\">\n\n    <h2>{{title}}</h2>\n\n    <div class=\"show-hide\">\n\n        <button mat-raised-button class=\"instructions-button\"\n                (click)=\"showHide(showBAInst = !showBAInst);\">Instructions\n        </button>\n\n        <div [ngClass]=\"{'hide': !showBAInst }\">\n\n            <p class=\"text-success\">Place before and after images in the '/assets/images/{{imageDirectory}}'\n                directory.</p>\n\n            <p>Complete the form and \"Grab your HTML.\"\n                <br/><span class=\"sesame-blue\">Blue placeholder text</span> indicates a required\n                field.<br/>\n                If you are using the .jpg extension for your images just add the number of slides you\n                are using. </p>\n        </div>\n    </div>\n\n    <!-- add item -->\n    <button type=\"button\" mat-raised-button (click)=\"addImage()\">\n        <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon> Add\n    </button>\n\n    <h4>Selected Images</h4>\n    <mat-accordion multi=\"false\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\" id=\"office-tour-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n            <div *ngFor=\"let image of BAInterface.images; let i = index; let even = even; let odd = odd\" cdkDrag>\n                <mat-expansion-panel hideToggle>\n\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n\n                            <!-- add delete buttons-->\n                            <div class=\"add-button\">\n                      <span class=\" text-info\"\n                            (click)=\"addImage(); $event.stopPropagation()\">\n                            <mat-icon>add</mat-icon>\n                     </span>\n                            </div>\n\n                            <div class=\"delete-button\">\n                     <span class=\" text-danger\"\n                           (click)=\"removeImage(i); $event.stopPropagation()\">\n                        <mat-icon>delete</mat-icon>\n                    </span>\n                            </div>\n\n                            <div class=\"clear\"></div>\n                            <span class=\"sesame-blue\" *ngIf=\"image.path\">{{ image.path }}</span> &nbsp;&nbsp;\n                            <span class=\"sesame-green\" *ngIf=\"!image.path\">Select Image</span> &nbsp;&nbsp;\n                            <span class=\"sesame-green\">{{image.imageAlt}}</span>\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <br/>\n\n                    <div class=\"float-start\" style=\"width: 48%; margin-right: 2%;\">\n                        <br/>\n\n                        <image-selector caption=\"Slider Image\" [image]=\"image\" directory=\"{{imageDirectory}}\"></image-selector>\n\n                    </div>\n\n                    <br/>\n                    <div>\n                        <img class=\"float-end preview-image\"\n                             ngDefaultControl\n                             src=\"../{{siteContext.account}}/assets/{{imageDirectory}}/{{image.path}}\"\n                             alt=\"\"\n                             *ngIf=\"image.path\"\n                        />\n\n                    </div>\n\n                    <mat-form-field>\n                        <mat-label>Add a caption <span class=\"label-instructions\">(optional - before and after description)</span>\n                        </mat-label>\n                        <input matInput\n                               type=\"text\"\n                               [(ngModel)]=\"image.imageAlt\"\n                               name=\"imageAlt\"\n                               class=\"float-end\"\n                               placeholder=\"Add a caption\">\n                    </mat-form-field>\n\n                    <div class=\"clear\"></div>\n\n                </mat-expansion-panel>\n            </div>\n        </div>\n\n        <div>\n            <button mat-raised-button\n                    class=\"save-button\"\n                    (click)=\"saveBeforeAfterImages(BAInterface)\"\n                    type=\"button\">\n                <mat-icon>save</mat-icon>\n                Save\n            </button>\n\n        </div>\n    </mat-accordion><!-- end droplist -->\n\n</div>\n\n<br/>\n\n<p class=\"copy sesame-blue\" (click)=\"copyThisHTMLToClipboard('#copyBeforeAfter');\"\n   data-target=\"#copyBeforeAfter\">\n    <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n    Grab your HTML\n</p>\n\n<code id=\"copyBeforeAfter\" *ngIf=\"BAInterface\">\n\n    &lt;p&gt;Incredible results and inspiring journeys; see some of our patients&#39; before and after photos next time\n    you visit our practice.&lt;/p&gt;<br/><br/>\n\n    &lt;div class=\"mediaslider\"&gt;<br/>\n\n      <span>&lt;div class=\"cycle-slideshow\" <br/>\n      <span>data-cycle-timeout=\"9000\"<br></span>\n      <span>data-cycle-loader=\"wait\"<br></span>\n      <span>data-cycle-auto-height=\"calc\"<br></span>\n      <span>data-cycle-center-horz=\"true\"<br></span>\n      <span>data-cycle-center-vert=\"true\"<br></span>\n      <span>data-cycle-caption=\"#caption\"<br></span>\n      <span>data-cycle-caption-template=\"{{lCurly}}{{lCurly}}cycleTitle{{rCurly}}{{rCurly}}\"</span>\n          &gt; </span>\n\n    <br/>\n\n    <span>&lt;button aria-label=\"previous slide\" class=\"slidecontrol cycle-prev\"&gt;&lt;span class=\"fa fa-chevron-left\"  aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&nbsp;&lt;/span&gt;&lt;/button&gt;</span><br/><br/>\n    <span>&lt;button aria-label=\"next slide\" class=\"slidecontrol cycle-next\"&gt;&lt;span class=\"fa fa-chevron-right\"  aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&nbsp;&lt;/span&gt;&lt;/button&gt;</span><br/><br/>\n\n    <div *ngFor=\"let markup of BAInterface.images; let i = index; let last = last\">\n\n        <div class=\"bg-items\"><span><span>&lt;img src=\"/assets/images/{{imageDirectory}}/{{markup.path}}\"\n                    <span>&nbsp;alt=\"\"</span>\n                     data-cycle-title=\"{{markup.imageAlt}}\"\n                     width=\"<span *ngIf=\"markup.width\">{{markup.width}}\"</span>\n                     height=\"{{markup.height}}\" decoding=\"async\"&gt; </span></span>\n        </div>\n        <br/>\n\n    </div>\n\n    <br/>\n    <span>&lt;/div&gt;</span>&lt;!&ndash;&ndash; end before-after-cycle &ndash;&ndash;&gt;<br>\n\n    &lt;div id=\"caption\"&gt;{{nbsp}}&lt;/div&gt;\n\n    <br/> <span>&lt;/div&gt;</span>&lt;!&ndash;&ndash; end mediaslider &ndash;&ndash;&gt;\n    <br>\n</code><!-- end copy code -->\n\n\n\n";

/***/ }),

/***/ 87432:
/*!*************************************************************************!*\
  !*** ./src/app/image-selector/image-selector.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"select-image-directory\">\n    <mat-form-field>\n        <mat-label>{{caption}} <span\n                class=\"label-instructions\">/assets/{{directory}}/</span>\n        </mat-label>\n        <mat-select [(ngModel)]=\"image.path\"\n                    (selectionChange)=\"updateSize()\"\n                    name=\"image\">\n            <mat-option\n                    *ngFor=\"let file of images\"\n                    [value]=\"file.path\">{{file.path}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n</div>";

/***/ }),

/***/ 97642:
/*!*************************************************************!*\
  !*** ./src/app/location/location.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"location-container\" *ngIf=\"locInterface\">\n\n    <h2>{{title}}</h2>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-12 wow fadeIn\" data-wow-duration=\".5s\">\n\n        <!-- instructions -->\n        <div>\n\n            <button mat-raised-button class=\"instructions-button\"\n                    (click)=\"showHide(showLocationInst = !showLocationInst);\">Instructions\n            </button>\n\n            <div [ngClass]=\"{'hide': !showLocationInst }\">\n\n                <p class=\"text-success\">Store images in '/assets/uploads/images/'</p>\n                <p>\n                    Complete the form and \"Grab your HTML.\" Practice name, one doctor name, address and phone#\n                    are required.\n                    <span class=\"sesame-blue\">Blue placeholder text</span> indicates a required field.\n                </p>\n\n                <p>\n                    Space for up to 3 doctors has been made available. If you require more doctor names, you\n                    will need to\n                    add them to your HTML manually. And, style=\"width=100%\" and mobile phone formatted telephone\n                    number has been added automatically.\n                </p>\n\n                <p>\n                    The google embed code will automatically be cleaned. ie: width=\"600\", frameborder=\"0\" have\n                    been removed.\n                </p>\n\n            </div>\n\n        </div>\n\n        <!-- add item -->\n        <button type=\"button\" mat-raised-button (click)=\"addLocation()\">\n            <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon>\n            Add\n        </button>\n\n        <!-- start form  -->\n        <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n            <mat-accordion multi=\"false\">\n\n                <div *ngFor=\"let location of locInterface.locations; let i = index; let even=even; let odd=odd;\"\n                     [ngClass]=\"{ odd: odd, even: even }\" cdkDrag>\n\n                    <!-- location array -->\n                    <mat-expansion-panel hideToggle>\n                        <mat-expansion-panel-header [ngClass]=\"{ odd: odd, even: even }\">\n\n                            <!-- title -->\n                            <mat-panel-title>\n                                <!-- add delete buttons-->\n                                <div class=\"add-button\">\n                            <span class=\" text-info\"\n                                  (click)=\"addLocation(); $event.stopPropagation()\">\n                                <mat-icon>add</mat-icon>\n                            </span>\n                                </div>\n\n                                <!-- delete method -->\n                                <span class=\" text-danger\"\n                                      (click)=\"removeLocation(i)\">\n                            <mat-icon>delete</mat-icon>\n                            </span>\n                                <div class=\"clear\"></div>\n\n                                <div *ngIf=\"location.practiceName; else noname\">\n                                    <span class=\"sesame-blue\">{{location.practiceName}}</span>\n                                    &nbsp; -\n                                    <span class=\"sesame-green\">{{location.doctorOne.substring(0, 32)}}</span>&nbsp;\n                                    <span class=\"sesame-green\">{{location.doctorTwo.substring(0, 32)}}</span>&nbsp;\n                                    <span class=\"sesame-green\">{{location.doctorThree.substring(0, 32)}}</span> &nbsp;\n                                </div>\n                                <ng-template #noname>\n                            <span class=\"sesame-green\">\n                            Enter practice name or select from standard forms</span>\n                                </ng-template>\n                            </mat-panel-title>\n\n                        </mat-expansion-panel-header>\n\n                        <br>\n\n                        <!-- practice name -->\n                        <div class=\"border-sesame-green practice-name-wrap\">\n                            <h3>Practice Name</h3>\n                            <mat-form-field>\n                                <mat-label>Practice Name</mat-label>\n                                <input matInput\n                                       type=\"text\"\n                                       required\n                                       name=\"practiceName\"\n                                       [(ngModel)]=\"location.practiceName\"\n                                       placeholder=\"Practice Name\"\n                                       #practiceName>\n                            </mat-form-field>\n\n                        </div>\n\n                        <br>\n\n                        <!-- optional image  -->\n\n                        <div class=\"border-sesame-green float-end\"\n                             style=\"width: 48%;\">\n\n                            <h3>Optional Image</h3>\n                            <div>\n                                <image-selector [image]=\"location.image\" directory=\"{{ imageDirectory }}\"></image-selector>\n                            </div>\n\n                            <br>\n\n                            <!-- show image -->\n                            <div>\n                                <img style=\"text-align: center; margin: 0 auto; width: 100%;\"\n                                     class=\"preview-image\"\n                                     name=\"image\"\n                                     ngDefaultControl\n                                     src=\"../{{siteContext.account}}/assets/{{imageDirectory}}/{{location.image.path}}\"\n                                     alt=\"\"/>\n                            </div>\n\n                            <!-- addresses -->\n                            <div class=\"\">\n                                <h3>Address</h3>\n                                <mat-form-field>\n                                    <mat-label>Address line 1</mat-label>\n                                    <input matInput type=\"text\"\n                                           name=\"addressLineOne\"\n                                           [(ngModel)]=\"location.addressLineOne\"\n                                           placeholder=\"Address1\" #address1>\n                                </mat-form-field>\n\n                                <!-- address 2 -->\n                                <mat-form-field class=\" \">\n                                    <mat-label>City, ST Zip</mat-label>\n                                    <input matInput type=\"text\"\n                                           name=\"addressLineTwo\"\n                                           [(ngModel)]=\"location.addressLineTwo\"\n                                           placeholder=\"address2\" #address2>\n                                </mat-form-field>\n\n                                <!-- phone/email -->\n                                <div>\n                                    <div>\n                                        <mat-form-field>\n                                            <mat-label>Phone <span\n                                                    class=\"label-instructions\">format: (123) 456-7890</span>\n                                            </mat-label>\n                                            <input matInput\n                                                   type=\"text\"\n                                                   name=\"telephone\"\n                                                   [(ngModel)]=\"location.telephone\"\n                                                   placeholder=\"Phone\" #telephone>\n                                        </mat-form-field>\n                                    </div>\n\n                                    <div>\n                                        <mat-form-field>\n                                            <mat-label>FAX</mat-label>\n                                            <input matInput\n                                                   type=\"text\"\n                                                   name=\"fax\"\n                                                   [(ngModel)]=\"location.fax\"\n                                                   placeholder=\"FAX\" #fax>\n                                        </mat-form-field>\n\n                                        <mat-form-field>\n                                            <mat-label>Email <span\n                                                    class=\"label-instructions\">bob@boblaw.com</span>\n                                            </mat-label>\n                                            <input matInput\n                                                   type=\"text\"\n                                                   name=\"email\"\n                                                   [(ngModel)]=\"location.email\"\n                                                   placeholder=\"Email\" #email>\n                                        </mat-form-field>\n\n                                        <mat-form-field>\n                                            <mat-label>Email <span\n                                                    class=\"label-instructions\">Email link text</span>\n                                            </mat-label>\n                                            <input matInput\n                                                   type=\"text\"\n                                                   name=\"emailText\"\n                                                   [(ngModel)]=\"location.emailText\"\n                                                   placeholder=\"Email Text\" #emailText>\n                                        </mat-form-field>\n\n                                    </div>\n                                    <div class=\"clear\"></div>\n\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <!-- doctors -->\n                        <div class=\"border-sesame-green location-doctors-wrap float-start\"\n                             style=\"width: 48%;\">\n\n                            <h3>Doctors</h3>\n                            <mat-form-field>\n                                <mat-label>Doctor Name1 <span\n                                        class=\"label-instructions\">optional</span></mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"doctorOne\"\n                                       [(ngModel)]=\"location.doctorOne\"\n                                       placeholder=\"Doctor Name1\" #doctorOne>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Doctor Name2 <span\n                                        class=\"label-instructions\">optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"doctorTwo\"\n                                       [(ngModel)]=\"location.doctorTwo\"\n                                       placeholder=\"Doctor Name2\" #doctorTwo>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Doctor Name3 <span\n                                        class=\"label-instructions\">optional</span></mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"doctorThree\"\n                                       [(ngModel)]=\"location.doctorThree\"\n                                       placeholder=\"Doctor Name3\" #doctorThree>\n                            </mat-form-field>\n\n\n                            <!-- office hours -->\n                            <h3>Office Hours</h3>\n                            <mat-form-field>\n                                <mat-label>Sunday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"sunday\"\n                                       [(ngModel)]=\"location.days.sunday\"\n                                       placeholder=\"day\" #sunday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Monday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"monday\"\n                                       [(ngModel)]=\"location.days.monday\"\n                                       placeholder=\"day\" #monday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Tuesday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"tuesday\"\n                                       [(ngModel)]=\"location.days.tuesday\"\n                                       placeholder=\"day\" #tuesday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Wednesday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"wednesday\"\n                                       [(ngModel)]=\"location.days.wednesday\"\n                                       placeholder=\"day\" #wednesday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Thursday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"thursday\"\n                                       [(ngModel)]=\"location.days.thursday\"\n                                       placeholder=\"day\" #thursday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Friday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"friday\"\n                                       [(ngModel)]=\"location.days.friday\"\n                                       placeholder=\"day\" #friday>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-label>Saturday <span\n                                        class=\"label-instructions\"> optional</span>\n                                </mat-label>\n                                <input matInput type=\"text\"\n                                       name=\"saturday\"\n                                       [(ngModel)]=\"location.days.saturday\"\n                                       placeholder=\"day\" #saturday>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"clear\"></div>\n\n                        <br>\n\n\n                        <!-- google scripts -->\n                        <div class=\"google-scripts-wrap border-sesame-green\">\n                            <h3>Google Scripts</h3>\n                            <!--<mat-form-field>\n                                <mat-label>Google Share Link</mat-label>\n                                <input matInput\n                                       name=\"googleShareLink\"\n                                       [(ngModel)]=\"location.googleShareLink\"\n                                       #googleShareLink/>\n                            </mat-form-field>-->\n\n                            <!-- Google embed -->\n                            <mat-form-field>\n                                <mat-label>Google Map Embed Code</mat-label>\n                                <textarea matInput\n                                          name=\"googleEmbedCode\"\n                                          cdkTextareaAutosize\n                                          [(ngModel)]=\"location.googleEmbedCode\"\n                                          #googleEmbedCode></textarea>\n                            </mat-form-field>\n\n                        </div>\n\n                        <br>\n\n                        <!-- notes -->\n                        <div class=\"border-sesame-green notes-wrap\">\n                            <h3>Notes</h3>\n\n                            <mat-form-field>\n                        <textarea matInput\n                                  cdkTextareaAutosize\n                                  name=\"notes\"\n                                  [(ngModel)]=\"location.notes\"\n                                  #notes>{{location.notes}}</textarea>\n                            </mat-form-field>\n                        </div>\n\n                        <div class=\"clear\"></div>\n\n                    </mat-expansion-panel>\n\n                </div>\n\n                <div>\n                    <button mat-raised-button\n                            class=\"save-button\"\n                            (click)=\"saveLocations(locInterface)\"\n                            type=\"button\">\n                        <mat-icon>save</mat-icon>\n                        Save\n                    </button>\n                </div>\n\n            </mat-accordion><!-- end accordion -->\n\n        </div>\n\n    </div><!-- end drop zone -->\n\n</div><!-- end cols -->\n\n<br><br>\n\n\n<p class=\"copy sesame-blue\" (click)=\"copyHTMLToClipboard();\" data-target=\"#copy\">\n    <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n    Grab your HTML\n</p>\n\n<code id=\"copy\" *ngIf=\"locInterface\">\n\n    <div *ngFor=\"let markup of locInterface.locations; let i = index;\">\n\n        <div *ngIf=\"markup.image.path\">\n            &lt;div&gt;<span *ngIf=\"markup.image.path\">&lt;img class=\"locationimg\" src=\"/assets/uploads/images/{{markup.image.path}}\" width=\"{{markup.image.width}}\" height=\"{{markup.image.height}}\" </span>\n             &nbsp;alt=\"\"&gt;&lt;/div&gt;\n        </div>\n        <br><br>\n\n        <span *ngIf=\"markup.doctorOne\">&lt;h2&gt;{{markup.doctorOne}}<br>\n        <span *ngIf=\"markup.doctorTwo\">&lt;br /&gt;{{markup.doctorTwo}}\n            <br></span>\n        <span *ngIf=\"markup.doctorThree\">&lt;br /&gt;{{markup.doctorThree}}</span><br><span>&lt;/h2&gt;</span><br>\n  <br></span>\n\n        <span *ngIf=\"markup.practiceName\">&lt;h3&gt;{{markup.practiceName}}&lt;/h3&gt;<br></span><br>\n\n        <span *ngIf=\"markup.addressLineOne || markup.addressLineTwo || markup.telephone || markup.fax\">\n            &lt;p&gt;\n        <span *ngIf=\"markup.addressLineOne\">&lt;strong&gt;Address: &lt;/strong&gt;&lt;br /&gt;</span>\n\n        <span *ngIf=\"markup.addressLineOne\"><br></span><span *ngIf=\"markup.addressLineOne\">{{markup.addressLineOne}}&lt;br /&gt;<br></span>\n        <span *ngIf=\"markup.addressLineTwo\">{{markup.addressLineTwo}}&lt;br /&gt;<br></span>\n        <span *ngIf=\"markup.telephone\">&lt;strong&gt;Phone:&lt;/strong&gt;&nbsp;&lt;a href=\"tel:{{markup.telephone | removeParenthesis}}\n            \"&gt;{{markup.telephone}}&lt;/a&gt;</span>\n        <span *ngIf=\"markup.fax\">&lt;br /&gt;&lt;strong&gt;FAX:&lt;/strong&gt;&nbsp;{{markup.fax}}</span>&lt;/p&gt;\n        </span>\n\n        <span *ngIf=\"markup.email\">\n  <span><br>&lt;p&gt;</span>&lt;strong&gt;Email: &lt;/strong&gt;&lt;a class=\"email\" title=\"{{markup.emailText}}\" rel=\"{{markup.email | replaceEmailAt}}\n            \"&gt;{{markup.emailText}}&lt;/a&gt;&lt;/p&gt;<br></span>\n\n        <div *ngIf=\"markup.days.sunday\n        ||  markup.days.monday\n        ||  markup.days.tuesday\n        ||  markup.days.wednesday\n        ||  markup.days.thursday\n        ||  markup.days.friday\n        ||  markup.days.saturday\">\n            <br>\n            &lt;div&gt;&lt;strong class=\"office-hours\" &gt;Office Hours:&lt;/strong&gt;&lt;/div&gt;<br>\n            <br>&lt;table border=\"0\" height=\"50\" width=\"100%\" class=\"office-hours\"&gt;<br>\n            &lt;tbody&gt;\n\n        <div>\n            <span *ngIf=\"markup.days.sunday\">&lt;tr&gt;&lt;td&gt;Sunday: &lt;/td&gt;&lt;td&gt;{{markup.days.sunday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.monday\">&lt;tr&gt;&lt;td&gt;Monday: &lt;/td&gt;&lt;td&gt;{{markup.days.monday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.tuesday\">&lt;tr&gt;&lt;td&gt;Tuesday: &lt;/td&gt;&lt;td&gt;{{markup.days.tuesday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.wednesday\">&lt;tr&gt;&lt;td&gt;Wednesday: &lt;/td&gt;&lt;td&gt;{{markup.days.wednesday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.thursday\">&lt;tr&gt;&lt;td&gt;Thursday: &lt;/td&gt;&lt;td&gt;{{markup.days.thursday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.friday\">&lt;tr&gt;&lt;td&gt;Friday: &lt;/td&gt;&lt;td&gt;{{markup.days.friday}}&lt;/td&gt;&lt;/tr&gt;</span>\n            <span *ngIf=\"markup.days.saturday\">&lt;tr&gt;&lt;td&gt;Saturday: &lt;/td&gt;&lt;td&gt;{{markup.days.saturday}}&lt;/td&gt;&lt;/tr&gt;</span>\n\n            &lt;/tbody&gt;<br>\n            &lt;/table&gt;<br>\n        </div></div>\n\n        <span *ngIf=\"markup.googleEmbedCode\">&lt;div class=\"embed-container\"&gt;{{markup.googleEmbedCode}}&lt;/div&gt;<br><br></span>\n\n        <span *ngIf=\"markup.notes\">&lt;p&gt;{{markup.notes}}&lt;/p&gt;</span><br>\n        <br>\n        <hr>\n        <br>\n    </div>\n\n</code>\n\n\n\n\n";

/***/ }),

/***/ 61174:
/*!***********************************************************************!*\
  !*** ./src/app/meet-the-team/meet-the-team.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"meet-the-team-container container\" *ngIf=\"MTTInterface\">\n\n    <h2>Meet the Team</h2>\n\n    <!-- Instructions -->\n    <div>\n        <button type=\"button\" mat-raised-button class=\"instructions-button\"\n                (click)=\"showHide(showOfficeTourInst = !showOfficeTourInst);\">\n            Instructions\n        </button>\n        <div [ngClass]=\"{'hide': !showOfficeTourInst }\">\n            <p class=\"text-success\">Place team member images in the '/assets/uploads/images/' directory.</p>\n            <p>Complete the form and \"Grab your HTML.\" Member name is required.</p>\n        </div>\n    </div>\n    <!-- add item -->\n    <button type=\"button\" mat-raised-button (click)=\"addMember()\">\n        <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon> Add\n    </button>\n\n    <mat-accordion multi=\"false\">\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\"  cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n\n            <div *ngFor=\"let item of MTTInterface.members;\n             let i = index; let even=even; let odd=odd;\" cdkDrag>\n\n\n                <!-- title header -->\n                <mat-expansion-panel hideToggle>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <!-- add delete buttons-->\n                            <div class=\"add-button\">\n                     <span class=\" text-info\"\n                           (click)=\"addMember(); $event.stopPropagation()\">\n                            <mat-icon>add</mat-icon>\n                     </span>\n                            </div>\n\n                            <!-- delete method -->\n                            <span class=\" text-danger\"\n                                  (click)=\"removeMember(i)\">\n                        <mat-icon>delete</mat-icon>\n                    </span>\n                            <div class=\"clear\"></div>\n\n                            <div *ngIf=\"item.name || name.value; else noname\">\n                                <span *ngIf=\"!name.value; else itemNameOnly\" class=\"sesame-blue\">{{item.name}}</span>\n                            </div>\n\n                            <ng-template #noname>\n                                <span class=\"sesame-green\">Enter team member name</span>\n                            </ng-template>\n\n                            <ng-template #itemNameOnly>\n                                <span class=\"sesame-blue\">{{name.value}}</span>\n                                &nbsp;<span class=\"sesame-green\">{{position.value}}</span>\n                            </ng-template>\n\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n\n                    <br/>\n\n\n                    <!-- Member name -->\n                    <div>\n                        <mat-form-field class=\"float-start\"\n                                        style=\"width: 48%;\n                            margin-right: 2%;\">\n                            <mat-label>Member Name <span\n                                    class=\"label-instructions\"> Jenny Jones</span>\n                            </mat-label>\n                            <input matInput type=\"text\"\n                                   [(ngModel)]=\"item.name\"\n                                   placeholder=\"Member Name\"\n                                   #name>\n                        </mat-form-field>\n\n                        <!-- position -->\n                        <mat-form-field class=\"float-end\"\n                                        style=\"width: 48%; margin-left: 2%;\">\n                            <mat-label>Position</mat-label>\n                            <input matInput type=\"text\"\n                                   [(ngModel)]=\"item.position\"\n                                   placeholder=\"Position\" #position>\n                        </mat-form-field>\n                    </div>\n\n                    <div class=\"clear\"></div>\n                    <!-- bio -->\n                    <div class=\"meet-the-team-bio-wrap\">\n                        <label style=\"display: block;\">Bio</label>\n                        <textarea [(ngModel)]=\"item.bio\"\n                                  placeholder=\"Bio\"\n                                  #bio>{{bio}}</textarea>\n                    </div>\n\n                    <br/>\n\n                    <!-- start image -->\n                    <div>\n                        <div class=\"float-start\"\n                             style=\"width: 48%; margin-right: 2%;\">\n                            <div>\n                                <image-selector caption=\"Optional Image\" directory=\"{{ imageDirectory }}\" [image]=\"item.image\"></image-selector>\n                            </div>\n                        </div>\n\n                        <div>\n                            <img class=\"float-end preview-image\"\n                                 ngDefaultControl\n                                 [(ngModel)]=\"item.image\"\n                                 src=\"../{{siteContext.account}}/assets/uploads/images/{{item.image.path}}\"\n                                 alt=\"\"/>\n                        </div>\n\n                    </div>\n\n                    <div class=\"clear\"></div>\n\n                </mat-expansion-panel>\n\n            </div><!-- end sortable index -->\n        </div>\n\n        <div>\n            <button mat-raised-button\n                    class=\"save-button\"\n                    (click)=\"saveMeetTheTeamMembers(MTTInterface)\"\n                    type=\"button\">\n                <mat-icon>save</mat-icon>\n                Save\n            </button>\n\n        </div>\n    </mat-accordion>\n\n</div>\n<!--    </div>&lt;!&ndash; end row &ndash;&gt;-->\n\n<br/>\n<p class=\"copy sesame-blue\" (click)=\"copyHTMLToClipboard();\" data-target=\"#copy\">\n    <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n    Grab your HTML\n</p>\n\n<code id=\"copy\" *ngIf=\"MTTInterface\">\n\n    <div *ngFor=\"let markup of MTTInterface.members; let i = index; let last = last\">\n\n        <div class=\"bg-items\">\n\n        <span *ngIf=\"markup.image.path\">\n        <span *ngIf=\"markup.image\">&lt;div&gt;&lt;img src=\"/assets/{{markup.image.path}}\"\n            width=\"{{markup.image.width}}\"\n            height=\"{{markup.image.height}}\"\n        </span>\n        <span> class=\"staff\"</span>\n        <span>&nbsp;alt=\"\"</span>&gt;&lt;/div&gt;\n        </span>\n           <br>\n\n            <span *ngIf=\"markup.name\">&lt;h2&gt;{{markup.name | capitalizeEachWord}}&lt;/h2&gt;<br/></span>\n\n            <span *ngIf=\"markup.position\">&lt;h3&gt;{{markup.position}}\n                &lt;/h3&gt;<br/></span>\n\n            <span *ngIf=\"markup.bio\">&lt;p&gt;{{markup.bio}}&lt;/p&gt;</span>\n\n            <br/>\n\n            <span *ngIf=\"!last\">&lt;hr class=\"clear\"&gt;<br/></span>\n\n            <br/><br/>\n\n        </div>\n\n    </div>\n\n</code>\n\n\n";

/***/ }),

/***/ 87585:
/*!*******************************************************************!*\
  !*** ./src/app/office-tour/office-tour.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"office-tour-container\" *ngIf=\"OTInterface\">\n\n    <h2>{{title}}</h2>\n\n    <div class=\"col-lg-6 col-md-6 col-sm-12 wow fadeIn\" data-wow-duration=\".5s\">\n\n        <div class=\"show-hide\">\n\n            <button mat-raised-button\n                    (click)=\"showHide(officeTourInst = !officeTourInst);\">Instructions\n            </button>\n\n            <div [ngClass]=\"{'hide': !officeTourInst }\">\n\n                <p class=\"text-success\">Place office-tour images in the '/assets/{{imageDirectory}}'\n                    directory.</p>\n\n                <p>Complete the form and \"Grab your HTML.\"\n                    <br/><span class=\"sesame-blue\">Blue placeholder text</span> indicates a required\n                    field.<br/>\n                    If you are using the .jpg extension for your images just add the number of slides you\n                    are using. </p>\n\n            </div>\n\n        </div>\n        <!-- add item -->\n        <button type=\"button\" mat-raised-button (click)=\"addImage()\">\n            <mat-icon class=\"mat-18 sesame-blue\">add</mat-icon>\n            Add\n        </button>\n\n        <h3>Selected Images</h3>\n\n        <mat-accordion multi=\"false\">\n\n            <div id=\"office-tour-list\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                <div *ngFor=\"let image of OTInterface.images;   let i = index; let even = even; let odd = odd\" cdkDrag>\n                    <mat-expansion-panel hideToggle>\n\n                        <mat-expansion-panel-header>\n                            <mat-panel-title>\n\n                                <!-- add delete buttons-->\n                                <div class=\"add-button\">\n                      <span class=\" text-info\"\n                            (click)=\"addImage(); $event.stopPropagation()\">\n                            <mat-icon>add</mat-icon>\n                     </span>\n                                </div>\n\n                                <div class=\"delete-button\">\n                     <span class=\" text-danger\"\n                           (click)=\"removeImage(i); $event.stopPropagation()\">\n                        <mat-icon>delete</mat-icon>\n                        </span>\n                                </div>\n\n                                <div class=\"clear\"></div>\n                                <span class=\"sesame-blue\" *ngIf=\"image.path\">{{ image.path }}</span> &nbsp;&nbsp;\n                                <span class=\"sesame-green\" *ngIf=\"!image.path\">Select Image</span> &nbsp;&nbsp;\n                                <span class=\"sesame-green\">{{image.imageAlt}}</span>\n                            </mat-panel-title>\n                        </mat-expansion-panel-header>\n\n                        <br/>\n\n                        <div class=\"float-start\" style=\"width: 48%; margin-right: 2%;\">\n                            <br/>\n                            <image-selector caption=\"Slider Image\" [image]=\"image\" directory=\"{{imageDirectory}}\"></image-selector>\n                        </div>\n\n                        <br/>\n                        <div>\n                            <img class=\"float-end preview-image\"\n                                 ngDefaultControl\n                                 src=\"../{{siteContext.account}}/assets/{{imageDirectory}}/{{image.path}}\"\n                                 alt=\"\"\n                                 *ngIf=\"image.path\"\n                            />\n\n                        </div>\n\n                        <mat-form-field>\n                            <mat-label>Add a caption <span class=\"label-instructions\">(optional - before and after description)</span>\n                            </mat-label>\n                            <input matInput\n                                   type=\"text\"\n                                   [(ngModel)]=\"image.imageAlt\"\n                                   name=\"imageAlt\"\n                                   class=\"float-end\"\n                                   placeholder=\"Add a caption\">\n                        </mat-form-field>\n\n                        <div class=\"clear\"></div>\n\n                    </mat-expansion-panel>\n                </div>\n\n            </div>\n\n            <div>\n                <button mat-raised-button\n                        class=\"save-button\"\n                        (click)=\"saveOfficeTourImages(OTInterface)\"\n                        type=\"button\">\n                    <mat-icon>save</mat-icon>\n                    Save\n                </button>\n\n            </div>\n        </mat-accordion>\n\n    </div>\n\n</div>\n<!-- start copy -->\n<br/>\n<!-- Start HTML code area -->\n<p class=\"copy sesame-blue\" (click)=\"copyThisHTMLToClipboard('#copyOfficeTour');\"\n   data-target=\"#copyOfficeTour\">\n    <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n    Grab your HTML\n</p>\n\n<code id=\"copyOfficeTour\" *ngIf=\"OTInterface\">\n\n    &lt;p&gt;We understand your need to receive treatment in a practice where you feel comfortable, safe, and welcome.\n    Please feel free to schedule an appointment, or stop by for a complete tour of our practice. You will get to meet\n    our team, walk through\n    our office and treatment areas, and learn more about the treatments we provide.&lt;/p&gt;<br/><br/>\n\n    &lt;div class=\"mediaslider\"&gt;<br/>\n\n    <span>&lt;div class=\"cycle-slideshow\" <br/>\n        <span>data-cycle-timeout=\"9000\"<br></span>\n        <span>data-cycle-loader=\"wait\"<br></span>\n        <span>data-cycle-auto-height=\"calc\"<br></span>\n        <span>data-cycle-center-horz=\"true\"<br></span>\n        <span>data-cycle-center-vert=\"true\"<br></span>\n        <span>data-cycle-caption=\"#caption\"<br></span>\n        <span>data-cycle-caption-template=\"{{lCurly}}{{lCurly}}cycleTitle{{rCurly}}{{rCurly}}\"</span>\n        &gt; </span>\n\n    <br>\n\n    <span>&lt;button aria-label=\"previous slide\" class=\"slidecontrol cycle-prev\"&gt;&lt;span class=\"fa fa-chevron-left\"  aria-hidden=\"true\" role=\"img\"&gt;&nbsp;{{nbsp}}&lt;/span&gt;&lt;/button&gt;</span><br/><br/>\n    <span>&lt;button aria-label=\"next slide\" class=\"slidecontrol cycle-next\"&gt;&lt;span class=\"fa fa-chevron-right\"  aria-hidden=\"true\" role=\"img\"&gt;&nbsp;{{nbsp}}&lt;/span&gt;&lt;/button&gt;</span><br/><br/>\n\n    <div *ngFor=\"let markup of OTInterface.images; let i = index; let last = last\">\n\n        <div class=\"bg-items\"><span><span>&lt;img src=\"/assets/{{imageDirectory}}/{{markup.path}}\"\n            <span *ngIf=\"markup.imageAlt\">&nbsp;alt=\"\"</span>\n            data-cycle-title=\"{{markup.imageAlt}}\"\n              alt=\"\"\n              width=\"{{ markup.width }}\"</span>\n              height=\"{{ markup.height }}\" decoding=\"async\"&gt; </span>\n        </div>\n\n        <br/>\n\n    </div><!-- end *ngFor -->\n\n\n    <br/>\n    <span>&lt;/div&gt;</span>&lt;!&ndash;&ndash; end office tour slideshow &ndash;&ndash;&gt;\n\n    &lt;div id=\"caption\"&gt;{{nbsp}}&lt;/div&gt;\n\n    <br/> <span>&lt;/div&gt;</span>&lt;!&ndash;&ndash; end mediaslider &ndash;&ndash;&gt;\n    <br>\n\n</code> <!-- end copy code -->";

/***/ }),

/***/ 80599:
/*!*******************************************************!*\
  !*** ./src/app/pages/pages.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"pages-container container\">\n    <h1>Standard Pages</h1>\n    <p class=\"text-warning\">The correct account-name directory must have been created and selected for the tools to function\n        properly.</p>\n    <p class=\"text-warning\"><span class=\"sesame-green\">IMPORTANT:</span> You must first\n        <a class=\"sesame-blue\" href=\"http://localhost:8888/dashboard/#/ddu\" target=\"_self\"> ADD IMAGES</a> to their\n        respective directories before selecting and applying them to the tools.</p>\n    <mat-tab-group>\n        <mat-tab label=\"Office Tour\">\n            <office-tour></office-tour>\n        </mat-tab>\n\n        <mat-tab label=\"Before and After\">\n            <before-and-after></before-and-after>\n        </mat-tab>\n\n        <mat-tab label=\"Meet The Team\">\n            <dev-meet-the-team></dev-meet-the-team>\n        </mat-tab>\n\n        <mat-tab label=\"Location\">\n            <dev-location></dev-location>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n";

/***/ }),

/***/ 78095:
/*!***********************************************************************!*\
  !*** ./src/app/patient-forms/patient-forms.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"patient-forms-container container\">\n\n    <h2>Patient Forms</h2>\n\n    <div class=\"row\">\n\n        <div class=\"col-lg-8 col-md-8 col-sm-12 wow fadeIn\" data-wow-duration=\".5s\">\n\n            <!-- start form -->\n            <form [formGroup]=\"patientFormsForm\" novalidate\n\n                  (ngSubmit)=\"onSetPatientFormData(patientFormsForm)\">\n                <!-- BUTTONS -->\n\n                <div>\n\n\n                    <button type=\"button\" mat-raised-button class=\"instructions-button\"\n                            (click)=\"showHide(showPatientFormsInst = !showPatientFormsInst);\">\n                        Instructions\n                    </button>\n\n                    <div [ngClass]=\"{'hide': !showPatientFormsInst }\">\n                        <p>Complete the form and \"Grab your HTML.\" Form name is required.\n                            <span class=\"sesame-blue\">Blue placeholder text</span> indicates a required field.\n                        </p>\n                        <p>File extension is required in URL (.pdf, .doc, .html, .htm, .docx, .txt, .php, .img,\n                            .html, .xlt, .xsl,\n                            xml,\n                            .xls).\n                        </p>\n                    </div>\n                </div>\n\n                <add-save-buttons (addSaveButton)=\"addItem($event)\"></add-save-buttons>\n\n                <!-- office category -->\n                <div>\n                    <mat-form-field class=\"form-group\" style=\"max-width: 275px\">\n                        <!-- choose office type -->\n                        <mat-label>Office Category</mat-label>\n                        <mat-select formControlName=\"officeCategory\" name=\"officeCategory\" #officeCategory>\n\n                            <mat-option *ngIf=\"officeCategory === null\"\n                                        selected=\"selected\">Select Office Category\n                            </mat-option>\n\n                            <mat-option\n                                    *ngFor=\"let category of formCategory\"\n                                    value=\"{{category.value}}\"> {{category.display}}\n                            </mat-option>\n\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <mat-accordion multi=\"false\">\n\n                    <div cdkDropList (cdkDropListDropped)=\"drop($event)\">\n\n                        <div *ngFor=\"let item of patientFormsForm.controls['items'].controls; let i = index; let first = first;\n                    let even=even; let odd=odd;\" class=\"rounded-top-bottom\" [ngClass]=\"{ odd: odd, even: even }\"\n                             cdkDrag>\n\n                            <!-- patient forms array -->\n                            <div formArrayName=\"items\">\n\n                                <div>\n\n                                    <div [formGroupName]=\"i\">\n\n                                        <mat-expansion-panel hideToggle>\n\n                                            <mat-expansion-panel-header [ngClass]=\"{ odd: odd, even: even }\">\n                                                <mat-panel-title>\n                                                    <!-- add delete buttons -->\n                                                    <div class=\"add-delete-wrap \"\n                                                         (click)=\"$event.stopPropagation();\">\n\n                                                        <div class=\"delete-button\">\n\n                                                            <!-- add/delete buttons -->\n                                                            <div class=\"float-start\"\n                                                                 style=\"width: 49%;\n                                                                     text-align: center;\">\n                                                                <!--  add method -->\n                                                                <span class=\" text-info\"\n                                                                      (click)=\"addItem(i)\">\n                                                            <mat-icon>add</mat-icon>\n                                                            </span>\n                                                            </div>\n\n                                                            <!-- delete method -->\n                                                            <div class=\"float-end\"\n                                                                 style=\"width: 49%; text-align: center;\">\n                                                                <span class=\"text-danger\"\n                                                                      *ngIf=\"patientFormsForm.controls.items.controls.length > 0\"\n                                                                      (click)=\"removeItem(i)\"\n                                                                      value=\"delete Component\"><mat-icon>delete</mat-icon>\n                                                                </span>\n                                                            </div>\n\n                                                            <!-- confirmation or cancel -->\n                                                            <!--<div *ngIf=\"deleteConfirmationArray[i]\"\n                                                                 class=\"delete-confirm\">\n                                                                &lt;!&ndash; delete &ndash;&gt;\n                                                                <span class=\"float-start sesame-danger \"\n                                                                      style=\"width: 49%; \"\n                                                                      (click)=\"confirmDelete(i, patientFormsForm, 'deleteItem')\">\n                                                                    Delete\n                                                                    </span>\n                                                                &lt;!&ndash; confirm delete &ndash;&gt;\n                                                                <span type=\"button\"\n                                                                      class=\"float-end sesame-green-background\"\n                                                                      style=\"width: 49%;\"\n                                                                      (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                                                    Cancel\n                                                                    </span>\n\n                                                            </div>--><!-- delete buttons -->\n                                                        </div><!-- end buttons -->\n\n                                                        <div class=\"clear\"></div>\n\n\n                                                    </div><!-- end add-delete-wrap -->\n                                                    <div *ngIf=\"item.controls.name.value as value; else noname\">\n                                                        <span class=\"sesame-blue\">{{item.controls.name.value | replaceDashSpace | titlecase}}</span>\n                                                        &nbsp;<span\n                                                            class=\"title-sub-text\">{{item.controls.url.value.substring(0, 32)}}\n                                                        ...</span>\n                                                    </div>\n                                                    <ng-template #noname>\n                                                        <span  class=\"sesame-green\" *ngIf=\"!item.controls.name.value\">Enter patient form name or select from standard forms</span>{{ item.controls.name.value}}\n                                                    </ng-template>\n\n                                                </mat-panel-title>\n                                            </mat-expansion-panel-header>\n\n                                            <br/>\n\n                                            <p class=\"sesame-green \">Place non-standard forms in\n                                                account-name/www/assets/uploads/docs/</p>\n\n                                            <!-- Form name -->\n                                            <div class=\"form-group float-start\">\n\n                                                <!-- SELECT FORM TYPE -->\n                                                <div>\n\n                                                    <p class=\"sesame-green\" style=\"display: block;\">Select a pre-defined\n                                                        form or select 'Create New' to add new.</p>\n\n                                                    <mat-form-field appearance=\"fill\">\n\n                                                        <mat-select style=\"max-width: 375px\"\n                                                                    (selectionChange)=\"updateUrl(patientFormText.value, i);\"\n                                                                    formControlName=\"patientFormText\"\n                                                                    name=\"patientFormText\"\n                                                                    #patientFormText>\n\n                                                            <mat-option *ngIf=\"patientFormText == null\"\n                                                                        selected=\"selected\">Select Predefined\n                                                            </mat-option>\n\n                                                            <mat-option *ngFor=\"let type of patientFormType\"\n                                                                        value=\"{{type.value}}\"> {{type.display | replaceDashSpace | titlecase}}\n                                                            </mat-option>\n                                                        </mat-select>\n                                                    </mat-form-field>\n                                                </div>\n\n                                            </div><!-- end pull-left -->\n\n                                            <!-- URL -->\n                                            <div class=\"form-group clear form-detail\">\n                                                <mat-form-field style=\"max-width: 375px\">\n                                                    <!--                                                [value]=\"patientFormText.value == 'create new'? '' : patientFormText.value\"-->\n                                                    <mat-label>Form Name</mat-label>\n                                                    <input matInput\n\n                                                           type=\"text\"\n                                                           formControlName=\"name\"\n                                                           placeholder=\"Form Name\"\n                                                           #name>\n                                                </mat-form-field>\n\n\n                                                <div>\n                                                    <mat-form-field style=\"max-width: 475px\">\n                                                        <mat-label>Form URL</mat-label>\n                                                        <input matInput\n                                                               type=\"text\"\n                                                               formControlName=\"url\"\n                                                               placeholder=\"URL\"\n                                                               #url/>\n\n                                                    </mat-form-field>\n                                                </div>\n\n                                            </div><!-- float end -->\n\n                                        </mat-expansion-panel>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div><!-- end items -->\n                    </div>\n                </mat-accordion>\n            </form>\n\n        </div><!-- end cols -->\n\n    </div><!-- end row -->\n\n    <!-- start code area -->\n    <br/>\n\n    <!-- Start HTML code area -->\n    <p class=\"copy sesame-blue\" (click)=\"onCopyHTMLToClipboard();\" data-target=\"#copy\">\n        <mat-icon style=\"cursor: pointer;\">file_copy</mat-icon>\n        Grab your HTML\n    </p>\n\n    <code id=\"copy\">\n        <span [hidden]=\"officeCategory.value !== 'pediatric'\"> &lt;p&gt;Help us get to know your child!&lt;/p&gt;</span>\n        <br/>\n        <span>&lt;p&gt;Please take a minute to print and fill out the patient information form before your first\n                    appointment. If you have any questions along the way, feel free to contact our practice.&lt;/p&gt;</span><br/>\n\n        <span><br/>&lt;ul&gt;<br/></span>\n\n        <div *ngFor=\"let markup of patientFormsForm.controls['items'].value | keys; let i = index; let first = first; let last = last\">\n            <div class=\"bg-items\">\n                <!-- if new form present -->\n                <div *ngIf=\"markup.value.name || markup.value.patientFormText\">\n\n                    <span class=\"indent28\">&lt;li&gt;</span>\n\n                    <!-- hide predefined USE NAME name value -->\n                    <span [hidden]=\"markup.value.patientFormText\">\n\n                            <span class=\"indent44\"\n                                  *ngIf=\"markup.value.name\">\n                                <br/>&lt;a href=\"/assets/uploads/docs/{{markup.value.url.trim()}}{{markup.value.ext.trim()}}\n                                \" target=\"_blank\"&gt;{{markup.value.name.trim() | replaceDashSpace | replaceUnderscoreSpace | titlecase }}\n                            </span>\n\n                            &lt;/a&gt;\n\n                        <!-- extension code -->\n                                        <span *ngIf=\"markup.value.ext == '.pdf'\">&lt;span class=\"fas fa-file-pdf\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                        <span *ngIf=\"markup.value.ext == '.doc'\">&lt;span class=\"fas fa-file-word\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                        <span *ngIf=\"markup.value.ext == '.docx'\">&lt;span class=\"fas fa-file-word\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                        <span *ngIf=\"markup.value.ext == ''\">&lt;span class=\"fas fa-link\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                            </span><!--  hide name USE PATIENT FORM TEXT patientFormText --><span\n                        [hidden]=\"!markup.value.name\"><br/>&lt;a href=\"{{markup.value.url.trim()}}\n                    \" target=\"_blank\"&gt;{{markup.value.name.trim() | replaceDashSpace | replaceUnderscoreSpace | titlecase }}\n\n                    <span *ngIf=\"!markup.value.patientFormText\">{{markup.value.url.trim()}}\n                        \" target=\"_blank\"&gt;{{markup.value.url.trim()</span>\n                    <!-- extension code -->\n                                    <span *ngIf=\"markup.value.ext == '.pdf'\">&lt;span class=\"fas fa-file-pdf\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                    <span *ngIf=\"markup.value.ext == '.doc'\">&lt;span class=\"fas fa-file-word\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                    <span *ngIf=\"markup.value.ext == '.docx'\">&lt;span class=\"fas fa-file-word\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n                                    <span *ngIf=\"markup.value.ext == '' || markup.value.ext == 'none'\">&lt;span class=\"fas fa-link\" aria-hidden=\"true\" role=\"img\"&gt;{{nbsp}}&lt;/span&gt;</span>\n\n                            &lt;/a&gt;</span>\n\n                    <br/>\n                    <span class=\"indent28\">&lt;/li&gt;<br/></span><!-- end line -->\n\n                </div>\n\n            </div><!-- end bg-items -->\n\n        </div><!-- end ngFor -->\n\n        <span>&lt;/ul&gt;<br/><br/></span>\n\n\n        <p class=\"indent32\">&lt;p&gt;If you're unable to open PDF files, you can &lt;a\n            href=\"http://adobe.com/reader\"&gt;get Adobe Reader®&lt;/a&gt; for free.\n            &lt;/p&gt;\n    </code>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map