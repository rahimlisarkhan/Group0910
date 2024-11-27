//? Closure | React State

// function innerFn() {
//   let count = 0;

//   function outerFn() {
//     // ...
//     // ...
//     // ...
//     return (count += 1);
//   }

//   return outerFn;
// }

function nameState() {
  let str = "";

  function state(n) {
    str = n;

    // ...
    // ...
    // ...
    // ...
    return str;
  }

  return state;
}

const emeliyyatEden = nameState();

const netice = emeliyyatEden("salam");

console.log(netice);

// let saygac = innerFn();

// saygac();
// saygac();
// saygac();

// let saygacNeticesi = saygac();

// console.log(saygacNeticesi); // 4
