// ... ES2016 Spread rest

// let arr1 = [1, 2, 3, 4, 5];

// // // let arr2 = arr1.concat();
// // let arr2 = [...arr1];

// // arr1[2] = "Salam";

// // console.log(arr1);
// // console.log(arr2);

// function A(a, b, c, d, e) {
//   console.log(a);
// }

// // A(1, 2, 3, 4, 5);
// A(...arr1);

// function B(a, ...args) {
// function B(...arr) {}

// B(1, 2, 3, 4, true, null, 14);

// Ternary

let age = 18;
let gender = "male";

// let full_name = age >= 18 ? "Sukur Sukurbayli Ata adi" : "Sukur";

// console.log(full_name);

function userFullname(a, name, surname, parentName, g) {
  const genderName = g == "male" ? "oglu" : "qizi";

  const result =
    a >= 18 ? `${name} ${surname} ${parentName} ${genderName}` : name;

  return result;
}

const personal1 = userFullname(age, "Sukur", "Sukurbayli", "Ata", gender);

console.log(personal1);

// let full_name = "Sukur";

// if (age >= 18) {
//   full_name = "Sukur Sukurbayli Ata adi";
// }

// ...
// ...
// ...
// ...
// ...
// ...
// ...
