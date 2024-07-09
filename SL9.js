//task1
//Write a JavaScript program to calculate how many numbers in the given array are less than or equal to the given value. This is done using the percentile formula.
const percentile = (arr, num) =>
  (arr.filter((item) => item <= num).length / arr.length) * 100;

console.log(percentile([2, 4, 6, 8, 10], 6)); // 60
console.log(percentile([2, 4, 6, 8, 10], 10)); // 100
console.log(percentile([3, 6, 9, 12, 15], 9)); // 60
console.log(percentile([3, 6, 9, 12, 15], 12)); // 80
console.log(percentile([5, 10, 15, 20, 25], 15)); // 60
console.log(percentile([5, 10, 15, 20, 25], 20)); // 80

//task2
//Write a JavaScript program to create a function that invokes fn with partials appended to the arguments it receives.

const partialRight =
  (fn, ...partials) =>
  (...args) =>
    fn(...args, ...partials);
const concatenate = (str1, str2, separator) => str1 + separator + str2;
const concatenateWithDash = partialRight(concatenate, "-");

console.log(concatenateWithDash("Hello", "World"));
console.log(concatenateWithDash("Goodbye", "Everyone"));

const multiply = (a, b, factor) => (a + b) * factor;

const multiplyByTwo = partialRight(multiply, 2);

console.log(multiplyByTwo(3, 4));
console.log(multiplyByTwo(5, 6));

//task3
//Write a JavaScript program to return a boolean determining if the passed value is primitive or not.
const isPrimitive = (val) =>
  !["object", "function"].includes(typeof val) || val === null;

console.log(isPrimitive(90));
console.log(isPrimitive(null));
console.log(isPrimitive([]));
console.log(isPrimitive("KIU!"));
console.log(isPrimitive(true));
console.log(isPrimitive(Symbol()));

//task4
//Write a JavaScript program to check if the provided integer is a prime number or is not.
const isPrime = (num) => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};

console.log(isPrime(18));
console.log(isPrime(55));
console.log(isPrime(1986));
