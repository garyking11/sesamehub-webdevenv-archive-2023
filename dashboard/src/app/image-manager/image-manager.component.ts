import {
    Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit} from '@angular/core';
import {ImageManagerDirectoriesService} from './image-manager-directories.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {ImageManagerCopyToLocalDirService} from './image-manager-copy-to-local-dir.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {ManageLibraryPagesService} from '../admin-dashboard/admin-image-manager/manage-library-pages.service';
import {SnackbarService} from "../services/snackbar.service";

@Component({
    selector: 'dev-image-manager',
    templateUrl: './image-manager.component.html',
    styleUrls: ['./image-manager.component.css']
})
export class ImageManagerComponent implements OnInit, AfterViewInit {

    public imagerepo = 'stock-images';
    private account: string;
    private sitecontext: any;
    // categories
    public category: string;
    public imageCategory: string;
    public image_categories: any;
    public imageCategoriesStatus = false;
    public imageCategoriesStatusMsg: string;
    // images
    public noImagesMessage: string;
    public selectedSuccessMessage: string;
    public image_files: any[] = [];
    // thumbs
    public available_image_thumbs: any;
    public newFileName: string;
    public currentFileName: string;
    // pages
    public pageTitleSelectedMsg: string;
    public pageTitleError = true;
    public filterargs = {lib_page: 'abo-certification'};
    // local images
    public local_images: any[] = [];
    public localimg: string;
    public localImageData: any[] = [];
    // delete
    private deleteConfirmationArray: boolean[] = [];
    private confirm = false;
    private cancel = false;
    // pages
    public ind: number;
    public pageSelected: string;
    public selectImageStatus = false;
    public selectImageStatusMsg: string;
    // ratios
    public ratioDirectory: any;
    public ratioSelected: any;
    public ratio: string;
    public image_ratios: any[] = [];
    public imageRatioStatus = false;
    public imageRatioStatusMsg: string;
    public library_pages: any[] = [];

    @Input() imageContainer = 'bob';
    @ViewChild('imageContainer') divView: ElementRef;

    constructor(
        private _imageManagerDirectoriesService: ImageManagerDirectoriesService,
        private _siteContextProviderService: SiteContextProviderService,
        private _imageManagerCopyToLocalDirService: ImageManagerCopyToLocalDirService,
        public _manageLibraryPagesService: ManageLibraryPagesService,
        private _snackBarService: SnackbarService,
        public el: ElementRef,
        public renderer: Renderer2,
        private _showHideContent: ShowHideContentService) {
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
        this._manageLibraryPagesService.getData().subscribe(
            res => {
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
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.sitecontext = data;
                // get local image files from assets/uploads/images when page loads
                this.getLocalFiles();
            },
            error => console.log(error)
        );
        return this.sitecontext;
    }

    /**
     * Get account image files from assets/uploads/images
     */
    getLocalFiles() {
        this._imageManagerCopyToLocalDirService.listLocalAccountImages(this.sitecontext.account).subscribe(
            localImageData => {
                this.localimg = new Date().getTime().toString();
                this.local_images = localImageData;
                if (localImageData) {
                } else {
                    this.noImagesMessage = 'No images selected available for this ratio';
                }
            },
            error => console.log(error)
        );
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

        this._imageManagerDirectoriesService.getRatioDirectories(imagerepo).subscribe(
            data => {
                this.image_ratios = data;

                if (data) {
                } else {
                    this.noImagesMessage = 'No ratio directories available!';
                }
            },
            error => console.log(error)
        );
        return this.image_ratios;
    }

    /**
     * Select category ie: adult, children, braces etc.
     * @param cat
     */
    selectImageCategory(cat) {
        this.imageCategory = cat;
        let categorydata = {
            imageManager: [{ratio: this.ratio, category: this.category}]
        }


        this._imageManagerDirectoriesService.setImageCategoryData(categorydata).subscribe(
            data => {
                this.getAvailableImages(this.ratio, this.category);
            },
            error => console.log(error)
        );
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

        let ratiodata =
            {
                imageManager: [{ratio: ratio, category: cat}]
            }

        this._imageManagerDirectoriesService.setImageRatioData(ratiodata).subscribe(
            data => {
            },
            error => console.log(error)
        );

        this.getAvailableImages(ratio = this.ratio, cat = null);
    }

    /**
     * @param ratio
     * @returns {any}
     */
    getRatioData(ratio) {

        this.setRatioData(ratio);
        this._imageManagerDirectoriesService.getRatioDirContents(this.imagerepo, ratio).subscribe(
            data => {
                try {
                    data = data;
                } catch (e) {
                    return;
                }

                this.image_categories = data;

                if (data) {
                    this.image_categories = data;
                    this.imageRatioStatus = true;

                } else {
                }
            },
            error => console.log(error)
        );
        return this.ratioDirectory;
    }

    /**
     * Get category images by ratio and category from stock-images (imagerepo) directory
     * @param ratio
     * @param category
     * @returns {any}
     */
    getAvailableImages(ratio, category) {
        this._imageManagerDirectoriesService.getImages(this.ratio, this.category, this.imagerepo).subscribe(
            data => {

                try {
                    data = data;
                } catch (e) {
                    return;
                }

                this.available_image_thumbs = data;

                if (data) {
                    this.available_image_thumbs = data;
                    this.selectedSuccessMessage = this.ratio + ' ' + this.category;

                    this.available_image_thumbs.forEach(function (img) {
                    });

                } else {
                    this.noImagesMessage = 'No images available for this ratio';
                }
            },
            error => console.log(error)
        );

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

            this._imageManagerCopyToLocalDirService.copyImagesToLocal(account, currentname, newcleanedfilename, rat, cat, this.imagerepo).subscribe(
                data => {
                    this.setSelectedPageActive(null);
                    this.currentFileName = null;
                    this.newFileName = null;
                    this.getLocalFiles();
                    this._snackBarService.openSnackBar('Your image has been copied to local directory!', '');
                },
                error => 'No page name selected'
            );
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
            this.selectImageStatus = false
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
            return false
        }
    }

    /**
     * Deletes file from account-name /assets/uploads/images/itemVal using php unlink
     * @param sitecontext
     * @param itemVal
     */
    deleteImageManagerImage(sitecontext, itemVal, i) {
        // deletes image from assets/uploads/images using endpoint
        this._imageManagerCopyToLocalDirService.deleteImageFromLocalDir(sitecontext, 'uploads/images', itemVal).subscribe(
            data => {
                // do not show img element if n/a
                this.local_images = this.local_images.filter((image, idx) => i !== idx);
            },
            error => console.log(error)
        );
    }

    /**
     * Remove items from the list
     * @param i
     * @param itemVal
     */

    @ViewChild("removedImage", {static: false}) myValue: ElementRef;
    @ViewChild("infoBarWrap", {static: false}) infoBarWrap: ElementRef;

    removeItem(i: number, itemVal: any) {
        this.deleteImageManagerImage(this.sitecontext.account, itemVal, i);

    }
}
