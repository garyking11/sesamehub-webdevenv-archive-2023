import {map} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

declare var $: any;

@Injectable()
export class DevDataService implements OnInit {

    data: any;
    account: string;

    constructor(private _http: HttpClient) {
    }

    ngOnInit() {
    }

    getData(): Observable<any> {

        let obs = this._http.get('/dashboard/data/data.json?v=' + new Date()).pipe(
            map((response: HttpResponse<any>) => response ));

        obs.subscribe(
            data => {
                this.data = data;
                /////////  Property 'account' does not exist on type 'Response'.
                //////// this.account = data.account; // temorarily removed for build during updates
            },
            error => {
            }
        );

        return obs;
    }

    setSiteData(metadata: any) {
        // Also adjust onSelectSiteData site-metadata.component.ts
        let body = JSON.stringify({
            'account': metadata.value.account,
            'product_type': metadata.value.product_type,
            'sm_version': metadata.value.sm_version,
            'data_version': metadata.value.data_version
        });

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, {headers: headers});
        // removed map because it was throwing unexpected end to json file.  Likely because of an empty payload.
        // .map(response => response.json());

    }


}
