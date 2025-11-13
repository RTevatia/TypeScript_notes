"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    _balance;
    nickname;
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount.");
        this._balance += amount;
    }
    // balance getter
    get balance() {
        return this._balance;
    }
    // balance setter
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid input");
        this._balance = value;
    }
}
let account = new Account(1, "Marsh", 0);
account.deposit(100);
console.log(account.balance);
account.balance = -1;
console.log(account.balance);
//# sourceMappingURL=accountClass.js.map