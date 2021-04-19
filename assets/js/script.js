const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const secondaryBtn = document.querySelector(".secondary-btn");
const primaryBtn = document.querySelector(".primary-btn");

const overLayer = document.querySelector(".over__layer");

modalBtn.addEventListener("click", function () {
    overLayer.classList.remove("hidden");
});

overLayer.addEventListener("click", function (e) {
    if (e.target.className === "over__layer") this.classList.add("hidden");
});

closeBtn.addEventListener("click", function () {
    overLayer.classList.add("hidden");
});

secondaryBtn.addEventListener("click", function () {
    overLayer.classList.add("hidden");
});

primaryBtn.addEventListener("click", function () {
    overLayer.classList.add("hidden");
});
