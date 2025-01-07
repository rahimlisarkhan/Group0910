const postCreate = new bootstrap.Modal(document.getElementById("postCreate"), {
  keyboard: false,
});

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
  createRecipe(form);
});

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
              <button class="btn btn-danger">Remove</button>
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

    console.log("data", data);
  } catch (err) {
  } finally {
    btnSave.innerHTML = "Save";
  }
}

//Starts
getRecipe();
