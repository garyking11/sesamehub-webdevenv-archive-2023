import {Component, OnInit, Compiler, ViewChild, ElementRef, DoCheck} from '@angular/core';
import {FormGroup, Validators, NgForm, FormArray, FormBuilder, FormControl, AbstractControl} from '@angular/forms';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {SectionsService} from './sections.service';
import {ShowHideContentService} from '../services/show-hide-content.service';
import {AdminService} from '../admin-dashboard/admin/admin.service';
// import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/find';

import {
    CdkDragDrop,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import {SnackbarService} from "../services/snackbar.service";
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {SectionsInterface} from './sections.interface';

/*
GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS GOALS
1. CONTENT IS REQUIRED
2. ONLY SPOTLIGHT DUPLICATES ALLOWED
3. UPDATE VALUES FROM SUBITEMS
4. VALDIATION MESSAGE


Some of this was working prior to the current error
*/


@Component({
    selector: 'dev-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.css']
})

export class SectionsComponent implements OnInit {
    // @ViewChild('duplicateError', {static: false}) ModalStatic;
    @ViewChild('sectionSaveBtn', {static: false}) sectionSaveBtn: ElementRef;
    public siteContext?: SiteContext; // interface
    public secInterface?: SectionsInterface;
    public account: string;
    public sectionDataForm: FormGroup;
    private sectionDataArray: any[] = [];
    private sitecontext: any;
    public Hero = false;
    public Services = false;
    public Content = false;
    public Maps = false;
    public Association_Logos = false;
    public Testimonial_Rotator = false;
    public os: any;
    private admindata: any;
    public buildkitversion: string;
    private navOptions: string;
    private subnavOptions: string;
    public sm_version: string;
    public builder: string;
    public gacode: string;
    public launchUrl: string;
    public selectedHeroValue?: any;
    public selectedSpotlightValue?: any;
    public selectedTestimonialValue?: any;
    public selectedAssociationLogoValue?: any;

    // PROBLEMATIC as there are no more controls ////////////////////////////
    public invalidControls: AbstractControl[] = [];


    // layout_styles
    contentLayoutArray = [
        {value: 'content-top-oriented-subnav', display: 'Top Subnav'},
        {value: 'content-side-oriented-subnav', display: 'Side Subnav'}
    ];
    // slideshow layout array
    slideshowLayoutArray = [
        {value: 'classic', display: 'Classic'},
        {value: 'video', display: 'Video'}
    ];
    // spotlight array
    spotlightLayoutArray = [
        {value: 'spotlight-one-horizontal', display: 'Spotlight One Horizontal'},
        {value: 'spotlight-two-horizontal', display: 'Spotlight Two Horizontal'},
        {value: 'spotlight-three-horizontal', display: 'Spotlight Three Horizontal'},
        {value: 'spotlight-four-horizontal', display: 'Spotlight Four Horizontal'},
        {value: 'spotlight-five-horizontal', display: 'Spotlight Five Horizontal'},
        {value: 'spotlight-column-img-left', display: 'Image Left '},
        {value: 'spotlight-column-img-right', display: 'Image Right '}
    ];
    // testimonialRotator array
    testimoniaRotatorLayoutArray = [
        {value: 'testimonials', display: 'Testimonials'},
    ];
    // assnLogos array
    assnLogosLayoutArray = [
        {value: 'association-logos', display: ' '}
    ];
    // subnavOptions array not used
    subnavOptionsArray = [
        {value: 'top', display: 'Page Top'},
        {value: 'side', display: 'Page Side'},
    ];
    // navOptions array
    navOptionsArray = [
        {value: 'standard', display: 'Page Top'},
        {value: 'fullmob', display: 'Full Mobile'},
        {value: 'tertiary', display: 'Page Top Tertiary'}
    ];

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * Check for duplicates and return if there are duplicates
     * @type {boolean}
     */
    public hasDuplicates = false;
    public missingContent = false;
    public dupeArray: any[] = [];
    public duplicateSectionArray;


    /**
     * Main level section types array
     * @type {{value: string; display: string}[]}
     */
    private sectionTypes = [
        {value: 'Hero', display: 'Hero', name: 'Hero'},
        {value: 'Content', display: 'Content', name: 'content'},
        {value: 'Spotlight', display: 'Spotlight', name: 'Spotlight'},
        {value: 'Testimonial_Rotator', display: 'Testimonial Rotator', name: 'Testimonial Rotator'},
        {value: 'Association_Logos', display: 'Association Logos', name: 'Association Logos'}
    ];

    /**
     *
     * @param _sectionsService
     * @param _siteContextProviderService
     * @param _copyDataToClipboardService
     * @param _showHideContent
     * @param _fb
     * @param _compiler
     */
    constructor(private _sectionsService: SectionsService,
                private _siteContextProviderService: SiteContextProviderService,
                private _copyDataToClipboardService: CopyDataToClipboardService,
                // private _showHideContent: ShowHideContentService,
                // public selectedContentValue,
                // public _adminService: AdminService,
                // private router: Router,
                private _snackBarService: SnackbarService
    ) {
    }

    /**
     *
     * @type {{value: string; display: string}[]}
     */
    ngOnInit() {
        this.getSiteContext();
        // this.getFormData(null);
        // this.getAdminData();
        this.getCreateBuildkitValues();
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<SectionsInterface>) {
        if (!this.secInterface) {
            return;
        }
        moveItemInArray((this.secInterface.formData), event.previousIndex, event.currentIndex);
    }



    /*getAdminData() {
        this._adminService.getFormData().subscribe(
            data => {
                this.admindata = data.adminData;
                this.buildkitversion = this.admindata[0].version;
                // console.log(this.buildkitversion);
            }
        );
    }*/

    /**
     * Update child components (notify)="onNotify($event)"
     */
    onNotify(): void {
        // this.sectionDataForm.controls['items'].updateValueAndValidity();
    }

    /**
     * Oad component into sections component
     * @param comp
     */
    loadComp(comp) {
        return comp;
    }

    /**
     * Show hide content areas within forms
     * @param item
     */
    showHide(item) {
        // this._showHideContent.showHideContent(item);
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    // SHOULD BE CONVERTED TO INTERFACE EVENTUALLY
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            context => {
                this.sitecontext = context;
                this.account = context.account;
                this.sm_version = context.sm_version;
                this.builder = context.builder;
            },
            error => console.log(error)
        );

        return this.sitecontext;
    }

    /**
     * Get current form data from selected account /www/assets/includes/data/form-data-json
     * @param account
     * @returns {any[]}
     */
    getCreateBuildkitValues() {
        this._sectionsService.getSectionsValues().subscribe({
            next: (secInterface: SectionsInterface) => {
                this.secInterface = secInterface;
            }
        })
    }

    /**
     * Clear all spotlights
     */
    clearComponents() {
        function isContentName(element, index, array) {
            return (element >= 10);
        }

        let contentSection = [].filter(isContentName);

        let formdata = {
            account: this.sitecontext.account,
            formData: [{
                name: '',
                spotlight_layout_style: '',
                slideshow_layout_style: '',
                content_layout_style: '',
                testimonial_rotator_layout_style: 'testimonials',
                spotlight_flip_layout_style: '',
                assn_logo_layout_style: 'association-logos'
            }]
        };

        this._sectionsService.setBuildkitValues(formdata).subscribe(
            data => {},
            error => console.log(error)
        );

        this._snackBarService.openSnackBar('Your spotlights have been cleared and saved!', '');

         location.reload();
    }

    /**
     * Save buildkit component values
     * @param form
     */
    saveBuildkitValues() {
        const form = this.secInterface;
        let ctrl = this;
        let valueArr = this.secInterface.formData.map(function (item) {
            console.log(item.name);
            return item.name
        });


        /**
         * Allow spotlight duplicates
         */
        // PROBLEMATIC  ctrl ///////////////////////////
        /*ctrl.duplicateSectionArray = valueArr;
        let isDuplicate = ctrl.duplicateSectionArray.some(function (item, idx) {

            return valueArr.indexOf(item) !== idx && item !== 'Spotlight';
        });

        if (this.missingContent) {
            return;
        }

        if (this.hasDuplicates) {
            return
        }*/

        let formdata = {
            account: this.sitecontext.account,
            sm_version: this.sitecontext.sm_version,
            navOptions: this.secInterface.navOptions,
            subnavOptions: this.secInterface.subnavOptions,
            tagline: this.secInterface.tagline,
            gacode: this.secInterface.gacode,
            formData: this.secInterface.formData
        };

        this._sectionsService.setBuildkitValues(formdata).subscribe(
            data => {},
            error => console.log(error)
        );
        this._snackBarService.openSnackBar('Your project has been saved!', '');
        this.launchBuildkitTemplate();
    }

    /**
     * get OS
     */
    launchBuildkitTemplate() {
        this.os = this._siteContextProviderService.getOS()
        console.log(this.os);
        // launch account-name buildkit
        if (this.os === 'OSX') {
            console.log(this.os);
            this.launchUrl = 'http://localhost:8888/' + this.account + '/#/'
            window.open(this.launchUrl, '_blank');
        }
        if (this.os === 'PC') {
            console.log(this.os);
            this.launchUrl = 'http://localhost/' + this.account + '/#/'
            window.open(this.launchUrl, '_blank');
        }
    }

    /**
     * Add item to the list
     */
    addItem() {
        const i = 0;
        this.secInterface?.formData.push({
            name: '',
            spotlight_layout_style: '',
            slideshow_layout_style: '',
            content_layout_style: '',
            testimonial_rotator_layout_style: 'testimonials',
            spotlight_flip_layout_style: '',
            assn_logo_layout_style: 'association-logos'
        })
    }

    /**
     * Remove items from the list
     * @param i
     * @param itemVal
     */

    removeItem(index: number) {
        this.secInterface?.formData.splice(index, 1);
    }


    /**
     *
     * Add testimonials to allowed multiple selections
     */
    getAvailableTypes(): string[] {
        const used = this.secInterface.formData.filter(i => i.name !== 'Spotlight' && i.name !== 'Testimonial_Rotator');
        return ['Spotlight', 'Hero', 'Content', 'Testimonial_Rotator', 'Association_Logos'].filter(i => !used.some(s => s.name === i));
    }

    isContentSectionAdded(): boolean {
        return this.secInterface.formData.some(i => i.name === 'Content');
    }

}