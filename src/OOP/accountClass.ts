class Account {
    readonly id: number;
    owner: string;
    private _balance: number;
    nickname?: string; //Optional property

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void {
        if (amount <= 0)
            throw new Error("Invalid amount.");
        this._balance += amount;
    }

    getBalance() {
        return this._balance;
    }

    // Make method private
    // private calculateTax(): number {
    //     return this._balance *0.1 // some calculate tax logic
    // }
}

let account = new Account(1, 'Marsh', 0);
account.deposit(100);
// console.log(account._balance); // not accessible as it is private
console.log(account.getBalance());
