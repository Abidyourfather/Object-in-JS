let fruit = {
  name: "Mango",
  shape: "Circular",
  colour: "Yellow-Red",
  price: 50,
  is_riped: true,
  origin: ["Rajshahi", "Rangpur", "Chandpur"],
};

const text1 = document.getElementById("p1");

text1.innerHTML = `I love ${fruit.name} and it looks like ${fruit.shape} it costs ${fruit.price} tk per kg`;

document.getElementById(
  "p2"
).textContent = `${fruit.name} is a very popular in BD and they can be found in ${fruit.origin}`;

document.writeln(
  `Random Method Generates Random Decimal Number in Between (excluding) 0 and 1 = ${Math.random()}`
);



function sumOfArguments(){
  sum = 0;
  for (let i= 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
