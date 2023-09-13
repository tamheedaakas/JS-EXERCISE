//EXERCISE 1

// var age = 22;
// alert("I am " + age + " years old");


// //EXERCISE 2
// if (localStorage.getItem("visits") === null) {
//    localStorage.setItem("visits", 1);
// } else {
//     var visits = parseInt(localStorage.getItem("visits"));
//     visits++;
//     localStorage.setItem("visits", visits);
// }
// var visitsCount = localStorage.getItem("visits");
// alert("You have visited this site " + visitsCount + " times.");




//EXERCISE 3
// var birthYear = 2002;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear)  );




//EXERCISE 4
var visitorName = prompt("enter the user name: " )
var productName = prompt("enter the product name: " )
var quantity = prompt("enter the quantity: " )
document.write(visitorName + " ordered " + quantity + " " + productName + "(s) on XYZ Clothing store." + "<br>");
document.write(`${visitorName} ordered  ${quantity} ${productName} (s) on XYZ clothing store.`)