import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedFormattingModule} from "../shared/shared-formatting/shared-formatting.module";
import {GithubCheatSheetComponent} from "./github-cheat-sheet.component";
import {ROUTES} from "./github-cheat-sheet.routes";
import {MenuModule} from "../menu/menu.module";

@NgModule({
    providers: [],
    imports: [
        CommonModule,
        MenuModule,
        SharedFormattingModule,
        RouterModule.forChild(ROUTES),
    ],
    declarations: [GithubCheatSheetComponent],
    exports: [GithubCheatSheetComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GithubCheatSheetModule {
}