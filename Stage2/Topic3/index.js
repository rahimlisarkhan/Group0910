//? 1. Grasshopper - Summation
// assert.strictEqual(summation(1),  1);
// assert.strictEqual(summation(2),  3);
// assert.strictEqual(summation(8), 36);

// var summation = function (num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// };

// summation(1);
// summation(2);
// summation(8);

//? 2. Regex validate PIN code
// Test.assertEquals(validatePIN("1"),false, "Wrong output for '1'")
// Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
// Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
// Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
// Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
// Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
// Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
// Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
// Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")

// "1.23" false
// "123456" false

// function validatePIN(pin) {
//   let result = !isNaN(pin);

//   if (!result || pin.includes(".")) {
//     return false;
//   } else {
//     if (pin == "0000") {
//       return true;
//     }

//     if (pin.length == 4 || pin.length == 6) {
//       return true;
//     } else if (pin <= 0) {
//       return false;
//     } else {
//       return false;
//     }
//   }
// }

function validatePIN(pin) {
  pin = pin.split("");

  const findNaN = pin.find((character) => !(parseInt(character) >= 0));

  console.log("findNaN", findNaN);

  if ((pin.length === 4 || pin.length === 6) && !findNaN) {
    return true;
  } else {
    return false;
  }
}

const a = validatePIN("12456");

console.log("a", a);
