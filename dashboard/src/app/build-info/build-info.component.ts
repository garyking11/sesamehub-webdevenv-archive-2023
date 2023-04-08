import {Component, OnInit} from '@angular/core';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {AdminService} from '../admin-dashboard/admin/admin.service';
import {Router} from '@angular/router';
@Component({
    selector: 'dev-build-info',
    templateUrl: './build-info.component.html',
    styleUrls: ['./build-info.component.css']
})
export class BuildInfoComponent implements OnInit {
    private admindata: any;
    private buildversion: any;

    constructor(
        private _copyDataToClipboardService: CopyDataToClipboardService,
        private _adminService: AdminService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.getAdminData()
    }

    /**
     * Get admin data from dashboard/data/admin-data.json
     */
    getAdminData() {
        this._adminService.getFormData().subscribe(
            data => {
                this.admindata = data.adminData;
                this.buildversion = this.admindata[0].version;
            }
        );
    }

    /**
     * Copy HTML/CSS markup to clipboard
     */
    onCopyThisHTMLToClipboard(id) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(id);
    }
}
