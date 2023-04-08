import {NgModule} from '@angular/core';
import {ToolbarComponent} from './dev-tools.component';
import {ResetNavHtml} from './services/dev-tools-sidebar.service';
import {DataService} from '../app/services/data.service';
import {ProductTypeRedirectService} from '../app/services/product-type-redirect.service';
import {SiteContextProviderService} from './site-context-provider/services/site-context-provider.service';
import {CommonModule} from '@angular/common';
import {QuickLinksModule} from '../app/quick-links/quick-links.module';
import {RouterModule} from '@angular/router';
import {SiteMetaDataModule} from './site-context-provider/site-metadata.module';
import {ToolsRoutes} from './dev-tools.routes';
import {AuthModule} from '../app/login/auth.module';
// import {LoginComponent} from '../app/login/login.component';
// import {AuthenticationService} from '../app/login/authentication.service';


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        CommonModule,
        QuickLinksModule,
        SiteMetaDataModule,
        RouterModule.forRoot(ToolsRoutes, {useHash: true}),
        AuthModule,
    ],
    exports: [ToolbarComponent],
    providers: [
        DataService,
        ProductTypeRedirectService,
        ResetNavHtml,
        SiteContextProviderService,
    ],
    bootstrap: [ToolbarComponent]
})

export class ToolbarModule {
}
