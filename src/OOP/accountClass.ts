class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount.");
    this._balance += amount;
  }

  // balance getter
  get balance() {
    return this._balance;
  }

  // balance setter
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid input");
    this._balance = value;
  }
}

let account = new Account(1, "Marsh", 0);
account.deposit(100);
console.log(account.balance);

