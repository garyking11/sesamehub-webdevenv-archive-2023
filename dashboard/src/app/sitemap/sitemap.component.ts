import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {DateService} from '../services/date.service';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {IsLoadingService} from '../services/is-loading.service';
import {CustomValidatorsService} from '../services/custom-validators.service';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {GetCurrentDomainUrlsService} from '../services/get-current-domain-urls.service';
import {ShowHideContentService} from '../services/show-hide-content.service';

// Define jQuery
declare var $: any;

@Component({
    selector: 'dev-sitemap',
    templateUrl: './sitemap.component.html',
    styleUrls: ['./sitemap.component.css']
})

export class SitemapComponent implements OnInit {
    private sitemapForm: FormGroup;
    public sitemapFormArray: any[] = [];
    private isLoading: boolean = false;
    private html: string;
    public sitemapData: any;
    public dateData: any;
    private redirectDataMessage: string;
    private contentAvailable: boolean = true;
    public locUrl: any;
    private default: boolean = true;
    public dateToday: any;

    /**
     *
     * @param _dataService
     * @param _dateService
     * @param _sitemapService
     * @param _copyDataToClipboardService
     * @param _siteContextProviderService
     * @param _fb
     */
    constructor(public _dateService: DateService,
                private _copyDataToClipboardService: CopyDataToClipboardService,
                private _siteContextProviderService: SiteContextProviderService,
                private _getCurrentDomainService: GetCurrentDomainUrlsService,
                private _customValidatorsService: CustomValidatorsService,
                private _isLoadingService: IsLoadingService,
                private _showHideContent: ShowHideContentService,
                private _fb: FormBuilder) {
        this.dateData = this._dateService.getTodaysDate();
        this.dateToday = this.dateData.yyyy + '-' + this.dateData.mm + '-' + this.dateData.dd;
        this.sitemapForm = new FormGroup({
            loc: new FormControl('', [Validators.required, _customValidatorsService.protocolValidator])
        });

        this.locUrl = this._siteContextProviderService.getCurrentDomainName();
    }

    ngOnInit() {
        this.isLoading = false;
        this.default = true;
        this.contentAvailable = true;
    }

    /**
     *
     * @param domainurl
     */
    onGetCurrentDomainUrls(domainurl: string) {

        this.isLoading = true;
        this.default = true;

        this._getCurrentDomainService.getCurrentDomainUrls(domainurl).subscribe(
            res => {

                this.sitemapData = res;

                let contentAvailability = this._isLoadingService.isLoadingContent(res);

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
                };
            },
            error => console.log(error)
        );
    }

    /**
     * Show hide content areas within forms
     * @param item
     * UtilitiesModule
     */
    showHide(item) {
        this._showHideContent.showHideContent(item);
    }

    /**
     * Copy HTML markup to clipboard
     */
    onCopyHTMLToClipboard() {
        this._copyDataToClipboardService.copyHTMLDataToClipboard();
    }

    /**
     * Copy CSS markup to clipboard
     */
    onCopyCSSToClipboard() {
        this._copyDataToClipboardService.copyCSSDataToClipboard();
    }

}