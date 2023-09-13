// //EXERCISE1
// var studentNames = [];



// //EXERCISE2
// var studentNames = new Array();
// var studentNames = [];


// //EXERCISE3
// var fruits = ["apple", "banana", "cherry", "date"];




// //EXERCISE4
// var numbers = [1, 2, 3, 4, 5];



// //EXERCISE5
// var booleanArray = [true, false, true, true, false];




// //EXERCISE6
// var mixedArray = ["apple", 42, true, "banana", false, 7];





//EXERCISE7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// var output = "<h2>Educational Qualifications in Pakistan:</h2><ol>";

// for (var i = 0; i < qualifications.length; i++) {
//   output += "<li>" + qualifications[i] + "</li>";
// }

// output += "</ol>";

// // Display the qualifications in the browser
// document.write(output);















// //EXERCISE8
// var names = ['Michael', 'John', 'Tony']
// var score = [320, 230, 480]
// var totalMarks = 500;
// document.write(`Score of ${names[0]} is ${score[0]}  Percentage: ` + (score[0] / totalMarks) * 100 + '%<br>')
// document.write(`Score of ${names[2]} is ${score[1]}  Percentage: ` + (score[1] / totalMarks) * 100 + '%<br>')
// document.write(`Score of ${names[1]} is ${score[2]}  Percentage: ` + (score[2] / totalMarks) * 100 + '%')











// //EXERCISE9
// var colors = ['red', 'green', 'blue']
// alert("Colors stored  : " +colors)
// var addColor = prompt('Color you want to add in the beginning : ')
// colors.unshift(addColor);
// alert("Colors stored  : " +colors)
//  addColor = prompt('Color you want to add in the ending : ')
// colors.push(addColor);
// alert("Colors stored  : " +colors)
// colors.unshift('purple', 'indigo')
// alert(`Added two more colors to the beginning of the array : ${colors}`)
// colors.shift()
// alert(`Deleted a color from the beginning of the array : ${colors}`)
// colors.pop()
// alert(`Deleted a color from the end of the array : ${colors}`)
// var ind = +prompt('Enter index to add color in array : ')
// addColor = prompt('Enter name of the color : ')
// colors.splice(ind, 0, addColor)
// alert(`After adding new color at desired position : \n ${colors}`)
// var startInd = +prompt('Enter position to delete colors from array : ')
// var endInd = +prompt('How many colors you want to delete from array : ')
// colors.splice(startInd, endInd)
// alert(`After removing colors from desired position : \n ${colors}`)









//EXERCISE10
// var studentScores = [320, 230, 480, 120]
// document.write(`Scores of students: ${studentScores}<br>`)
// studentScores.sort();
// document.write(`Ordered scores of students: ${studentScores}`)








//EXERCISE11
// var cityNames = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// var selectedCities = cityNames.slice(2, 5)
// document.write('Cities List<br>')
// document.write(`${cityNames}<br><br>`)
// document.write('Selected Cities List<br>')
// document.write(`${selectedCities}<br>`)





//EXERCISE12
// var arr = ['This', 'is', 'my', 'cat'];
// document.write(`Array:<br>`)
// document.write(`${arr}<br><br>`)
// document.write(`String:<br>`)
// document.write(`${arr.join(' ')}<br>`)











//EXERCISE13
// var devices = ['keyboard', 'mouse', 'printer', 'monitor']
// document.write('Devices:<br>')
// document.write(`${devices}<br><br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.shift()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.shift()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.shift()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.shift()}<br>`)







//EXERCISE14  

// var devices = ['keyboard', 'mouse', 'printer', 'monitor']
// document.write('Devices:<br>')
// document.write(`${devices}<br><br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.pop()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.pop()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.pop()}<br>`)
// document.write(`Out:<br>`)
// document.write(`${devices.pop()}<br>`)






//EXERCISE15
// var phoneManufacturers = ['apple', 'samsung', 'motorola', 'nokia', 'sony', 'haier']
// document.write('<label for=\'phones\'>Choose a Phone: </label>')
// document.write('<select name="phones" id="phones">')
// document.write('<option value="apple">Apple</option>')
// document.write('<option value="samsung">Samsung</option>')
// document.write('<option value="motorola">Motorola</option>')
// document.write('<option value="nokia">Nokia</option>')
// document.write('<option value="sony">Sony</option>')
// document.write('<option value="haier">Haier</option>')
// document.write('</select>')  