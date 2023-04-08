import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SiteManagementService} from "../../dev-tools/services/site-management.service";
import {ModalStaticComponent} from "./modal-static.component";
import {ModalPopupService} from "../services/modal-popup.service";
// import {ModalModule} from "ngx-bootstrap";

@NgModule({
    providers: [
        SiteManagementService,
        ModalPopupService,
    ],
    imports: [
        CommonModule,
        // ModalModule.forRoot(),


    ],
    declarations: [ModalStaticComponent],
    exports: [ModalStaticComponent,]
})
export class ModalStaticModule {
}
