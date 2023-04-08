import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNavModule} from '../../admin-nav/admin-nav/admin-nav.module';
import {AdminComponent} from '../admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthenticationService} from '../../../login/authentication.service';
import {SiteContextProviderService} from '../../../../dev-tools/site-context-provider/services/site-context-provider.service';
import {UserService} from '../../../login/user/user.service';
import {UtilitiesModule} from '../../../utilities/utilities.module';
import {ROUTES} from './admin.routes';
import {SharedDataModule} from '../../../shared/shared-data/shared-data.module';
import {AddSaveButtonsModule} from "../../../partials/add-save-buttons/add-save-module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SharedFormattingModule} from "../../../shared/shared-formatting/shared-formatting.module";
import {MatButtonModule} from "@angular/material/button";
import {SnackbarService} from "../../../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {UserModule} from '../../../login/user/user.module';


@NgModule({
    providers: [
        UserService,
        SiteContextProviderService,
        AuthenticationService,
        SnackbarService
        ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        AdminNavModule,
        UtilitiesModule,
        SharedDataModule,
        AddSaveButtonsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        DragDropModule,
        SharedFormattingModule,
        MatButtonModule,
        MatSnackBarModule,
        UserModule
    ],
    declarations: [
        AdminComponent
    ],
    exports: [
        AdminComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminModule {
}
