(self["webpackChunkdashboard"] = self["webpackChunkdashboard"] || []).push([["src_app_image-manager_image-manager_module_ts"],{

/***/ 90970:
/*!**************************************************************!*\
  !*** ./src/app/directives/image-manager-delete.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageManagerDeleteDirective": () => (/* binding */ ImageManagerDeleteDirective)
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

let ImageManagerDeleteDirective = (_class = class ImageManagerDeleteDirective {
  constructor(renderer, el) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirmedDeleteImg", false);
    this.renderer = renderer;
    this.el = el;
  }
  ngOnInit() {}
  onClick($event) {
    console.info('clicked: ' + $event);
    console.log(this.renderer['delegate'].component.inputs.innerHTML = '#HELLO HELLO HELLO');
    //this.renderer['delegate'].component.inputs.addClass()
    this.renderer.addClass(this.el.nativeElement, 'hide');
    // }
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
    args: ['click', ['$event']]
  }]
}), _class);
ImageManagerDeleteDirective = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: '[ImageManagerDeleteDirective]'
})], ImageManagerDeleteDirective);


/***/ }),

/***/ 11492:
/*!********************************************************************!*\
  !*** ./src/app/image-manager/image-manager-directories.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageManagerDirectoriesService": () => (/* binding */ ImageManagerDirectoriesService)
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


let ImageManagerDirectoriesService = (_class = class ImageManagerDirectoriesService {
  constructor(_http) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_http", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "data", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "r", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image_files", []);
    this._http = _http;
  }
  /**
   * get ratio directories from image repository
   * @param ratiodir
   * @returns {Observable<Response>}
   */
  getRatioDirectories(ratiodir) {
    //let bob =  this._http.get('https://www.sesamehub.com/image-manager/browse');
    // console.log(bob);
    return this._http.get('https://www.sesamehub.com/image-manager/browse');
  }
  /**
   * Get directories within the selected ratio directory (r). ie: 1x1, 3x4 etc
   */
  getRatioDirContents(imagerepo, r) {
    console.log(imagerepo, r);
    return this._http.get('https://www.sesamehub.com/image-manager/browse?ratio=' + r);
  }
  /**
   * Set info to /dashboard/data/data.json ie: {"imageManager":[{"ratio":"3x4","category":"asian"}]} (Currently functional but not in use. For future development).
   * @param data
   * @returns {Observable<Response>}
   */
  setImageRatioData(ratio) {
    const body = JSON.stringify(ratio);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/set-image-manager-data-endpoint.php', body, {
      headers: headers
    });
  }
  /**
   * Add to json
   * @param category
   * @returns {Observable<Response>}
   */
  setImageCategoryData(category) {
    const body = JSON.stringify(category);
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/set-image-manager-data-endpoint.php', body, {
      headers: headers
    });
  }
  /**
   * Get all images in imagerepo directory
   * @param ratio
   * @param category
   * @returns {Observable<Response>}
   */
  getImages(ratio, category, imagerepo) {
    return this._http.get('https://www.sesamehub.com/image-manager/browse?ratio=' + ratio + '&category=' + category);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
}]), _class);
ImageManagerDirectoriesService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], ImageManagerDirectoriesService);


/***/ }),

/***/ 80036:
/*!**********************************************************!*\
  !*** ./src/app/image-manager/image-manager.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageManagerComponent": () => (/* binding */ ImageManagerComponent)
/* harmony export */ });
/* harmony import */ var _Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ 77797);
/* harmony import */ var _image_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-manager.component.html?ngResource */ 16588);
/* harmony import */ var _image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-manager.component.css?ngResource */ 74971);
/* harmony import */ var _image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _image_manager_directories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-manager-directories.service */ 11492);
/* harmony import */ var _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dev-tools/site-context-provider/services/site-context-provider.service */ 51987);
/* harmony import */ var _image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-manager-copy-to-local-dir.service */ 46626);
/* harmony import */ var _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/show-hide-content.service */ 71464);
/* harmony import */ var _admin_dashboard_admin_image_manager_manage_library_pages_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../admin-dashboard/admin-image-manager/manage-library-pages.service */ 24096);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);

var _class;
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let ImageManagerComponent = (_class = class ImageManagerComponent {
  // categories

  // images

  // thumbs

  // pages

  // local images

  // delete

  // pages

  // ratios

  constructor(_imageManagerDirectoriesService, _siteContextProviderService, _imageManagerCopyToLocalDirService, _manageLibraryPagesService, _snackBarService, el, renderer, _showHideContent) {
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_imageManagerDirectoriesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_siteContextProviderService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_imageManagerCopyToLocalDirService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_manageLibraryPagesService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_snackBarService", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "el", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "renderer", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_showHideContent", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imagerepo", 'stock-images');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "account", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "sitecontext", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "category", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageCategory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image_categories", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageCategoriesStatus", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageCategoriesStatusMsg", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "noImagesMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectedSuccessMessage", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image_files", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "available_image_thumbs", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "newFileName", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "currentFileName", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageTitleSelectedMsg", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageTitleError", true);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "filterargs", {
      lib_page: 'abo-certification'
    });
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "local_images", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localimg", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "localImageData", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteConfirmationArray", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "confirm", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "cancel", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ind", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "pageSelected", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectImageStatus", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "selectImageStatusMsg", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ratioDirectory", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ratioSelected", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "ratio", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "image_ratios", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageRatioStatus", false);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageRatioStatusMsg", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "library_pages", []);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "imageContainer", 'bob');
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "divView", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "myValue", void 0);
    (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "infoBarWrap", void 0);
    this._imageManagerDirectoriesService = _imageManagerDirectoriesService;
    this._siteContextProviderService = _siteContextProviderService;
    this._imageManagerCopyToLocalDirService = _imageManagerCopyToLocalDirService;
    this._manageLibraryPagesService = _manageLibraryPagesService;
    this._snackBarService = _snackBarService;
    this.el = el;
    this.renderer = renderer;
    this._showHideContent = _showHideContent;
  }
  ngAfterViewInit() {}
  /**
   * PATH TO STOCK IMAGES REPO ON THE HUB SRWD.  /srwd/www/assets/images/stock-images/
   * @type {string}
   */
  ngOnInit() {
    this.onGetSiteContext();
    this.getRatioDirs(this.imagerepo);
    if (this.image_categories == null) {
      this.imageCategoriesStatus = false;
      this.imageCategoriesStatusMsg = 'Select a category';
    }
    if (this.image_categories == null) {
      this.imageRatioStatus = false;
      this.imageRatioStatusMsg = 'Select a ratio';
    }
    this.getPageTitles();
  }
  /**
   * Get library pages from /dashboard/data/image-manager-library-pages.json data
   */
  getPageTitles() {
    this._manageLibraryPagesService.getData().subscribe(res => {
      let data;
      try {
        data = res;
      } catch (e) {
        return;
      }
      this.library_pages = data.library_pages;
    }), error => console.log(error);
  }
  /**
   * Get account directory name on click event in site-context html
   * @returns {any}
   */
  onGetSiteContext() {
    this._siteContextProviderService.getCurrentContext().subscribe(data => {
      this.sitecontext = data;
      // get local image files from assets/uploads/images when page loads
      this.getLocalFiles();
    }, error => console.log(error));
    return this.sitecontext;
  }
  /**
   * Get account image files from assets/uploads/images
   */
  getLocalFiles() {
    this._imageManagerCopyToLocalDirService.listLocalAccountImages(this.sitecontext.account).subscribe(localImageData => {
      this.localimg = new Date().getTime().toString();
      this.local_images = localImageData;
      if (localImageData) {} else {
        this.noImagesMessage = 'No images selected available for this ratio';
      }
    }, error => console.log(error));
  }
  /**
   * Show hide content areas within forms
   * @param item
   */
  showHide(item) {
    this._showHideContent.showHideContent(item);
  }
  /**
   * @param imagerepo (image repository main directory on srwd)
   * @returns {any[]}
   */
  getRatioDirs(imagerepo) {
    this._imageManagerDirectoriesService.getRatioDirectories(imagerepo).subscribe(data => {
      this.image_ratios = data;
      if (data) {} else {
        this.noImagesMessage = 'No ratio directories available!';
      }
    }, error => console.log(error));
    return this.image_ratios;
  }
  /**
   * Select category ie: adult, children, braces etc.
   * @param cat
   */
  selectImageCategory(cat) {
    this.imageCategory = cat;
    let categorydata = {
      imageManager: [{
        ratio: this.ratio,
        category: this.category
      }]
    };
    this._imageManagerDirectoriesService.setImageCategoryData(categorydata).subscribe(data => {
      this.getAvailableImages(this.ratio, this.category);
    }, error => console.log(error));
    this.pageTitleError = false;
    this.pageTitleSelectedMsg = 'Select page title';
    this.imageCategoriesStatus = true;
  }
  /**
   * @param ratio
   */
  setRatioData(ratio = this.ratio, cat = null) {
    this.ratio = ratio;
    this.imageRatioStatus = true;
    this.ratioSelected = this.ratio;
    let ratiodata = {
      imageManager: [{
        ratio: ratio,
        category: cat
      }]
    };
    this._imageManagerDirectoriesService.setImageRatioData(ratiodata).subscribe(data => {}, error => console.log(error));
    this.getAvailableImages(ratio = this.ratio, cat = null);
  }
  /**
   * @param ratio
   * @returns {any}
   */
  getRatioData(ratio) {
    this.setRatioData(ratio);
    this._imageManagerDirectoriesService.getRatioDirContents(this.imagerepo, ratio).subscribe(data => {
      try {
        data = data;
      } catch (e) {
        return;
      }
      this.image_categories = data;
      if (data) {
        this.image_categories = data;
        this.imageRatioStatus = true;
      } else {}
    }, error => console.log(error));
    return this.ratioDirectory;
  }
  /**
   * Get category images by ratio and category from stock-images (imagerepo) directory
   * @param ratio
   * @param category
   * @returns {any}
   */
  getAvailableImages(ratio, category) {
    this._imageManagerDirectoriesService.getImages(this.ratio, this.category, this.imagerepo).subscribe(data => {
      try {
        data = data;
      } catch (e) {
        return;
      }
      this.available_image_thumbs = data;
      if (data) {
        this.available_image_thumbs = data;
        this.selectedSuccessMessage = this.ratio + ' ' + this.category;
        this.available_image_thumbs.forEach(function (img) {});
      } else {
        this.noImagesMessage = 'No images available for this ratio';
      }
    }, error => console.log(error));
    return this.available_image_thumbs;
  }
  /**
   * @param account
   * @param currentname
   * @param newname
   * @param ind
   */
  renameAndCopyToLocalDir(account = this.sitecontext, currentname = this.currentFileName, newname = this.newFileName, ind = this.ind) {
    let rat = this.ratio;
    let cat = this.category;
    if (!newname) {
      this.pageTitleError = false;
      this.pageTitleSelectedMsg = 'Select page title first';
    } else {
      this.pageTitleSelectedMsg = '';
      this.pageTitleError = true;
      let newcleanedfilename = newname.replace(/[^a-zA-Z0-9]/g, '-').replace(/--/g, '-').toLowerCase().replace(/-$/, '').trim();
      this._imageManagerCopyToLocalDirService.copyImagesToLocal(account, currentname, newcleanedfilename, rat, cat, this.imagerepo).subscribe(data => {
        this.setSelectedPageActive(null);
        this.currentFileName = null;
        this.newFileName = null;
        this.getLocalFiles();
        this._snackBarService.openSnackBar('Your image has been copied to local directory!', '');
      }, error => 'No page name selected');
    }
  }
  /**
   * Set status messages
   * @param lp
   */
  setSelectedPageActive(lp) {
    if (lp == null) {
      this.pageSelected = null;
      this.pageTitleSelectedMsg = 'Add another? Select page title';
      this.pageTitleError = false;
      this.selectImageStatus = false;
      return;
    } else {
      this.pageSelected = lp;
      this.pageTitleError = true;
      this.pageTitleSelectedMsg = '';
      this.selectImageStatus = true;
      this.selectImageStatusMsg = 'Select image';
      this.imageCategoriesStatusMsg = 'Select a ratio and category';
      return;
    }
  }
  /**
   * start delete
   * @param i
   * @param el
   */
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
   * Deletes file from account-name /assets/uploads/images/itemVal using php unlink
   * @param sitecontext
   * @param itemVal
   */
  deleteImageManagerImage(sitecontext, itemVal, i) {
    // deletes image from assets/uploads/images using endpoint
    this._imageManagerCopyToLocalDirService.deleteImageFromLocalDir(sitecontext, 'uploads/images', itemVal).subscribe(data => {
      // do not show img element if n/a
      this.local_images = this.local_images.filter((image, idx) => i !== idx);
    }, error => console.log(error));
  }
  removeItem(i, itemVal) {
    this.deleteImageManagerImage(this.sitecontext.account, itemVal, i);
  }
}, (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "ctorParameters", () => [{
  type: _image_manager_directories_service__WEBPACK_IMPORTED_MODULE_3__.ImageManagerDirectoriesService
}, {
  type: _dev_tools_site_context_provider_services_site_context_provider_service__WEBPACK_IMPORTED_MODULE_4__.SiteContextProviderService
}, {
  type: _image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__.ImageManagerCopyToLocalDirService
}, {
  type: _admin_dashboard_admin_image_manager_manage_library_pages_service__WEBPACK_IMPORTED_MODULE_7__.ManageLibraryPagesService
}, {
  type: _services_snackbar_service__WEBPACK_IMPORTED_MODULE_8__.SnackbarService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2
}, {
  type: _services_show_hide_content_service__WEBPACK_IMPORTED_MODULE_6__.ShowHideContentService
}]), (0,_Applications_MAMP_www_dashboard_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "propDecorators", {
  imageContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }],
  divView: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['imageContainer']
  }],
  myValue: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ["removedImage", {
      static: false
    }]
  }],
  infoBarWrap: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ["infoBarWrap", {
      static: false
    }]
  }]
}), _class);
ImageManagerComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'dev-image-manager',
  template: _image_manager_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_image_manager_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ImageManagerComponent);


/***/ }),

/***/ 4255:
/*!*******************************************************!*\
  !*** ./src/app/image-manager/image-manager.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageManagerModule": () => (/* binding */ ImageManagerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared-data/shared-data.module */ 61948);
/* harmony import */ var _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-file-manage/shared-file-manage.module */ 1806);
/* harmony import */ var _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-formatting/shared-formatting.module */ 82744);
/* harmony import */ var _image_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-manager.component */ 80036);
/* harmony import */ var _image_manager_directories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-manager-directories.service */ 11492);
/* harmony import */ var _image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-manager-copy-to-local-dir.service */ 46626);
/* harmony import */ var _admin_dashboard_admin_image_manager_manage_library_pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin-dashboard/admin-image-manager/manage-library-pages.service */ 24096);
/* harmony import */ var _image_manager_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-manager.routes */ 86087);
/* harmony import */ var _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/utilities.module */ 93081);
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../menu/menu.module */ 32825);
/* harmony import */ var _search_library_pages_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-library-pages.pipe */ 91642);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _directives_image_manager_delete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/image-manager-delete.directive */ 90970);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/snackbar.service */ 45832);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {AccordionModule} from 'ngx-bootstrap';

















let ImageManagerModule = class ImageManagerModule {};
ImageManagerModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  providers: [_image_manager_directories_service__WEBPACK_IMPORTED_MODULE_4__.ImageManagerDirectoriesService, _image_manager_copy_to_local_dir_service__WEBPACK_IMPORTED_MODULE_5__.ImageManagerCopyToLocalDirService, _admin_dashboard_admin_image_manager_manage_library_pages_service__WEBPACK_IMPORTED_MODULE_6__.ManageLibraryPagesService, _services_snackbar_service__WEBPACK_IMPORTED_MODULE_12__.SnackbarService],
  imports: [
  // AccordionModule.forRoot(),
  _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _menu_menu_module__WEBPACK_IMPORTED_MODULE_9__.MenuModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _shared_shared_formatting_shared_formatting_module__WEBPACK_IMPORTED_MODULE_2__.SharedFormattingModule, _shared_shared_data_shared_data_module__WEBPACK_IMPORTED_MODULE_0__.SharedDataModule, _shared_shared_file_manage_shared_file_manage_module__WEBPACK_IMPORTED_MODULE_1__.SharedFileManageModule, _utilities_utilities_module__WEBPACK_IMPORTED_MODULE_8__.UtilitiesModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(_image_manager_routes__WEBPACK_IMPORTED_MODULE_7__.ROUTES), _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule],
  declarations: [_directives_image_manager_delete_directive__WEBPACK_IMPORTED_MODULE_11__.ImageManagerDeleteDirective, _image_manager_component__WEBPACK_IMPORTED_MODULE_3__.ImageManagerComponent, _search_library_pages_pipe__WEBPACK_IMPORTED_MODULE_10__.SearchLibraryPages],
  exports: [_image_manager_component__WEBPACK_IMPORTED_MODULE_3__.ImageManagerComponent],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.CUSTOM_ELEMENTS_SCHEMA]
})], ImageManagerModule);


/***/ }),

/***/ 86087:
/*!*******************************************************!*\
  !*** ./src/app/image-manager/image-manager.routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
/* harmony import */ var _image_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-manager.component */ 80036);

const ROUTES = [{
  path: '',
  component: _image_manager_component__WEBPACK_IMPORTED_MODULE_0__.ImageManagerComponent
}];

/***/ }),

/***/ 91642:
/*!************************************************************!*\
  !*** ./src/app/image-manager/search-library-pages.pipe.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchLibraryPages": () => (/* binding */ SearchLibraryPages)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SearchLibraryPages = class SearchLibraryPages {
  transform(pages, searchPages) {
    if (searchPages == null) return pages;
    return pages.filter(function (searchjson) {
      return searchjson.lib_page.toLowerCase().indexOf(searchPages.toLowerCase()) > -1;
    });
  }
};
SearchLibraryPages = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe)({
  name: 'searchlibrarypages',
  pure: false
})], SearchLibraryPages);


/***/ }),

/***/ 74971:
/*!**********************************************************************!*\
  !*** ./src/app/image-manager/image-manager.component.css?ngResource ***!
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

/***/ 16588:
/*!***********************************************************************!*\
  !*** ./src/app/image-manager/image-manager.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div id=\"image-manager\" class=\"image-manager-container\">\n\n    <h1>Stock Image Manager</h1>\n\n    <!-- Instructions -->\n    <div class=\"show-hide\">\n        <button type=\"button\" mat-raised-button (click)=\"showHide(showImageManagerInst = !showImageManagerInst);\">\n            Instructions\n        </button>\n        <br/>\n        <div [ngClass]=\"{'hide': !showImageManagerInst }\">\n            <br/>\n            <p>\n                Select desired ratio (1x1, 3x4 etc)<br/>\n                Select desired category (adult, braces etc)<br/>\n                Select library page<br/>\n                Select image to associate with library page<br/><br/>\n                Repeat ...\n            </p>\n\n            <p>Your selected image will be copied into the local buildkit.\n                (account-name/assets/uploads/images/)</p>\n\n        </div><!-- end showAssnInst -->\n    </div><!-- end show-hide -->\n\n    <div class=\"wow fadeIn\">\n\n        <div class=\"row\">\n<p class=\"text-warning\" style=\"margin-top: 20px;\">This page will add images to assets/uploads/images/, This directory is typically used for <br>\nteam member photos, location images and internal pages.</p>\n            <!-- show available ratios/categories/local images in /srwd/www/assets/images/stock-images -->\n            <div class=\"col-lg-2 col-md-2 col-sm-12\">\n\n                <h2>Ratio</h2>\n\n                <div class=\"wow fadeIn\">\n                    <button type=\"button\" mat-raised-button (click)=\"getRatioData(ratio = r)\"\n                            style=\"margin-right: 5px;\"\n                            *ngFor=\"let r of image_ratios; let i = index;\">\n                        {{r}}\n                    </button>\n                </div>\n\n                <br/>\n\n                <!-- select desired image category -->\n                <div *ngIf=\"image_categories\" class=\"wow fadeIn\">\n                    <h2>Category</h2>\n                    <div>{{noImagesMessage}}</div>\n                    <!-- prints category only for selection -->\n                    <div (click)=\"selectImageCategory(category = cat)\"\n                         *ngFor=\"let cat of image_categories; let i = index;\"\n                         class=\"image-category available-category\">{{ cat | capitalizeEachWord }}\n                    </div>\n                </div>\n\n                <br/>\n                <!-- get local files -->\n                <div class=\"wow local-image-container\">\n                    <h2 *ngIf=\"local_images?.length > 0\">Local Images</h2>\n\n                    <div *ngFor=\"let local_file of local_images; let i = index; let even=even; let odd=odd;\"\n                         class=\"wow fadeIn\">\n\n                        <mat-card>\n                            <mat-card-content>\n                                <div class=\"item-info-bar\" style=\"height: 16px;\">\n                                    <mat-icon class=\"float-end text-warning\" style=\"padding: 0;\"\n                                              *ngIf=\"local_images.length > 0\"\n                                              (click)=\"confirmDeleteMessage(i, local_images[i])\">close\n                                    </mat-icon>\n                                    <div class=\"float-end\" *ngIf=\"deleteConfirmationArray[i]\">\n\n                                        <a class=\"margin-right5  text-danger delete-image\"\n                                           (click)=\"confirmDelete(i, local_images[i], 'deleteItem')\">\n                                            Confirm</a>\n\n                                        &nbsp;<a class=\"margin-right5   text-warning delete-image\"\n                                                 (click)=\"confirmDelete(i, null, 'cancelDeleteItem')\">\n                                        Cancel</a>\n                                    </div>\n\n                                </div>\n                                <br/>\n                                <div class=\"local-image-thumb-container\">\n                                    <!-- image -->\n                                    <img class=\"local-image-thumbs\" #removedImage\n                                         src=\"../{{sitecontext.account}}/assets/uploads/images/{{local_file}}?{{localimg}}\"\n                                         style=\"display: inline-block;\" alt=\"\"/>\n                                    <!-- name of page -->\n                                    <div style=\"clear: both; min-height: 24px; padding: 3px;\">{{local_file}}</div>\n\n                                </div>\n                            </mat-card-content>\n                        </mat-card>\n\n                    </div>\n                </div>\n            </div>\n\n            <!-- show library pages -->\n            <div class=\"col-lg-3 col-md-3 col-sm-12\">\n                <h2>Library Page</h2>\n\n                <div class=\"form-group border-d8d8d8 rounded-top-bottom\" style=\"padding:10px;\">\n\n                    <h4 for=\"search\">Search pages</h4>\n                    <div class=\"sesame-green\">bone grafts (no dashes)</div>\n                    <input id=\"search\"\n                           class=\"form-control\"\n                           type=\"text\"\n                           [(ngModel)]=\"searchPages\"\n                           placeholder=\"Search By Page Name\"\n                           #search_pages/>\n                </div>\n\n                <!-- list library pages -->\n                <div class=\" library-page-item\"\n                     *ngFor=\"let lp of library_pages | searchlibrarypages: searchPages;\n                     let i = index;\"\n                     (click)=\"newFileName = lp.lib_page\">\n\n                    <!-- set status of selected library page  -->\n                    <div (click)=\"setSelectedPageActive(lp)\"\n                         [class.selected-page]=\"lp === pageSelected\">\n                        {{lp.lib_page | replaceCharactersExceptDash | replaceTrailingDash | replaceSpaceDash |\n                        toLowercase\n                        }}\n                    </div>\n\n                </div>\n            </div>\n\n            <!-- start available image thumbs -->\n            <div class=\"col-lg-7 col-md-7 col-sm-12\">\n\n                <h2>Status</h2>\n                <!-- show ratio/categories status in this status container -->\n                <div class=\"wow fadeIn status-container\">\n                    <span *ngIf=\"ratioSelected\"><span\n                            [ngClass]=\"['status-item', 'bg-info']\">{{ratioSelected}}</span></span>\n                    <span *ngIf=\"imageCategory\"><span\n                            [ngClass]=\"['status-item', 'bg-info']\">{{imageCategory}}</span></span>\n                    <span *ngIf=\"pageTitleError == false\"><span\n                            [ngClass]=\"['status-item', 'bg-warning']\">{{pageTitleSelectedMsg}}</span></span>\n                    <span *ngIf=\"selectImageStatus == true\"><span\n                            [ngClass]=\"['status-item', 'bg-warning']\">{{selectImageStatusMsg}}</span></span>\n                    <span *ngIf=\"imageRatioStatus == false\"><span\n                            [ngClass]=\"['status-item', 'bg-warning']\">{{imageRatioStatusMsg}}</span></span>\n                    <span *ngIf=\"imageCategoriesStatus == false\"><span\n                            [ngClass]=\"['status-item', 'bg-warning']\">{{imageCategoriesStatusMsg}}</span></span>\n                </div><!-- end status-container -->\n\n                <!-- Show available images -->\n                <div class=\"wow fadeIn\" *ngIf=\"available_image_thumbs && category\">\n                    <h2>Available Images</h2>\n                    <div class=\"available-images-container\">\n                        <div class=\"image-maxwidth-111\" *ngFor=\"let f of available_image_thumbs; let i = index;\">\n                            <div class=\"avail-thumb image-maxwidth-111\">\n                                <img\n                                        class=\"image-maxwidth-111 available-image\"\n                                        src=\"{{f}}\"\n                                        style=\"display: inline-block;\"\n                                        alt=\"{{f}}\"\n                                        (click)=\"renameAndCopyToLocalDir(sitecontext.account, currentFileName = f , newFile = newFileName, ind = i); \"/>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_image-manager_image-manager_module_ts.js.map