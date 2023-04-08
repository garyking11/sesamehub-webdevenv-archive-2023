import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataService} from '../services/data.service';

@NgModule({
    providers: [DataService],
    imports: [CommonModule, FormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GetWelcomeTextModule {

    constructor() {
       // console.log('GetWelcomeTextModule');
    }


}
