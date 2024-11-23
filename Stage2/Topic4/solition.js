//? Solution 1
// function foo() {
//   console.log("Foo!");

//   function bar() {
//     console.log("Bar!");
//   }
//   return bar;
// }

// let netice = foo();

// netice();

//? Solution 2
// function foo() {
//   console.log("Foo!");

//   var bar = function () {
//     console.log("Bar !");
//     return 1001;
//   };

//   //   bar();
//   return bar;
// }

// let netice = foo();

// let result = netice();

// console.log(result);

//? Solution 3
// function innerFn() {
//   let x = 10;

//   function outerFn() {
//     const y = 11;
//     return y * x;
//   }

//   return outerFn // ozun qaytarirdi;
// }

// let result = innerFn();

// console.log(result);

//? Solution 4
// function innerFn() {
//   let x = 10;

//   function outerFn() {
//     const y = 11;
//     return y * x;
//   }

//   return outerFn();
// }

// let result = innerFn();

// console.log(result);
