// const arr = ["Sema", "Durre", "Izzet", "Taleh", "Soltan"];
const arr = [40, 10, 20, 60, 30, 50];

// const list = new Array(5).fill(0);

// console.log(list);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   const el = arr[i];
//   sum += el;
// }

arr.sort(function (a, z) {
  return z - a;
});

console.log("arr", arr);

// const total = arr.reduce(function (sum, el) {
//   return sum + el;
// }, 0);

// console.log(total);

// const findEl = arr.find(function (el, i) {
//   //   return i == 2;
//   return el % 20 == 0;
// });

// const filterArr = arr.filter(function (el, i) {
//   return el % 20 == 0;
// });

// const resultArr = arr.filter(function (el, i) {
//   if (el !== 30) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const resultArr = arr
//   .filter(function (el, i) {
//     return el > 30;
//   })
//   .map(function (el, i) {
//     return `<button class="btn btn-danger"> ${el} </button>`;
//   });

// const resultArr = arr.map(function (el, index, list) {
//   return `<li class="item"> ${el} </li>`;
// }); // Yeni bir aaray qaytarir

// const resultArr2 = arr.forEach(function (el, index, list) {
//   return el * 2;
// }); // Yeni bir aaray qaytarir

// console.log("resultArr", resultArr);
// console.log("resultArr2", resultArr2);

// const age = 18;

// const result = age > 21; // false

// console.log(result);
