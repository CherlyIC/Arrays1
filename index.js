// Exercise 1: Create an array of product categories
const productCategories = ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];
//a
console.log(productCategories[0]);
//b

console.log(productCategories.length[productCategories.length - 1]);

//c

console.log(productCategories.length);
//d
productCategories[1]= "pen" // pour la constante on peut la réassigner et non la déclarer à nouveau
console.log(productCategories);

//Exercise 2: push,pop,shift,unshift,splice

let inventory = [10,20,30];
//a
inventory.push(40);
console.log(inventory);

//b

inventory.pop();
console.log(inventory);
//c

inventory.unshift(0);
console.log(inventory);
//d
inventory.shift();
console.log(inventory);
//e

inventory.splice(1,1,15);
console.log(inventory);

//Exercise 3: shallow copying of arrays and reference trap
//a
const originalScores = [90,85,78];
//b
const referenceCopy = originalScores; // reference copy, not a new array 
console.log(referenceCopy);
//c

referenceCopy[0] = 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);
//d

const spreadCopy = [...originalScores]; // spread operator creates a shallow copy

spreadCopy[2] = 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

//section 3: searching and checking

//Exercise 4: indexOf, includes, find, findIndex  finding elements 

studentNames = ["Alice", "Bob", "Charlie", "Alice", "David"];
//a 
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));
//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));
