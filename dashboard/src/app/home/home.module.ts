import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {ModalStaticModule} from '../modal-static/modal-static.module';
import {RouterModule} from '@angular/router';
// import {AccordionModule} from 'ngx-bootstrap';
import {SharedDataModule} from '../shared/shared-data/shared-data.module';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {AdminService} from '../admin-dashboard/admin/admin.service';
import {ModalPopupService} from '../services/modal-popup.service';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';
import {SiteMetaDataModule} from '../../dev-tools/site-context-provider/site-metadata.module';
import {ROUTES} from './home.routes';
import {SiteManagementService} from '../../dev-tools/services/site-management.service';
import {MenuModule} from '../menu/menu.module';
import {QuickLinksModule} from '../quick-links/quick-links.module';
import {UtilitiesModule} from '../utilities/utilities.module';
import {SiteBackupComponent} from './site-backup/site-backup.component';

@NgModule({
    providers: [
        SiteContextProviderService,
        SiteManagementService,
        AdminService,
        ModalPopupService,
    ],
    imports: [
        MenuModule,
        // AccordionModule.forRoot(),
        CommonModule,
        ModalStaticModule,
        QuickLinksModule,
        SharedDataModule,
        SharedFormattingModule,
        SiteMetaDataModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        HomeComponent,
        SiteBackupComponent
    ],
    exports: [HomeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
