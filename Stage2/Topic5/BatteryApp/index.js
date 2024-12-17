const progressEl = document.querySelector("#progressEl");
const checkStatusBtn = document.querySelector("#checkStatusBtn");

const gozlemedeOlanData = window.navigator.getBattery();

gozlemedeOlanData.then(renderShow);

function renderShow(data) {
  console.log(data);

  const btLevel = data.level * 100; //? 98

  if (btLevel < 20) {
    alert("Zaryatkaya tax!");
  }

  progressEl.innerHTML = `${btLevel}%`;
  progressEl.style.width = `${btLevel}%`;

  if (data.charging) {
    progressEl.classList.add("progress-bar-striped", "progress-bar-animated");
  } else {
    progressEl.classList.remove(
      "progress-bar-striped",
      "progress-bar-animated"
    );
  }
}

checkStatusBtn.addEventListener("click", function () {
  window.location.reload();
});

function showLocation(data) {
  console.log("data", data);

  const lat = data.coords.latitude;
  const long = data.coords.longitude;

  const googMapStaticImg = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7C40.3798,49.8486&style=feature:poi%7Cvisibility:off`;

  document.querySelector("#staticAddress").src = googMapStaticImg;
  console.log("lat", lat);
  console.log("long", long);
}

window.navigator.geolocation.getCurrentPosition(showLocation);
