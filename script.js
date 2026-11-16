/* ------------------ PART ONE : INTRODUCTION ------------------ */


/* console.log(`Hello`);
console.log(`I like pizza`);

window.alert(`This is an alert!`);
window.alert(`I like pizza!`);
 */
// This is a comment

/* This 
is  
a comment

*/


/* document.getElementById("myh1").textContent = `Hello`;
document.getElementById("myp").textContent = `I like pizza!`; */

/* ------------------ PART TWO : VARIABLES------------------ */


// VARIABLES = A container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment   x = 100;

/* let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(gpa);
console.log(`You'r ${age} years old`);
console.log(`The price is $${price}`);
 */

/* let firstName = "Bro";
let favoriteFood = "pizza";
let email = "youremail@example.com";

console.log(`your name is ${firstName}`);
console.log(`I like ${favoriteFood}`);
console.log(`my email is ${email}`);
 */

/* let online = false;
let forSale = true;
let isStudent = true

console.log(typeof online);
console.log(`Bro is online: ${online}`);
console.log(`is this car for sale:  ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
 */


/* let fullName = "Grayson Evod";
let age = 20;
let student = true;

document.getElementById("myh1").textContent = `Your name is ${fullName}`;
document.getElementById("myp1").textContent = `You are ${age} years old`;
document.getElementById("myp2").textContent = `Enrolled: ${student}`;
 */

/* ------------------ PART THREE : ARTHMETRIC OPERATOR ------------------ */

// arthimetric operators = operands (values, variables, etc.)
//                           operators (+ - * /)
//                           ex. 11 = X + 5;

//let students = 30;
//students = students + 1
//students = students - 1
//students = students * 2
//students = students / 2
//students = students ** 2
//let extrastudents = students % 2

//students += 1
//students -= 1
//students *= 4
//students /= 3
//students **= 4
//students %= 2

/* students++
students--
 */

/* operator precedence
1. parenthesis
2. exponents
3. multiplication & division & modulo
4. addition & substraction
 */

//let result = 1 + 2 * 3 + 16;
//let result = 12 % 5 + 8 / 2;
//let result = 6 / 2 ** (2 + 5);


//console.log(student);
//console.log(result);

/* ------------------ PART FOUR : USER INPUTS ------------------ */

//How to accept user inputs

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

//let username;
//username = window.prompt("What is your name?");

//let username = window.prompt("How old are you?");

//console.log(username);

/* document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hello ${username}`;
}
 */

/* ------------------ PART FIVE : TYPE CONVERSION ------------------ */

//type conversion = change the datatype of value to another
//                  (strings-numbers, numbers-strings, numbers-boolean, boolean-strings, boolean-numbers)
// WhY? User input are strings so when needed for calculation on decision making they must be turned into appropiate data types.

/* let age = window.prompt("How old are you?");
age+=1;

console.log(age, typeof age);
 */

/* let age = window.prompt("How old are you?");
age = Number(age);
age+=5;

console.log(age, typeof age);
 */

//let x = "pizza";
//let y = "pizza";
//let z = "pizza";

// let x = "0";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = ""; // used to check if the user did'nt type anything, it give false if converted to boolean

// let x; // Gives NaN
// let y; // Give undefined
// let z; // Gives false


/* x = Number(x); // converting an alphabetical string into an number gives NaN but a numeric string turns into a number
y = String(y); // converting a string into a string does nothing.
z = Boolean(z); //converting a string into a boolean gives true as long as the variable holds a truthy value.

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
 */

/* ------------------ PART SIX : CONSTANTS ------------------ */



