import {map} from 'rxjs/operators';
import {Injectable, OnInit} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SectionsInterface} from './sections.interface';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

declare var $: any;

@Injectable()

export class SectionsService implements OnInit {
    private _currentContext: any;
    private _currentContextSubscribers: Subscriber<any>[] = [];
    public getLocalDirectoriesError: string;
    buildkitResourcesDirectories: HttpResponse<any>;
    data: any;

    constructor(
        private _httpClient: HttpClient,
        private _siteContextProviderService: SiteContextProviderService
    ) {}

    ngOnInit() {
        // this._siteContextProviderService.getCurrentContext().subscribe();
        // console.log(console.log(this._currentContext.account));
    }

    /**
     *
     * @param data
     * @returns {Observable<Response>}
     */
    setBuildkitValues(data: any) {
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post('/dashboard/endpoints/sections-data-endpoint.php', body, {headers: headers});
    }

    /**
     *
     * @returns {Observable<Response>}
     */
    getData(account): Observable<any> {
        return this._httpClient.get<any>('/dashboard/data/markup-data.json?v=' + new Date());
    }

    getSectionsValues(){
       return new Observable<SectionsInterface>((subscriber: Subscriber<SectionsInterface>) => {
           this._siteContextProviderService.getCurrentContext().subscribe((siteContext: SiteContext) => {
               const path = `/dashboard/data/markup-data.json?v=${new Date()}`
               return this._httpClient.get<SectionsInterface>(path).subscribe((sections: SectionsInterface) => {
                   subscriber.next(sections);
               });
           });
       });

   }

    /*getBuildkitDirectories(): Observable<string[]> {
        return Observable.create((subscriber: Subscriber<string[]>) => {
            if (this.buildkitResourcesDirectories) {
                subscriber.next(this.buildkitResourcesDirectories.body);
                subscriber.complete();
                return;
            }

            // path is correct here
            this._httpClient.get('/dashboard/endpoints/get-buildkit-directories-endpoint.php').pipe(
                map((response: HttpResponse<string[]>) => response))
                .subscribe(
                    data => {
                        this.buildkitResourcesDirectories = data;

                        subscriber.complete();
                        console.log('service: ' + data);
                    },
                    error => {
                        subscriber.error('Error at getBuildkitResourcesDirectories in sections-service');
                    }
                );
        });
    }*/
}