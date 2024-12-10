const playBtn = document.querySelector("#playBtn");

const pointEl1 = document.querySelector("#pointEl1");
const pointEl2 = document.querySelector("#pointEl2");

const statusEl1 = document.querySelector("#statusEl1");
const statusEl2 = document.querySelector("#statusEl2");

const imgEl1 = document.querySelector("#imgEl1");
const imgEl2 = document.querySelector("#imgEl2");

// Oyunun esas deyiskenleri
const pokemons = ["e", "f", "w"];

const images = {
  e: "https://img.pokemondb.net/artwork/large/pikachu.jpg",
  f: "https://assets.pokemon.com/assets/cms2/img/pokedex/full//004.png",
  w: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvgt4O7bdc3ZlDEvYvma4MmUh_by2nZrV0A&s",
};

console.log("images", images);

let point1 = 0;
let point2 = 0;

const randomPokemon = () => {
  const randomNum = Math.random() * pokemons.length;
  const randomIndex = Math.floor(randomNum);

  return pokemons[randomIndex];
};

const showMeMonitoring = () => {
  point1 += 1;

  pointEl1.innerHTML = point1;

  statusEl1.innerHTML = "WIN";
  statusEl2.innerHTML = "LOSE";

  statusEl1.style.color = "green";
  statusEl2.style.color = "red";
};

const playGame = () => {
  const userMe = randomPokemon();
  const userComp = randomPokemon();

  const userImg = images[userMe];
  const compImg = images[userComp];

  if (userMe == "w" && userComp == "f") {
    imgEl1.src = userImg;
    imgEl2.setAttribute("src", compImg);

    showMeMonitoring();
  } else if (userMe == "e" && userComp == "w") {
    imgEl1.src = userImg;
    imgEl2.setAttribute("src", compImg);

    showMeMonitoring();
  } else if (userMe == "f" && userComp == "e") {
    imgEl1.src = userImg;
    imgEl2.setAttribute("src", compImg);

    showMeMonitoring();
  } else if (userMe == userComp) {
    statusEl1.innerHTML = "DRAW";
    statusEl2.innerHTML = "DRAW";

    statusEl1.style.color = "black";
    statusEl2.style.color = "black";

    imgEl1.src = userImg;
    imgEl2.setAttribute("src", compImg);

    console.log("Draw");
  } else {
    point2 += 1;

    pointEl2.innerHTML = point2;

    statusEl1.innerHTML = "LOSE";
    statusEl2.innerHTML = "WIN";

    statusEl1.style.color = "red";
    statusEl2.style.color = "green";

    imgEl1.src = userImg;
    imgEl2.setAttribute("src", compImg);
  }
};

playBtn.onclick = function () {
  playGame();
};
