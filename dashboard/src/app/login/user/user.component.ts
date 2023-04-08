import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormArray, FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import {UserService} from './user.service';
import {CustomValidatorsService} from '../../services/custom-validators.service';
import {SiteContextProviderService} from '../../../dev-tools/site-context-provider/services/site-context-provider.service';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

// const opSys = require('os');
// import * as  opSys from 'os';
@Component({
    selector: 'dev-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    private userForm: FormGroup;
    private userData: FormGroup;
    private userDataArray: any[] = [];
    private deleteConfirmationArray: boolean[] = [];
    private sitecontext: any;
    private confirm = false;
    private cancel = false;
    public siteData: any[] = [];
    private isLoading: boolean;
    public sMdata;
    public gulpVersion: string;
    public username: any;
    public currentUser: any;
    public allUsers: any;
    public isAdmin: any;
    /**
     *
     * @type {{role: string; display: string}[]}
     */
    roles = [
        {'role': 'Admin', 'display': 'Admin'},
        {'role': 'Builder', 'display': 'Builder'},
        {'role': 'Production-Artist', 'display': 'Production Artist'},
        {'role': 'Producer', 'display': 'Producer'},
    ]

    constructor(private _userService: UserService,
                private _siteContextProviderService: SiteContextProviderService,
                private _fb: FormBuilder,
                private _authenticationService: AuthenticationService) {

        this.userForm = new FormGroup({items: new FormArray([])});
        this.userData = new FormGroup({
            singledbl: new FormControl(),
            ba_before_prefix: new FormControl(),
            ba_after_prefix: new FormControl(),
            max_width_slide_image: new FormControl('600'),
        })
    }

    ngOnInit() {
        this.isLoading = false;
        this.onGetSiteContext();
        this._authenticationService.checkCredentials();
        this.getSiteManagerData()
        this.validateCurrentUser();
    }
    /**
     * Update name values when dropping and sorting
     * mat-expansion-panel drag and drop method
     * @param event
     */
    drop(event: CdkDragDrop<any[]>) {
        moveItemInArray((<FormArray>this.userForm.controls['items']).controls, event.previousIndex, event.currentIndex);
        this.userForm.controls['items'].updateValueAndValidity();
    }

    // TODO: get user role
    // TODO: show or hide all or specified user
    validateCurrentUser() {
        // get current user
        this.currentUser = JSON.parse(localStorage.getItem("user"));
        console.log(this.isAdmin);

        this._userService.getData().subscribe(
            res => {
                let data;
                try {
                    data = res;
                } catch (e) {
                    return;
                }

                let isAdmin;
                data.users.forEach(function (item) {
                    if (item.role === 'Admin') {
                        isAdmin = true;
                    }
                })
            }
        )
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
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    getSiteManagerData() {
        const packageJSON = require('../../../../../package.json');
        this.gulpVersion = packageJSON.devDependencies.gulp;
    }

    /**
     * Get current form data from selected account /www/assets/includes/data/form-data-json
     * @param account
     * @returns {any[]}
     */
    onGetFormData() {
        this._userService.getData().subscribe(
            res => {
                let data;
                try {
                    data = res;
                } catch (e) {
                    return;
                }

                this.userDataArray = data;
                this.userForm = this._fb.group({
                    items: this._fb.array([])
                });

                let userForm = this.userForm;
                let component = this;
                this.deleteConfirmationArray = [];

                // Create an array from account form-data.json
                data.users.forEach(function (item) {

                    let control = <FormArray>userForm.controls['items'];
                    control.push(component._fb.group({
                        username: [item.username],
                        password: [item.password],
                        confirm_password: [item.confirm_password], //  Validators.required
                        information: [item.information],
                        role: [item.role],
                        nodeVersion: [item.nodeVersion],
                        gulpVersion: [item.gulpVersion]
                    }));
                    component.deleteConfirmationArray.push(false);
                });
            },
            error => console.log(error)
        );
        return this.userDataArray;
    }

    /**
     * Write updated form data to selected account /account/www/assets/includes/data/form-data-json
     * @param form
     */
    onSetFormData(form: NgForm) {
        let userdata = {
            users: form.value.items
        };

        // Set new values
        this._userService.postData(userdata).subscribe(
            data => {
                console.log(userdata)
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
            username: [''],
            password: [''],
            confirm_password: [''],
            information: [''],
            role: ['']
        });
    }

    /**
     * Add item to the list
     */
    addItem() {
        const control = <FormArray>this.userForm.controls['items'];
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
        const control = <FormArray>this.userForm.controls['items'];
        control.removeAt(i);
        this.onSetFormData(itemVal);
    }

    // end delete form item
    logout() {
        this._authenticationService.logout();
    }
}
