const api_key = "e76951c6";
const url = `http://www.omdbapi.com/?apikey=${api_key}&t=titanic`;

// .then()
// .catch()

async function getMovies() {
  try {
    const response1 = await fetch(url);
    const response2 = await fetch("https://jsonplaceholder.typicode.com/users");

    const data1 = await Promise.all([response1.json(), response2.json()]);

    console.log(data1);

    // const data2 = await response2.json();

    // console.log(data1); // dom
    // console.log(data2); // dom
  } catch (err) {
    console.log(err);
    alert("Problem in Server");
  } finally {
  }
  //   innerHtml
}

getMovies();
