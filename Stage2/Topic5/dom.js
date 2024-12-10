// console.log(document);

// //? 1. Finding HTML Elements=========
// const titleEl = document.querySelector("#sectionTitle");
// const imgEl = document.querySelector("#profileImg");
// const lessonTitle = document.querySelector("#lessonTitle");

// // titleEl.previousElementSibling.previousElementSibling.style.color = "yellow";

// //? 2. Changing HTML Elements=========
// //1. innerHTML
// titleEl.innerHTML = "<span class='bg-red'>Salam</span>";
// // titleEl.innerText = "<span>Salam</span>";

// console.log(titleEl);

// //2. element.attribute = new value
// // imgEl.src =
// //   "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg";

// imgEl.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
// );

// imgEl.setAttribute("alt", "flower");
// // const result = imgEl.classList.contains("content-img");
// imgEl.classList.add("content-img");

// //3. element.style.property = new style
// // imgEl.style.backgroudColor = "yellow";
// imgEl.style.width = "120px";
// imgEl.style.height = "120px";
// imgEl.style.borderRadius = "20px";

//? Adding and Deleting Elements
const age = 22;

const divEl = document.createElement("div");

divEl.innerHTML = "Hello World";
// divEl.classList.add("bg-red", "text-center");
const dynamicStyle = age > 18 ? "bg-green" : "bg-red";

divEl.setAttribute("class", dynamicStyle);

// divEl.style.color = age > 18 ? "green" : "brown";

document.body.appendChild(divEl);

document.title = "Soltan AI";

console.log("divEl", divEl);

// document.write("Hello world");
