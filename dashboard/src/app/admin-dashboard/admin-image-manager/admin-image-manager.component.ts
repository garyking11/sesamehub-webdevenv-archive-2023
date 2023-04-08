import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ManageLibraryPagesService} from "./manage-library-pages.service";
import {FormGroup, FormBuilder, FormArray, FormControl, Validators, NgForm} from "@angular/forms";
import {
    SiteContextProviderService
} from "../../../dev-tools/site-context-provider/services/site-context-provider.service";
import {CustomValidatorsService} from "../../services/custom-validators.service";
import {AuthenticationService} from "../../login/authentication.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

/*
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {AuthenticationService} from "../login/authentication.service";
*/

@Component({
    selector: 'dev-admin-image-manager',
    templateUrl: './admin-image-manager.component.html',
    styleUrls: ['./admin-image-manager.component.css']
})
export class AdminImageManagerComponent implements OnInit {
    @Output() lib_page: EventEmitter<any> = new EventEmitter<any>();

    private libraryPageForm: FormGroup;
    private libraryPageData: FormGroup;
    private libraryPageDataArray: any[] = [];
    private deleteConfirmationArray: boolean[] = [];
    private sitecontext: any;
    private confirm: boolean = false;
    private cancel: boolean = false;
    public siteData: any[] = [];
    private isLoading: boolean;

    constructor(
        private _manageLibraryPagesService: ManageLibraryPagesService,
        private _siteContextProviderService: SiteContextProviderService,
        private _customValidatorsService: CustomValidatorsService,
        private _fb: FormBuilder,
        private _authenticationService: AuthenticationService
    ) {
        this.libraryPageForm = new FormGroup({items: new FormArray([])});
        this.libraryPageData = new FormGroup({
            lib_page: new FormControl(),
        })
    }

    ngOnInit() {
        this.isLoading = false;
        this.onGetSiteContext();
        this._authenticationService.checkCredentials();
    }

    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray((<FormArray>this.libraryPageForm.controls['items']).controls, event.previousIndex, event.currentIndex);
        this.libraryPageForm.controls['items'].updateValueAndValidity();
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
    onGetFormData() {
        this._manageLibraryPagesService.getData().subscribe(
            res => {
                let data;
                try {
                    data = res;
                } catch (e) {
                    return;
                }

                this.libraryPageDataArray = data.library_pages;

                this.libraryPageForm = this._fb.group({
                    items: this._fb.array([])
                });

                console.log(data);
                let libraryPageForm = this.libraryPageForm;
                let component = this;
                this.deleteConfirmationArray = [];

                //Create an array from account form-data.json
                data.library_pages.forEach(function (item) {

                    let control = <FormArray>libraryPageForm.controls['items'];
                    control.push(component._fb.group({
                        lib_page: [item.lib_page, Validators.required],

                    }));
                    component.deleteConfirmationArray.push(false);
                });
            },
            error => console.log(error)
        );
        return this.libraryPageDataArray.sort();
    }

    /**
     * Write updated form data to /dashboard/data/library-page-data.json
     * @param form
     */
    onSetFormData(form: NgForm) {
        let librarypagedata =
            {
                library_pages: form.value.items
            };

        // Set new values
        this._manageLibraryPagesService.postData(librarypagedata).subscribe(
            data => {
                console.log(librarypagedata)
                this.libraryPageForm.controls['items'].updateValueAndValidity();
                console.log('Library Page data updated: ' + new Date().toUTCString());
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
            lib_page: ['', Validators.required]
        });
    }

    /**
     * Add item to the list
     */
    addItem() {
        const control = <FormArray>this.libraryPageForm.controls['items'];
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
        if (status == "deleteItem") {
            this.removeItem(i, itemVal);
            this.deleteConfirmationArray[i] = false;
        } else if (status == 'cancelDeleteItem') {
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
        const control = <FormArray>this.libraryPageForm.controls['items'];
        control.removeAt(i);
        this.onSetFormData(itemVal);
    }

    //End delete form item
    logout() {
        this._authenticationService.logout();
    }

    onSortSuccessful(e): void {
        this.libraryPageForm.controls['items'].updateValueAndValidity();
    }
}
