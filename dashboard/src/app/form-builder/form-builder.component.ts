import {Component, OnInit} from '@angular/core';
import {FormBuilderService} from './form-builder.service';
import {FormBuilderInterface} from './form-builder.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {SnackbarService} from '../services/snackbar.service';

@Component({
    selector: 'dev-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css'],
})

export class FormBuilderComponent implements OnInit {
    public title = ' Form Builder';
    public FBInterface?: FormBuilderInterface;
    public sitecontext: string;
    public formTypeArray = [
        {value: "text", display: "Text"},
        {value: "textarea", display: "Textarea"},
        {value: "select", display: "Select"},
        {value: "checkbox", display: "Checkbox"}
    ];

    constructor(
        public _formBuilderService: FormBuilderService,
        public _siteContextProviderService: SiteContextProviderService,
        public _copyDataToClipboardService: CopyDataToClipboardService,
        public _snackBarService: SnackbarService
    ) {
    }

    public get formFieldNamesConcatenation(): string {
        return this.FBInterface?.formFieldArray.filter(f => f.required).map(f => f.name).join(",") ?? "";
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<FormBuilderInterface>) {
        if (!this.FBInterface){
            return;
        }
        moveItemInArray((this.FBInterface.formFieldArray), event.previousIndex, event.currentIndex);
    }

    ngOnInit(): void {
        this.getSiteContext();
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            siteContext => {
                this.sitecontext = siteContext.account;
                this.getFormBuilderProperties(this.sitecontext);
            },
            error => console.log(error)
        );
        return this.sitecontext;
    }

    /**
     * Get form field properties from account-name/assets/includes/form-field-data.json
     * @param sitecontext
     */
    getFormBuilderProperties(sitecontext: string) {
        this._formBuilderService.getFormBuilderProperties(sitecontext).subscribe({
            next: (FBInterface: FormBuilderInterface) => {
                this.FBInterface = FBInterface;
            }
        })
    }

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    setFormBuilderProperties() {
        // Set new values
        this.FBInterface.account = this.sitecontext;
        this._formBuilderService.setSiteFormBuilderProperties(this.FBInterface).subscribe(
            form => {
                this._snackBarService.openSnackBar('Your form has been saved!', '');
                console.log('Form Builder properties updated: ' + new Date().toUTCString());
            },
            error => console.log(error)
        );
    }

    /**
     * Add Form Block
     */
    addFormBlock() {
        if (!this.FBInterface) return;

        this.FBInterface.formFieldArray.unshift({
            type: "text",
            name: "",
            label: "",
            required: false
        })
    }

    removeFormBlock(index: number) {
        this.FBInterface?.formFieldArray.splice(index, 1);
    }

    /**
     *
     * @param index
     */
    addFormFieldOption(index) {
        if (!this.FBInterface) return;

        if (!this.FBInterface.formFieldArray[index].options) {
            this.FBInterface.formFieldArray[index].options = [];
        }

        this.FBInterface.formFieldArray[index].options.unshift({display: ''});
    }

    /**
     *
     * @param fieldIndex
     * @param optionIndex
     */
    removeFormFieldOption(fieldIndex, optionIndex) {
        this.FBInterface?.formFieldArray[fieldIndex].options?.splice(optionIndex, 1);
    }

    /**
     * Copy HTML markup to clipboard
     */
    copyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    /**
     * Prevent special characters in name fields and hidden required field
     * @param event
     */
    fieldNameChanged(event: KeyboardEvent) {
        if (event.key.match(/[^a-zA-Z0-9\s]/)) {
            event.preventDefault();
        }
    }

}


