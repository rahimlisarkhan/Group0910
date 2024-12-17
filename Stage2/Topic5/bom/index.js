let w = window.innerWidth;
let h = window.innerHeight;

console.log(w);

function start() {
  if (w < 600) {
    // ...
  } else {
    //...
  }
}

window.onkeyup = function (e) {
  const userChoose = e.key;
  console.log("click", userChoose);

  if (e.key == "Enter") {
    window.close();
    // ... send message
  }
};

// console.log(window.screen);
console.log(window.location);
// console.log(window.history);
console.log(window.navigator);

const isAdminPage = window.location.pathname.includes("admin.html");

console.log("isAdminPage", isAdminPage);

// if (isAdminPage) {
//   getStart();
// }

document.querySelector("#reloadBtn").addEventListener("click", function () {
  window.location.reload();
  //   window.history.back();
});
