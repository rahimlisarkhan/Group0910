// function myFetch(url, options) {
//   const myPromise = new Promise((resolve, reject) => {
//     // ...
//   });

//   return myPromise;
// }

// const qaytarilacaqPromise = myFetch("")
// const qaytarilacaqPromise = fetch("https://www.sarkhanrahimli.dev/");

// console.log(qaytarilacaqPromise);

// qaytarilacaqPromise
//   .then((res) => {
//     console.log("res", res);

//     // const promise2 = res.json();
//     const promise2 = res.text();
//     return promise2;
//   })
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const inputEl = document.querySelector("#movieSearch");
const api_key = "e76951c6";

function renderData(movie) {
  console.log("move", movie);

  document.querySelector("#movieImg").src = movie.Poster;
  document.querySelector("#movieTitle").innerHTML = movie.Title;
  document.querySelector("#movieText1").innerHTML = movie.Actors;
  document.querySelector("#movieText2").innerHTML = movie.Country;
  document.querySelector("#movieText3").innerHTML =
    movie.Runtime == "N/A" ? "0 min" : movie.Runtime;
  document.querySelector("#movieRait").innerHTML = movie.imdbRating;

  // ...
}

function searchMovieFn() {
  const url = `http://www.omdbapi.com/?apikey=${api_key}&t=${inputEl.value}`;

  const response = fetch(url);

  response
    .then((data) => {
      const res2 = data.json();
      return res2;
    })
    .then((data2) => {
      if (data2.Response == "False") {
        alert(data2.Error);
        return;
      }

      renderData(data2);
    })
    .catch((err) => {
      console.log("err", err);
      alert("Movie error!");
    });

  inputEl.value = "";
}

inputEl.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    searchMovieFn();
  }
});

document.querySelector("#btnSearch").addEventListener("click", searchMovieFn);
