const postCreate = new bootstrap.Modal(document.getElementById("postCreate"), {
  keyboard: false,
});

let globalData = [];

let currentElId = null;

//Variables
const recImg = document.querySelector("#recImg");
const recTitle = document.querySelector("#recTitle");
const recDesc = document.querySelector("#recDesc");
const recCousin = document.querySelector("#recCousin");
const btnSave = document.querySelector("#btnSave");

//Events
btnSave.addEventListener("click", function () {
  const form = {
    title: recTitle.value,
    body: recDesc.value.trim(),
    img_url: recImg.value,
    cousin: recCousin.value,
  };

  //   console.log("payload", payload);

  if (currentElId) {
    uptRecipe(currentElId, form);
  } else {
    createRecipe(form);
  }
});

function resetFn() {
  currentElId = null;
  recTitle.value = "";
  recDesc.value = "";
  recImg.value = "";
  recCousin.value = "";
}

// Functions
function renderRecipe(d) {
  document.querySelector("#list").innerHTML = d
    .map(
      (item) => `
           <div class="col-4">
          <div class="card">
            <img
              src="${item.img_url}"
              height="200"
            style="object-fit: cover;"
              class="card-img-top object-fit-cover"
              alt="${item.title}"
            />
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${item.cousin}</h6>
              <p class="card-text">
               ${item.body}
              </p>
              <button class="btn btn-danger" onclick="removeFn(${item.id})">Remove</button>
              <button class="btn btn-warning" onclick="editFn(${item.id})">Edit</button>
              <a href="./pages/product.html?post_id=${item.id}" class="btn btn-light">
                Read more...</a
              >
            </div>
          </div>
        </div>
        `
    )
    .join("");
}

// Api's
async function getRecipe() {
  try {
    const res = await fetch("https://blog-api-t6u0.onrender.com/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const filterData = data.filter((item) => item.id > 100);

    console.log("data", data);

    globalData = filterData;
    renderRecipe(filterData);
  } catch (err) {
  } finally {
  }
}

async function createRecipe(pay) {
  btnSave.innerHTML = "Loading...";

  try {
    const res = await fetch("https://blog-api-t6u0.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pay),
    });

    const data = await res.json();
    postCreate.hide();

    getRecipe();
    console.log("data", data);
  } catch (err) {
  } finally {
    resetFn();
    btnSave.innerHTML = "Save";
  }
}

async function uptRecipe(id, pay) {
  btnSave.innerHTML = "Loading...";

  try {
    await fetch("https://blog-api-t6u0.onrender.com/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pay),
    });

    // const data = await res.json();
    postCreate.hide();

    getRecipe();
  } catch (err) {
  } finally {
    resetFn();
    btnSave.innerHTML = "Save";
  }
}

// removeFn
async function removeFn(elId) {
  try {
    const res = await fetch(
      "https://blog-api-t6u0.onrender.com/posts/" + elId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    getRecipe();
  } catch (err) {
  } finally {
  }
}

async function editFn(elId) {
  const element = globalData.find((item) => item.id == elId);

  currentElId = element.id;

  recTitle.value = element.title;
  recDesc.value = element.body;
  recImg.value = element.img_url;
  recCousin.value = element.cousin;

  postCreate.show();
}

//Starts
getRecipe();
