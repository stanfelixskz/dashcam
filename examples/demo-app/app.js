// A tiny program with a deliberate bug, for trying out Dashcam.
// Run it with:  node app.js
const { numbers } = require("./config.json");

function average(list) {
  const total = list.reduce((a, b) => a + b, 0);
  return total / list.length; // BUG: an empty list gives NaN
}

function show(label, value) {
  if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
  console.log(label, value);
}

show("Average:", average(numbers));
