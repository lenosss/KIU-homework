//task1
//Write a JavaScript program to find the index of an array item in a for loop.

const colors = ["Black", "Yellow", "Pink", "Grey", "white", "Red"];
for (let [index, item] of colors.entries()) {
  console.log(`${index}: ${item}`);
}

//task2
//Write a JavaScript program to clamp a number within the inclusive range specified by the given boundary values a and b.
const clampNumber = (num, a, b) =>
  Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
console.log(clampNumber(7, 16, 35));
console.log(clampNumber(-99, -35, 29));

//task3
//Write a JavaScript program to capitalize the first letter of every word in a string.
const capitalizeEveryWord = (str) =>
  str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
console.log(capitalizeEveryWord("georgia is europe!"));

//task4
//Write a JavaScript program that returns true if the page bottom is visible, false otherwise.
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

console.log(bottomVisible());

//task4
//Write a JavaScript program to get the current URL.
const currentURL = () => window.location.href;
console.log(currentURL());
