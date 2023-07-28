"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log('target', target);
        originalMethod.call(this, ...args);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
    };
}
class Peerson {
    say(message) {
        console.log('Peerson says ' + message);
    }
}
__decorate([
    Log
], Peerson.prototype, "say", null);
let p = new Peerson();
p.say('Hello');
//# sourceMappingURL=methodDecorators.js.map