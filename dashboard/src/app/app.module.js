"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var forms_1 = require('@angular/forms');
// Components
var app_component_1 = require('./app.component');
var data_service_1 = require("./services/data.service");
var get_hub_navigation_component_1 = require("./get-hub-navigation/get-hub-navigation.component");
var dev_tools_sidebar_service_1 = require("../dev-tools/services/dev-tools-sidebar.service");
var dev_tools_component_1 = require("../dev-tools/dev-tools.component");
var dev_tools_routes_1 = require("../dev-tools/dev-tools.routes");
var home_component_1 = require("../dev-tools/home.component");
// Pipes
var add_space_before_capital_1 = require("../dev-tools/pipes/add-space-before-capital");
var capitalize_word_pipe_1 = require("../dev-tools/pipes/capitalize-word.pipe");
var keys_pipe_1 = require("../dev-tools/pipes/keys.pipe");
var capitalize_pipe_1 = require("../dev-tools/pipes/capitalize.pipe");
var site_metadata_component_1 = require("../dev-tools/site-context-provider/site-metadata.component");
var site_context_provider_service_1 = require("../dev-tools/site-context-provider/services/site-context-provider.service");
var dev_data_service_1 = require("../dev-tools/services/dev-data.service");
var schema_data_service_1 = require("../dev-tools/create-schema/services/schema-data.service");
var copy_to_clipboard_service_1 = require("../dev-tools/services/copy-to-clipboard.service");
var current_site_provider_service_1 = require("../dev-tools/services/current-site-provider.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            // Components, Pipes
            declarations: [
                app_component_1.AppComponent,
                get_hub_navigation_component_1.GetHubNavigationComponent,
                home_component_1.HomeComponent,
                dev_tools_component_1.ToolbarComponent,
                //CreateSchemaComponent,
                site_metadata_component_1.SiteMetaDataComponent,
                capitalize_pipe_1.CapitalizePipe,
                capitalize_word_pipe_1.CapitalizeWordPipe,
                add_space_before_capital_1.AddSpaceBeforeCapitalPipe,
                keys_pipe_1.KeysPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(dev_tools_routes_1.ToolsRoutes, { useHash: true })
            ],
            // application-wide services
            providers: [
                dev_tools_sidebar_service_1.ResetNavHtml,
                get_hub_navigation_component_1.GetHubNavigationComponent,
                current_site_provider_service_1.CurrentSiteProviderService,
                data_service_1.DataService,
                site_context_provider_service_1.SiteContextProviderService,
                dev_data_service_1.DevDataService,
                schema_data_service_1.SchemaDataService,
                forms_1.FormBuilder,
                forms_1.Validators,
                copy_to_clipboard_service_1.CopyDataToClipboardService
            ],
            bootstrap: [
                app_component_1.AppComponent,
                dev_tools_component_1.ToolbarComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map