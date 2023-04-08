import {Component, OnInit} from '@angular/core';
import {LocationInterface} from './location.interface';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {LocationService} from './location.service';
import {SnackbarService} from '../services/snackbar.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {ImageManagerCopyToLocalDirService} from '../image-manager/image-manager-copy-to-local-dir.service';

@Component({
    selector: 'dev-location',
    templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

    title = 'location';
    public locInterface?: LocationInterface;
    public siteContext?: SiteContext;
    public selectedSliderImage?: string;
    public nbsp = '\u0026nbsp;';
    public lCurly = '&#123;';
    public rCurly = '&#125;';
    public showLocationInst: any;
    public noImagesMessage: string;
    public imageDirectory: string = "uploads/images";

    constructor(
        private _siteContextProviderService: SiteContextProviderService,
        private _locationService: LocationService,
        private _copyDataToClipboardService: CopyDataToClipboardService,
        private _showHideContentService: ShowHideContentService,
        private _snackBarService: SnackbarService,
        private _imageManagerCopyToLocalDirService: ImageManagerCopyToLocalDirService,
    ) {
    }

    ngOnInit(): void {
        this.getSiteContext();
        this._siteContextProviderService.getCurrentContext();

        this.getLocations();
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            res => {
                this.siteContext = res;
                this.getLocations(); // data
            },
            error => console.log(error)
        );
    }

    /**
     * data
     */
    getLocations() {
        this._locationService.getLocations().subscribe({
            next: (locInterface: LocationInterface) => {
                this.locInterface = locInterface;
            }
        })
    }

    saveLocations(locInterface: LocationInterface) {
        let siteContext = this.siteContext.account;
        let locations = {
            standardWidth: locInterface.standardWidth,
            standardHeight: locInterface.standardHeight,
            account: siteContext,
            locations: locInterface.locations
        }

        this._locationService.sendLocations(locations).subscribe();

        this._snackBarService.openSnackBar('Your location data has been saved!', '');
    }

    /**
     *
     * @param e
     */
    selectedImageChanged(e: any) {
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
    drop(event: CdkDragDrop<LocationInterface>) {
        if (!this.locInterface) {
            return;
        }
        moveItemInArray((this.locInterface.locations), event.previousIndex, event.currentIndex);
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
        })
    }

    removeLocation(index: number) {
        this.locInterface?.locations.splice(index, 1);
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

    copyThisHTMLToClipboard(x: string) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(x);
    }

    copyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }

}
