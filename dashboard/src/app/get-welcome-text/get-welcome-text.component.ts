import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../services/data.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
// import {isUndefined} from 'ngx-bootstrap/bs-moment/utils/type-checks';

declare var $: any;

@Component({
    selector: 'get-welcome-text',
    templateUrl: 'get-welcome-text.component.html',
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

        .invalid-selection {
            color: #fff;
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

export class GetWelcomeTextComponent implements OnInit {
    response: string;
    sitename: string;

    welcomeTextForm: FormGroup;
    private html: string;

    @Output()
    welTextResponse = new EventEmitter<string>();

    constructor(private _dataService: DataService) {
    }

    /**
     * Post Welcome Text to Application.php via data.service
     * @param hub_welcome_text
     */
    welcomeTextPost(hub_welcome_text: string, sitename: string) {

        this._dataService.postWelcomeTextData(sitename, hub_welcome_text)
            .subscribe(
                data => {
                    this.welTextResponse.emit('hub_welcome_text');
                    if (this.response === undefined) {
                        console.log('Welcome text required');
                        return;
                    } else {
                       console.log('this.welTextResponse: ' + this.welTextResponse)

                    }
                },
                error => console.log(error)
            );

    }

    /**
     * Get actual welcome text from hub
     */
    getWelcomeTextData() {
        this._dataService.getWelcomeTextData(this.sitename)
            .subscribe(
                data => {
                    this.response = data;
                    console.log(this.response);
                },
                error => console.log(error)
            );
    }

    /**
     * Get pseudo navigation from /dev
     */
     getStockWelcomeData() {
        this._dataService.loadWelcomeTextData()
            .subscribe(
                data => {
                    this.response = data;
                    // console.log('WELCOME TEXT in "getStockWelcomeTextData": ' + this.response);
                },
                error => console.log(error)
            );
    }

    ngOnInit(): any {
        this.sitename = window.location.href.match(/^.*:\/\/[^\/]+\/([^\/]+)\/.*$/)[1];
        const sitename = this.sitename;
        return sitename;
    }
}
