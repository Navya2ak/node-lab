//const getUserDetails = require("./user.ts");
import getUserDetails, {
  getAllRoles,
  getAllUserNames,
  getAllUsers,
} from "./user.js";

Promise.all([getAllRoles(), getAllUserNames(), getAllUsers()]).then((res) =>
  console.log("all", res),
);
Promise.allSettled([getAllRoles(), getAllUserNames(), getAllUsers()]).then(
  (res) => console.log("settled", res),
);
Promise.race([getAllRoles(), getAllUserNames(), getAllUsers()]).then((res) =>
  console.log("race", res),
);
Promise.any([getAllRoles(), getAllUserNames(), getAllUsers()]).then((res) =>
  console.log("any", res),
);

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
