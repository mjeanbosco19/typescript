class AccountInfo {
  nickname?: string;
  // the best way to declare a class without repeating codes
  // this is how to use parameters
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}
  deposit(amount: number): void {
    if (amount <= 0) throw new Error('Amount must be positive');
    this._balance += amount;
  }
  // Getting data using Getters method
  get balance(): number {
    return this._balance;
  }
  // For Setting value using Setters method
  set balance(value: number) {
    if (value <= 0) throw new Error('Amount must be positive');
    this._balance = value;
  }
}
let accountInfo = new AccountInfo(1, 'Bosco', 0);

accountInfo.deposit(100);
console.log(accountInfo instanceof AccountInfo);
console.log(accountInfo.balance);
accountInfo.balance = 100;
