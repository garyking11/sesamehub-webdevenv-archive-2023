import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import {AdminService} from './admin.service';
import {SiteContextProviderService} from '../../../dev-tools/site-context-provider/services/site-context-provider.service';
import {CopyDataToClipboardService} from '../../services/copy-to-clipboard.service';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {SnackbarService} from "../../services/snackbar.service";

@Component({
    selector: 'admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    private account: string;
    public adminForm: FormGroup;
    private adminData: FormGroup;
    private adminDataArray: any[] = [];
    private deleteConfirmationArray: boolean[] = [];
    private sitecontext: any;
    private confirm: boolean = false;
    private cancel: boolean = false;
    public siteData: any[] = [];
    private isLoading: boolean;

    constructor(public _adminService: AdminService,
                private _siteContextProviderService: SiteContextProviderService,
                private _copyDataToClipboardService: CopyDataToClipboardService,
                private _snackBarService: SnackbarService,
                private _fb: FormBuilder,) {
        this.adminForm = new FormGroup({items: new FormArray([])});
        this.adminData = new FormGroup({})
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
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    onGetSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.sitecontext = data;
                this.onGetFormData();
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
    /*onGetProductType(account) {
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
    onGetFormData() {
        this._adminService.getFormData().subscribe(
            res => {
                let data;

                try { data = res; } catch (e) {return; }

                this.adminDataArray = data.adminData;

                this.adminForm = this._fb.group({
                    items: this._fb.array([])
                });

                let adminForm = this.adminForm;
                let component = this;

                this.deleteConfirmationArray = [];

                // create an array from account form-data.json
                data.adminData.forEach(function (item) {

                    let control = <FormArray>adminForm.controls['items'];

                    control.push(component._fb.group({
                        name: [item.name],
                        version: [item.version, Validators.required],
                        date: [item.date],
                        release: [item.release],
                        angular_version: [item.angular_version],
                        comments: [item.comments],

                    }));

                    component.deleteConfirmationArray.push(false);

                });
            },
            error => console.log(error)
        );
        return this.adminDataArray;
    }

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    onSetFormData(form: NgForm) {
        let admindata = {
            account: this.sitecontext.account,
            adminData: form.value.items
        };

        // Get new values
        this._adminService.setFormData(admindata).subscribe(
            data => {
                this._snackBarService.openSnackBar('Your admin data has been saved!', '');
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

        let currentDate = new Date();
        let date = currentDate.getDate();
        let month = currentDate.getMonth(); // Be careful! January is 0 not 1
        let year = currentDate.getFullYear();
        let releaseDate = (month + 1) + '-' + date + '-' + year;

        return this._fb.group({
            name: ['gking'],
            version: ['3.94.0'],
            date: [releaseDate],
            release: [''],
            angular_version: ['4.2.4'],
            comments: [''],
        });
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray((<FormArray>this.adminForm.controls['items']).controls, event.previousIndex, event.currentIndex);
        this.adminForm.controls['items'].updateValueAndValidity();
    }

    /**
     * Add item to the list
     */
    addItem() {
        console.log('add item fired')
        const control = <FormArray>this.adminForm.controls['items'];
        control.insert(0, this.initItem());
    }

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
     * Remove items from the list
     * @param i
     * @param itemVal
     */
    removeItem(i: number, itemVal: NgForm) {
        const control = <FormArray>this.adminForm.controls['items'];
        control.removeAt(i);
        this.onSetFormData(itemVal);
    }

    /**
     * Copy HTML/CSS markup to clipboard
     */
    onCopyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    onCopyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }
}
