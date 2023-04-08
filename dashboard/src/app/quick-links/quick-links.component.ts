import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'dev-quick-links',
    templateUrl: './quick-links.component.html',
    styleUrls: ['./quick-links.component.css'],

})
export class QuickLinksComponent implements OnInit {

    quickLinks = [
        {'url': '//dental.drsesame.com/', 'display': 'dental.drsesame.com'},
        {'url': '//ortho.drsesame.com/', 'display': 'ortho.drsesame.com'},
        {'url': '//pediatric.drsesame.com/', 'display': 'pediatric.drsesame.com'},
        {'url': '//sesame-perio.sesamehub.com/', 'display': 'sesame-perio.drsesame.com'},
        {'url': '//sesamewebdesign.com/', 'display': 'sesamewebdesign.com'}
    ]

    quickLinksForm = new FormGroup({
        quicklink: new FormControl('', [])
    });

    constructor() {
    }

    ngOnInit() {
    }

    /**
     *
     * @returns {boolean}
     */
    onGetQuickLink() {
        let selectedlink = this.quickLinksForm.value; // Form values
        let url = selectedlink.quicklink;

        if (url !== '') {
            window.open(url, '_blank');
        } else {
            return false;
        }
    }
}
