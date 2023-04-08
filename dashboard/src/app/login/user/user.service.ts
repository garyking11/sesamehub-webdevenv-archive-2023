import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;
// const path = require('path');

@Injectable()
export class UserService {

    data: any;

    constructor(private _http: HttpClient) {
    }

    postData(data: any) {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        console.log('test')

        return this._http.post('/dashboard/endpoints/user-endpoint.php', body, {headers: headers});
    }

    /**
     *
     * @returns {Observable<Response>}
     */
    getData(): Observable<any> {
        return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
    }
}
