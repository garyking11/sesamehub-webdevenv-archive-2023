import {Injectable} from "@angular/core";
import {Observable, Subscriber} from "rxjs";
// import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BeforeAndAfterInterface} from './before-and-after.interface';
// import {OfficeTourInterface} from '../office-tour/office-tour.interface';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';

declare var $: any;

@Injectable()
export class BeforeAndAfterService {

    // private pathToBeforeAfterJson = '../assets/db-json/before-after.json';

    constructor(
        private _siteContextProviderService: SiteContextProviderService,
        public _httpClient: HttpClient
    ){}

    /**
     * data
     */
    getBAImageValues(): Observable<BeforeAndAfterInterface> {
        return new Observable<BeforeAndAfterInterface>((subscriber: Subscriber<BeforeAndAfterInterface>) => {
            this._siteContextProviderService.getCurrentContext().subscribe((siteContext: SiteContext) => {
                const path = `../../${siteContext.account}/assets/includes/data/before-and-after.json?v=${new Date()}`
                return this._httpClient.get<BeforeAndAfterInterface>(path).subscribe((BeforeAfter: BeforeAndAfterInterface) => {
                    subscriber.next(BeforeAfter);
                });
            });
        });
    }

    /**
     *
     * @param data
     * @returns {Observable<Response>}
     */
    // send to endpoint
    sendBeforeAfterImage(baf){
        const body = JSON.stringify(baf);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._httpClient.post('/dashboard/endpoints/before-and-after-endpoint.php', body, {headers: headers});
    }
}


