import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()

export class SitemapService {

    data: string;
    account: string;

    constructor(private _http: HttpClient) {
    }

    /**
     * Get data from /asset/includes/data/sitemap.json
     * @param account
     * @returns {Observable<Response>}
     */
    getSitemapData(account: string): Observable<any> {
        return this._http.get('../../../../' + account + '/assets/includes/data/sitemap-data.json?v=' + new Date());
    }

    setSitemapData(data: any) {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/sitemap-data-endpoint.php', body, {headers: headers});
    }

}
