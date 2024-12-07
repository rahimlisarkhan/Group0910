// const MyMath = {
//   PI: "3.14",

//   round: function (num) {
//     // ...
//     return 5;
//   },

//   eat: function () {},
// };

// obj.age = 33; // updated
// obj.job_title = "Developer"; // created
// obj.surname = "Doe";

// delete obj.name; // deleted

// console.log(obj.surname);

// MyMath.round(4.6);

// console.log(Math);

// const myCar1 = {
//   marka: "BMW",
//   model: "X6",
// };

// const myCar3 = {
//   marka: "KIA",
//   model: "Optima",
//   year: 2000,
// };

// const myCar2 = { ...myCar1, ...myCar3 };

// myCar2.is_new = true;

// myCar2.start = function () {
//   console.log("starting...");
// };

// // myCar1.model = "X5";

// console.log(myCar1);
// console.log(myCar2);

const bankAccount = {
  name: "Soltan",
  surname: "Mahmudov",
  balance: 0,
  history: [],

  addBalance: function (money) {
    this.balance = this.balance + money;
    this.history.push(`+${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  },

  withdrawBalance: function (money) {
    this.balance = this.balance - money;
    this.history.push(`-${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  },

  showHistory: function () {
    console.log(this.history);
  },
};

const bankAccount2 = {
  name: "Tural",
  surname: "",
  balance: 0,
  history: [],

  addBalance: function (money) {
    this.balance = this.balance + money;
    this.history.push(`+${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  },

  withdrawBalance: function (money) {
    this.balance = this.balance - money;
    this.history.push(`-${money}`);

    const result = `${this.name} balance is ${this.balance} ₼`;
    console.log(result);
  },

  showHistory: function () {
    console.log(this.history);
  },
};

bankAccount.addBalance(100);
bankAccount.withdrawBalance(5);
bankAccount.showHistory();

bankAccount2.addBalance(500);
bankAccount2.showHistory();
bankAccount2.withdrawBalance(100);
bankAccount2.withdrawBalance(10);
bankAccount2.showHistory();

// function A() {
//   console.log(this);
// }

// A();



