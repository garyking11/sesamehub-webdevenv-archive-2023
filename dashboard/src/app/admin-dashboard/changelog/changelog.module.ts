import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChangelogComponent} from './changelog.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from '../changelog/changelog.route';
import {SnackbarService} from '../../services/snackbar.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({

    providers: [
        SnackbarService
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        MatSnackBarModule,
        MatIconModule,
        MatExpansionModule,
        FormsModule,
        MatFormFieldModule
    ],
    exports: [
        ChangelogComponent
    ],
    declarations: [ChangelogComponent],

})
export class ChangelogModule {
}
