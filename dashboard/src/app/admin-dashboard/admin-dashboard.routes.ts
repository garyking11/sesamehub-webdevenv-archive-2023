import {Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {AdminImageManagerComponent} from "./admin-image-manager/admin-image-manager.component";


export const
    AdminDashboardRoutes: Routes = [
        {
            path: '',
            loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
        }
    ];