import {Component} from '@angular/core';
import {CanadianContentService} from './canadian-content.service';
import {CopyDataToClipboardService} from '../services/copy-to-clipboard.service';
import {MatExpansionModule} from "@angular/material/expansion";

// Define jQuery
declare var $: any;

@Component({
    selector: 'dev-canadian-content',
    templateUrl: './canadian-content.component.html',
    styleUrls: ['./canadian-content.component.css']
})
export class CanadianContentComponent {

    private pageName: string;
    private pageType: string;
    private canadiancontent: string;

    constructor(private _copyDataToClipboardService: CopyDataToClipboardService,
                private _canadianContentService: CanadianContentService) {
    }

    /**
     * Copy HTML/CSS markup to clipboard
     */
    onCopyThisHTMLToClipboard(id) {
        this._copyDataToClipboardService.copyThisHTMLDataToClipboard(id);
    }

    /**
     *
     * @param type
     * @param file
     */
    onGetCanadianContent(type, file) {
        let canadiancontent = {
            type: type,
            file: file
        };

        this.pageName = canadiancontent.file;
        this.pageType = canadiancontent.type;

        this._canadianContentService.getCanadianContent(canadiancontent).subscribe(
            data => {
                this.canadiancontent = data;
            },
            error => console.log(error)
        )
    }
}
