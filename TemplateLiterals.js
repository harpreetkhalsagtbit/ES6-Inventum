/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */

var firstName = "Harpreet";
var lastName = "Singh";
var fullName = firstName + lastName;

console.log("My Name is " + fullName);

var fullName = firstName + " " + lastName;
fullName;
console.log("My Name is " + fullName);

var name = ["Harpreet", "Singh"];
var fullName = name.join(" ");
fullName;
console.log("My Name is " + fullName);

/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */

var firstName = "Harpreet";
var lastName = "Singh";
var fullName = `My Name is ${firstName} ${lastName}`;
fullName;

var p = {
  name: "Alfred",
  nn: "Alfy"
};
console.log("Hi, I'm " + p.name + '! Call me "' + p.nn + '".');

// For multiline string
var paragraph = "hello All \n My Name is : " + firstName + " " + lastName;
console.log(paragraph);

var firstName = "Harpreet";
var lastName = "Singh";
var fullName = `
                Hello All
    My Name is ${firstName} ${lastName}
`;
fullName;

console.log(`Dear Mom,
Hope you are well.
    Love, your son`);

// For calculations
console.log(" Sum of two nubers " + (5 + 4));
console.log(` Sum of two nubers ${5 + 4}`);

var radius = "10";
console.log(` Area of Circle is ${Math.PI * radius * radius}`);

var csc = require('country-state-city').default
console.log(csc.getAllCountries())