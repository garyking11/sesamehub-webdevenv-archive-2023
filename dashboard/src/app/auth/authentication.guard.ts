import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../login/authentication.service';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

    public user: string;
    constructor(
        private auth: AuthenticationService,
        private router: Router) {
        console.log('AUTHENTICATION');
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.auth.isLoggedIn() || this.router.createUrlTree(['/login']);
    }
}