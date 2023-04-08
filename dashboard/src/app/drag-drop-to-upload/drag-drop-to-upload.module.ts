import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropToUploadComponent} from './drag-drop-to-upload.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ROUTES} from '../drag-drop-to-upload/drag-drop-to-upload.routes';
import {FileDragNDropDirective} from './drag-to-drop-upload.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {DragDropToUploadService} from './drag-drop-to-upload.service';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {SnackbarService} from '../services/snackbar.service';
import {ImageManagerCopyToLocalDirService} from '../image-manager/image-manager-copy-to-local-dir.service';


@NgModule({
    declarations: [
        DragDropToUploadComponent,
        FileDragNDropDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatSnackBarModule,
        RouterModule.forChild(ROUTES),
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
    providers: [
        DragDropToUploadService,
        SnackbarService,
        ImageManagerCopyToLocalDirService
    ]
})
export class DragDropToUploadModule {
    onfileChange($event) {
        console.log('onFileChange Fired!')
    }
}
