//Exercise 1
// var char = prompt("Enter a character (number or string):");

// // Check if the input is a number
// if (!isNaN(char)) {
//     alert(char + " is a number.");
// } else {
//     // Check if the input is an uppercase letter
//     if (char >= 'A' && char <= 'Z') {
//         alert(char + " is an uppercase letter.");
//     }
//     // Check if the input is a lowercase letter
//     else if (char >= 'a' && char <= 'z') {
//         alert(char + " is a lowercase letter.");
//     }
//     else {
//         alert(char + " is neither a number nor a letter.");
//     }
// }








//EXERCISE2
// var firstInteger = parseInt(prompt("Enter the first integer:"));
// var secondInteger = parseInt(prompt("Enter the second integer:"));
// if (firstInteger === secondInteger) {
//   alert("Both integers are equal.");
// } else {
//   if (firstInteger > secondInteger) {
//     alert(`The larger integer is: ${firstInteger}`);
//   } else {
//     alert(`The larger integer is: ${secondInteger}`);
//   }
// }







//EXERCISE3
// var number = parseFloat(prompt("Enter a number:"));
// if (number > 0) {
//   alert("The number is positive.");
// } else if (number < 0) {
//   alert("The number is negative.");
// } else {
//   alert("The number is zero.");
// }







//EXERCISE4
// var character = prompt("Enter a single character:").toLowerCase(); 
// var isVowel = false;

// if (character.length === 1) {
//   switch (character) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//       isVowel = true;
//       break;
//     default:
//       isVowel = false;
//   }
// }

// if (isVowel) {
//   alert(`${character} is a vowel.`);
// } else {
//   alert(`${character} is not a vowel.`);
// }







//EXERCISE5
// var correctPassword = "MySecretPassword";
// var userPassword = prompt("Please enter your password:");
// if (userPassword === null || userPassword === "") {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   alert("Incorrect password.");
// }







//EXERCISE6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     alert("Good day");
// } else {
//     alert("Good evening");
// }









//EXERCISE7
// Get user input for time in 24-hour format
var time = parseInt(prompt("Enter the time in 24-hour format (e.g., 1900 for 7pm):"));

// Initialize a variable to store the time period
var timePeriod;

// Check and categorize the time period
if (time >= 0 && time < 1200) {
    timePeriod = "morning";
} else if (time >= 1200 && time < 1700) {
    timePeriod = "afternoon";
} else if (time >= 1700 && time < 2100) {
    timePeriod = "evening";
} else if (time >= 2100 && time < 2400) {
    timePeriod = "night";
} else {
    timePeriod = "invalid";
}

// Display the result
if (timePeriod === "invalid") {
    alert("Invalid input. Please enter a valid time in 24-hour format.");
} else {
    alert(`It's currently ${timePeriod}.`);
}









