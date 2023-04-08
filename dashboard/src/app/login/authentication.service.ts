import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {delay} from 'rxjs/operators';
import {User} from '../interfaces/user.interface';

// import {UserService} from "./user/user.service";

interface IUserData {
    users: User[]
}

// Define users using UserService instead of var ...
// getData()

/*let users = [
    new User('sesame', 'sesame'),
    new User('admin', 'admin'),
    new User('gking', 'admin')
];*/

// TODO: get users from database


@Injectable()
export class AuthenticationService {
    private users?: User[];
    constructor(private _router: Router, private _http: HttpClient) {
    }

    /**** NOT FUNCTIONAL getFormData() ***/
    /**
     * Get current admin data. ie: current release information
     * @returns {Observable<R>}
     * NOT FUNCTIONAL
     */
    getUsers(): Observable<User[]> {
        return new Observable<User[]>(subscriber => {
            if (this.users) {
                return subscriber.next(this.users);
            }

            this._http.get<IUserData>('/dashboard/data/user-data.json?v=' + new Date()).subscribe((userData) => {
                this.users = userData.users;
                subscriber.next(this.users);
            });
        });
    }

    /**
     * Log user or admin out
     * Needs connection to db instead of localStorage
     */
    logout() {
        localStorage.removeItem('user');
        window.sessionStorage.removeItem('AUTH_USER');
        this._router.navigate(['login']);
    }

    login(username: string, password: string): Observable<boolean> {
        return new Observable<boolean>(subscriber => {
            this.getUsers().subscribe((users) => {
                let authenticatedUser: User = users.find(u => u.username === username);

                if (authenticatedUser && authenticatedUser.password === password) {
                    this._router.navigate(['admin']);
                    window.sessionStorage.setItem('AUTH_USER', JSON.stringify(authenticatedUser));
                    return subscriber.next(true)
                }

                window.sessionStorage.removeItem('AUTH_USER');
                return subscriber.next(false)
            });
        });
    }

    isLoggedIn(): boolean {
        const user = window.sessionStorage.getItem('AUTH_USER');
        return !!user;
    }

    getUser(): User {
        const user = window.sessionStorage.getItem('AUTH_USER');
        return JSON.parse(user);
    }

   /* hasPermissions(){
        return of(true);
    }*/

    /**
     * If user is in localStorage proceed?
     */
    checkCredentials() {
        // console.log('checkCredentials: user authentication service');
        // console.log(users)
        /*if (localStorage.getItem('user') === null) {
            this._router.navigate(['login']);
        }*/
        return this._http.get('/dashboard/data/user-data.json?v=' + new Date());
    }
}
