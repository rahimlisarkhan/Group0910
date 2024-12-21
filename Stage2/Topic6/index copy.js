//? setInterval, setTimeout, clearInterval,clearTimeout

// console.log("Hello World");

// const q2 = setTimeout(() => {
//   console.log("Hello World2");
// }, 2000);

// const q3 = setTimeout(() => {
//   console.log("Hello World3");
// }, 2000);

// console.log(q2);
// console.log(q3);

// clearTimeout(q2);

// const q1 = setTimeout(() => {
//   console.log("Hello World");
// }, 3000);

// document.querySelector("button").addEventListener("click", () => {
//   clearTimeout(q1);
// });

// const q1 = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// document.querySelector("button").addEventListener("click", () => {
//   clearInterval(q1);
// });

// function showDate() {
//   const date = new Date();

//   const hours = date.getHours().toString().padStart(2, "0");
//   const minutes = date.getMinutes().toString().padStart(2, "0");
//   const seconds = date.getSeconds().toString().padStart(2, "0");

//   const result = `${hours}:${minutes}:${seconds}`;

//   console.log(result);

//   document.querySelector("h1").textContent = result;
// }

// const q1 = setInterval(showDate, 1000);

// document.querySelector("button").addEventListener("click", () => {
//   clearInterval(q1);
// });

// function countDown(millSeconds) {
//   let count = millSeconds;

//   const q1 = setInterval(() => {
//     count--;

//     if (count < 0) {
//       clearInterval(q1);
//     }

//     const min = Math.floor(count / 60);
//     const sec = count % 60;

//     const resultMin = `${min.toString().padStart(2, "0")}`;
//     const resultSec = `${sec.toString().padStart(2, "0")}`;

//     console.log(`${resultMin}:${resultSec}`);
//   }, 1000);
// }

// countDown(180);
