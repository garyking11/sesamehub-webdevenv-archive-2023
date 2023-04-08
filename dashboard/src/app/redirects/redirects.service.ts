import {Injectable} from '@angular/core';
import {Observable, Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class RedirectsService {
    constructor(private _http: HttpClient) {
    }

    getPreviousSiteUrls(previousdomainname: string): Observable<any> {
        const body = JSON.stringify(previousdomainname);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/redirects/301-redirects.php?v=' + new Date(), body, {headers: headers});
    }

    setRedirectData(redirects) {
        const body = JSON.stringify(redirects);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/redirects/301-redirects-set-data.endpoint.php', body, {headers: headers});

    }

}
