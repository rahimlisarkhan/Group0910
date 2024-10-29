const yourProduct = prompt("Mehsulu yazin"); // Alma
const yourProductWeight = prompt("Mehsulun cekisin yazin"); // 856 qram - x
// const yourProductPrice = prompt("Mehsulun qiymetin yazin"); // 1000 / 4.90

// let standardPriceKq = 1.6;
let standardPriceKq;

switch (yourProduct) {
  case "alma":
    standardPriceKq = 2.4;
    break;
  case "nar":
    standardPriceKq = 1.2;
    break;
  case "armud":
    standardPriceKq = 1.8;
    break;
  case "banan":
    standardPriceKq = 4.5;
    break;
  default:
    standardPriceKq = 1.6;
}

const result1 = (yourProductWeight * standardPriceKq) / 1000;
const result2 = result1.toFixed(1);

console.log("Qiymet", result2);
