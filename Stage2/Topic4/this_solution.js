// Solution 1
// const obj = {
//   name: "John",

//   foo: function () {
//     console.log(this); //?;
//   },
// };

// obj.foo();

// Solution 2
// const obj = {
//   fullname: "John",

//   foo: () => {
//     console.log(this.fullname); //?;
//   },
// };

// obj.foo();

// Solution 3
// const obj = {
//   fullname: "John Doe",

//   foo: function () {
//     console.log(this.fullname); //?;

//     function B() {
//       console.log(this.fullname); // ?;
//     }

//     B();
//   },
// };

// obj.foo();

// Solution 4
// const obj = {
//   fullname: "John Doe",

//   foo: function () {
//     console.log(this.fullname); //?;

//     var nestedThis = this;

//     function B() {
//       console.log(nestedThis.fullname); // ?;
//     }

//     B();
//   },
// };

// obj.foo();

// Solution 5
// const obj = {
//   fullname: "John Doe",

//   foo: function () {
//     console.log(this.fullname); //?;

//     const B = () => {
//       console.log(this.fullname); //?;
//     };

//     B();
//   },
// };

// obj.foo();

// Solution 6
// const obj = {
//   fullname: "John Doe",

//   foo: function () {
//     console.log(this.fullname); //?;

//     const B = () => {
//       console.log(this.fullname); //?;

//       const C = () => {
//         console.log(this.fullname); //?;
//       };

//       C();
//     };

//     B();
//   },
// };

// obj.foo();
