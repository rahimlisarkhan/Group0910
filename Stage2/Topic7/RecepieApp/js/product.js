const postId = window.location.search.split("=")[1];

console.log(postId);

//Variables
const detailDesc = document.querySelector("#detailDesc");
const detailTitle = document.querySelector("#detailTitle");
const detailImg = document.querySelector("#detailImg");
const detailCousin = document.querySelector("#detailCousin");

// Functions
function render(d) {
  detailImg.src = d.img_url;
  detailTitle.innerHTML = d.title;
  detailDesc.innerHTML = d.body;
  detailCousin.innerHTML = d.cousin;
}

function renderComments(cData) {
  document.querySelector("#commentList").innerHTML = cData
    .map(
      (item) => `
          <div class="border-bottom">
          <div class="h4">${item.name}</div>
          <div class="h5">${item.email}</div>
          <p>
           ${item.body}
          </p>
        </div>
        `
    )
    .join("");
}

// Api's
async function getRecipeID() {
  try {
    const res = await fetch(
      `https://blog-api-t6u0.onrender.com/posts/${postId}?_embed=comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    render(data);
    renderComments(data.comments);
  } catch (err) {
  } finally {
  }
}

getRecipeID();
