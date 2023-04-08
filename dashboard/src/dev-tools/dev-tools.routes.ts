import {Routes} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {AuthenticationGuard} from '../app/auth/authentication.guard';
import {AdminGuard} from '../app/auth/admin.guard';
import {ChangelogModule} from '../app/admin-dashboard/changelog/changelog.module';

export const ToolsRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'admin',
        canActivate: [AuthenticationGuard],
         loadChildren: () => import('../app/admin-dashboard/admin/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'user',
        canActivate: [AuthenticationGuard, AdminGuard],
        loadChildren: () => import('../app/login/user/user.module').then(m => m.UserModule)
    },

    {
        path: 'manage-image-manager',
        canActivate: [AuthenticationGuard, AdminGuard],
        loadChildren: () => import('../app/admin-dashboard/admin-image-manager/admin-image-manager.module').then(m => m.AdminImageManagerModule)
    },
    {
        path: 'canadian-content',
        loadChildren: () => import('../app/canadian-content/canadian-content.module').then(m => m.CanadianContentModule)
    },
    {
        path: 'github-cheat-sheet',
        loadChildren: () => import('../app/github-cheat-sheet/github-cheat-sheet.module').then(m => m.GithubCheatSheetModule)
    },
    {
        path: 'image-manager',
        loadChildren: () => import('../app/image-manager/image-manager.module').then(m => m.ImageManagerModule)
    },
    {
        path: 'redirects',
        loadChildren: () => import('../app/redirects/redirects.module').then(m => m.RedirectsModule)
    },
    {
        path: 'sections',
        loadChildren: () => import('../app/sections/sections.module').then(m => m.SectionsModule)
    },
    {
        path: 'css',
        loadChildren: () => import('../app/css/css.module').then(m => m.CssModule)
    },
    {
        path: 'css-mixins',
        loadChildren: () => import('../app/css-mixins/css-mixins.module').then(m => m.CssMixinsModule)
    },
    {
        path: 'buildkit-links',
        loadChildren: () => import('../app/buildkit-links/buildkit-links.module').then(m => m.BuildkitLinksModule)
    },
    {
        path: 'support',
        loadChildren: () => import('../app/support/support.module').then(m => m.SupportModule)
    },
    {
        path: 'changelog',
        loadChildren: () => import('../app/admin-dashboard/changelog/changelog.module').then(m => m.ChangelogModule)
    },
    {
        path: 'builder',
        loadChildren: () => import('../app/login/builder/builder.module').then(m => m.BuilderModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'form-builder',
        loadChildren: () => import('../app/form-builder/form-builder.module').then(m => m.FormBuilderModule)
    },
    {
        path: 'ddu',
        loadChildren: () => import('../app/drag-drop-to-upload/drag-drop-to-upload.module').then(m => m.DragDropToUploadModule)
    }


    /*,
    {    path: '/!**!/',
        component: PageNotFoundComponent
     }*/
];
