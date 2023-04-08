import {Injectable} from '@angular/core';
import {Subscriber, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()
export class GetLocalImagesService {

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
        const body = JSON.stringify(account);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post<any[]>('/dashboard/endpoints/get-image-manager-local-files.php', body, {headers: headers});
    }

    /**
     * Get current contents of /account-name/www/assets/images/<image directory>/*
     * @param account
     * @param directory
     */
    listLocalSliderImages(account: string, directory):Observable<any[]> {
        const body = JSON.stringify([account, directory]);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post<any[]>('/dashboard/endpoints/get-slider-local-files.php', body, {headers: headers});
    }

    /**
     * @param account
     * @param fileToDelete
     * @returns {Observable<Response>}
     */
    deleteImageFromLocalDir(account, fileToDelete) {
        const body = JSON.stringify([account, fileToDelete]);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {headers: headers});
    }
}
