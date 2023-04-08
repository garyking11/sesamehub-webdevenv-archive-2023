import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddSpaceBeforeCapitalPipe} from '../../pipes/add-space-before-capital';
import {AddWidthPipe} from '../../pipes/add-width.pipe';
import {CapitalizePipe} from '../../pipes/capitalize.pipe';
import {CapitalizeEachWord} from '../../pipes/capitalize-each-word';
import {CapitalizeWordPipe} from '../../pipes/capitalize-word.pipe';
import {RemoveParenthesisPipe} from '../../pipes/remove-parenthesis.pipe';
import {ReplaceCharactersExceptDashPipe} from '../../pipes/replace-characters-except-dash.pipe';
import {ReplaceCurlyBraceEntityPipe} from '../../pipes/replace-curly-brace-entity.pipe';
import {ReplaceDashSpace} from '../../pipes/replace-dash-space';
import {ReplaceSpaceDash} from '../../pipes/replace-space-dash.pipe';
import {ReplaceTrailingDashPipe} from '../../pipes/replace-trailing-dash.pipe';
import {ReplaceUnderscoreSpace} from '../../pipes/replace-underscore.pipe';
import {ToLowercasePipe} from '../../pipes/to-lowercase.pipe';
import {GoogleMapRemoveIframeBorderPipe} from '../../pipes/google-map-remove-iframe-border';
import {GoogleMapRemoveWidthPipe} from '../../pipes/google-map-remove-width.pipe';
import {ReplaceEmailAtPipe} from '../../pipes/replace-email-at.pipe';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';

@NgModule({
  providers: [],
    imports: [
        CommonModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        FormsModule
    ],
    declarations: [
        AddSpaceBeforeCapitalPipe,
        AddWidthPipe,
        CapitalizePipe,
        ReplaceEmailAtPipe,
        GoogleMapRemoveIframeBorderPipe,
        GoogleMapRemoveWidthPipe,
        CapitalizeEachWord,
        CapitalizeWordPipe,
        RemoveParenthesisPipe,
        ReplaceCharactersExceptDashPipe,
        ReplaceCurlyBraceEntityPipe,
        ReplaceDashSpace,
        ReplaceSpaceDash,
        ReplaceTrailingDashPipe,
        ReplaceUnderscoreSpace,
        ToLowercasePipe
    ],
    exports: [
        AddSpaceBeforeCapitalPipe,
        AddWidthPipe,
        CapitalizePipe,
        ReplaceEmailAtPipe,
        GoogleMapRemoveIframeBorderPipe,
        GoogleMapRemoveWidthPipe,
        CapitalizeEachWord,
        CapitalizeWordPipe,
        RemoveParenthesisPipe,
        ReplaceCharactersExceptDashPipe,
        ReplaceCurlyBraceEntityPipe,
        ReplaceDashSpace,
        ReplaceSpaceDash,
        ReplaceTrailingDashPipe,
        ReplaceUnderscoreSpace,
        ToLowercasePipe
    ]
})
export class SharedFormattingModule { }
