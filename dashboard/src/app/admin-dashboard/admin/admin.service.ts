import {Injectable} from '@angular/core';
// import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
declare var $: any;

@Injectable()
export class AdminService {
  data: any;
  constructor(private _http: HttpClient) {}

  /**
   * Get current admin data. ie: current release information
   * @returns {Observable<R>}
   */
  getFormData(): Observable<any> {
    return this._http.get('/dashboard/data/admin-data.json?v=' +  new Date());
  }

  /**
   * Set current admin data. ie: current release information
   * @param data
   * @returns {Observable<Response>}
   */
  setFormData(data) {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // console.log(data);
    return this._http.post('/dashboard/endpoints/admin-data-endpoint.php', body, {headers: headers});
  }

}
