"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home.component");
exports.ToolsRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.ToolsRoutes);
//# sourceMappingURL=dev-tools.routes.js.map