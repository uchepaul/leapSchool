let quantityInitial = document.querySelectorAll(".item-quantity");
quantityInitial.forEach((element) => {
  element.textContent = "20";
});

let minusButton = document.querySelectorAll(".minus-button");
minusButton.forEach((element) => {
  element.addEventListener("click", function () {
    let quantityElement = element.parentElement.querySelector(".item-quantity");
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      quantity = quantity - 1;
      quantityElement.textContent = quantity;
    }
  });
});

let plusButton = document.querySelectorAll(".plus-button");
plusButton.forEach((element) => {
  element.addEventListener("click", function () {
    let positiveElement = element.parentElement.querySelector(".item-quantity");
    let addtion = parseInt(positiveElement.textContent);

    if (addtion > 0);

    addtion = addtion + 1;
    positiveElement.textContent = addtion;
  });
});
