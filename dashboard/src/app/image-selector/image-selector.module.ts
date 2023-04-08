import {NgModule} from '@angular/core';
import {ImageSelectorComponent} from './image-selector.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
@NgModule({
    providers: [],
    imports: [
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        CommonModule,
        MatInputModule,
        MatOptionModule
    ],

    declarations: [
        ImageSelectorComponent
    ],
    // , OfficeTourComponent
    exports: [
        ImageSelectorComponent
    ]
})
export class ImageSelectorModule {}