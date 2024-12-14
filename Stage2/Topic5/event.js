// const btnSubmit = document.querySelector("#btnSubmit");
const lessonTitle = document.querySelector("#lessonTitle");
const listEl = document.querySelector("#listEl");
const inputEl = document.querySelector("#inputEl");

const textInfo = document.querySelector("#textInfo");

//? Solution 1
document.dblclick = function (e) {
  //   console.log("click", e.target);
  //   e.target.style.backgroundColor = "red";

  console.log("click", e);
};

//? Solution 2
function handleClickSubmit(e) {
  //   console.log("click", e.target);
  //   e.target.style.backgroundColor = "red";
  //   if (document.documentElement.requestFullscreen) {
  //     document.documentElement.requestFullscreen();
  //   } else {
  //     document.documentElement.exitFullscreen();
  //   }

  //   console.log("click", inputEl.getAttribute("placeholder"));

  const fullname = inputEl.value;

  if (fullname.length > 10) {
    console.log("Limiti asmisiz");
  } else {
    console.log("Sizin adiniz:", fullname);
  }
}

btnSubmit.addEventListener("click", handleClickSubmit);
// btnSubmit.addEventListener("dblclick", handleClickSubmit);
// btnSubmit.addEventListener("mouseenter", handleClickSubmit);

// lessonTitle.addEventListener("mouseenter", function () {
//   // lessonTitle.classList.add("")
//   lessonTitle.style.color = "blue";
//   listEl.style.display = "block";
// });

// lessonTitle.addEventListener("mouseleave", function () {
//   // lessonTitle.classList.add("")
//   lessonTitle.style.color = "black";
//   listEl.style.display = "none";
// });

inputEl.addEventListener("input", function (e) {
  const str = inputEl.value;
  const textLength = str.length;

  textInfo.innerHTML = `${textLength}/10`;
  textInfo.style.color = textLength > 10 ? "red" : "black";

  //   console.log("textLength", str);
  //   console.log("textLength", textLength);
});

document.addEventListener("scroll", function (e) {
  console.log("Off", window.scrollY);
});
