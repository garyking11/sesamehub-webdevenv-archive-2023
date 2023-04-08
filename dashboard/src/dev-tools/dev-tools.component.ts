import {Component, OnInit, Injectable, Input, EventEmitter, Output} from '@angular/core';
import {ResetNavHtml} from './services/dev-tools-sidebar.service';
import {DataService} from '../app/services/data.service';
import {SiteContextProviderService} from './site-context-provider/services/site-context-provider.service';
import {ProductTypeRedirectService} from '../app/services/product-type-redirect.service';

declare var $: any;

@Injectable()

@Component({
    selector: 'dev-tools',
    templateUrl: 'templates/dev-tools.template.html'
})

export class ToolbarComponent implements OnInit {

    private siteItems: any[] = [];
    private sitename: string;
    public account: any;
    private type: any;
    private product_type: any;
    private accountChanged: any;
    isClassVisible: any;

    constructor(
        private _resetNavHtml: ResetNavHtml,
        public  _dataService: DataService,
        private _productTypeRedirectService: ProductTypeRedirectService,
        public  _siteContextProviderService: SiteContextProviderService) {
    }

    /**
     * SDS? PSDS?
     */
    onCheckProductType() {
        // this._productTypeRedirectService.canActivate();
    };

    /**
     *
     * @returns {string}
     */
    ngOnInit(): any {
        // keep to designate dev-tools dashboard page
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        this.onGetData();
        this.onGetSiteContext();
        this.onCheckProductType();
        return this.sitename;
    };

    /**
     * Reset navigation textarea in buildkit
     */
    onResetNavigation() {
        this._resetNavHtml.resetNavBar(this.sitename)
            .subscribe(
                data => {
                    window.location.reload();
                },
                error => console.log(error)
            );
    };

    /**
     * Get account name
     * @returns {any}
     */
    onGetSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
            },
            error => console.log(error)
        );

        return this.product_type;
    };

    /**
     *
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
                     this.product_type = siteDataArray;
                 },
                 error => console.log(error)
             );
     };*/

    /**
     *
     */
    onGetData() {
        this._dataService.getData()
            .subscribe(
                data => {
                    const siteData: any = [];
                    for (let key in data) {
                        siteData.push(data[key])
                    }
                    this.siteItems = siteData;

                    return this.siteItems;
                }
            );
    }

    /**
     * Deprecated and removed from app
     * Open dashboard and tools
     */
    onOpenDashboard() {
        let url = 'http://localhost/dashboard/#/home';
        window.open(url, '_blank');
    }

}
