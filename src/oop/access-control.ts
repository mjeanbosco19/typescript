// In the TypeScript we have three Access Modifiers such as: public, private, protected
// We use private modifier to store password or credit card information
// by default each variable has public access
// Starting by creating a class

class UserKonti {
  readonly id: number;
  owner: string;
  private _balance: number; // make this private
  nickname?: string; // (?) make this optional

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }
  deposit(amount: number): void {
    if (amount < 0) {
      throw new Error('Invalid amount');
    } else {
       this._balance += amount;
    }

   
  }
  //   private calculateTax() {
  //      Calculate
  //   }
  getBalance(): number {
    return this._balance;
  }
}

let userKonte = new UserKonti(1, 'Bosco', 0);
// userKonte.id = 0; // can't assign value to id because is has readonly property

// userKonte.balance = -1; // can't be modified because has private modifier

userKonte.deposit(100);
console.log(userKonte instanceof UserKonti);
console.log(userKonte.getBalance());

// Union
// if (typeof userKonte === 'object) {}
