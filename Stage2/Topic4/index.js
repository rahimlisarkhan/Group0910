// const A = function () {
//   // ...
// };

// Solition 1
// const A = (num1, num2) => {
//   return num1 + num2;
// };

// Solition 2
// const A = (num1, num2) => {
//   // ...
//   // ...
//   // ...
//   // ...
//   return num1 + num2;
// };

// Solition 3
// const A = (num1, num2) => num1 + num2;

// Solition 4
// const A = num1 => num1 + 6;

// Solition 5
// const A = num1 => ( // return menasi verir ( symbol
//   num1 + 6+ 10/2
// );

// const result = A(2, 4); // 6

let age = 18;
let gender = "male";

// let full_name = age >= 18 ? "Sukur Sukurbayli Ata adi" : "Sukur";

// console.log(full_name);

// const userFullname = (a, name, surname, parentName) =>
//   a >= 18 ? `${name} ${surname} ${parentName} ${genderName}` : name;

const userFullname = (a, name, surname, parentName, g) => {
  const genderName = g == "male" ? "oglu" : "qizi";

  const result =
    a >= 18 ? `${name} ${surname} ${parentName} ${genderName}` : name;

  return result;
};

// function userFullname(a, name, surname, parentName, g) {
//   const genderName = g == "male" ? "oglu" : "qizi";

//   const result =
//     a >= 18 ? `${name} ${surname} ${parentName} ${genderName}` : name;

//   return result;
// }

const personal1 = userFullname(age, "Sukur", "Sukurbayli", "Ata", gender);

console.log(personal1);
