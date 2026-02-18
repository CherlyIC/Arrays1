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

//Exercise 5: advanced searching with find and findIndex

const  products = [{id: 1, name: "Laptop", price: 1200}, 
  {id: 2, name: "Mouse", price: 25},
   {id: 3, name: "Keyboard", price: 75}
  
];

let foundProduct = products.find(product => product.id ===2);
console.log(foundProduct);

let foundindex = products.findIndex(product => product.price >= 50);
console.log(foundindex);

//Exercise 6: Checking Array Integrity (some, every)

let userAges = [18, 24, 33, 16, 40];
let minor = userAges.some(userAge => userAge < 18);
console.log(minor);

let adult = userAges.every(userAge => userAge >= 18);
console.log(adult);

let allAges = userAges.some(userAge => userAge % 5 === 0);
console.log(allAges);

//Section C

//Exercise 7: Sorting and Reversing

let dataPoints = [42, 10, 500, 2, 77];
//a

let ascending = [...dataPoints].sort((a,b) => a-b);
console.log(ascending);
//b
let descending = [...dataPoints].sort((a,b) => b-a);
console.log(descending);

//c
let reversed = [...dataPoints].reverse();
console.log(reversed);

//Exercise 8: Concatenation, Joining, and Slicing

let arr1 = ["A", "B"];
let arr2 = ["C", "D"];
let sentenceParts = ["Hello", "world", "this", "is", "great"];
//a 

let concantarray = arr1.concat(arr2);
console.log(concantarray);
//b 

let sentencePart = sentenceParts.join(" ");
console.log(sentencePart);
//c

let sentence = sentenceParts.slice(1,4);
console.log(sentence);