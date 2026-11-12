interface BankDetails{
    name:string,
    balance:number
}

class Bank {
  #name: string;
  #balance: number;

  constructor(name: string, balance: number) {
    this.#name = name;
    this.#balance = balance;
  }

  get getBankDetails(): BankDetails {
    return {
      name: this.#name,
      balance: this.#balance,
    };
  }

  set deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Deposit amiable amount");
    }
    this.#balance += amount;
  }

  set withdraw(amount:number){
    if(amount<0){
        throw new Error("Amount must be positive value")
    }
    if(this.#balance-amount<0){
        throw new Error("Minimum balance is zero")
    }

    this.#balance-=amount;
  }
}

const bank=new Bank("navya",100)
bank.withdraw = 10;
bank.deposit=400;
console.log(bank.getBankDetails)