import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';

declare var $: any;

@Component({
    selector: 'dev-get-hub-navigation',
    templateUrl: 'get-hub-navigation.component.html',
    styles: [`
        .btn-group-sm > .btn, .btn-sm {
            padding: .25rem .5rem;
            font-size: .875rem;
            border-radius: .2rem;
        }
        .btn {
            display: inline-block;
            font-weight: 400;
            line-height: 1.25;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .5rem 1rem;
            font-size: 1rem;
            border-radius: .25rem;
            margin: 3px 0;
        }
        .btn:hover {
            background-color: #0099cc;
        }
        label {
            display: block;
            margin-top: 0;
            padding: 10px;
        }
        .form-group textarea {
            resize: vertical;
            width: 100%;
            font-family: inherit;
            font-size: inherit;
            color: #333;
            height: 50px;
            max-height: 50px;
        }
        .form-group {
            text-align: center;
        }
    `]
})

export class GetHubNavigationComponent implements OnInit {

    @Output() navResponse = new EventEmitter<string>();
    hub_navigation: string;
    nResponse: string;
    sitename: string;

    constructor(
        private _dataService: DataService) {
        // console.log(this.navResponse);
    }

    ngOnInit(): any {
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        const sitename = this.sitename;
        return sitename;
    }

    /**
     * Get actual navigation from sesamehub.com
     */
    getHubNavData() {
       /* this._dataService.getHubNavData(this.sitename)
            .subscribe(
                data => {
                    this.nResponse = data;
                },
                error => console.log(error)
            );*/
    }

    /**
     * Get stock navigation from /dev
     */
    getStockNavData() {
        this._dataService.loadStockNavData()
            .subscribe(
                data => {
                    this.nResponse = data;
                },
                error => console.log(error)
            );
    }

    /**
     * Set data into page (layout.php) via app.component
     * @param hub_navigation
     * @param sitename
     */
    onHubPost(hub_navigation: string, sitename: string) {
        this._dataService.postHubNavData(sitename, hub_navigation)
            .subscribe(
                data => {

                    // this.navResponse.emit(this.hub_navigation);

                    if (this.nResponse === undefined) {
                        console.log('Please enter a value');
                        return;
                    }
                    // console.log(this.response);
                    window.location.reload();
                },
                error => console.log(error)
            );
    };
}
