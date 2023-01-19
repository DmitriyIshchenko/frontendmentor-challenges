const formEl = document.querySelector("form");
const tipEl = formEl.querySelector(".summary-group__amount--tip");
const totalEl = formEl.querySelector(".summary-group__amount--total");

const tipRadioButtons = formEl.querySelectorAll(".form-group__input-radio");
const tipCustomInput = formEl.querySelector(".form-group__input-custom");

const state = {
  bill: "",
  tip: "",
  people: "",
};

const calculateTotals = function (state) {
  const { bill, tip, people } = state;
  if (!Object.values(state).every((item) => item)) return clearTotals();

  const totalTips = (bill * tip) / 100;
  const tipPerPerson = totalTips / people;
  const totalPerPerson = (bill + totalTips) / people;

  tipEl.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalEl.textContent = `$${totalPerPerson.toFixed(2)}`;
};

const clearTotals = function () {
  tipEl.textContent = `$0.00`;
  totalEl.textContent = `$0.00`;
};
1;

// reset radio buttons if custom input is focused
tipCustomInput.addEventListener("focus", () => {
  tipRadioButtons.forEach((btn) => (btn.checked = false));
});

// reset custom input if radio button is checked
formEl.addEventListener("input", (e) => {
  if (e.target.classList.contains("form-group__input-radio")) {
    tipCustomInput.value = "";
  }
});

formEl.addEventListener("input", (e) => {
  const { validity, value, dataset } = e.target;
  const { type } = dataset;
  if (validity.valid || value === "0") {
    state[type] = +value;
  } else {
    e.target.value = state[type];
  }

  calculateTotals(state);
});

formEl.addEventListener("reset", clearTotals);
