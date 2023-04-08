import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';

export interface FileInfo {
  path: string;
  filename: string;
  ext: string;
  mime?: string;
  width?: number;
  height?: number
}

@Injectable({
  providedIn: 'root'
})
export class GetLocalFilesService {

  constructor(private _http: HttpClient) { }

  listLocalFiles(account: string, directory: string): Observable<FileInfo[]> {
    const body = JSON.stringify({ account, directory });
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post<FileInfo[]>('/dashboard/endpoints/get-local-files.php', body, {headers});
  }
}
