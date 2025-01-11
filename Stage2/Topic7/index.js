// const a = 44;

// const myObj = {
//   age: 22,
//   job_title: "Developer",
// };

// const list = [1, 2, 3, 45, 5];

// // console.log(localStorage);

// localStorage.setItem("theme_color", a);
// localStorage.setItem("mode", "light");
// localStorage.setItem("name", "Izzet");
// localStorage.setItem("list", JSON.stringify(list));
// localStorage.setItem("my_data", JSON.stringify(myObj));

// const mode_data = localStorage.getItem("mode");
// const list_data = localStorage.getItem("list");
// const list_data = localStorage.getItem("my_data");

// const convertData = JSON.parse(list_data);

// console.log(convertData);

// localStorage.setItem("my_api_key",res.data.access_token)

// localStorage.removeItem("mode");
// localStorage.clear()

// console.log(localStorage.key(2));

// sessionStorage.setItem("student", "musa");

document.addEventListener("click", function () {
  const mode = localStorage.getItem("mode");

  if (mode == "light") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("mode", "dark");
    return;
  }

  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  localStorage.setItem("mode", "light");
});

function getMode() {
  const mode = localStorage.getItem("mode");

  if (mode == "light") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    return;
  }

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

getMode();

// async function getActors() {
//   // const my_key = localStorage.getItem("my_api_key")

//   const res = fetch("url", {
//     method: "GET",
//     headers: {
//       Authorization: my_key,
//     },
//   });
// }

// const a = document.cookie;

// document.cookie = "key2=tural;";

// console.log(a);

const Cookie = {
  setItem: function (key, value) {
    document.cookie = `${key}=${value};`;
  },

  getItem: function (key) {
    const list = document.cookie.split("; ");

    console.log("list", list);

    for (let el of list) {
      const kicikArray = el.split("=");

      if (kicikArray[0] == key) {
        return kicikArray[1];
      }
    }
  },
};

const netice = Cookie.getItem("key4");

// Cookie.setItem("key4", "aygun");
