import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, observable, Subscriber} from 'rxjs';
import {ChangelogInterface} from './changelog.interface';

@Injectable({
    providedIn: 'root'
})

export class ChangelogService {
    public url = '/dashboard/data/changelog-data.json';
    constructor(
        public _httpClient: HttpClient
    ) {}

    getChangelogUpdates():Observable<any>{
      return this._httpClient.get(this.url, {responseType: 'text'})
    }
}