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

let point1 = 0;
let point2 = 0;

const randomPokemon = () => {
  const randomNum = Math.random() * pokemons.length;
  const randomIndex = Math.floor(randomNum);

  return pokemons[randomIndex];
};

const showRender = (options) => {
  const {
    p1,
    p2,
    status1Text,
    status2Text,
    text1Color,
    text2Color,
    status1Img,
    status2Img,
  } = options;

  point1 += p1;
  point2 += p2;

  pointEl1.innerHTML = point1;
  pointEl2.innerHTML = point2;

  statusEl1.innerHTML = status1Text;
  statusEl2.innerHTML = status2Text;

  statusEl1.style.color = text1Color;
  statusEl2.style.color = text2Color;

  imgEl1.src = status1Img;
  imgEl2.setAttribute("src", status2Img);
};

const playGame = () => {
  const userMe = randomPokemon();
  const userComp = randomPokemon();

  const userImg = images[userMe];
  const compImg = images[userComp];

  if (userMe == "w" && userComp == "f") {
    showRender({
      p1: 1,
      p2: 0,
      status1Text: "WIN",
      status2Text: "LOSE",
      text1Color: "green",
      text2Color: "red",
      status1Img: userImg,
      status2Img: compImg,
    });
  } else if (userMe == "e" && userComp == "w") {
    showRender({
      p1: 1,
      p2: 0,
      status1Text: "WIN",
      status2Text: "LOSE",
      text1Color: "green",
      text2Color: "red",
      status1Img: userImg,
      status2Img: compImg,
    });
  } else if (userMe == "f" && userComp == "e") {
    showRender({
      p1: 1,
      p2: 0,
      status1Text: "WIN",
      status2Text: "LOSE",
      text1Color: "green",
      text2Color: "red",
      status1Img: userImg,
      status2Img: compImg,
    });
  } else if (userMe == userComp) {
    showRender({
      p1: 0,
      p2: 0,
      status1Text: "DRAW",
      status2Text: "DRAW",
      text1Color: "black",
      text2Color: "black",
      status1Img: userImg,
      status2Img: compImg,
    });
  } else {
    showRender({
      p1: 0,
      p2: 1,
      status1Text: "LOSE",
      status2Text: "WIN",
      text1Color: "red",
      text2Color: "green",
      status1Img: userImg,
      status2Img: compImg,
    });
  }
};

playBtn.onclick = function () {
  playGame();
};
