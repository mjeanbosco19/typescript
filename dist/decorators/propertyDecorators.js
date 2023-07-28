"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MinLength(length) {
    return function (target, propertyKey) {
        let value = target[propertyKey];
        const getter = () => value;
        const setter = (val) => {
            if (val.length < length) {
                console.log(`Error: ${propertyKey} must be at least ${length} characters long.`);
            }
            else {
                value = val;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
class Useer {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(5)
], Useer.prototype, "password", void 0);
let useer = new Useer("1234");
console.log(useer.password);
//# sourceMappingURL=propertyDecorators.js.map