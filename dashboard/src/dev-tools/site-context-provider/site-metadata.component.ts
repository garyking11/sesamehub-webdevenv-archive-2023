import {Component, OnInit, EventEmitter, DoCheck, Compiler} from '@angular/core';
import {FormGroup, FormControl, Validators, NgForm, FormBuilder} from '@angular/forms';
import {SiteContextProviderService} from './services/site-context-provider.service';
import {AdminService} from '../../app/admin-dashboard/admin/admin.service';
import {Router} from '@angular/router';
import {UserService} from "../../app/login/user/user.service";
import {BuilderService} from "../../app/login/builder/builder.service";

@Component({
    selector: 'site-metadata',
    templateUrl: 'templates/site-metadata.template.html',
    styles: [],

    // tslint:disable-next-line:use-input-property-decorator
    inputs: ['currentAccount', 'parentValue'],
    // tslint:disable-next-line:use-output-property-decorator
    outputs: ['accountChanged']
})

export class SiteMetaDataComponent implements OnInit {

    parentValue: string;
    currentAccount: string;
    accountChanged = new EventEmitter<string>();
    localDirectories: any[] = [];
    account: string;
    heading: string;
    public snippetTitle: any;
    public snippet: any;
    product_type: string;
    response: string;
    selectSiteMetadataForm: FormGroup;
    metadata: any;
    builderData: any;
    public admindata: any;
    public os: string;
    public cssPreprocessor: string;
    public sm_version: string = '14.2.0';
    public buildversion: string = '14.2.0';
    public builder: string;
    public date: any;
    public version: string;
    public getLocalDirectoriesError: any;
    public osxClass: any;
    public pcClass: any;
    public launchShowHide: string = 'hide';
    public selectSiteShowHide: string = 'hide';

    mainMenuArray = [
        {display: 'Create Buildkit', routerLink: 'sections'},
        {display: 'Standard Pages', routerLink: 'pages'},
        {display: 'Stock Photo Manager', routerLink: 'image-manager'},
        {display: 'Image Manager', routerLink: 'ddu'},
        {display: 'Form Builder', routerLink: 'form-builder'},
        {display: 'Builder Notes', routerLink: 'builder'},
        {display: 'Canadian Content', routerLink: 'canadian-content'},
        {display: 'Support', routerLink: 'support'}
    ]

    /**
     *
     * @param _siteContextProviderService
     * @param _adminService
     * @param _builderService
     * @param router
     */
    constructor(
        public _siteContextProviderService: SiteContextProviderService,
        public _adminService: AdminService,
        public _builderService: BuilderService,
        private router: Router
    ) {
        // log site-context changes to console
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
                this.builder = data.builder;
                this.buildversion = data.buildversion;
                this.cssPreprocessor = data.css_preprocessor;
                this.sm_version = data.sm_version;

                this.selectSiteMetadataForm.patchValue({
                    'buildversion': this.buildversion,
                    'builder': this.builder,
                    'account': this.account
                });
            },
            error => {
                'Current Site Data Unavailable'
            }
        );


        // The Form
        this.selectSiteMetadataForm = new FormGroup({
            'account': new FormControl(''),
            'builder': new FormControl('', Validators.required),
            'sm_version': new FormControl('14.2.0'),
            'version': new FormControl(),
            'data_version': new FormControl('1.2.0'),
            'css_preprocessor': new FormControl('less'),
            'buildversion': new FormControl('14.2.0'),
            'lessversion': new FormControl('2.6')
        })

        /**
         * Load Site button
         * gets selected account directory from /dashboard/data/...
         */
        this.selectSiteMetadataForm.valueChanges.subscribe(
            // (data: any) => console.log(data)
        );
    } // end constructor

    /**
     * Acquire available accounts (directories) and initialize current data form /data/site-context.json onInit
     */
    ngOnInit() {
        this.onGetLocalDirectories();
        // this.getAdminData();
        this.initCurrentSite();
    }

    /**
     * Initialize current site/account name from /data/site-context.json
     */
    public initCurrentSite() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
                this.heading = data.account;
                this.builder = data.builder;
                this.buildversion = data.buildversion;
            },
            error => {
                console.log('Current Site Data Unavailable')
            }
        );
    }

    /**
     * Get current admin data
     */
    getAdminData() {
        this._adminService.getFormData().subscribe(
            data => {
                this.admindata = data.adminData;
                return
            }
        );
    }

    /**
     * Get current package.json values
     */

    /* getPackageData() {
        /!* const packageJSON = require(' ../../../../package.json');
         this.cssPreprocessor = packageJSON.devDependencies.;
         console.log(this.cssPreprocessor);*!/

     }*/


    /**
     * Acquire list of local accounts (directories) using service
     */
    onGetLocalDirectories() {
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(
                data => {
                    this.localDirectories = data;
                },
                error => console.log('Local directories unavailable')
            );
    }

    /* getbuilderFormData() {
         this._builderService.getBuilderData().subscribe(res => {
             console.log(res);
             this.builderData = res[0]['items'];
             this.account = res.account;
             this.snippetTitle = res.items.snippetTitle;
             this.snippet = res.items.snippet;
         });

     }*/

    /**
     * Write current selected account to /data/site-context.json when click event is triggered from site-metadata.template
     */

    onSetSiteData(form: FormGroup) {

        // get all builder data
        this._builderService.getBuilderData().subscribe(data => {

            this.builderData = data;

            this.builderData.builder = form.controls['builder'].value;

            this.builderData.items.unshift({
                account: form.controls['account'].value,
                date: new Date().toUTCString(),
                snippetTitle: "",
                snippet: ""
            });

            this._builderService.postBuilderData(this.builderData);
            let selectSiteMetadataForm = this.selectSiteMetadataForm; // Form values

            this._siteContextProviderService.setCurrentContext(selectSiteMetadataForm);
            location.reload();
        });
    }
}
