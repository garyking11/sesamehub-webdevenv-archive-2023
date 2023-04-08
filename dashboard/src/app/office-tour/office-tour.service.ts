import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {OfficeTourInterface} from './office-tour.interface';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';

@Injectable({
    providedIn: 'root'
})
export class OfficeTourService {

    constructor(
        private _siteContextProviderService: SiteContextProviderService,
        public _httpClient: HttpClient
    ) {
    }

    getOfficeImages(): Observable<OfficeTourInterface> {
        return new Observable<OfficeTourInterface>((subscriber: Subscriber<OfficeTourInterface>) => {
            this._siteContextProviderService.getCurrentContext().subscribe((siteContext: SiteContext) => {
                const path = `../../${siteContext.account}/assets/includes/data/office-tour-data.json?v=${new Date()}`
                return this._httpClient.get<OfficeTourInterface>(path).subscribe((officeTour: OfficeTourInterface) => {
                    subscriber.next(officeTour);
                });
            });
        });
    }

    // send to endpoint
    sendOfficeTourImage(data){
        const body = JSON.stringify(data);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post('/dashboard/endpoints/office-tour-data-endpoint.php', body, {headers: headers});
    }
}
