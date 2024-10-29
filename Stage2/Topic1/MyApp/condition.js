// var , let, const

// var a = 5;

// let a = 5;
// const a = 3.14;

// a = 11;

// console.log("a", a);

//! Condition
//! switch ,case,default ,if, else, else if , ? :

// if else elseif
// Solition 1
// if(){

// }else{

// }

// Solition 2
// if(){

// }

// Solition 3
// if(){

// }else if(){

// }else if(){

// }
// else{

// }

// const age = 18;

// const result = age >= 18; //? true

// if (result) {
// if (age >= 18) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// if (age >= 18) console.log("YES");

// if (age >= 18) {
//   console.log("YES");
// } else if (age == 18) {
//   console.log("HMMM...");
// } else if (age == 14) {
//   console.log("Wrong answer");
// } else {
//   console.log("Finally");
// }

// const exerciseResult = prompt("Your point");

// if (exerciseResult >= 90) {
//   console.log("A");

//   if (exerciseResult == 98) {
//     console.log("WOOW!!!");

//     const accept = confirm("Kocurtmusen?");

//     if (accept) {
//       console.log("Esil ogrusan!");
//     } else {
//       console.log("Ejdahasan!");
//     }
//   }
// } else if (exerciseResult >= 60 && exerciseResult < 90) {
//   console.log("C");
// } else {
//   console.log("F");
// }

// console.log("exerciseResult", exerciseResult);

// const age = 21;

// if (age >= 18) {
//   console.log("Olar");
// }

// if (age == 18) {
//   console.log("Heyata xos geldin!");
// }

//? Ternary
let age = 15;

// let b = 20;
// let b;

if (age >= 18) {
  b = 100;

  if (age == 18) {
    b = 40;
  }
} else {
  b = 20;
}

let b = age >= 18 ? 100 : 20;
// let b = age >= 18 ? 100 : age == 18 ? 40 : 20;

console.log(b);
