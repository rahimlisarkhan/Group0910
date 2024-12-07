// const date = new Date(1995, 1, 17);
// const date = new Date(
//   "Fri Mar 17 1995 04:00:00 GMT+0400 (Azerbaijan Standard Time)"
// ); //timestamp

// GET methods

const weekDays = ["B.e", "C.a", "Cer", "C.a", "C", "S", "B"];

const mil = 1733578482111; //? 1970 . 19:34
// const sec = 1733578482; //? 1970

const date = new Date(); //timestamp

console.log(date);

// Method	Description
// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

// const result = date.getFullYear();
// const result = date.getMonth();
// const result = date.getDate();
// const result = date.getDay() - 1;
// const result = date.getUTCHours();
// const result = date.getHours();

function showClock() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");

  const result = `${hour}:${min}`;
  console.log(result);

  document.querySelector("h2").innerHTML = result;
}

// showClock();

setInterval(showClock, 1000);

// SET methods
// Method	Description
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

// const date1 = new Date("2026-12-07"); //timestamp

// // date1.setFullYear(2026);

// console.log(date1);
// const createdNews = "Sat Dec 07 2024 16:48:48";

const Moment = {
  diffMin: function (createdNews) {
    const dateNews = new Date(createdNews);
    const dateNow = new Date();

    const date1Mil = dateNews.getTime();
    const date2Mil = dateNow.getTime();

    const diff = Math.round((date2Mil - date1Mil) / 1000 / 60); // diff mill

    if (2 > diff) {
      return `biraz evvel`;
    } else if (60 > diff) {
      return `${diff} deqiqe evvel`;
    } else {
      return `${Math.floor(diff / 60)} saat evvel`;
    }
  },
};

console.log(Moment.diffMin("Sat Dec 07 2024 18:10:48"));
