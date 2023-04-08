import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
// import {AlertModule, ModalModule} from "ngx-bootstrap";
import {SharedFormattingModule} from "../../shared/shared-formatting/shared-formatting.module";
import {SharedDataModule} from "../../shared/shared-data/shared-data.module";
import {SharedFileManageModule} from "../../shared/shared-file-manage/shared-file-manage.module";
import {AdminNavModule} from "../admin-nav/admin-nav/admin-nav.module";
import {AdminImageManagerComponent} from "./admin-image-manager.component";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./admin-image-manager.routes";
import {ManageLibraryPagesService} from "./manage-library-pages.service";
import {UtilitiesModule} from "../../utilities/utilities.module";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {SnackbarService} from "../../services/snackbar.service";

@NgModule({
    providers: [ManageLibraryPagesService,
    SnackbarService],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedFormattingModule,
        SharedDataModule,
        SharedFileManageModule,
        AdminNavModule,
        RouterModule.forChild(ROUTES),
        AdminNavModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule,
        DragDropModule
    ],
    declarations: [AdminImageManagerComponent],
    exports: [AdminImageManagerComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminImageManagerModule {
}
