import { Component, OnInit } from '@angular/core';
import {GetLocalImagesService} from '../services/get-local-images.service';
import {SnackbarService} from '../services/snackbar.service';
import {BeforeAndAfterInterface} from './before-and-after.interface';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {BeforeAndAfterService} from './before-and-after.service';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

@Component({
    selector: 'before-and-after',
    templateUrl: './before-and-after.component.html'
})
export class BeforeAndAfterComponent implements OnInit {

    title = 'Before and After';
    public nbsp = '\u0026nbsp;'
    public lCurly = '&#123;';
    public rCurly = '&#125;';
    public BAInterface?: BeforeAndAfterInterface;
    public siteContext?: SiteContext;
    public showBAInst: any;
    public imageDirectory: string = 'images/before-after-cycle';

    constructor(
        private _getLocalImagesService: GetLocalImagesService,
        private _siteContextProviderService: SiteContextProviderService,
        private _beforeAndAfterService: BeforeAndAfterService,
        private _copyDataToClipboardService: CopyDataToClipboardService,
        private _showHideContentService: ShowHideContentService,
        private _snackBarService: SnackbarService,
    ) {}

    ngOnInit() {
        this.getSiteContext();
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            res => {
                this.siteContext = res;
                this.getBeforeAfterValues(); // data
            },

            error => console.log(error)
        );
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<BeforeAndAfterInterface>) {
        if (!this.BAInterface) {
            return;
        }

        moveItemInArray((this.BAInterface.images), event.previousIndex, event.currentIndex);
    }

    /**
     * JSON data
     */
    getBeforeAfterValues() {
        this._beforeAndAfterService.getBAImageValues().subscribe({
            next: (BAInterface: BeforeAndAfterInterface) => {
                this.BAInterface = BAInterface;
            }
        })
    }

    saveBeforeAfterImages(BAInterface: BeforeAndAfterInterface){
        let siteContext = this.siteContext.account;

        let BAImages = {
            account: siteContext,
            images: this.BAInterface.images
        }

        this._beforeAndAfterService.sendBeforeAfterImage(BAImages).subscribe();
        this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
    }

    addImage() {
        this.BAInterface?.images.push({
            path: null,
            imageAlt: '',
            altCaption: ''
        })

    }

    removeImage(index: number) {
        this.BAInterface?.images.splice(index, 1);
    }

    /**
     * Show hide content areas within forms
     * @param item
     * Utilities Module
     */
    showHide(item:any) {
        this._showHideContentService.showHideContent(item);
    }

    /**
     * Copy HTML/CSS markup to clipboard
     */
    copyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    copyThisHTMLToClipboard(x:string) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
    }

    copyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }

}


