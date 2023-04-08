import {Injectable} from "@angular/core";
import {Observable, Subscriber} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MeetTheTeamInterface} from './meet-the-team.interface';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider';
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

declare var $: any;

@Injectable()
export class MeetTheTeamService {
    constructor(
        public _httpClient: HttpClient,
        private _siteContextProviderService: SiteContextProviderService
    ) {
    }

    /**
     * JSON data
     */
    getMeetTheTeamMembers(): Observable<MeetTheTeamInterface> {
        return new Observable<MeetTheTeamInterface>((subscriber: Subscriber<MeetTheTeamInterface>) => {
            this._siteContextProviderService.getCurrentContext().subscribe((siteContext: SiteContext)  => {
                const path = `../../${siteContext.account}/assets/includes/data/meet-the-team-data.json?v=${new Date()}`
                return this._httpClient.get<MeetTheTeamInterface>(path).subscribe((meetTheTeam: MeetTheTeamInterface) => {
                    subscriber.next(meetTheTeam);
                });
            });
        });
    }

    // send to endpoint
    sendTheTeamMembers(data){
        console.log(data);
            const body = JSON.stringify(data);
            const headers = new HttpHeaders();
            headers.append('Content-Type', 'mime');
            return this._httpClient.post('/dashboard/endpoints/meet-the-team-data-endpoint.php', body, {headers: headers});
    }
}
