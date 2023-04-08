import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarService} from "../services/snackbar.service";
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';

declare var $: any;

@Component({
    selector: 'dev-get-hub-data',
    templateUrl: './get-hub-data.component.html',
    styles: []
})
export class GetHubDataComponent implements OnInit {
    @Input()
    public sitename: string;
    public sitecontext: string;
    public account: string;
    public sm_version: string;
    public builder: string;
    public response: string;
    public success: boolean;
    public getHubNavShowHide: string = 'hide';
    public getWelTextShowHide: string = 'show';
    public welcomeDisabled: boolean = false;

    constructor(
        private _dataService: DataService,
        public _siteContextProviderService: SiteContextProviderService,
        private _snackBarService: SnackbarService) {
    }

    ngOnInit(): any {
        this.getSiteContext();
        this.account = this.sitecontext;
        const sitename = this.account;
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    // SHOULD BE CONVERTED TO INTERFACE EVENTUALLY
    getSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            context => {
                this.sitecontext = context.account;
                this.account = context.account;
                this.sm_version = context.sm_version;
                this.builder = context.builder;
            },
            error => console.log(error)
        );

        return this.sitecontext;
    }

    /**
     * Post Welcome Text to Application.php via data.service
     * @param hub_welcome_text
     */
    welcomeTextPost(hub_welcome_text: string, sitename: string) {
        this._dataService.postWelcomeTextData(sitename, hub_welcome_text)
            .subscribe(
                data => {
                    if (this.response === undefined) {
                        console.log('Welcome text required');
                        this.getHubNavShowHide = 'hide';
                        this.getWelTextShowHide = 'show';
                        return;
                    } else {
                        this.getHubNavShowHide = 'show';
                        this.getWelTextShowHide = 'hide';
                        this.welcomeDisabled = false;
                        this._snackBarService.openSnackBar('Your welcome text has been applied!', '');
                    }

                },
                error => console.log(error)
            );
    }

    /**
     * Get actual welcome text from hub
     */
    getWelcomeTextData() {
        this._dataService.getWelcomeTextData(this.account)
            .subscribe(
                data => {
                    this.response = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Get pseudo navigation from /dev
     */
    getStockWelcomeData() {
        this._dataService.loadWelcomeTextData()
            .subscribe(
                data => {
                    this.response = data;
                },
                error => console.log(error)
            );
    }
    // end get-welcome-text

    // start get-hub-navigation
    @Output() navResponse = new EventEmitter<string>();
    hub_navigation: string;
    nResponse: string;

    /**
     * Get actual navigation from sesamehub.com
     */
    getHubNavData() {
        this._dataService.getHubNavData(this.account)
            .subscribe(
                data => {
                    this.nResponse = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Get stock navigation from /dev
     */
    getStockNavData() {
        this._dataService.loadStockNavData()
            .subscribe(
                data => {
                    this.nResponse = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Set data into page (layout.php) via app.component
     * @param hub_navigation
     * @param sitename
     */
    onHubPost(hub_navigation: string, sitename: string) {
        this._dataService.postHubNavData(sitename, hub_navigation)
            .subscribe(
                data => {

                    if (this.nResponse === undefined) {
                        console.log('Please enter a value');
                        return;
                    }

                    this._snackBarService.openSnackBar('Your hub navigation has been applied!', '');
                    // reload the page
                    location.reload();
                    // repopulate with no values
                    this.nResponse = '';
                },
                error => console.log(error)
            );
    };
}
