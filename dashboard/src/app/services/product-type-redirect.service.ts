import {Injectable} from '@angular/core';
import {CanActivate} from "@angular/router";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider/services/site-context-provider.service";


@Injectable()
export class ProductTypeRedirectService   {
    // implements CanActivate
    private account: any;
    private product_type: any[] = [];

    constructor(private _siteContextProviderService: SiteContextProviderService) {
    }

    /**
     *
     * @returns {any}
     */
    /*canActivate() {

        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.account = data.account;
                this.product_type = data.product_type;
                this.onGetProductType(this.account);
            },
            error => console.log(error)
        );

        return this.account;

    }*/

    /**
     *
     * @param account
     */
    onGetProductType(account) {
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
    };

}
