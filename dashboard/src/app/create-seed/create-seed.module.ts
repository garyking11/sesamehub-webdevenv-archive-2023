import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {HttpClientModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CreateSeedComponent} from './create-seed.component';
import {ModalStaticModule} from '../modal-static/modal-static.module';
import {RouterModule} from '@angular/router';
// import {AccordionModule} from 'ngx-bootstrap';
import {SharedDataModule} from '../shared/shared-data/shared-data.module';
import {GetHubNavigationModule} from '../get-hub-navigation/get-hub-navigation.module';
import {SiteManagementService} from '../../dev-tools/services/site-management.service';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {ModalPopupService} from '../services/modal-popup.service';
import {CreateSeedModalModule} from './create-seed-modal/create-seed-modal.module';
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    providers: [
        SiteManagementService,
        SiteContextProviderService,
        ModalPopupService
    ],
    imports: [
        CommonModule,
        // AccordionModule.forRoot(),
        SharedDataModule,
        SharedFormattingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        GetHubNavigationModule,
        ModalStaticModule,
        CreateSeedModalModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatButtonModule,
    ],
    declarations: [
        CreateSeedComponent
    ],
    exports: [CreateSeedComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CreateSeedModule {
}
