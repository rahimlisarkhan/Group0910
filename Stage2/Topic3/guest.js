function randomEl(arr) {
  const rIndex = Math.floor(Math.random() * arr.length);
  return arr[rIndex];
}

const words = ["sema", "tural", "soltan"];

const guessWord = randomEl(words).split("");

const hiddenWord = guessWord.map(function (item) {
  return "_";
});

while (hiddenWord.includes("_")) {
  alert(`Sizin gizli sozunuz: ${hiddenWord.join("")}`);

  const letter = prompt("Word letter");

  const catchIndex = guessWord.indexOf(letter);

  if (catchIndex !== -1) {
    hiddenWord[catchIndex] = letter;
  }
}
