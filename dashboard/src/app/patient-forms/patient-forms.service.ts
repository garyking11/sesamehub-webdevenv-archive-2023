import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

// declare jQuery
declare var $: any;

@Injectable()
export class PatientFormsService {

    data: any;
    account: any;

    constructor(private _http: HttpClient) {
    }

    /**
     *
     * @param account
     * @returns {Observable<R>}
     */
    getFormData(account): Observable<any> {
        return this._http.get<any>('../../' + account + '/assets/includes/data/patient-forms-data.json?v=' + new Date());
    }

    /**
     *
     * @param data
     * @returns {Observable<Response>}
     */
    setFormData(data) {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/patient-forms-data-endpoint.php', body, {headers: headers});
    }
}
