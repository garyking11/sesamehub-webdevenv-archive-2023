
import {map} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable, Subscriber} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()
export class StylesPanel01Service implements OnInit {
    private currentStyles: any;
    private currentStylesSubscribers: Subscriber<any>[] = [];
    public _currentStylesPanel01;
    data: any;

    constructor(private _http: HttpClient) {
    }

    ngOnInit() {
        console.log('stylesPanel01 Fired');
    }

    setData(data: any) {
        const body = JSON.stringify(data);
        console.log(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/style-panel-01-endpoint.php', body, {headers: headers});
    }


    getData(): Observable<any> {
        // Get from data site-context.json
        return this._http.get('/dashboard/data/style-panel-01-data.json?v=' + new Date()).pipe(
            map((response: HttpResponse<any>) => response));
    };

}
