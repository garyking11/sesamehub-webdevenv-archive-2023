import {Injectable, OnInit} from '@angular/core';
import {Observable, Observer, Subscriber} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map'
import {SiteContext} from '../site-context-provider.interface';

declare var $: any;

@Injectable()
export class SiteContextProviderService implements OnInit {

    private _localDirectories: string[];
    private _currentContext: any;
    private _currentContextSubscribers: Subscriber<any>[] = [];
    public getLocalDirectoriesError: string;
    public os: string;
    public osxClass: any;
    public pcClass: any;
    private _smdata: Subscriber<any>[] = [];
    public launchShowHide: string = 'hide';
    public osRelease: string;
    public account?: string;

    constructor(
        private _http: HttpClient,
    ) {}

    ngOnInit() {
        this.getCurrentContext();
        this.getOS();
    }

    /**
     * Get local direcno
     * tories
     * @returns {any}
     */
    getLocalDirectories(): Observable<string[]> {
        return new Observable((subscriber: Subscriber<string[]>) => {

            if (this._localDirectories) {
                subscriber.next(this._localDirectories);
                subscriber.complete();
                return;
            }

            // path is correct here
            this._http.get<string[]>('/dashboard/endpoints/get-local-directories-endpoint.php')

                .subscribe(
                    data => {
                        this._localDirectories = data;
                        subscriber.next(data);
                        subscriber.complete();
                    },
                    error => {
                        subscriber.error('Error at getLocalDirectories in site-context-provider service');
                    }
                );
        });
    }

    /**
     * Get operating system info
     */
    getOS() {
        let platform = navigator.userAgent;
        let macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Intel Mac OS' ],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'];

        if (macosPlatforms.some(p => platform.indexOf(p) !== -1)) {
            this.os = 'OSX';
        } else if (iosPlatforms.some(p => platform.indexOf(p) !== -1)) {
            this.os = 'iOS';
        } else if (windowsPlatforms.some(p => platform.indexOf(p) !== -1)) {
            this.os = 'PC';
        } else if (/Android/.test(platform)) {
            this.os = 'PC';
        } else if (/Linux/.test(platform)) {
            this.os = 'PC';
        }

        if (this.os === 'OSX') {
            this.osxClass = 'show';
            this.pcClass = 'hide';
        }
        if (this.os === 'PC') {
            this.osxClass = 'hide';
            this.pcClass = 'show';
        }
        return this.os;
    }

    /**
     * Get current context from /dashboard/data/site-context.json
     * getCurrentContext()
     * @returns {any}
     */
    getCurrentContext(): Observable<SiteContext> {

        return new Observable((subscriber: Subscriber<any>) => {
            this._currentContextSubscribers.push(subscriber);

            if (this._currentContext) {
                subscriber.next(this._currentContext);
                return;
            }

            // Get from data site-context.json
            this._http.get<any>('/dashboard/data/site-context.json?v=' + new Date())
                .subscribe(
                    data => {
                        this._currentContext = data;
                        this.account = data.account;

                        subscriber.next(data);
                    },
                    error => {
                        subscriber.error('Error at getCurrentContext in site-context-provider service');
                    }
                );
        });
    }

    /**
     * Get siteData from local site
     * @param account
     * @returns {Observable<R>}
     */
    getProductType(account): Observable<any> {
        return this._http.get('../../' + account + '/assets/includes/data/data.json?v=' + new Date());
    }

    /**
     * Click event triggers onSetSiteData(form values) which calls setCurrentContext()
     * @param context
     */
    setCurrentContext(context: any) {
        let siteContext: any = {
            'account': context.value.account,
            "builder": context.value.builder,
            'sm_version': context.value.sm_version,
            'buildversion': context.value.buildversion,
            'data_version': context.value.data_version,
            'css_preprocessor': context.value.css_preprocessor,
            'product_type': context.value.product_type,
            'template_layout': context.value.template_layout
        };

        let body: string = JSON.stringify(siteContext);

        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        // Post to active account-name/assets/includes/data/ **disable to allow removal of data folder
        this._http.post('/dashboard/endpoints/post-local-directory-endpoint.php', body, {headers: headers}).subscribe(
            data => {
                this._currentContext = siteContext;
                this._currentContextSubscribers.forEach((subscriber: Subscriber<any>) => {
                    subscriber.next(this._currentContext);
                });
            },
            error => {
                this.getLocalDirectoriesError = 'The site being added must exist on the hub. ' +
                    'Make sure the account has been created and is spelled correctly.';
                // tslint:disable-next-line:no-unused-expression
                'Error at setCurrentContext()';
            }
        );
    }

    /**
     * Get domain name from address bar
     */
    getCurrentDomainName() {
        let domainName = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        return domainName;
    }
}