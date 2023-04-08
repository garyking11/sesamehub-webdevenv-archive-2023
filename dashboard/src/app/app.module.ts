import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataService} from './services/data.service';
import {ToolbarModule} from '../dev-tools/dev-tools.module';
import {GetHubNavigationModule} from './get-hub-navigation/get-hub-navigation.module';
import {ModalStaticModule} from './modal-static/modal-static.module';
import {MenuModule} from './menu/menu.module';
import {GetWelcomeTextComponent} from './get-welcome-text/get-welcome-text.component';
import {GetWelcomeTextModule} from './get-welcome-text/get-welcome-text-module';
import {CommonModule} from '@angular/common';
import {SupportModule} from './support/support.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToolbarComponent} from '../dev-tools';
import {TrimContentPipe} from "./pipes/trim-content.pipe";
import {FormBuilderComponent} from './form-builder/form-builder.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {SanitzeHtmlPipe} from './pipes/sanitze-html.pipe';
import {SharedFormattingModule} from './shared/shared-formatting/shared-formatting.module';
import {ReplaceSpaceWithUnderscorePipe} from './pipes/replace-space-with-underscore.pipe';
import {SanitzeHiddenRequiredField} from './pipes/sanitze-hidden-required-field.pipe';
import {RemoveTrailingCommaPipe} from './pipes/remove-trailing-comma.pipe';
import {GetImageSizeService} from './sections/get-image-size.service';
import {GetLocalFilesService} from './services/get-local-files.service';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
    providers: [
        DataService,
        GetImageSizeService,
        GetLocalFilesService
    ],
    declarations: [
        AppComponent,
        GetWelcomeTextComponent,
        TrimContentPipe,
        FormBuilderComponent,
        SanitzeHtmlPipe,
        SanitzeHiddenRequiredField,
        ReplaceSpaceWithUnderscorePipe,
        RemoveTrailingCommaPipe
    ],
    imports: [
        MenuModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToolbarModule,
        GetHubNavigationModule,
        GetWelcomeTextModule,
        // ModalStaticModule,
        SupportModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        DragDropModule,
        SharedFormattingModule,
        MatTabsModule,
    ],
    exports: [AppComponent],
    bootstrap: [AppComponent, ToolbarComponent]
})

export class AppModule {
}
