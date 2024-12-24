// function A(callback) {
//   console.log("A");

//   const result = 10;
//   callback(result);
// }

function B(par) {
  console.log("B", par);
}

// A(B);

const handleFn = (resolve, reject) => {
  setTimeout(() => {
    const isTrue = true;

    //? process with backend

    const data = {
      result: [{ name: "Durre" }, { name: "Soltan" }],
    };

    const successResponse = {
      status: 200,
      message: "Ok",
      data,
    };

    const errResponse = {
      status: 404,
      message: "Not found",
      data: null,
    };

    if (isTrue) {
      resolve(successResponse);
    } else {
      reject(errResponse);
    }
  }, 3000);
};

const myPromise = new Promise(handleFn);
console.log("myPromise", myPromise);

// function onSuccess(data) {
//   console.log("then", data);
//   B(data);
// }

// function onSuccess2(data) {
//   console.log("then2", data);
// }

// function onError(data) {
//   console.log("catch", data);
// }

myPromise
  .then((data) => {
    console.log("then", data);
    B(data);
    return 10;
  })
  .then((c) => {
    console.log("c", c);
  })
  .catch((err) => {
    console.log("catch", err);
    // xeta()
  })
  .finally(() => {
    console.log("finally");
  });

// myPromise.then(onSuccess2);
// myPromise.catch(onError);
