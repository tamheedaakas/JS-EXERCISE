// // EXERCISE1
// var number1 = parseInt(prompt("Enter the first number:"));
// var number2 = parseInt(prompt("Enter the second number:"));
// var result = number1 + number2;
// document.write("The sum of " + number1 + " and " + number2 + " is " + result);


// EXERCISE2
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// document.write("The value of number1 = " + number1 + " and  value of number2 = " + number2);


// var additionResult = number1 + number2;
// var subtractionResult = number1 - number2;
// var multiplicationResult = number1 * number2;
// var divisionResult = number1 / number2;
// var modulusResult = number1 % number2;
// document.write(" Addition Result: " + additionResult + "<br>");
// document.write("Subtraction Result: " + subtractionResult + "<br>");
// document.write("Multiplication Result: " + multiplicationResult + "<br>");
// document.write("Division Result: " + divisionResult + "<br>");
// document.write("Modulus Result: " + modulusResult + "<br>");



// EXERCISE3


// var num;
// document.write(`Value after variable decleration is ${num}`);
// document.write('<br>')
// num = 5;
// document.write(`Initial value: ${num}`);
// document.write('<br>')
// num++;
// document.write(`Value after increment: ${num}`);
// document.write('<br>')
// num += 7;
// document.write(`Value after addition: ${num}`);
// document.write('<br>')
// num--;
// document.write(`Value after decrement: ${num}`);
// document.write('<br>')
// remainder = num % 3;
// document.write(`The remainder is: ${remainder}`);




// //EXERCISE 4
// // Cost of one movie ticket in PKR
// var ticketPrice = 600;

// // Number of tickets to buy
// var numberOfTickets = 5;

// // Calculate the total cost
// var totalCost = ticketPrice * numberOfTickets;
// // Display the total cost in the browser
// document.write("The total cost to buy " + numberOfTickets + " tickets to a movie is RS " + totalCost);




// //EXERCISE 5

// var number = 4;
// document.write("<h1>Multiplication Table for " + number + "</h1>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write(number + " x " + i + " = " + result + "<br>");
// }



// //EXERCISE 6
// // a. Store a Celsius temperature into a variable.
// var celsiusTemperature = 25;

// // b. Convert it to Fahrenheit & output "NNoC is NNoF".
// document.write("<h1>CONVERTING IT TO FAHRENHEIT </h1>");
// var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
// document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

// // c. Store a Fahrenheit temperature into a variable.
// var fahrenheitTemperature2 = fahrenheitTemperature;

// // d. Convert it to Celsius & output "NNoF is NNoC".
// document.write("<h1>CONVERTING FAHRENHEIT TO CELCIUS </h1>");
// var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
// document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

// document.write('<br><br><br>')





// EXERCISE 7
// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shippingCharges = 150;
// var totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

// document.write('<h1>Shopping Cart</h1><br><br>')
// document.write(`the total shipping charges are ${shippingCharges} <br>`)
// document.write(`Price of item 1 is ${price1}<br>`)
// document.write(`Quantity of item 1 is ${quantity1}<br>`)
// document.write(`Price of item 2 is ${price2}<br>`)
// document.write(`Quantity of item 2 is ${quantity2}<br>`)
// document.write(`Shipping Charges 100<br>`)
// document.write(`Total cost of your order is ${totalCost}<br>`)






// // EXERCISE 8
// var totalMarks = 1100 
// var marksObtained = 900;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write(`<h1>Marks Sheet</h1><br><br>`)
// document.write(`Total Marks : ${totalMarks}<br>`)
// document.write(`Marks Obtained : ${marksObtained}<br>`)
// document.write(`Percentage : ${percentage}`)




// // EXERCISE 9
// var dollar = 10;
// var  riyal = 25;
// rupee = (dollar * 104.8) + (25 * 28);
// document.write(`<h1>Currency in PKR</h1><br><br>`)
// document.write(`Total currency in PKR: ${rupee}`)



// // EXERCISE 10
// var num = parseInt(prompt("enter a number :"))
// var result = (((num + 5) * 10) / 2);
// document.write(result)







// // EXERCISE 11
// var currentYear = 2023;
// var birthYear = +prompt('Enter your birth year : ');
// var age = currentYear - birthYear
// document.write(`<h1>Age Calculator</h1><br><br>`)
// document.write(`Current year : ${currentYear}<br>`)
// document.write(`Birth year : ${birthYear}<br>`)
// document.write(`Your age is : ${age}<br>`)




// // EXERCISE 12
// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * Math.pow(radius, 2);
// document.write(`<h1>The Geometrizer</h1><br><br>`)
// document.write(`Radius of circle : ${radius}<br>`)
// document.write(`The circumference is : ${circumference}<br>`)
// document.write(`The area is : ${area}`)






// // EXERCISE 13
var favouriteSnack = 'chai';
var  currentAge = 22;
var maxAge = 72;
var estimatedAmout = 3;
var lifeTimeSupply = estimatedAmout * 365 * (maxAge - currentAge);
document.write(`<h1>The Lifetime Supply Calculator</h1><br><br>`)
document.write(`Favourite Snack: ${favouriteSnack}<br>`)
document.write(`Current Age: ${currentAge}<br>`)
document.write(`Estimated Maximum Age: ${maxAge}<br>`)
document.write(`Amount of Snacks per day: ${estimatedAmout}<br>`)
document.write(`You will need ${lifeTimeSupply} ${favouriteSnack} to last you until the ripe old age of ${maxAge} <br>`)