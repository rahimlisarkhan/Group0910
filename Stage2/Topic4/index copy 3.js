function sayHello(a, b, c) {
  console.log(this.name); //

  console.log(a, b, c);
}

const obj1 = {
  name: "John",
  age: 22,
};

const obj2 = {
  name: "Marry",
  age: 30,
};

// sayHello.call(obj1, 1, 2, 3); // Call hemin an cagirir
// sayHello.apply(obj2, [2, 3, 4]); // Call ile eyni isi gorur, paramslarina gore ferqlenir

const yeniSayHello = sayHello.bind(obj1, 1, 2, 3); // Bind hemin an cagirir

yeniSayHello();
