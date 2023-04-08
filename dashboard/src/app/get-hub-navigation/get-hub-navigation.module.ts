import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {GetHubNavigationComponent} from './get-hub-navigation.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataService} from '../services/data.service';

@NgModule({
    providers: [DataService],
    imports: [CommonModule, FormsModule],
    declarations: [GetHubNavigationComponent],
    exports: [GetHubNavigationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GetHubNavigationModule {}
