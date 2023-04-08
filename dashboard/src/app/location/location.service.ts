import {Injectable} from "@angular/core";
import {Observable, Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LocationInterface} from './location.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

declare var $: any;

@Injectable()
export class LocationService {
    constructor(
        public _httpClient: HttpClient,
        private _siteContextProviderService: SiteContextProviderService
    ) {
    }

    /**
     * JSON data
     */
    getLocations(): Observable<LocationInterface> {
        return new Observable<LocationInterface>((subscriber: Subscriber<LocationInterface>) => {
            this._siteContextProviderService.getCurrentContext().subscribe((siteContext: SiteContext)  => {
                const path = `../../${siteContext.account}/assets/includes/data/locations-data.json?v=${new Date()}`
                return this._httpClient.get<LocationInterface>(path).subscribe((location: LocationInterface) => {
                    subscriber.next(location);
                });
            });
        });
    }

    // send to endpoint
    sendLocations(locations){
        const body = JSON.stringify(locations);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post('/dashboard/endpoints/locations-data-endpoint.php', body, {headers: headers});
    }
}
