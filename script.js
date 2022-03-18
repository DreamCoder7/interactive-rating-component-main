const cardListContainer = document.querySelector(".card__rating--list");
const cardBtn = document.querySelector(".card__rating--btn");
const selectedEl = document.querySelector(".selected");
const cardThankContainer = document.querySelector(".card__thank");
const cardRatingContainer = document.querySelector(".card__rating");

let count;

cardListContainer.addEventListener("click", function (e) {
  const item = e.target.closest(".list__item");
  item.classList.add("active");
  count = item.textContent;
});

const rating = function () {
  selectedEl.textContent = count;
  cardRatingContainer.classList.add("hidden");
  cardThankContainer.classList.remove("hidden");
};

cardBtn.addEventListener("click", rating);
