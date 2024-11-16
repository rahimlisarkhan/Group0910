console.log(Math);

// const array = [2, 45, 6, 19, 7];

// const maxNum = Math.max(2, 45, 6, 19, 7);
// const maxNum = Math.max(...array);
// const minNum = Math.min(...array);

// console.log(maxNum);
// console.log(minNum);

// const a = 7.2;

// const result = Math.round(a);
// const result = Math.ceil(a);
// const result = Math.sqrt(64);

// const students = ["Resmiyye", "Cemile", "Sema", "Narmin", "Sebnem"];

// const randomNum = Math.random() * (students.length - 1); //

// console.log(randomNum);

// const num = Math.floor(randomNum); //? 0 - 3

// console.log(num);

// // const result = Math.floor(a);

// console.log(students[num]);

//? Pokemon - SU -> OD ->  Elektrik -> SU

const comp = ["w", "f", "e"];

const randomNum = Math.floor(Math.random() * comp.length);

const compChoose = comp[randomNum];
const userChoose = prompt("Enter your pokemon capital word!");

if (userChoose == "w" && compChoose == "f") {
  showMes("YOUR WIN!");
} else if (userChoose == "f" && compChoose == "e") {
  showMes("YOUR WIN!");
} else if (userChoose == "e" && compChoose == "w") {
  showMes("YOUR WIN!");
} else if (userChoose == compChoose) {
  showMes("DRAW DRAW!");
} else {
  showMes("YOUR LOSE!");
}

function showMes(title) {
  console.log("--------------");
  console.log(title);
  console.log("compChoose", compChoose);
  console.log("userChoose", userChoose);
  console.log("--------------");
}
