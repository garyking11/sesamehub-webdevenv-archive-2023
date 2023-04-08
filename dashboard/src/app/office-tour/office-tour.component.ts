import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {SnackbarService} from '../services/snackbar.service';
import {FormBuilder} from '@angular/forms';
import {OfficeTourService} from './office-tour.service';
import {OfficeTourInterface} from './office-tour.interface';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

@Component({
    selector: 'office-tour',
    templateUrl: './office-tour.component.html'
})
export class OfficeTourComponent implements OnInit, AfterViewInit {

    title = 'Office Tour';
    public officeTourInst: any;
    public OTInterface?: OfficeTourInterface;
    public siteContext?: SiteContext;
    public nbsp = '\u0026nbsp;';
    public lCurly = '&#123;';
    public rCurly = '&#125;';
    public imageDirectory: string = 'images/office-tour';

    ngAfterViewInit() {}

    ngOnInit(): void {
        this.getOfficeTourImages();
        this.getSiteContext();
    }

    constructor(
        private _fb: FormBuilder,
        private _officeTourService: OfficeTourService,
        private _siteContextProviderService: SiteContextProviderService,
        private _copyDataToClipboardService: CopyDataToClipboardService,
        private _showHideContentService: ShowHideContentService,
        private _snackBarService: SnackbarService,
    ) {}

    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            res => {
                this.siteContext = res;
                this.getOfficeTourImages(); // data
                this.verifySiteContext(this.siteContext.account);
            },
            error => console.log(error)
        );
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
    drop(event: CdkDragDrop<OfficeTourInterface>) {
        if (!this.OTInterface) {
            return;
        }

        moveItemInArray((this.OTInterface.images), event.previousIndex, event.currentIndex);
    }

    /**
     * Get office tour data
     */
    getOfficeTourImages() {
        this._officeTourService.getOfficeImages().subscribe({
            next: (OTInterface: OfficeTourInterface) => {
                this.OTInterface = OTInterface; // data not images
            }
        })
    }

    /**
     * JSON data
     * @param MTTInterface
     */
    saveOfficeTourImages(OTInterface: OfficeTourInterface) {
        let siteContext = this.siteContext.account;

        let OTImages = {
            account: siteContext,
            images: this.OTInterface.images
        }

        this._officeTourService.sendOfficeTourImage(OTImages).subscribe();

        this._snackBarService.openSnackBar('Your ' + this.imageDirectory + ' data has been saved!', '');
    }

    addImage() {
        this.OTInterface?.images.push({
            path: null,
            imageAlt: '',
            altCaption: ''
        })
    }

    removeImage(index: number) {
        this.OTInterface?.images.splice(index, 1);
    }

    /**
     * Show hide content areas within forms
     * @param item
     * Utilities Module
     */
    showHide(item: any) {
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
    copyThisHTMLToClipboard(x: string) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
    }

    copyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }
}
