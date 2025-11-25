class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount(500);

acc.deposit(300);
console.log("Balance:", acc.getBalance());

try {
    acc.withdraw(1000);
} catch (e) {
    console.log("Error:", e.message);
}

acc.withdraw(200);
console.log("Balance:", acc.getBalance());
