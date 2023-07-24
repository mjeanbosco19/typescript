// Object Properties works as variables stored in the object
// Object Methods is behavior of the properties
// Simple example of object
const app = {
  name: 'App',
  version: '1.0.0',
};

// Starting by creating a class
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount: number): void {
    if (amount < 0) throw new Error('Invalid amount');
    this.balance += amount;
  }
}
let account = new Account(1, 'Bosco', 0);

account.deposit(100);
console.log(account instanceof Account);

// Union
// if (typeof account === 'object) {}
