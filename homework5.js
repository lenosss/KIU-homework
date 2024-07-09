let a = 33;
let b = 26;
let c = "26";

console.log("Is a equal to b?, a === b");
console.log("IS b strictly equal to c?", b === c);
console.log("Is a greater than or equal to c?", a >= c);
console.log("Is b less than c?", b < c);
console.log("Is a greater than b and is b equal to c?", a > b && b === c);
console.log("Is a equal to b or c less than a?", a === b || c < a);

function calculate() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var mulResult = document.getElementById("mulResult");
  var divResult = document.getElementById("divResult");

  mulResult.textContent = "Multiplication: " + num1 * num2;
  divresult.textContent = "Division: " + num1 / num2;
}

function checkNumbers(num1, num2) {
  if (num1 === 60 || num2 === 60 || num1 + num2 === 60) {
    return true;
  } else {
    return false;
  }
}
