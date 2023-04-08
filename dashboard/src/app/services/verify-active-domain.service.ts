import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class VerifyActiveDomainService {

    constructor(private _http: HttpClient) {
    }

    verifyDomainIsActive(domainname): Observable<any> {
        const body = JSON.stringify(domainname);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/domain/verify-active-domain.endpoint.php', body, {headers: headers});
    }
}
