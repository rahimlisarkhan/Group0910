"https://kontakt.az/about/mebel";
"https://123.456.789.123/about/mebel";

// CRUD
// 1.CREATE
// 2.READ
// 3.UPDATE
// 4.DELETE

// GET
const myPromise = fetch("https://blog-api-t6u0.onrender.com/posts", {
  method: "GET",
});

// POST
const form = {
  title: "My blog",
  body: "Lorem ipsum",
};

const myPromise2 = fetch("https://blog-api-t6u0.onrender.com/posts", {
  method: "POST",
  body: JSON.stringify(form),

  //   headers:{
  //     "Content-Type":"application/json",
  //     "Authorization":"",
  //     "x-sema-id":""
  //   }
});

// PUT
const form1 = {
  title: "My blog",
  body: "Lorem ipsum",
};

const myPromise3 = fetch("https://blog-api-t6u0.onrender.com/posts/102", {
  method: "PUT",
  body: JSON.stringify(form1),
});

//DELETE
const myPromise4 = fetch("https://blog-api-t6u0.onrender.com/posts/102", {
  method: "DELETE",
});

// CORONA API
// const url = "https://covid-19-tracking.p.rapidapi.com/v1?country=AZE&city=Baku&citizen=azerbaijani";
const url = "https://covid-19-tracking.p.rapidapi.com/v1";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "9d9588302emsh58804fa5a30d4d9p1b947ajsn659ea6ae2269",
    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
  },
};

const myPromise5 = fetch(url, options);

myPromise5
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
