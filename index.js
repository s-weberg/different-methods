

 //1. Ask the user to enter a price tag using prompt(), for example: $49.99 

let originalPrice = prompt("Please enter the price", "$49.99");
console.log(originalPrice);


//2. Convert the input from string to number 




let priceWithoutDollar = originalPrice.slice(1);
console.log(priceWithoutDollar);



let number = parseFloat(priceWithoutDollar);
console.log(number);



//4. Print out the new price using console.log(), for example: 'Your new price is: $44.99' 

let newPrice = (number * 0.9);
console.log(newPrice);

let salePrice = 44.991;
let sP = salePrice.toFixed(1);

console.log(`The new price for this dress is $${sP}`)


