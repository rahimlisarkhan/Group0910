//? Solition 1
// for (let i = 0; i < 10; i += 2) {}

//? Solition 2
// let list = [];
// for (let i in list) {
// }

//? Solition 3
// let list2 = [];
// for (let el of list2) {
// }

// let list = [1,2,3,4]

// for (let i = 0; i <= 100; i++) {
//   if (i % 5 == 0 && i % 2 == 0) {
//     console.log("value:", i);
//   }
// }

// for (let i = 50; i > 0; i--) {
//     console.log("value:", i);
//   }

// let people = ["Aydan", "John", "Marry", "Ashlee", "Tural", "Asif"];

// let people2 = [];

// for (let i = people.length - 1; i >= 0; i--) {
//   const element = people[i];

//   people2.push(element);

//   console.log("element", element);
// }

// console.log(people2);

// Solition 2
// for (let i = 0; i < people.length; i++) {
//   let element = people[i];

//   const result = element.startsWith("A");

//   if (result) {
//     console.log("element", element);
//   }
// }

// let people = ["Aydan", "John", "Marry", "Ashlee", "Tural", "Asif"];

// for (let el of people) {
//   //   console.log("element", el);

//   if (el == "Ashlee") {
//     console.log("element", el);
//     break;
//   }

//   console.log("element", el);
// }

// for (let i in people) {
//   const el = people[i];

//   console.log("el", el);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i); // Butun hesablama kodlarivi yaz bitir sonra 1 vahid artir
//   i++;
// }

// let i = 0;

// do {
//   console.log("i", i);
//   i++;
//   console.log("i", i);
// } while (i < 10);

// let people = ["Aydan", "John", "Marry", "Ashlee", "Tural", "Asif"];

// let i = 0;

// while (i < people.length) {
//   const el = people[i];

//   console.log(el);

//   // ...

//   i++;
// }

// let countdown = 10;

// while (countdown >= 0) {
//   console.log(countdown);

//   countdown--;
// }

// let list = [5, 6, 7, 8, 9, 10, 14, 16, 17, 19];

// let list2 = [];
// //? output "6-8-10-14-16"

// for (let i = 0; i < list.length; i++) {
//   let el = list[i];

//   if (el % 2 == 0) {
//     console.log(el);
//     list2.push(el);
//     // list2.splice(list2.length-1,0,el)
//   }
// }

// console.log(list2.join("-"));

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   const name = prompt("Enter your student name");
//   arr.push(name);

//   console.log("i", i);
// }

// for (let fullName of arr) {
//   const result = `${fullName} is great student`;
//   console.log(result);
// }

// console.log("arr", arr);

// let list = [5, 6, 7, 9, 19, 10, 4, 14, 16, 17];
// let min = Infinity; //

// for (let i = 0; i < list.length; i++) {
//   let el = list[i];

//   if (min > el) {
//     min = el;
//   }

//   console.log(el);
// }

// console.log("min", min);

// let list = [5, 6, 7, 9, 19, 10, 4, 14, 16, 17];
// let max = -Infinity;

// for (let i = 0; i < list.length; i++) {
//   let el = list[i];

//   if (max < el) {
//     max = el;
//   }

//   console.log(el);
// }

// console.log("max", max);

// Solition1
// var sum = 0;

// for (let num of list) {
//   sum += num;
//   //   console.log(num);
// }

// console.log(sum); //? NaN - Not a Number
