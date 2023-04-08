import {Injectable} from '@angular/core';
import {Subscriber, Observable} from "rxjs";
// import {Headers, Response} from "@angular/http";
// import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()
export class ImageManagerCopyToLocalDirService {

    constructor(private _http: HttpClient) {
    }

    /**
     * @param account
     * @param currentFile
     * @param newFile
     * @param ratio
     * @param category
     * @param imagerepo (image repository main directory on srwd)
     * @returns {Observable<Response>}
     */
    // TODO Remove unused parameters
    copyImagesToLocal(account, currentFile, newFile, ratio, category, imageRepo) {

        const body = JSON.stringify([account, currentFile, newFile]);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/copy-image-manager-files-to-local.php', body, {headers: headers});
    }

    /**
     * @param account
     * Get current contents of /account-name/www/assets/uploads/images
     * @returns {Observable<Response>}
     */
    listLocalAccountImages(account: string):Observable<any[]> {
        const body = JSON.stringify({ account });
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post<any[]>('/dashboard/endpoints/get-image-manager-local-files.php', body, {headers: headers});
    }

    listLocalSliderImages(account, directory):Observable<any[]> {

        // default
        if(directory === null) {
            directory = 'before-after-cycle';
        }
        const body = JSON.stringify([account, directory]);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post<any[]>('/dashboard/endpoints/get-slider-local-files.php', body, {headers: headers});
    }

    /**
     * @param account
     * @param directory
     * @param fileToDelete
     * @returns {Observable<Response>}
     */
    deleteImageFromLocalDir(account: string, directory: string, fileToDelete: string) {
        const body = JSON.stringify({account, directory, fileToDelete});
        console.log(body);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {headers: headers});
    }

}
