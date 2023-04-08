import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class GetCurrentDomainUrlsService {

    constructor(private _http: HttpClient) {
    }

    /**
     * returns JSON object
     * @param domainname
     * @returns {Observable<R>}
     */
    getCurrentDomainUrls(domainname): Observable<any> {
        const body = JSON.stringify(domainname);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return this._http.post('/dashboard/endpoints/domain/current-urls.php', body, {headers: headers});
    }
}
