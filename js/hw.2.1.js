"use strict";
const logItems = function(array) {
  for (const element of array) {
    let number = array.indexOf(element) +1;
    console.log(`${number} - ${element}`);
  }
    
};
console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
