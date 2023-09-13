// //Exercise 1
// // Prompt the user to enter the city name
// var cityName = prompt("Enter the name of your city:");

// // Check if the user entered "Karachi" and display a welcome message
// if (cityName !== null && cityName.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights!");
// }










//Exercise 2
// Prompt the user to enter their gender
// var gender = prompt("Enter your gender (male or female):");

// // Check the gender and display the appropriate message
// if (gender !== null) {
//     if (gender.toLowerCase() === "male") {
//         alert("Good Morning Sir.");
//     } else if (gender.toLowerCase() === "female") {
//         alert("Good Morning Ma'am.");
//     } else {
//         alert("Sorry, we couldn't recognize your gender.");
//     }
// }















//Exercise 3

// var signalColor = prompt("Enter the color of the traffic signal (red, yellow, or green):");
// // Check the signal color and set the message
// if (signalColor !== null) {
//     signalColor = signalColor.toLowerCase();
//     var message = "";

//     switch (signalColor) {
//         case "red":
//             message = "Must Stop";
//             break;
//         case "yellow":
//             message = "Slow";
//             break;
//         case "green":
//             message = "Move";
//             break;
//         default:
//             message = "Invalid signal color";
//             break;
//     }

//     // Create an HTML table to display the information
//     var table = "<table border='1'>";
//     table += "<tr><th>Signal Color</th><th>Message</th></tr>";
//     table += "<tr><td>" + signalColor + "</td><td>" + message + "</td></tr>";
//     table += "</table>";

//     // Display the table in the body of the page
//     document.body.innerHTML = table;
// }





//Exercise 4

// // Prompt the user to enter the remaining fuel in liters
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// // Check if the remaining fuel is less than 0.25 liters and display a message
// if (!isNaN(remainingFuel) && remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car.");
// }
// else {
//     alert("you are good to go")
// }








//Exercise 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }







//Exercise 6

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer.");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert("Sorry, that's not correct. The secret number was " + secretNumber + ".");
// }









//Exercise 7
// var totalMarks = 300;
// var marks1 = +prompt('Enter subject 01 marks : ')
// var marks2 = +prompt('Enter subject 02 marks : ')
// var marks3 = +prompt('Enter subject 03 marks : ')
// var marksObtained = marks1 + marks2 + marks3;
// var percentage = (marksObtained / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80){
//     grade = 'A-one';
//     remarks = 'Excellent';
// }
// else if (percentage >= 70){
//     grade = 'A';
//     remarks = 'Good';
// }
// else if (percentage >= 60){
//     grade = 'B';
//     remarks = 'You need to improve';
// }
// else if (percentage < 60){
//     grade = 'Fail';
//     remarks = 'Sorry';
// }
// else {
//     alert("Invalid Input")
// }
// document.write(`<h1>Marks Sheet</h1><br><br>`)
// document.write(`Total Marks : ${totalMarks}<br>`)
// document.write(`Marks Obtained : ${marksObtained}<br>`)
// document.write(`Percentage : ${percentage}%<br>`)
// document.write(`Grade : ${grade}<br>`)
// document.write(`Remarks : ${remarks}<br>`)









// EXERCISE 8
// var num = +prompt('Enter a number : ')
// if ((num % 3) === 0) alert(`${num} is divisible by 3`)
// else alert(`${num} is not divisible by 3`)





// EXERCISE 9
// var num = +prompt('Enter a number : ')
// if ((num % 2) === 0) alert(`${num} is an even number`)
// else alert(`${num} is an odd number`)







// EXERCISE 10
// var temp = +prompt('Enter temperature : ')
// if (temp >= 40) alert('It is too hot outside')
// else if (temp >= 30 && temp < 40) alert('The weather today is normal')
// else if (temp >= 20 && temp < 30) alert('Today\'s weather is cool')
// else if (temp >= 10 && temp < 20) alert('OMG! Today\'s weather is so cool')
// else alert('NIL')










// EXERCISE 11
// var num1 = Number(prompt('Enter first number : '))
// var num2 = Number(prompt('Enter second number : '))
// var operation = prompt('Enter operation (+,-,*,/,%) : ')
// if (operation === '+') alert(`${num1} ${operation} ${num2} = ` + (num1 + num2))
// else if (operation === '-') alert(`${num1} ${operation} ${num2} = ` + (num1 - num2))
// else if (operation === '*') alert(`${num1} ${operation} ${num2} = ` + (num1 * num2))
// else if (operation === '/') alert(`${num1} ${operation} ${num2} = ` + (num1 / num2))
// else if (operation === '%') alert(`${num1} ${operation} ${num2} = ` + (num1 % num2))
// else alert('Invalid Input')

