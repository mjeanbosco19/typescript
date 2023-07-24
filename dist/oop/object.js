"use strict";
const app = {
    name: 'App',
    version: '1.0.0',
};
class Account {
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
let account = new Account(1, 'Bosco', 0);
account.deposit(100);
console.log(account instanceof Account);
//# sourceMappingURL=object.js.map