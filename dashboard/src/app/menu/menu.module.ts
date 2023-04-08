import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {UtilitiesModule} from "../utilities/utilities.module";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu.component";
@NgModule({
    providers: [],
    imports: [

        UtilitiesModule,
        RouterModule
    ],
    declarations: [MenuComponent],
    exports: [MenuComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule {}