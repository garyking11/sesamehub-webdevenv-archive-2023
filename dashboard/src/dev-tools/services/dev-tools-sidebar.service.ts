import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from "@angular/common/http";

declare var $: any;

@Injectable()

export class ResetNavHtml {
    constructor(private _http: HttpClient) {
    }

    resetNavBar(doctorName: string): Observable<any> {
        return this._http.get('/.well-known/.hub-navigation/' + doctorName + '/delete');
    }
}
