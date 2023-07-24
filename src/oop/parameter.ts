class AccountInf {
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
}
let accountInf = new AccountInf(1, 'Bosco', 0);

accountInf.deposit(100);
console.log(accountInf instanceof AccountInf);
