import {map} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()

export class DataService implements OnInit {

    data: any;

    constructor(private _http: HttpClient) {
    }

    ngOnInit() {
        this.getLocalDirectories();
    }

    /**
     *
     * @param data
     * @returns {Observable<Response>}
     */
    postData(data: any) {
        const body = JSON.stringify(data);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }

        return this._http.post('/dashboard/endpoints/data-endpoint.php', body, httpOptions);
    }

    /**
     *
     * @returns {Observable<Response>}
     */
    getData(): Observable<any> {
        return this._http.get('/dashboard/data/data.json?v=' + new Date());
    }

    /**
     * @param doctorName
     */
    getHubNavData(doctorName): Observable<string> {
        return this._http.get('/.well-known/.hub-navigation/'
            + doctorName, {responseType: "text"})
            .pipe(map(function (response) {
                let html = response;
                let nav = $('#main-nav  .collapsible > ul', $.parseHTML(html));
                return nav[0].outerHTML;
            }));
    }

    /**
     * @param doctorName
     * Load stock welcome text html into textarea
     */
    getWelcomeTextData(doctorName): Observable<string> {
        return this._http.get('/.well-known/.hub-welcome-text/'
            + doctorName, {responseType: "text"})
            .pipe(map(function (response) {
                let html = response;
                let welText = $('#content header h1', $.parseHTML(html));
                return welText[0].outerHTML;
            }));
    }

    /**
     * Load stock welcome text html from endpoints/stock-welcome-text.html.html
     */
    loadWelcomeTextData(): Observable<any> {
        return this._http.get('/dashboard/endpoints/stock-welcome-text.html.html', {responseType: "text"})

    }

    /**
     * Load stock nav html into textareaw
     */
    loadStockNavData(): Observable<any> {
        return this._http.get('/dashboard/endpoints/stock-nav-html.html', {responseType: "text"});

    }

    getLocalDirectories() {
        return this._http.get('../helpers.php').pipe(
            map(response => response));
    }

    /**
     * @param doctorName
     * @param html
     */
    postHubNavData(doctorName, html): Observable<any> {
        return this._http.post('/.well-known/.hub-navigation/'
            + doctorName + '/update', html);
    }

    /**
     * @param doctorName
     * @param html
     */
    postWelcomeTextData(doctorName, html): Observable<any> {
        return this._http.post('/.well-known/.hub-welcome-text/'
            + doctorName + '/update', html);
    }


}
