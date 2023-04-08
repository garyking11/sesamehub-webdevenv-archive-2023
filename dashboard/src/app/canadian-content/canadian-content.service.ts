import {Injectable} from '@angular/core';

import {Observable} from "rxjs";
// import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CanadianContentService {

    constructor(private _http: HttpClient) {
    }

    getCanadianContent(data): Observable<any> {

        return this._http.get('/dashboard/assets/canadian-site-content/canadian-formatted/'
            + data.type + '/' + data.file + '.html',  {responseType: 'text'});
    }

}
