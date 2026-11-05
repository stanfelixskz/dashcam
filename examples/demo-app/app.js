// A tiny program with a deliberate bug, for trying out Dashcam.
// Run it with:  node app.js

function average(numbers) {
  const total = numbers.reduce((a, b) => a + b, 0);
  return total / numbers.length; // BUG: an empty list gives NaN
}

console.log("Average of [2, 4, 6]:", average([2, 4, 6]));
console.log("Average of []:", average([]));
