import {Component, OnInit, ViewChild} from '@angular/core';
import {SiteContextProviderService} from '../../dev-tools/site-context-provider/services/site-context-provider.service';
import {AdminService} from '../admin-dashboard/admin/admin.service';
import {SiteManagementService} from '../../dev-tools/services/site-management.service';

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    /**
     * Confirm delete from html
     */
    @ViewChild('confirm', { static: false }) ModalStatic;

    private localDirectories: any[] = [];
    private admindata: any;
    public backupFiles: any[] = [];
    showDeletedSpinner = false;

    constructor(private _siteContextProviderService: SiteContextProviderService,
                private _siteManagementService: SiteManagementService,
                private _adminService: AdminService, ) {
    }

    ngOnInit() {
        this.onGetLocalDirectories();
        this.getAdminData();
        // this.getBackupFilesList();
    }

    /**
     *  Get site buildkit directories
     */
    onGetLocalDirectories() {
        this._siteContextProviderService.getLocalDirectories()
            .subscribe(
                data => {
                    this.localDirectories = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Get current admin data. ie: current release information
     */
    getAdminData() {
        this._adminService.getFormData().subscribe(
            data => {
                this.admindata = data.adminData;
            }
        );
    }

    /**
     * Get list of zip files in /archives
     */
    // getBackupFilesList() {
    //     this._siteManagementService.backupFilesExist()
    //         .subscribe(
    //             data => {
    //                 this.backupFiles = data;
    //             },
    //             error => console.log(error)
    //         );
    // }
}

