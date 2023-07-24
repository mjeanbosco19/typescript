"use strict";
class UserKonti {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error('Invalid amount');
        }
        else {
            this._balance += amount;
        }
    }
    getBalance() {
        return this._balance;
    }
}
let userKonte = new UserKonti(1, 'Bosco', 0);
userKonte.deposit(100);
console.log(userKonte instanceof UserKonti);
console.log(userKonte.getBalance());
//# sourceMappingURL=access-control.js.map