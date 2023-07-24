"use strict";
class Stock {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let stock = new Stock();
stock.add({ namee: 'a', pricee: 1 });
stock.find('namee', 'a');
stock.find('pricee', 1);
//# sourceMappingURL=keyof.js.map