// const arr = [1, true, [5, 6]];

// const kicikArr = arr[2]; //? [5,6]

// console.log(kicikArr[1]); //? 6

// function A(par1, par2, part3) {
//   console.log(par1);

//   console.log(par2[1]);

//   console.log(part3 + 60);
// }

// A(true, [4, 5], 15);

// const a = 20;

// var show = function () {
//   console.log("Show code!");
// };

// function A(num, digerFunksiya) {
//   console.log("A procesing...");

//   digerFunksiya();
//   // console.log(num);
//   // console.log(digerFunksiya);
// }

// A(a, show);

// function vurma(num1, num2) {
//   const res = num1 * num2;
//   return res;
// }

// function cixma(num1, num2) {
//   const res = num1 - num2;

//   return res;
// }

// function toplama(num1, num2) {
//   const res = num1 + num2;

//   return res;
// }

// function calcShow(title, callback) {
//   const result = callback(12, 5);

//   console.log(title, result);
// }

// calcShow("Toplama netice: ", toplama);
// calcShow("Vurma netice: ", vurma);
// calcShow("Cixma netice: ", cixma);

// function A(num1, digerFn) {
//   console.log("digerFn", digerFn(12, 6));
// }

// A(12, vurma);

// const netice = vurma(12, 5); // 60
// const netice = vurma; // 60

// console.log(netice);

// const arr = [1, 2, 3, 4];

// const netice2 = arr[2]; //? 3
// const netice2 = arr; //? [1, 2, 3, 4]

function A() {
  console.log("Taxili uyudur");
}

function B() {
  console.log("Taxili qurudur");
}

function C() {
  console.log("Torpagi gubreleyir");
}

function monitoring(usta, isiIcraedenMasin, benzinDeyeri) {
  console.log("-----");
  console.log("Usta adi", usta);
  console.log("Istifade etdiyi benzin", benzinDeyeri);
  isiIcraedenMasin();
  console.log("-----");
}

monitoring("Ali", C, 20);
monitoring("Murad", A, 30);
monitoring("Veli", B, 10);
