// Array
// Function
// Object

//   var a = 5;
//   //   var b = 8;

//   var b = a; // 5

//   a = 10;

//   //   var b = true;
//   //   var c = "hi";

//   //   a = 10;

//   console.log("a", a); //10 STACK
//   console.log("b", b); //5 STACK

//   var numbers = [1, 2, 3, 4, 5, 6, 7];

//   var array = [77, "hi", false, null, 18, [1, 2], "bye"];

//   var fruits = ["Pie", "Apple", "Banana", "Watermelon", "Avocado"];

//   //   fruits[1] = "Mango";

//   var result = fruits.length; // 5

//   //   var result = fruits[1];

//   console.log(result);

//  HEAP
var fruits = ["Pie", "Apple", "Banana", "Watermelon", "Avocado"]; // A page

var fruits2 = fruits.concat(); // Reference address copy // B page

fruits[2] = "Mango";

console.log("fruits", fruits); // ["Pie", "Apple", "Mango", "Watermelon", "Avocado"];
console.log("fruits2", fruits2); // ["Pie", "Apple", "Mango", "Watermelon", "Avocado"];
