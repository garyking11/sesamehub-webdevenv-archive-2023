import {Injectable, OnInit} from '@angular/core';
// import 'rxjs/Rx';
import {Observable, Observer, Subscriber} from 'rxjs';
import {DevDataService} from './dev-data.service';
declare var $: any;

@Injectable()
export class CurrentSiteProviderService implements OnInit {

    data: any;
    local_site_data: any;
    account: any;
    product_type: any;

    constructor( public _devDataService: DevDataService) {}

    ngOnInit(){}

    // Gets data from web-dev/data/data/json
    getCurrentData() {
        this._devDataService.getData()
            .subscribe(
                data => {
                    this.local_site_data = data;
                    this.account = data.account;
                    this.product_type = data.product_type;
                },
                error => console.log('error at getCurrentData')
            );

    }
}
