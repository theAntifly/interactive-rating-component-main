"use strict";

const submit = document.querySelector(".submit");
const ratings = document.querySelectorAll(".ratings");
const ratingsScreen = document.querySelector(".ratings-screen");
const thankYouScreen = document.querySelector(".thank-you-screen");
const selected = document.querySelector(".rating-choice");
let currentRating = "None";

ratings.forEach((item) =>
  item.addEventListener("click", function () {
    currentRating = item.innerHTML;
    if (!this.className.includes("active")) {
      ratings.forEach((number) => (number.className = "ratings"));
      this.className += " active";
    } else {
      ratings.forEach((number) => (number.className = "ratings"));
    }
  })
);
submit.addEventListener("click", function () {
  if (currentRating == "None") {
    return;
  } else {
    ratingsScreen.style.visibility = "hidden";
    ratingsScreen.style.position = "absolute";
    thankYouScreen.style.visibility = "visible";
    thankYouScreen.style.position = "relative";
    selected.innerHTML = `you selected ${currentRating} out of 5`;
  }
});
