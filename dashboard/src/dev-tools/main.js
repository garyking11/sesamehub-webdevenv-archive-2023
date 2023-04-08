"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var dev_tools_module_1 = require("./dev-tools.module");
var dev_tools_sidebar_service_1 = require("./services/dev-tools-sidebar.service");
//noinspection TypeScriptValidateTypes
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(dev_tools_module_1.ToolbarModule, [
    dev_tools_sidebar_service_1.ResetNavHtml,
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map