const getUserDetails = require("./user.js");

class Bank {
  #balance = 100;

  get getBalance() {
    return this.#balance;
  }
}

const bank = new Bank();

const method = bank.getBalance;

console.log(method);

getUserDetails();
