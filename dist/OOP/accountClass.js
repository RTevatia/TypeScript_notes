"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    _balance;
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    nickname; //Optional property
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount.");
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, 'Marsh', 0);
account.deposit(100);
// console.log(account._balance); // not accessible as it is private
console.log(account.getBalance());
//# sourceMappingURL=accountClass.js.map