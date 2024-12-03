// function A(parName, parAge) {
//   this.name = parName;
//   this.age = parAge;

//   this.sayHello = function () {
//     console.log(this.name, "hello!");
//   };
// }

// const personal1 = new A("Durre", 26);
// const personal2 = new A("Soltan", 26);

// personal1.sayHello();
// personal2.sayHello();

// console.log(personal1);
// console.log(personal2);

function BankAccount(name, surname, balance) {
  this.name = name;
  this.surname = surname;
  this.balance = balance;
  this.history = [];

  this.addBalance = function (money) {
    this.balance = this.balance + money;
    this.history.push(`+${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  };

  this.withdrawBalance = function (money) {
    this.balance = this.balance - money;
    this.history.push(`-${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  };

  this.showHistory = function () {
    console.log(this.history);
  };
}

const user1 = new BankAccount("Tural", "Soyad", 4000);
const user2 = new BankAccount("Soltan", "Soyad", 2000);

user1.addBalance(100);
user1.showHistory();
user1.withdrawBalance(90);
user1.showHistory();
