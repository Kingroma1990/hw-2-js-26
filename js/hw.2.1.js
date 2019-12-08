"use strict";
let number = 1;
const logItems = function(array) {
  for (const element of array) {
    
    console.log(`${number} - ${element}`);
    number += 1;
  }
};
console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
// console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
