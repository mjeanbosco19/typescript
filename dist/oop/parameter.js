"use strict";
class AccountInf {
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
}
let accountInf = new AccountInf(1, 'Bosco', 0);
accountInf.deposit(100);
console.log(accountInf instanceof AccountInf);
//# sourceMappingURL=parameter.js.map