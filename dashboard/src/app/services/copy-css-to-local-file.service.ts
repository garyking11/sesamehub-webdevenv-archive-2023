import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()

export class CopyCssToLocalFileService {

    constructor(private _http: HttpClient) {
    }

    copyCssToLocalSite(account, cssstring, cssfile) {
        console.log(cssfile);
        const body = JSON.stringify({
            cssString: cssstring,
            account: account,
            cssFile: cssfile
        });
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/css');
        return this._http.post('/dashboard/endpoints/copy-css-to-local-endpoint.php', body, {headers: headers});
    }
}

