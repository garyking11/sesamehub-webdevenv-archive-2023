"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UniqueItemPipe = (function () {
    function UniqueItemPipe() {
    }
    UniqueItemPipe.prototype.transform = function (items, args) {
        return items.filter(function (item) { return item[0].indexOf(args[0]) !== -1; });
    };
    UniqueItemPipe = __decorate([
        core_1.Pipe({
            name: 'uniqueItemPipe'
        }),
        core_1.Injectable()
    ], UniqueItemPipe);
    return UniqueItemPipe;
}());
exports.UniqueItemPipe = UniqueItemPipe;
//# sourceMappingURL=unique-item-pipe.pipe.js.map