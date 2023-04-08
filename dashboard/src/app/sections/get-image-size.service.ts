import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GetImageSizeService {

    constructor(
        public _httpClient: HttpClient
    ) {}

    /**
     *
     * @param account
     * @param directory
     */
    getImageSizes(account: string, directory: string):Observable<any[]> {
        console.log(account + ' ' + directory);
        const body = JSON.stringify({ account, directory });
        console.log(body);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post<any[]>('/dashboard/endpoints/get-local-files.php', body, {headers: headers});
    }
}
