const formContainer = document.querySelector(".rating__form");

const submittedContainer = document.querySelector(".rating__submitted");

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  const dataArr = [...new FormData(this)];
  const { rating } = Object.fromEntries(dataArr);

  submittedContainer.querySelector(
    ".rating__selected"
  ).textContent = `You selected ${rating} out of 5`;

  formContainer.classList.add("hidden");
  submittedContainer.classList.remove("hidden");
});
