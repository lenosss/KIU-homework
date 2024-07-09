let num = 5;
while (num <= 9) {
  console.log(num);
  num++;
}
for (let i = 0; i < 5; i++) {
  console.log("Tiger");
}
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log("Skip");
    continue;
  }
  console.log(i);
  if (i === 5) {
    console.log("Stop");
    break;
  }
}
function myName(name) {
  console.log("My name is " + name);
}

myName("Elene");
myName("Mari");
myName("Nini");

function sum(a, b, c) {
  return a + b + c;
}

var sum1 = sum(1, 2, 3);
var sum2 = sum(4, 5, 6);

var informationCard = {
  firstName: "elene",
  lastName: "molashvili",
  age: 18,
  contactDetails: {
    homeAddress: " Axalgazrdobis 5th line",
    phoneNumber: "555-555-000",
  },
};
var phone = {
  brand: "Apple",
  model: "iPhone 13",
  year: 2021,
  screenSize: "6.1 inches",
  storage: "128GB",
  color: "Midnight",
  price: 799.99,
  features: { "Face ID": 100, "Dual-camera system": 1500, "5G capable": 150 },
  calculateTotalPrice: function () {
    return (
      this.price +
      this.features["5G capable"] +
      this.features["Dual-camera system"] +
      this.features["Face ID"]
    );
  },
};

console.log("Brand:", phone.brand);
console.log("Model:", phone.model);
console.log("Year:", phone.year);
console.log("Screen Size:", phone.screenSize);
console.log("Storage:", phone.storage);
console.log("Color:", phone.color);
console.log("Price:", phone.calculateTotalPrice());
console.log("Features:", phone.features.join(", "));
