import {Component, OnInit} from '@angular/core';
import {BuilderService} from "./builder.service";
import {FormArray, FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {ShowHideContentService} from "../../services/show-hide-content.service";
import {SnackbarService} from "../../services/snackbar.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'dev-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

    public builderForm: FormGroup;
    public builder: string;
    public account: string;
    public date: string;
    public snippetTitle: string;
    public snippet: string;
    public builderFormDataArray: any[] = [];
    public deleteConfirmationArray: boolean[] = [];
    public confirm: boolean = false;
    public cancel: boolean = false;

    constructor(
        private _builderService: BuilderService,
        private _showHideContent: ShowHideContentService,
        private _snackBarService: SnackbarService,
        private _fb: FormBuilder,
    ) {
        this.builderForm = new FormGroup({
            builder: new FormControl(),
            account: new FormControl(),
            date: new FormControl(),
            snippetTitle: new FormControl(),
            snippet: new FormControl(),
            items: new FormArray([])
        })
    }

    ngOnInit(): void {
        this.getFormData();
    }

    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray((<FormArray>this.builderForm.controls['items']).controls, event.previousIndex, event.currentIndex);
        this.builderForm.controls['items'].updateValueAndValidity();
    }

    getFormData() {
        this._builderService.getBuilderData().subscribe(res => {

                let data = res;
                console.log('Builder data retrieved: ' + new Date().toUTCString());
                this.builderFormDataArray = data.items;
                this.builderForm = this._fb.group({
                    builder: [data.builder],
                    items: this._fb.array([])
                });

                let builderForm = this.builderForm;
                let component = this;

                this.deleteConfirmationArray = [];

                // create an array from builder-data.json
                this.builderFormDataArray.forEach(function (item) {

                    let control = <FormArray>builderForm.controls['items'];

                    control.push(component._fb.group({
                        // builder: [item.builder],
                        account: [item.account],
                        date: [item.date],
                        snippetTitle: [item.snippetTitle],
                        snippet: [item.snippet],
                    }));

                    component.deleteConfirmationArray.push(false);

                });
            },
            error => console.log(error)
        );

        return this.builderFormDataArray;
    }

    setBuilderData(form: NgForm) {
        let builderform = this.builderForm; // Form values

        console.log(form.value.snippetTitle);
        let builderdata = {
            builder: form.value.builder,
            items: form.value.items
        };
        // console.log(form.value['items'][0].account);

        console.log(builderdata);
        this._builderService.postBuilderData(builderdata);
        // location.reload();
    }


    /**
     * Create Form Group
     * @returns {FormGroup}
     *
     */
    initItem() {
        return this._fb.group({
            account: [''],
            date: [''],
            snippetTitle: [''],
            snippet: ['']
        })
    }

        /**
         * Add item to the list
         */
        addItem(e)
        {
            const control = <FormArray>this.builderForm.controls['items'];
            control.insert(0, this.initItem());
        }

        /**
         *
         * @param i
         * @param el
         */
        confirmDeleteMessage(i)
        {
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

        confirmDelete(i, itemVal, status)
        {
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
        removeItem(i
    :
        number, itemVal
    :
        NgForm
    )
        {
            const control = <FormArray>this.builderForm.controls['items'];
            control.removeAt(i);
        }

    }

