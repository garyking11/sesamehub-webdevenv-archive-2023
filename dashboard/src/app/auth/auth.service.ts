import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay } from 'rxjs/operators';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root',})

export class AuthService {
    constructor(private _router: Router, private _http: HttpClient) {
    }

    isLoggedIn(){
        return of(true).pipe(delay(500));
    }


    /**** NOT FUNCTIONAL getFormData() ***/
    /**
     * Get current admin data. ie: current release information
     * @returns {Observable<R>}
     * NOT FUNCTIONAL
     */
    getFormData(): Observable<any> {
         console.log(this._http.get('/dashboard/data/user-data.json?v=' +  new Date()).map(res => res));
        return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
    }

    logout() {
        localStorage.removeItem('user');
        this._router.navigate(['login']);
    }

    /**
     * If user is in localStorage proceed?
     */
    /*checkCredentials() {
        return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
    }*/
}