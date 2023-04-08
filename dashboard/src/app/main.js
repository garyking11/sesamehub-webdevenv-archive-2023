"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var dev_tools_sidebar_service_1 = require("../dev-tools/services/dev-tools-sidebar.service");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [
    dev_tools_sidebar_service_1.ResetNavHtml
]);
//# sourceMappingURL=main.js.map