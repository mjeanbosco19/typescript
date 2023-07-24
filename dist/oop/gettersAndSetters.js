"use strict";
class AccountInfo {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('Amount must be positive');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Amount must be positive');
        this._balance = value;
    }
}
let accountInfo = new AccountInfo(1, 'Bosco', 0);
accountInfo.deposit(100);
console.log(accountInfo instanceof AccountInfo);
console.log(accountInfo.balance);
accountInfo.balance = 100;
//# sourceMappingURL=gettersAndSetters.js.map