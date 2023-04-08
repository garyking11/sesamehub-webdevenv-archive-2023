import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SiteMetaDataComponent} from './site-metadata.component';
import {SharedDataModule} from '../../app/shared/shared-data/shared-data.module';
import {GetHubNavigationModule} from '../../app/get-hub-navigation/get-hub-navigation.module';
import {SiteContextProviderService} from './services/site-context-provider.service';
import {AdminService} from '../../app/admin-dashboard/admin/admin.service';
import {CreateSeedModule} from '../../app/create-seed/create-seed.module';
import {SharedFormattingModule} from '../../app/shared/shared-formatting/shared-formatting.module';
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatCardModule} from "@angular/material/card";
import {BuilderService} from "../../app/login/builder/builder.service";

@NgModule({
    providers: [
        AdminService,
        SiteContextProviderService,
        BuilderService
    ],
    imports: [
        CommonModule,
        SharedDataModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        GetHubNavigationModule,
        CreateSeedModule,
        MatExpansionModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatOptionModule,
        MatIconModule,
        DragDropModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule
    ],
    declarations: [SiteMetaDataComponent],
    exports: [SiteMetaDataComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SiteMetaDataModule {}
