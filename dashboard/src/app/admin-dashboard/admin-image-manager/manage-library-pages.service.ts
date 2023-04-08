
import {Injectable, OnInit} from "@angular/core";
// import 'rxjs/Rx';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
declare var $:any;

@Injectable()
export class ManageLibraryPagesService {

  data:any;
  constructor(private _http:HttpClient) {
  }

    /**
     *
     * @param data
     */
  postData(data:any) {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/admin-image-manager-library-pages.php', body, {headers: headers});
  }

  /**
   *
   * @returns {Observable<Response>}
   */
  getData():Observable<any> {
    return this._http.get('/dashboard/data/image-manager-library-pages.json?v=' +  new Date());
  }
}
