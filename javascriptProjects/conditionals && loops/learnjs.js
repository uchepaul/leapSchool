// this is a comment
// value-object or primitive.

// example demostrating all control flows in javascript.
const numbers = [3, -2, 9, 5, 10, "oops", 7, 0, 8];
let validNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let value = numbers[i];
  console.log("checking:", value);

  try {
    if (typeof value !== "number") {
      throw new Error("Not a number");
    }

    if (value < 0) {
      console.log(`${value} is negative `);
      continue;
    } else if (value === 0) {
      console.log("zero found, stopping the loop.");
      break;
    } else {
      console.log(`${value} is positive`);
    }
    validNumbers.push(value);
  } catch (error) {
    console.log(error.message);
  }
}

console.log("Valid numbers collected:", validNumbers);


switch () {
  case choice1:
  break;
  case choice2:
  break;
  default:
  break;
}


const select = document.querySelector("select");
const forcast= document.querySelector("p");

select.addEventListener ( "change", setweather );
function setweather () = {
const choice = select.value

switch (choice) = {
case "sunny":
forcast.textContent =
"It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
break;
case "rainy":
forcast.textContent =
"Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
break;
default :
forcast.textContent =""

}
}
