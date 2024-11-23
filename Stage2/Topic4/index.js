//? SCOPE

//? var let const

// var a = 10;
// function B() {
//   var a = 7;

//   function C() {
//     var a = 2;

//     function D() {
//       var a = 1;

//       console.log(a);
//     }

//     D();
//   }

//   C();
// }

// B();

// SCOPE - 3
//*       GLOBAL LOCAL BLOCK Assign
//* var    yes   yes   no    yes
//* let    no    yes   yes   yes
//* const  no    yes   yes   no

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

//   return outerFn;
// }

// let result = innerFn();

// console.log(result);

function innerFn() {
  let x = 10;

  function outerFn() {
    const y = 11;
    return y * x;
  }

  return outerFn;
}

let result = innerFn();

console.log(result);
