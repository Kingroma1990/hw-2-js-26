"use strict";

let input;
const numbers = [];
let total = 0;

input = prompt("Ведите число");
// console.log(input);
while (input !== null) {
  const numberImput = Number(input);

  numbers.push(numberImput);
  input = prompt("Ведите число");
}

const sum = function(array) {
  let summ = 0;
  for (let elem of array) {
    summ += elem;
  }
  return summ;
};

total = sum(numbers);
const message = `Общая сумма чисел равна ${total}`;
console.log(message);
