"use strict";
(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_drag-drop-to-upload_drag-drop-to-upload_module_ts"],{

/***/ 35482:
/*!**********************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-drop-to-upload.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropToUploadComponent": () => (/* binding */ DragDropToUploadComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _drag_drop_to_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-drop-to-upload.component.html?ngResource */ 66348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _drag_drop_to_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop-to-upload.service */ 16137);
/* harmony import */ var _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dev-tools/site-context-provider */ 16991);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let DragDropToUploadComponent = (_class = class DragDropToUploadComponent {
  constructor(_snackBar, _dragDropToUploadService, _siteContextProviderService, _snackBarService, _imageManagerCopyToLocalDirService) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBar", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_dragDropToUploadService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_imageManagerCopyToLocalDirService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "title", "Image Manager");
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectImageType", "Select Image Type/Destination");
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "files", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "siteContext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "dir", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DDUploadInterface", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageDirectory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localImages", {
      "images/before-after-cycle": [],
      "images/office-tour": [],
      "images/slideshow": [],
      "images/spotlight": [],
      "uploads/images": []
    });
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "directoryArray", [{
      value: 'images/before-after-cycle',
      display: 'Before and After Images'
    }, {
      value: 'images/office-tour',
      display: 'Office Tour Images'
    }, {
      value: 'images/slideshow',
      display: 'Slideshow Images'
    }, {
      value: 'images/spotlight',
      display: 'Spotlight Images'
    }, {
      value: 'uploads/images',
      display: 'Team, Interior Pages, Location images'
    }]);
    this._snackBar = _snackBar;
    this._dragDropToUploadService = _dragDropToUploadService;
    this._siteContextProviderService = _siteContextProviderService;
    this._snackBarService = _snackBarService;
    this._imageManagerCopyToLocalDirService = _imageManagerCopyToLocalDirService;
  }
  ngOnInit() {
    this.getSiteContext();
  }
  /**
   * Get current site context
   */
  getSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(res => {
      this.siteContext = res;
      this.account = this.siteContext.account;
      this.getAccountImageFiles("uploads/images");
      this.getAccountImageFiles("images/before-after-cycle");
      this.getAccountImageFiles("images/office-tour");
      this.getAccountImageFiles("images/slideshow");
      this.getAccountImageFiles("images/spotlight");
    }, error => console.log(error));
  }
  imageDirectoryChanged(e) {
    this.dir = e.value;
  }
  onFileChange(files) {
    // if nothing is selected
    if (!this.dir) {
      this.dir = 'uploads/images';
    }
    this._dragDropToUploadService.copyImagesToLocal(this.account, files, this.dir).subscribe(data => {
      this.getAccountImageFiles(this.dir);
      this._snackBar.open("Successfully upload!", 'Close', {
        duration: 2000
      });
    }, error => {
      console.log(error);
    });
  }
  // get local existing images - not data
  getAccountImageFiles(directory) {
    if (!this.siteContext) {
      return;
    }
    this._dragDropToUploadService.listLocalAccountImages(this.siteContext.account, directory).subscribe(localImageData => {
      localImageData.map(i => i + '?v=' + Date.now().toString());
      this.localImages[directory] = localImageData;
      if (!this.localImages) {
        this._snackBarService.openSnackBar('Add ' + this.imageDirectory + ' images to assets/images/' + this.imageDirectory, '');
      }
    }, error => console.log(error));
  }
  /**
   * Deletes file from account-name /assets/uploads/images/itemVal using php unlink
   * @param directory
   * @param image
   */
  deleteImage(directory, image) {
    // deletes image from assets/uploads/images using endpoint
    this._imageManagerCopyToLocalDirService.deleteImageFromLocalDir(this.siteContext.account, directory, image).subscribe(data => {
      // do not show img element if n/a
      this.localImages[directory] = this.localImages[directory].filter(i => i !== image);
    }, error => console.log(error));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar
}, {
  type: _drag_drop_to_upload_service__WEBPACK_IMPORTED_MODULE_2__.DragDropToUploadService
}, {
  type: _dev_tools_site_context_provider__WEBPACK_IMPORTED_MODULE_3__.SiteContextProviderService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService
}, {
  type: _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__.ImageManagerCopyToLocalDirService
}]), _class);
DragDropToUploadComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'drag-drop-to-upload',
  template: _drag_drop_to_upload_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], DragDropToUploadComponent);


/***/ }),

/***/ 6289:
/*!*******************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-drop-to-upload.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropToUploadModule": () => (/* binding */ DragDropToUploadModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _drag_drop_to_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop-to-upload.component */ 35482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _drag_drop_to_upload_drag_drop_to_upload_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drag-drop-to-upload/drag-drop-to-upload.routes */ 82791);
/* harmony import */ var _drag_to_drop_upload_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-to-drop-upload.directive */ 50720);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _drag_drop_to_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop-to-upload.service */ 16137);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-manager/image-manager-copy-to-local-dir.service */ 46626);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let DragDropToUploadModule = class DragDropToUploadModule {
  onfileChange($event) {
    console.log('onFileChange Fired!');
  }
};
DragDropToUploadModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_drag_drop_to_upload_component__WEBPACK_IMPORTED_MODULE_0__.DragDropToUploadComponent, _drag_to_drop_upload_directive__WEBPACK_IMPORTED_MODULE_2__.FileDragNDropDirective],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBarModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_drag_drop_to_upload_drag_drop_to_upload_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES), _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule],
  providers: [_drag_drop_to_upload_service__WEBPACK_IMPORTED_MODULE_3__.DragDropToUploadService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__.SnackbarService, _image_manager_image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__.ImageManagerCopyToLocalDirService]
})], DragDropToUploadModule);


/***/ }),

/***/ 82791:
/*!*******************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-drop-to-upload.routes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _drag_drop_to_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-drop-to-upload.component */ 35482);

const ROUTES = [{
  path: '',
  component: _drag_drop_to_upload_component__WEBPACK_IMPORTED_MODULE_0__.DragDropToUploadComponent
}];

/***/ }),

/***/ 16137:
/*!********************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-drop-to-upload.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropToUploadService": () => (/* binding */ DragDropToUploadService)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DragDropToUploadService = (_class = class DragDropToUploadService {
  constructor(_httpClient) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_httpClient", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "DDUploadInterface", void 0);
    this._httpClient = _httpClient;
  }
  copyImagesToLocal(account, files, directory) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
      let promises = [];
      let filesFormatted = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const promise = file.arrayBuffer();
        promise.then(buffer => {
          let data = '';
          new Uint8Array(buffer).forEach(byte => {
            data += String.fromCharCode(byte);
          });
          filesFormatted.push({
            name: file.name,
            data: btoa(data)
          });
        });
        promises.push(promise);
      }
      Promise.all(promises).then(() => {
        const body = JSON.stringify({
          account,
          files: filesFormatted,
          directory: directory
        });
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append('Content-Type', 'application/json');
        this._httpClient.post('/dashboard/endpoints/drag-drop-to-upload-endpoint.php', body, {
          headers: headers
        }).subscribe(() => subscriber.next());
      });
    });
  }
  /**
   * @param account
   * Get current contents of /account-name/www/assets/uploads/images
   * @param directory
   * @returns {Observable<Response>}
   */
  listLocalAccountImages(account, directory) {
    const body = JSON.stringify({
      account,
      directory
    });
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/get-image-manager-local-files.php', body, {
      headers: headers
    });
  }
  /**
   *
   * @param account
   * @param directory
   */
  listLocalSliderImages(account, directory) {
    // default
    /*if(directory === null) {
        directory = 'images/spotlight';
      }*/
    const body = JSON.stringify([account, directory]);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/get-slider-local-files.php', body, {
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
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {
      headers: headers
    });
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}]), _class);
DragDropToUploadService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], DragDropToUploadService);


/***/ }),

/***/ 50720:
/*!**********************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-to-drop-upload.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileDragNDropDirective": () => (/* binding */ FileDragNDropDirective)
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

let FileDragNDropDirective = (_class = class FileDragNDropDirective {
  constructor() {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "background", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filesChangeEmiter", new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter());
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "background_border_style", 'dashed');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "background_border_width", '0.5px');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "background_border_radius", '10px');
  }
  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#999';
  }
  onDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#ddd';
  }
  onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.background = '#ddd';
    let files = e.dataTransfer.files;
    this.filesChangeEmiter.emit(Array.from(files));
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => []), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  filesChangeEmiter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
  }],
  background_border_style: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.border-style']
  }],
  background_border_width: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.border-width']
  }],
  background_border_radius: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostBinding,
    args: ['style.border-radius']
  }],
  onDragOver: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['dragover', ['$event']]
  }],
  onDragLeave: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['dragleave', ['$event']]
  }],
  onDrop: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['drop', ['$event']]
  }]
}), _class);
FileDragNDropDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[fileDragDrop]'
})], FileDragNDropDirective);


/***/ }),

/***/ 66348:
/*!***********************************************************************************!*\
  !*** ./src/app/drag-drop-to-upload/drag-drop-to-upload.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<div id=\"upload-container\" class=\"upload-container container\">\n    <!--   *ngIf=\"DDUploadInterface\" -->\n    <h1>{{title}}</h1>\n    <h2>{{selectImageType}}</h2>\n    <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <p class=\"text-warning\">Upload files to the selected image directories. Select destination, drag or drop\n                images to upload to specified directory. webP images will automatically be created. Default directory is assets/uploads/images/ </p>\n            <!-- select image directory to populate -->\n            <div class=\"select-image-directory  border-sesame-green\">\n                <h3>Select Destination</h3>\n                <div class=\"sesame-green\">Default is uploads/images</div>\n                <mat-form-field>\n                    <mat-label>Select category</mat-label>\n                    <mat-select\n                            name=\"directory\"\n                            (selectionChange)=\"imageDirectoryChanged($event)\"\n                            #directory>\n                        <mat-option *ngFor=\"let dir of directoryArray\" [value]=\"dir.value\">\n                            {{dir.display}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n\n        <div class=\"col-lg-6 col-md-6 col-sm-12\">\n            <!-- select images -->\n            <div class=\"dropzone\" fileDragDrop (filesChangeEmiter)=\"onFileChange($event)\">\n                <div class=\"text-wrapper\">\n                    <div class=\"centered\">\n                        <input type=\"file\" name=\"file\" id=\"file\" (change)=\"onFileChange($event.target.files)\" multiple>\n                        <label for=\"file\">\n                            <mat-icon class=\"sesame-blue\"\n                                      style=\"font-size: 60px; text-align: center;width: 100%;\">upload_file\n                            </mat-icon>\n                            <br>\n                            <span style=\"text-align: center;\">Select your file(s) or drop them here!</span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- start display images -->\n<div class=\"row\">\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n        <br>\n        <!-- list images/slideshow images-->\n        <h4 class=\"center\">slideshow</h4>\n\n        <div *ngFor=\"let img of localImages['images/slideshow']; let i = index;\">\n           <span style=\"display: block; border: 1px solid #9ac628; padding: 4px; margin: 4px 0; border-radius: 6px;\">\n                <mat-icon class=\"text-warning\" style=\"vertical-align: top;\"\n                          (click)=\"deleteImage('images/slideshow', img)\">close</mat-icon>&nbsp;<span\n                   class=\"sesame-blue\">{{img}}</span></span>\n            <div><img src=\"../{{account}}/assets/images/slideshow/{{img}}\" style=\"max-width: 100%;\"/></div>\n        </div>\n\n        <br>\n\n        <br><br>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n        <br>\n\n        <!-- list images/office-tour images -->\n        <h4 class=\"center\">office tour</h4>\n\n        <div *ngFor=\"let img of localImages['images/office-tour']; let i = index;\">\n            <span style=\"display: block; border: 1px solid #9ac628; padding: 4px; margin: 4px 0; border-radius: 6px;\">\n                <mat-icon class=\"text-warning\" style=\"vertical-align: top;\"\n                          (click)=\"deleteImage('images/office-tour', img)\">close</mat-icon>&nbsp;<span\n                    class=\"sesame-blue\">{{img}}</span></span>\n            <div><img src=\"../{{account}}/assets/images/office-tour/{{img}}\" style=\"max-width: 100%;\"/></div>\n        </div>\n        <br>\n\n\n        <!-- list before-after-cycle images -->\n        <h4 class=\"center\">before and after</h4>\n        <div *ngFor=\"let img of localImages['images/before-after-cycle']; let i = index;\">\n            <span style=\"display: block; border: 1px solid #9ac628; padding: 4px; margin: 4px 0; border-radius: 6px;\">\n                <mat-icon class=\"text-warning\" style=\"vertical-align: top;\"\n                          (click)=\"deleteImage('images/before-after-cycle', img)\">close</mat-icon>&nbsp; <span\n                    class=\"sesame-blue\">{{img}}</span></span>\n            <div><img src=\"../{{account}}/assets/images/before-after-cycle/{{img}}\" style=\"max-width: 100%;\"/>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n        <br>\n        <!-- list images/spotlight images-->\n        <h4 class=\"center\">spotlights</h4>\n        <div *ngFor=\"let img of localImages['images/spotlight']; let i = index;\">\n            <span style=\"display: block; border: 1px solid #9ac628; padding: 4px; margin: 4px 0; border-radius: 6px;\">\n                <mat-icon class=\"text-warning\" style=\"vertical-align: top;\"\n                          (click)=\"deleteImage('images/spotlight', img)\">close</mat-icon>&nbsp;<span\n                    class=\"sesame-blue\">{{img}}</span></span>\n            <div><img src=\"../{{account}}/assets/images/spotlight/{{img}}\" style=\"max-width: 100%;\"/></div>\n        </div>\n\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-12\">\n        <br>\n        <!-- list uploads/images images-->\n        <h4 class=\"center\">uploads</h4>\n        <div *ngFor=\"let img of localImages['uploads/images']; let i = index;\">\n            <span style=\"display: block; border: 1px solid #9ac628; padding: 4px; margin: 4px 0; border-radius: 6px;\">\n                <mat-icon class=\"text-warning\" style=\"vertical-align: top;\"\n                          (click)=\"deleteImage('uploads/images', img)\">close</mat-icon>&nbsp;<span\n                    class=\"sesame-blue\">{{img}}</span></span>\n            <div><img src=\"../{{account}}/assets/uploads/images/{{img}}\" style=\"max-width: 100%;\"/></div>\n        </div>\n\n    </div>\n</div>\n<br><br>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_drag-drop-to-upload_drag-drop-to-upload_module_ts.js.map