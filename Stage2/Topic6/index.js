// const myCar = {
//   fuel: 20,

//   setFuel: function (f) {
//     if (f > 0) {
//       this.fuel = f;
//     } else {
//       console.log("Fuel must be greater than 0");
//     }
//   },
// };

// myCar.fuel = 0;
// // myCar.setFuel(0);

// console.log(myCar);

// 1. Encapsulation +
// 2. Abstraction +
// 3. Inheritance +
// 4. Polymorphism +

class Car {
  #fuel = 20;

  constructor(fuel) {
    if (fuel > 0) {
      this.#fuel = fuel;
    } else {
      console.log("Fuel must be greater than 0");
    }
  }

  #calcDollar() {
    return this.#fuel * 100;
  }

  set benzin(f) {
    if (f > 0) {
      this.#fuel = f;
    } else {
      console.log("Fuel must be greater than 0");
    }
  }

  get benzin() {
    return this.#fuel;
  }

  getFuelCalc() {
    this.#calcDollar();
  }
}

class SukurCar extends Car {
  age = 0;
  constructor(fuel, age) {
    super(fuel);
    this.age = age;
  }

  getCalcAge() {
    super.benzin = 200;
    console.log("age", this.age);
  }
}

// const myCar = new Car(0);

const myCar2 = new SukurCar(20, 5);

myCar2.getFuelCalc();
myCar2.getCalcAge();

console.log(myCar2);

// // myCar.#fuel = 0;

// myCar.benzin = 30;

// console.log("myCar", myCar.benzin);
