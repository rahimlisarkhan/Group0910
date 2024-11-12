//? Function

// function convertToDate(a, b, c, d) {
//   console.log(a, b, c, d);
// }

// convertToDate("Salam", 2);

// convertToDate("SAgol", 4);

// console.log("salam", 2);
// console.log("SAgol", 2);
// console.log("Qutu", 5);

// console.log(convertToDate);

// function sum(a, b, isSmile) {
//   console.log(a + b);

//   if (isSmile) {
//     console.log("Smile...");
//   }
// }

// sum(11, 45);
// sum(23, 420, true);
// sum(23, 20);
// sum(14, 20);

// function A(value = 0, value2, value3) {
//   console.log(value);
// }

// A();

// const numbers = [1, 2, 3, 4, 5, 6];
// const fruits = ["Mango", "Banana", "Pie"];
// // const people = ["Murad", "Cemile", "Togrul"];

// function showElements(arr) {
//   console.log("----------");
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     console.log("el", el);
//   }
//   console.log("----------");

//   return arr.length;
// }

// let a = showElements(fruits);
// console.log(a);

// showElements(numbers);
// showElements(people);

// console.log("----------");
// for (let i = 0; i < numbers.length; i++) {
//   let el = numbers[i];
//   console.log("el", el);
// }

// console.log("----------");

// for (let i = 0; i < fruits.length; i++) {
//   let el = fruits[i];
//   console.log("el", el);
// }
// console.log("----------");

// console.log("----------");
// for (let i = 0; i < people.length; i++) {
//   let el = people[i];
//   console.log("el", el);
// }
// console.log("----------");

// function A(point) {
//   console.log("Result value");

//   if (point == "A") {
//     return 100;
//   } else if (point == "C") {
//     return 60;
//   } else {
//     return 20;
//   }
// }

// let result = A("C");

// console.log(result); //? 100

// function multiple(a, b, c) {
//   let result = a * b * c;

// //   if (result > 100) {
// //     console.log("Big int");
// //   } else {
// //     console.log("Small int");
// //   }

//   return result;
// }

// let b = multiple(2, 5, 9);

// console.log(b);

function calc(num1, num2, operator) {
  let result;

  switch (operator) {
    case "topla":
      result = num1 + num2;
      break;
    case "cix":
      result = num1 - num2;
      break;
    case "vur":
      result = num1 * num2;
      break;
    case "bol":
      result = num1 / num2;
      break;
    default:
      result = 0;
      alert("Operator is wrong!");
  }

  return result;
}

// const a = calc(4, 5, "topla");
// const b = calc(2000, 141, "cix");
// const c = calc(2000, 3, "bol");
// const d = calc(2000, 3, "dagit");

// console.log(d);

// console.log(a);
// console.log(b);
// console.log(c);

function calc(operator, num1, num2) {
  let result = 0;
  //   let operator = "cix";
  //   let num1 = 20;
  //   let num2 = 5;

  switch (operator) {
    case "topla":
      result = num1 + num2;
      break;
    case "cix":
      result = num1 - num2;
      break;
    default:
      console.log("Sehdir");
  }

  return result;

  //   console.log(result);
}

const a = calc("cix", 12, 4);
const v = calc("topla", 12, 9);

console.log("a", a);
console.log("v", v);
