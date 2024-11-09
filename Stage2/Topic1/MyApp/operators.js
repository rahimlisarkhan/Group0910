// // // Operators;
// // // Assignment

// // // Solution1
// // var a = 5;

// // var b = 4;

// // var c = a + b;
// // // var c = a * b;
// // // var c = a / b;
// // // var c = a - b;

// // console.log(c); // 9

// // // Solution2
// // var d = 5;

// // d = d + 3;

// // // Solution3
// // var e = 4;

// // var f = e + 2;

// // console.log(d); // 6

// Solution4
// var g = 5;

// g = g + 3;
// g += 3;

// // // Solution5
// // let v = 3;
// // let x = (100 + 50) * v;
// // console.log(x); // 450

// // var a = 5;

// // a **= 4;
// // a = a ** 4;

// // console.log("a:", a);

// // var a = 6;

// // var result = a % 2;

// // console.log(result);

// var a = 4;

// a++;

// console.log("a", a);

// // a--;
// // a--;

// // console.log("a:", a);

// // ======
// //?Comparison

// // Operator	Description
// // ==	equal to
// // ===	equal value and equal type
// // !=	not equal
// // !==	not equal value or not equal type
// // >	greater than
// // <	less than
// // >=	greater than or equal to
// // <=	less than or equal to
// // ?	ternary operator

var age = 18;

var condition = 18;
// // var b = "4";

// // var result = a > b; // true
var result = age >= condition; // true
var result = a < b; // false
var result = a === b; //false
var result = a == b; //true

var result = a * b; // coercion

var result = a != b; // true
var result = a !== b; // true

var citizen = "en";
var age = 16;
var height = 190;

// var result =  age > 18
// var result = age > 18 || citizen == "az" || height > 190;
// var result = age >= 18 && citizen == "az" && height >= 190;
var result = (age >= 18 || citizen == "az") && height >= 190;

console.log(result);

// console.log(result);
