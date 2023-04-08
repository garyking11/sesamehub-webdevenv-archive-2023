import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
// import {ModalModule} from "ngx-bootstrap";
import {CreateSeedModalComponent} from "./create-seed-modal.component";
import {SiteManagementService} from "../../../dev-tools/services/site-management.service";
import {ModalPopupService} from "../../services/modal-popup.service";
@NgModule({
  providers: [
    SiteManagementService,
    ModalPopupService
  ],
  imports: [
    CommonModule,
    // ModalModule.forRoot()
  ],
  declarations: [CreateSeedModalComponent],
  exports: [CreateSeedModalComponent,]
})
export class CreateSeedModalModule { }





