const select = document.querySelector("#weather");
const forcast = document.querySelector("p");

select.addEventListener("change", display);

function display() {
  const count = select.value;

  switch (count) {
    case "sunny":
      forcast.textContent = "Today is Sunny.";
      break;

    case "rainy":
      forcast.textContent = "Today is Rainy.";
      break;

    case "snowing":
      forcast.textContent = "Today is Snowing.";
      break;

    case "overcast":
      forcast.textContent = "Today weather is somehow.";
      break;

    default:
      forcast.textContent = "";
  }
}

const goatChoice = document.querySelector("#footballers");
const goatDisplay = document.querySelector("div");

goatChoice.addEventListener("change", footballers);

function footballers() {
  const count = goatChoice.value;

  if (count === "ronaldo") {
    goatDisplay.textContent = "the real goat";
  } else if (count === "kane") {
    goatDisplay.textContent = "tottenham goat";
  } else if (count === "messi") {
    goatDisplay.textContent = "Laliga goat";
  } else if (count === "henry") {
    goatDisplay.textContent = "premier league goat";
  } else {
    goatDisplay.textContent = "";
  }
}
