import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormArray, FormGroup, Validators, FormControl} from "@angular/forms";
import {DataService} from "../services/data.service";
import {CustomValidatorsService} from "../services/custom-validators.service";
import {IsLoadingService} from "../services/is-loading.service";
import {RedirectsService} from "./redirects.service";
import {CopyDataToClipboardService} from "../services/copy-to-clipboard.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";

// define jQuery
declare var $: any;

@Component({
    selector: 'dev-redirects',
    templateUrl: './redirects.component.html',
    styleUrls: ['./redirects.component.css']
})

export class RedirectsComponent implements OnInit {
    private redirectsForm: FormGroup;
    private prevUrlForm: FormGroup;
    private redirectDomainForm: FormGroup;
    private currentUrls: any[] = [];
    private isLoading: boolean = false;
    private account: string;
    private redirectDataStatus: boolean;
    private redirectDataMessage: string;
    private contentAvailable: boolean = true;
    public locUrl: any;
    private default: boolean = true;

    /**
     *
     * @param _copyDataToClipboardService
     * @param _siteContextProviderService
     * @param _redirectsService
     * @param _dataService
     * @param _fb
     * @param _customValidatorsService
     * @param _isLoadingService
     * @param prev_fb
     */
    constructor(private _copyDataToClipboardService: CopyDataToClipboardService,
                private _siteContextProviderService: SiteContextProviderService,
                private _redirectsService: RedirectsService,
                private _dataService: DataService,
                private _fb: FormBuilder,
                private _customValidatorsService: CustomValidatorsService,
                private _isLoadingService: IsLoadingService,
                private prev_fb: FormBuilder) {

        this.redirectsForm = new FormGroup({items: new FormArray([])});
        this.prevUrlForm = new FormGroup({prevItems: new FormControl()});
        this.locUrl = 'http://garykingweb.com'; //this._siteContextProviderService.getCurrentDomainName()
        this.redirectDomainForm = new FormGroup({
            previousdomainname: new FormControl('', Validators.compose([Validators.required, _customValidatorsService.protocolValidator]))
        })
    }

    ngOnInit() {
        this.isLoading = false;
        this.default = true;
        this.contentAvailable = true;
    }

    /**
     * Get main-nav html
     * @param mainNav
     */
    parseUrls(mainNav): any[] {
        var sitemap: any[] = [];

        $('li a', mainNav).each(function () {
            sitemap.push($(this).attr('href'));
        });

        var uniqueNavItems = [];
        $.each(sitemap, function (i, el) {
            if ($.inArray(el, uniqueNavItems) === -1) uniqueNavItems.push(el);
        });

        sitemap = uniqueNavItems;
        return sitemap;
    };

    /**
     *
     * @param domainname
     */
    onGetPreviousDomainUrls(domainname: any): void {

        this.isLoading = true;
        this.default = true;

        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.onGetUrlData(data.account, domainname);
            },
            error => console.log(error)
        );
    }

    /**
     *
     * @param account
     * @param domainname
     */
    onGetUrlData(account: string, domainname) {

        /**
         * Get previous site urls
         */
        this._redirectsService.getPreviousSiteUrls(domainname)
            .subscribe(
                previousUrls => {

                    /*this._dataService.getHubNavData(account)
                        .subscribe(
                            navHtml => {

                                this.currentUrls = this.parseUrls(navHtml);

                                // Create FormGroup array
                                this.prevUrlForm = this.prev_fb.group({
                                    prevItems: this.prev_fb.array([])
                                });

                                var prevUrlForm = this.prevUrlForm;
                                var component = this;

                                // Create an array for the form
                                previousUrls.forEach(function (previtem) {

                                    var control = <FormArray>prevUrlForm.controls['prevItems'];

                                    control.push(component.prev_fb.group({
                                        url: [previtem],
                                        redirectto: [''],
                                    }));
                                });

                                var contentAvailability = this._isLoadingService.isLoadingContent(previousUrls);
                                if (contentAvailability) {
                                    this.contentAvailable = false;
                                    this.isLoading = false;
                                    this.redirectDataMessage = 'Complete';
                                    this.default = false;
                                } else {
                                    this.contentAvailable = true;
                                    this.isLoading = false;
                                    this.redirectDataMessage = 'No Data Available';
                                    this.default = false;
                                }

                            }
                        ),
                        error => {
                            console.log(error);
                            this.isLoading = false;
                            this.redirectDataMessage = 'No data available! Check if is correct domain or site is live';
                        };*/
                });

      /*  this._dataService.getHubNavData(account)
            .subscribe(
                data => {
                    // Site links pre unique filter
                    var urls: any[] = this.parseUrls(data);

                    this.redirectDataStatus = true;
                    //this.redirectDataMessage = 'Enter a domain name (if site is live) or account name.';

                    // Create FormGroup array
                    this.redirectsForm = this._fb.group({
                        items: this._fb.array([])
                    });

                    var redirectsForm = this.redirectsForm;
                    var component = this;

                    urls.forEach(function (item) {
                        var control = <FormArray>redirectsForm.controls['items'];
                        control.push(component._fb.group({
                            redirectto: [item, Validators.required]
                        }));
                    });

                    this.isLoading = false;
                },
                error => {
                    console.log(error);
                    this.isLoading = false;
                    this.redirectDataStatus = false;
                    this.redirectDataMessage = 'No data available! Correct domain (if site is live) or account name?';
                }
            );*/
    }

    /**
     *
     * @param form
     */
    onSetRedirectData(form) {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {

                var redirects = {
                    account: data.account,
                    redirectsData: []
                };

                redirects.redirectsData = form.prevItems.map(function (currentValue) {
                    return {
                        url: currentValue.url,
                        redirectto: currentValue.redirectto
                    };
                });

                /**
                 *
                 * @type {any[]}
                 */
                redirects.redirectsData = redirects.redirectsData.filter(function (redirect) {
                    return redirect.redirectto !== null && redirect.redirectto !== '';
                });

                this._redirectsService.setRedirectData(redirects).subscribe();
            },
            error => console.log(error)
        );

    }

    /**
     * Copy to clipboard functions
     * Utilities Module
     */
    onCopyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    onCopyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }
}
