import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class IfFileExistsService {

    constructor(private _http: HttpClient) {
    }

    /**
     * @param account
     * Currently used by location page, meet the team
     * Get current contents of /account-name/www/assets/uploads/images
     * @returns {Observable<Response>}
     */
    listLocalAccountImages(account): Observable<any[]> {
        const body = JSON.stringify(account);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post<any[]>('/dashboard/endpoints/get-image-manager-local-files.php', body, {headers: headers});
    }
}
