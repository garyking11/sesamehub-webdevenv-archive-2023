import {Component, OnInit} from '@angular/core';
import {GetLocalImagesService} from "../services/get-local-images.service";
import {SiteContextProviderService} from "../../dev-tools/site-context-provider";
import {SiteContext} from '../../dev-tools/site-context-provider/site-context-provider.interface';

@Component({
    selector: 'dev-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
    public account: any;
    public local_images: any[];
    public noImagesMessage: string;
    public sitecontext?: SiteContext;
    public directory: string;
    public slider_images: any[];

    constructor(
        private _siteContextProviderService: SiteContextProviderService,
        private _getLocalImagesService: GetLocalImagesService,
    ) {}

    ngOnInit(): void {
        this.onGetSiteContext();
    }

    /**
     * Get account directory name on click event in site-context html
     * @returns {any}
     */
    onGetSiteContext() {
        this._siteContextProviderService.getCurrentContext().subscribe(
            data => {
                this.sitecontext = data;
                this.getLocalFiles();
                this.getLocalSliderFiles();
            },
            error => console.log(error)
        );

        return this.sitecontext;
    }

    /**
     * Get directory pertinent images files. ie: before and after, office-tour
     */
    getLocalSliderFiles() {
        this._getLocalImagesService.listLocalSliderImages(this.sitecontext.account, 'before-after-cycle').subscribe(
            localImageData => {
                this.slider_images = localImageData;
            },
            error => console.log(error)
        );
    }

    /**
     * Get account image files from assets/uploads/images/
     *  Not being used in this component
     */
    getLocalFiles() {
        this._getLocalImagesService.listLocalAccountImages(this.sitecontext.account).subscribe(
            localImageData => {
                this.local_images = localImageData;

                if (localImageData) {
                } else {
                    this.noImagesMessage = 'No images available';
                }
            },
            error => console.log(error)
        );
    }
}
