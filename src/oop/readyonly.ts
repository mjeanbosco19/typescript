// Starting by creating a class
class UserAcc {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string; // (?) make this optional

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

let userAccount = new UserAcc(1, 'Bosco', 0);
// userAccount.id = 0; // can't assign value to id because is has readonly property

userAccount.deposit(100);
console.log(userAccount instanceof UserAcc);

// Union
// if (typeof userAccount === 'object) {}
