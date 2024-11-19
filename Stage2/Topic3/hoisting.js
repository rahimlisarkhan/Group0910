//? 1. hoistedVariable
// a = 5;

// console.log(a);

// var a;

//? 2. hoistedFunction

B();

function B() {
  console.log("working...");
}

//? 3. Local scope
function doSomething() {
  x = 33;

  console.log(x);

  var x;
}

doSomething();
