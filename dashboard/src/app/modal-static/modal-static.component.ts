import {Component, ViewChild} from '@angular/core';
// import {ModalDirective} from 'ngx-bootstrap/modal';
import {SiteManagementService} from '../../dev-tools/services/site-management.service';

@Component({
    selector: 'dev-modal-static',
    templateUrl: './modal-static.component.html',
    styleUrls: ['./modal-static.component.css']
})
export class ModalStaticComponent {
    private errorMessage: string;
    private buttonText: string;
    private popupBody: string;
    public isModalShown: boolean;
    public siteBuildKit: string;
    public alertType: string;
    public backupStatus: boolean;
    // @ViewChild('autoShownModal', { static: false }) public autoShownModal: ModalDirective;

    constructor(private _siteManagementService: SiteManagementService) {
    }
    /**
     * @param site
     * @param err
     * @param btntext
     * @param popupbody
     * @param alertType
     */
    public showModal(site, err, btntext, popupbody, alertType): void {
        this.isModalShown = true;
        this.errorMessage = err;
        this.siteBuildKit = site;
        this.buttonText = btntext;
        this.popupBody = popupbody;
        this.alertType = alertType;
    }

    public hideModal(): void {
        // this.autoShownModal.hide();
    }

    public onHidden(): void {
        this.isModalShown = false;
    }

    /**
     * Confirm delete buildkit
     * @param bool
     */
    public confirm(bool) {
        if (bool) {
            this.hideModal();
            this._siteManagementService.deleteSiteDirectory(this.siteBuildKit);
            location.reload();
        } else {
            console.log('false');
        }
    }

    /**
     * Create zip and backup local buildkit to archives directory
     * @param accountname
     */
    public backupAccountBuildkit(accountname) {
        this._siteManagementService.backupBuildKit(accountname);
        this.backupStatus = true;
    }
}

