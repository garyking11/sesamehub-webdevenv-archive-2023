import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import {DragDropToUploadInterface} from './drag-drop-to-upload.interface';

@Injectable({
  providedIn: 'root'
})
export class DragDropToUploadService {
  public DDUploadInterface?: DragDropToUploadInterface;
  constructor(
      private _httpClient: HttpClient
  ) { }


  copyImagesToLocal(account: string, files: FileList, directory:string): Observable<void> {
    return new Observable<void>((subscriber: Subscriber<void>) => {
      let promises = [];
      let filesFormatted = [];
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i];
        const promise = file.arrayBuffer();
        promise.then((buffer: ArrayBuffer) => {
          let data = '';
          (new Uint8Array(buffer)).forEach(byte => {
            data += String.fromCharCode(byte);
          });

          filesFormatted.push({ name: file.name, data: btoa(data) });
        });

        promises.push(promise);
      }

      Promise.all(promises).then(() => {
        const body = JSON.stringify({account, files: filesFormatted, directory: directory});
        const headers = new HttpHeaders()
        headers.append('Content-Type', 'application/json');
        this._httpClient.post('/dashboard/endpoints/drag-drop-to-upload-endpoint.php', body, {headers: headers}).subscribe(() => subscriber.next());
      });
    })
  }

  /**
   * @param account
   * Get current contents of /account-name/www/assets/uploads/images
   * @param directory
   * @returns {Observable<Response>}
   */
  listLocalAccountImages(account: string, directory?: string):Observable<any[]> {
    const body = JSON.stringify({ account, directory });
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post<any[]>('/dashboard/endpoints/get-image-manager-local-files.php', body, {headers: headers});
  }

  /**
   *
   * @param account
   * @param directory
   */
  listLocalSliderImages(account, directory):Observable<any[]> {

      // default
    /*if(directory === null) {
        directory = 'images/spotlight';
      }*/
      const body = JSON.stringify([account, directory]);
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      return this._httpClient.post<any[]>('/dashboard/endpoints/get-slider-local-files.php', body, {headers: headers});
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
    return this._httpClient.post('/dashboard/endpoints/delete-image-manager-local-file.php', body, {headers: headers});
  }

}
