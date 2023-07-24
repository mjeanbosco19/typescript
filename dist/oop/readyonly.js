"use strict";
class UserAcc {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid amount');
        this.balance += amount;
    }
}
let userAccount = new UserAcc(1, 'Bosco', 0);
userAccount.deposit(100);
console.log(userAccount instanceof UserAcc);
//# sourceMappingURL=readyonly.js.map