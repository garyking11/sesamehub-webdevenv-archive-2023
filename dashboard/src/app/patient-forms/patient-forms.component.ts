import {Component, OnInit, Compiler, Input, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators, NgForm, FormControl} from "@angular/forms";
import {PatientFormsService} from "./patient-forms.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {ShowHideContentService} from "../services/show-hide-content.service";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion} from '@angular/material/expansion';
import {
    CdkDragDrop,
    CdkDragEnter,
    CdkDragMove,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import {SnackbarService} from "../services/snackbar.service";

@Component({
    selector: 'dev-patient-forms',
    templateUrl: './patient-forms.component.html',
    styleUrls: ['./patient-forms.component.scss']
})
export class PatientFormsComponent implements OnInit {


    private account: string;
    private patientFormsForm: FormGroup;
    private patientFormsDataArray: any[] = [];
    private deleteConfirmationArray: boolean[] = [];
    private sitecontext: any;
    private confirm: boolean = false;
    private cancel: boolean = false;
    public siteData: any[] = [];
    public name: string;
    private isLoading: boolean;
    public formValue: any[] = [];
    public nbsp = '\u0026nbsp;'
    public pedo: string;
    public officeCategory: any;
    @Input() patientForm: any;
    public url: any;
    public patientFormText;
    public headerName: string;

    constructor(private _patientFormsService: PatientFormsService,
                private _siteContextProviderService: SiteContextProviderService,
                private _copyDataToClipboardService: CopyDataToClipboardService,
                private _customValidatorService: CustomValidatorsService,
                private _showHideContent: ShowHideContentService,
                private _snackBarService: SnackbarService,
                private _fb: FormBuilder,
                private _compiler: Compiler
    ) {

        this.patientFormsForm = new FormGroup({
            items: new FormArray([]),
            officeCategory: new FormControl('')
        });
    }

    patientFormExtension = [
        {value: null, display: 'Select Standard Form'},
        {value: '.pdf', display: '.pdf'},
        {value: '.doc', display: '.doc'},
        {value: '.docx', display: '.docx'}
    ]
    formCategory = [
        {value: null, display: 'Select Office Category'},
        {value: 'pediatric', display: 'Pediatric'},
        {value: 'ortho-dental', display: 'Ortho | Dental'}
    ]
    // nested array not working
    patientFormType = [
        {id: 0, value: 'create new', display: 'Create New', name: 'create new', url: ''},
        {id: 1, value: 'Child New Patient PDF', display: 'Child New Patient PDF', name: 'Child New Patient PDF',  url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child.pdf' },
        {id: 2, value: 'Child New Patient DOC', display: 'Child New Patient DOC', name: 'Child New Patient DOC',  url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child.doc' },
        {id: 3, value: 'Adult New Patient PDF', display: 'Adult New Patient PDF', name: 'Adult New Patient PDF', url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-adult.pdf' },
        {id: 4, value: 'Adult New Patient DOC', display: 'Adult New Patient DOC', name: 'Adult New Patient DOC', url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-adult.doc' },
        {id: 5, value: 'Child and Adult PDF', display: 'Child and Adult PDF', name: 'Child and Adult PDF', url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child-adult.pdf' },
        {id: 6, value: 'Child and Adult DOC', display: 'Child and Adult DOC',  name: 'Child and Adult DOC', url: 'http://sesamehub.com/sesame_media/docs/patient-dental-form-child-adult.doc' }
    ]

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
    updateUrl(name , i) {
        let obj =  this.patientFormType.find(x => x.name === name);
        (<FormArray>this.patientFormsForm.controls['items']).controls[i].get('name').setValue(obj.name);
        (<FormArray>this.patientFormsForm.controls['items']).controls[i].get('url').setValue(obj.url);
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray((<FormArray>this.patientFormsForm.controls['items']).controls, event.previousIndex, event.currentIndex);
        this.patientFormsForm.controls['items'].updateValueAndValidity();
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    onGetSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.sitecontext = data;
                // Send account name to onGetLocalFormData
                this.onGetFormData(data.account);
                // this.onGetProductType(data.account);
            },
            error => console.log(error)
        );

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
    onGetFormData(account: string) {
        this._patientFormsService.getFormData(account).subscribe(
            res => {
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

                    var control = <FormArray>patientFormsForm.controls['items'];

                    control.push(component._fb.group({
                        name: [item.name],
                        ext: [item.ext],
                        url: [item.url], //, Validators.required
                        patientFormText: [item.patientFormText],

                    }));

                    // this._customValidatorService.verifyExtensionExists
                    component.deleteConfirmationArray.push(false);

                });
            },
            error => console.log(error)
        );

        return this.patientFormsDataArray;
    }

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    onSetPatientFormData(form: FormGroup) {
        var patientformsdata =
            {
                officeCategory: form.value.officeCategory,
                account: this.sitecontext.account,
                patientFormsData: form.value.items
            };

        // Get new values
        this._patientFormsService.setFormData(patientformsdata).subscribe(
            data => {
                this._compiler.clearCache();
                this.patientFormsForm.controls['items'].updateValueAndValidity();
                this._snackBarService.openSnackBar('Your patient forms data has been saved!', '');
                console.log('Patient Form data updated: ' + new Date().toUTCString());
            },
            error => console.log(error)
        );
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
        const control = <FormArray>this.patientFormsForm.controls['items'];
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
    removeItem(i: number) {
        const control = <FormArray>this.patientFormsForm.controls['items'];
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

    onSortSuccessful(e): void {
        this.patientFormsForm.controls['items'].updateValueAndValidity();
    }
}


