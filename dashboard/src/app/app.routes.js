"use strict";
var home_component_1 = require("../dev-tools/home.component");
var dev_tools_routes_1 = require("../dev-tools/dev-tools.routes");
var router_1 = require('@angular/router');
exports.routes = dev_tools_routes_1.ToolsRoutes.concat([
    { path: 'home', component: home_component_1.HomeComponent }
]);
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map