

 //1. Ask the user to enter a price tag using prompt(), for example: $49.99 

let originalPrice = prompt("Please enter the price", "$49.99");
console.log(originalPrice);


//2. Convert the input from string to number 


let numberFirst = "49.99";
let number = parseFloat(numberFirst)
console.log(number);


 
/*
//3. Reduce the price by 10 procent
let price = 50;
let sale = 10;
let result = (sale * price) / (100);
let newPrice = (price - result); */


let priceWithoutDollar = originalPrice.slice(1);
console.log(priceWithoutDollar);

//4. Print out the new price using console.log(), for example: 'Your new price is: $44.99' 

newPrice = (priceWithoutDollar * 0.9);
console.log(newPrice);

console.log(`The new price for this dress is $${newPrice}`)

/*
console.log(price - result);
console.log(`The new price for this dress is $${newPrice}`)
*/
 
