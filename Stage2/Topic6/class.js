// class Car {
//   is_new = true;
//   fuel = 0;

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }

//   addFuel(f) {
//     this.fuel = this.fuel + f;
//     console.log(`${this.name} fuel is ${this.fuel}`);
//   }
// }

// const car1 = new Car("BMW", 2021);
// const car2 = new Car("Mercedes", 2020);

// car1.addFuel(20);

// console.log(car1);

// console.log(car2);

class BankAccount {
  history = [];
  balance = 0;
  name = "";

  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += parseInt(amount);

    console.log(`Deposited ${amount} into ${this.name} account`);
    this.history.push(`Deposited ${amount}`);
    this.getBalance();
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log(`Insufficient balance in ${this.name} account`);
    } else {
      this.balance -= amount;
      this.history.push(`Withdrawn ${amount}`);
      console.log(`Withdrawn ${amount} from ${this.name} account`);
    }
    this.getBalance();
  }

  getBalance() {
    console.log(`${this.name} account balance is ${this.balance}`);
  }
}

const account1 = new BankAccount("John", 1000);
// account1.deposit(200);
// account1.withdraw(50);

const h1 = document.querySelector("h1");

h1.innerHTML = `${account1.name} | ${account1.balance}`;

document.querySelector("#processBtn").addEventListener("click", () => {
  const amountInput = document.querySelector("#amountInput");
  account1.deposit(amountInput.value);

  document.querySelector("#list").innerHTML = account1.history
    .map((item) => `<li>${item}</li>`)
    .join("");
});

document.querySelector("#widhDrawBtn").addEventListener("click", () => {
  const amountInput = document.querySelector("#amountInput");
  account1.withdraw(amountInput.value);

  document.querySelector("#list").innerHTML = account1.history
    .map((item) => `<li>${item}</li>`)
    .join("");
});

console.log(account1);
