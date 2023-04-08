import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class SiteManagementService {

    constructor(private _http: HttpClient) {
    }

    createSeed(siteSeed: any) {
        console.log(siteSeed);
        if (siteSeed === 'dashboard' || siteSeed === 'dev'
            || siteSeed === 'MAMP' || siteSeed === 'wampthemes'
            || siteSeed === 'archives' || siteSeed === 'form-template') {
            alert('Cannot overwrite root directories');
            return;
        }

        const body = JSON.stringify(siteSeed);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        // copy stock psds-buildkit contents to root directory
        return this._http.post('/dashboard/endpoints/create-seed-endpoint.php', body, {
            headers: headers
        });
    }

    /**
     *
     * @param siteDirName
     */
    deleteSiteDirectory(siteDirName: any):Promise<any> {
        if (siteDirName === 'dashboard'
            || siteDirName === 'dev'
            || siteDirName === 'wamplangues'
            || siteDirName === 'MAMP'
            || siteDirName === 'wampthemes'
            || siteDirName === 'srwd') {
            console.log('Cannot delete root directories');
            return;
        }

        let siteDirectory: any = {
            'siteDirectoryName': siteDirName
        };

        let body: string = JSON.stringify(siteDirectory);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        // Post to delete endpoint
        return this._http.post('/dashboard/endpoints/delete-site-directory-endpoint.php',
            body, {headers: headers}).toPromise();
    }

    /**
     * @param accountname
     * @returns {any}
     */
    backupBuildKit(accountname){
        let body: string = JSON.stringify(accountname);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        // Post to backup endpoint
        return this._http.post('/dashboard/endpoints/backup-buildkit-endpoint.php',
            body, {headers: headers}).toPromise();
    }

    /**
     * @returns {Observable<R>}
     */
    backupFilesExist() {
        const body = JSON.stringify('archives');
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/backup-exists-endpoint.php',
            body, {headers: headers});
    }
}
