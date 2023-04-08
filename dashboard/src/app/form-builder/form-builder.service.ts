
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilderInterface} from './form-builder.interface';


@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  properties: any;
  account: any;

  constructor(private _http: HttpClient) {
  }

  getFormBuilderProperties(account: string): Observable<FormBuilderInterface> {
    return this._http.get<FormBuilderInterface>('../../' + account + '/assets/includes/data/form-builder-data.json?' + Date.now().toString());
  }

  setSiteFormBuilderProperties(properties) {
    console.log(properties);
    const body = JSON.stringify(properties);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post('/dashboard/endpoints/form-builder-endpoint.php', body, {headers: headers});
  }
}
