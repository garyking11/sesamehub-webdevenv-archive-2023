import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable()
export class BuilderService {

  constructor(private _http: HttpClient) {
  }

  postBuilderData(data: any) {
    const body = JSON.stringify(data);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this._http.post('/dashboard/endpoints/builder-endpoint.php', body, {headers: headers}).subscribe();
  }

  /**
   *
   * @returns {Observable<Response>}
   */
  getBuilderData(): Observable<any> {
    const subj = new Subject();
    this._http.get('/dashboard/data/builder-data.json?v=' + new Date()).subscribe(data => {
      let obj = Object.assign({}, { builder: null, items: []}, data);
      subj.next(obj);
    }, error => {
      subj.next({
        builder: null,
        items: []
      })
    });

    return subj.asObservable();
  }
}

