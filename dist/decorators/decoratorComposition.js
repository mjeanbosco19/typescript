"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyProfileComponent(options) {
    return (constructor) => {
        console.log('MyComponent decorator called');
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting the component in the DOM');
        };
    };
}
function Pipe(constructor) {
    console.log('Pipe decorator called');
    constructor.prototype.pipe = true;
}
let AccountProfileComponent = class AccountProfileComponent {
};
AccountProfileComponent = __decorate([
    MyProfileComponent({ selector: '#my-profile' }),
    Pipe
], AccountProfileComponent);
//# sourceMappingURL=decoratorComposition.js.map