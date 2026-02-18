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

//Exercice 9

let nestedList = [1, [2, 3], [4, [5, 6]], 7];
//a
let list = nestedList.flat();
console.log(list);
//b
let lists = nestedList.flat(Infinity);
console.log(lists);

//section D
//Exercise 10: map() method
let  pricesUSD = [10.50, 20.00, 5.25];
let rate = 1.3;
//a
let localCurrency = pricesUSD.map(price => price * rate);
console.log(localCurrency);
//b
let priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log(priceStrings);

// Exercise11:  Filtering Data (filter)

testScores = [45, 78, 92, 30, 65, 88];
//a
let passScores = testScores.filter(testScore => testScore >= 70);
console.log(passScores);
//b
let averageScore = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
console.log(averageScore);

let belowAverage = testScores.filter(testScore => testScore < averageScore);
console.log(belowAverage);

//Exercise 12  Aggregating Data (reduce)

pricesUSD = [10.50, 20.00, 5.25]
//a
let totalCost = pricesUSD.reduce((sum, price) => sum + price, 0);
console.log(totalCost);

//b

let maxPrice = pricesUSD.reduce((max, price) => {
    return price > max ? price : max;
}, pricesUSD[0]);

console.log(maxPrice);
//c

let prices = pricesUSD.reduce((counter, price) => {
    return price > 15 ? counter + 1 : counter;
}, 0);

console.log(prices);


