"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    balance;
    nickname; //Optional property
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount.");
        this.balance += amount;
    }
}
let account = new Account(1, 'Marsh', 0);
account.deposit(100);
console.log(account.balance);
console.log(account instanceof Account);
//# sourceMappingURL=accountClass.js.map