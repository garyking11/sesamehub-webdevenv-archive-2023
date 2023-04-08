import {Injectable} from '@angular/core';
import {Subscriber, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

declare var $: any;

@Injectable()
export class ImageManagerDirectoriesService {

    constructor(private _http: HttpClient) {
    }

    public data: any;
    public account: any;
    public r: any;
    public image_files: any[] = [];

    /**
     * get ratio directories from image repository
     * @param ratiodir
     * @returns {Observable<Response>}
     */
    getRatioDirectories(ratiodir): Observable<any>{

        //let bob =  this._http.get('https://www.sesamehub.com/image-manager/browse');
        // console.log(bob);
        return this._http.get('https://www.sesamehub.com/image-manager/browse');
    }

    /**
     * Get directories within the selected ratio directory (r). ie: 1x1, 3x4 etc
     */
    getRatioDirContents(imagerepo, r): Observable<any> {
        console.log(imagerepo, r);
        return this._http.get('https://www.sesamehub.com/image-manager/browse?ratio=' + r);
    }

    /**
     * Set info to /dashboard/data/data.json ie: {"imageManager":[{"ratio":"3x4","category":"asian"}]} (Currently functional but not in use. For future development).
     * @param data
     * @returns {Observable<Response>}
     */
    setImageRatioData(ratio) {
        const body = JSON.stringify(ratio);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/set-image-manager-data-endpoint.php', body, {headers: headers});
    }

    /**
     * Add to json
     * @param category
     * @returns {Observable<Response>}
     */
    setImageCategoryData(category) {
        const body = JSON.stringify(category);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/dashboard/endpoints/set-image-manager-data-endpoint.php', body, {headers: headers});
    }

    /**
     * Get all images in imagerepo directory
     * @param ratio
     * @param category
     * @returns {Observable<Response>}
     */
    getImages(ratio, category, imagerepo) {
        return this._http.get('https://www.sesamehub.com/image-manager/browse?ratio=' + ratio + '&category=' + category);
    }

}
