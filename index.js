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

