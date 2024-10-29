const startGame = confirm("Sifaris vermek isteyirsiniz?");

if (startGame) {
  const q1 = confirm("Esas yemeklerden sifaris vermek isteyirsiniz?");

  if (q1) {
    const yourMeal = prompt("Istediyiniz esas yemeyi qeyd edin.");

    let price;

    if (yourMeal == "hamburger") {
      price = 12.9;
    } else if (yourMeal == "kabab") {
      price = 8.9;
    } else {
      price = 6.0;
    }

    const result = `Sizin sevimli menyunuz olan ${yourMeal} hazirlanir`;
    const priceInfo = `Sizin hesab:${price} manatdir`;

    alert(priceInfo);
    alert(result);
  } else {
    const yourDrink = prompt("Istediyiniz ickini qeyd edin.");
    const result = `Sizin sevimli ickiniz olan ${yourDrink} hazirlanir`;
    alert(result);
  }
} else {
  const yourOffer = prompt(
    "Eger teklifiniz varsa qeyd edin.Diqqetli yanasacagiq!"
  );

  if (yourOffer == "catdirilma") {
    alert("Catdirilma xidmetimiz tezlile wolt ile olacaq!");
  } else {
    const yourPhone = prompt("Telefon nomrenizi qeyd ede bilersinizmi?");

    if (yourPhone) {
      alert("Bu telefon nomresi ile elaqe saxlanilacaq: " + yourPhone);
    }
  }

  alert("Yene gozleyirik");
}
