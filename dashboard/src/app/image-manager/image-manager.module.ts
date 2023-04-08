import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
// import {AccordionModule} from 'ngx-bootstrap';
import {SharedDataModule} from '../shared/shared-data/shared-data.module';
import {SharedFileManageModule} from '../shared/shared-file-manage/shared-file-manage.module';
import {SharedFormattingModule} from '../shared/shared-formatting/shared-formatting.module';
import {ImageManagerComponent} from './image-manager.component';
import {ImageManagerDirectoriesService} from './image-manager-directories.service';
import {ImageManagerCopyToLocalDirService} from './image-manager-copy-to-local-dir.service';
import {ManageLibraryPagesService} from '../admin-dashboard/admin-image-manager/manage-library-pages.service';
import {ROUTES} from './image-manager.routes';
import {UtilitiesModule} from '../utilities/utilities.module';
import {MenuModule} from '../menu/menu.module';
import {SearchLibraryPages} from './search-library-pages.pipe';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ImageManagerDeleteDirective} from "../directives/image-manager-delete.directive";
import {MatCardModule} from "@angular/material/card";
import {SnackbarService} from "../services/snackbar.service";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    providers: [
        ImageManagerDirectoriesService,
        ImageManagerCopyToLocalDirService,
        ManageLibraryPagesService,
        SnackbarService
    ],
    imports: [
        // AccordionModule.forRoot(),
        CommonModule,
        FormsModule,
        MenuModule,
        ReactiveFormsModule,
        SharedFormattingModule,
        SharedDataModule,
        SharedFileManageModule,
        UtilitiesModule,
        RouterModule.forChild(ROUTES),
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatSnackBarModule

    ],
    declarations: [ImageManagerDeleteDirective, ImageManagerComponent, SearchLibraryPages],
    exports: [ImageManagerComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ImageManagerModule {}
