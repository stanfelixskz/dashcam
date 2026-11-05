// A tiny program with a deliberate bug, for trying out Dashcam.
// Run it with:  node app.js

function average(numbers) {
  const total = numbers.reduce((a, b) => a + b, 0);
  return total / numbers.length; // BUG: an empty list gives NaN
}

function show(label, value) {
  if (Number.isNaN(value)) throw new Error(`${label} is NaN`);
  console.log(label, value);
}

show("Average of [2, 4, 6]:", average([2, 4, 6]));
show("Average of []:", average([]));
