//task1
// Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function.
const minBy = (arr, fn) =>
  Math.min(...arr.map(typeof fn === "function" ? fn : (val) => val[fn]));
console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"));

//task2
//Write a JavaScript program to create an object from the specified object, where all keys are in lowercase.
const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
const myObj = { Name: "Nika", suRnaME: "Dvali" };
const myObjLower = lowercaseKeys(myObj);
console.log(myObjLower);

//task3
//Write a JavaScript program that returns true if the specified value is undefined, false otherwise.
const isUndefined = (val) => val === undefined;
console.log(isUndefined(undefined));

//task4
//Write a JavaScript program that returns 1 if the array is sorted in ascending order. It returns -1 if it is sorted in descending order or 0 if it is not sorted.
const isSorted = (arr) => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
console.log(isSorted([9, 8, 8, 0]));
console.log(isSorted([3, 2, 2]));
console.log(isSorted([1, 2, 3, 3]));
console.log(isSorted([4, 3, 5]));
