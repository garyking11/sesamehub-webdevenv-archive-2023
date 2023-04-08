import {Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {AuthenticationGuard} from '../../auth/authentication.guard';

export const ROUTES: Routes = [
    { path: '', canActivate: [AuthenticationGuard], component: UserComponent }
];