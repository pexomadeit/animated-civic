import { civic10thGen } from "./data/cars.js";
import { wheels } from "./data/wheels.js";
import { checkWheelFit } from "./logic/compatibility.js";

const select = document.getElementById("wheelSelect");
const fitment = document.getElementById("fitment");
const front = document.getElementById("wheelFront");
const rear = document.getElementById("wheelRear");

// Populate dropdown
wheels.forEach(w => {
  const option = document.createElement("option");
  option.value = w.id;
  option.textContent = w.name;
  select.appendChild(option);
});

// Handle selection
select.addEventListener("change", () => {
  const wheel = wheels.find(w => w.id === select.value);
  if (!wheel) return;
  front.src = wheel.image;
  rear.src = wheel.image;
  fitment.textContent = checkWheelFit(civic10thGen, wheel);
});
