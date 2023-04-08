import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddSaveButtonsComponent} from "./add-save-buttons.component";

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        AddSaveButtonsComponent,
    ],
    exports: [AddSaveButtonsComponent]
})

export class AddSaveButtonsModule {


}
