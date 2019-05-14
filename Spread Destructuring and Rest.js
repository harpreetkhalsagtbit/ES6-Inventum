// What is Spread Operator
// this => '...' :)

var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];

console.log(arr);

var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr);


Math.max();
// -Infinity
Math.max(1, 2, 3);
// 3
Math.max(100, 3, 4);
// 100

/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
console.log(Math.max.apply(null, [100, 3, 4]))


/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
console.log(Math.max([100, 3, 4]))
console.log(Math.max(...[100, 3, 4]))

var sum =  (num1, num2) => (num1 + num2)
console.log(sum(2,3))
console.log(sum([2,3]))
console.log(sum(...[2,3]))


// sum n numbers
function func1() {
    console.log(arguments);
}
  
func1(1, 2, 3);

// ES6 Arrow func does not have no arguments
var funcSumOf_N_Integers = (arr) => {
    console.log('here',arr)
}
funcSumOf_N_Integers(1,2,3,4,5,6,7)

var funcSumOf_N_Integers = (arr) => {
    console.log('here',arr)
    var acc = arr.reduce((acc, item) => {
        return acc + item
    }, 0)
    acc
}
funcSumOf_N_Integers([1,2,3,4,5,6,7])

//Actual workaround - ES6 way is
var funcSumOf_N_Integers = (...arr) => {
    console.log('here',arr)
    var acc = arr.reduce((acc, item) => {
        return acc + item
    }, 0)
    acc;
}
funcSumOf_N_Integers(1,2,3,4,5,6,7)

// Destructuring
// Destructuring means taking out ( technically, making a copy of ) individual items
// from an object or an array and assigning them to a variable

var details = { firstName: 'Harpreet', lastName: 'Singh', age: 22 };
var { firstName, age } = details;
console.log(firstName, age);

var req = {
    body: {
        name:'harpreet',
        age:10
    }
}
var {name, age, address} = req.body
name
age
address

var address = [221, 'Baker Street', 'London'];
var [ houseNo, , city ] = address;
houseNo
city


// Rest Operator
// Syntactically, it looks exactly the same as spread operator.
// But it’s function is the exact opposite of the spread Operator.
// If Spread operator expands individual items, then rest operator collects
// a bunch of items and puts them into arrays and objects.

// Spread and Destructuring together
var numbers = [1, 2, 3];
var [ firstNumber, ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);
// 1 [ 2, 3 ]

var numbers = [1, 2, 3, 4, 5];
var [ firstNumber, ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);

// skip numbers
var numbers = [1, 2, 3, 4, 5];
var [ firstNumber,  ,  , ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);

var [ firstLetter, ...restOfTheLetters ] = 'Harpreet Singh';
firstLetter
restOfTheLetters


// Spread Vs Destrcuting Vs Rest
// Spread - Only One variable at a time - Array or Object
var details = {
    age:10,
    address: "Delhi",
    officeAddress: "Noida",
    contact:"9910549924"
}
var newObj = { ...details }
newObj
newObj.age = 100

details
newObj

// Destructuring - One or More/Mutiple Variable
var { address } = details;
address

var details = {
    age:10,
    cities: ["Delhi", "Mumbai"],
    officeAddress: {
        name:"ABC",
        address:"AYX"
    },
    contact:"9910549924"
}
var { age, cities, officeAddress } = details;
age
cities
officeAddress

// Rest Operator - One Variable
var { age, ...restDetails } = details;
age
restDetails

var numbers = [1, 2, 3];
var [ firstNumber, ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);



// Copy an Arr
/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */

var k = [1,2,3,4,5]
var j = k
k.splice(2,2)
k
j

var k = [1,2,3,4,5]
var j = []
j = j.concat(k)
// j = [].concat(k)
k.splice(2,2)
k
j


/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
var k = [1,2,3,4,5]
var [...j] = k
k.splice(2,2)
k
j

var k = [1,2,3,4,5]
var j = [...k]
k.splice(2,2)
k
j

// concat multipe arrays

/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr = [];
arr = arr.concat(arr1)
arr
arr = arr.concat(arr2)
arr

var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr = [];
arr = arr.concat(arr1).concat(arr2)
arr
/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr = [...arr1, ...arr2];

arr

/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
var str = "hello";
var chars = str.split('');
str
chars

/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
var str = "hello";
var chars = [...str];
str
chars


const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // Line 1
console.log(...items) // Line 2



// It also works on Objects
var person = {
    name: "harpreet",
    age:10
}

var { name, age} = person
name
age

// Copy Object
/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
var person = {
    name: "harpreet",
    age:10
}

var newPerson = JSON.parse(JSON.stringify(person))
person
newPerson

person.name = 'newName'

person
newPerson

/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */
var person = {
    name: "harpreet",
    age:10
}
var newPerson = {...person}
newPerson
person
person.name = 'newName'

person
newPerson


// Merge Two Objects

var name = {
    firstName: "harpreet",
    lastname: "singh"
}

var details = {
    age: 10,
    address: "Delhi"
}
var person = {
    name: name,
    details: details
}
person

var person = {
    name,
    details
}

person
/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */

var person = {
    firstName: name.firstName,
    lastName: name.lastName,
    age: details.age,
    address: details.address
}
person


/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */

var person = {...name, ...details}
person

var person = {
    ...name,
    ...details
}
person

var person = {
    ...name,
    personDetails: {...details}
}
person

/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */

var person = {
    name: `${name.firstName} ${name.lastName}`,
    // age: details.age,
    // address: details.address
    ...details
}
person


/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */

 var details = {
    age:10,
    address: "Delhi",
    officeAddress: "Noida",
    contact:"9910549924"
}
var person = {...name, ...details}
person

// merge only one field
var {officeAddress} = details
var person = {...name, officeAddress}
person

// merge few field
var {age, officeAddress} = details
var person = {...name, age, officeAddress}
person


// merge all except few field
var {address, ...lessDetails} = details
var person = {...name, ...lessDetails}
person

// passing default values
// merge all except few field
var details = {
    age:10,
    officeAddress: "Noida",
    contact:"9910549924"
}

var {address = "Somewhere", ...lessDetails} = details
var person = {...name, address, ...lessDetails}
person


// override some key values
var details = {
    age:10,
    address:"Delhi",
    officeAddress: "Noida",
    contact:"9910549924"
}

var {address = "NCR", ...lessDetails} = details
var person = {...name, address, ...lessDetails}
person

// Default values
var details = {
    age:10,
    // address:"Delhi",
    officeAddress: "Noida",
    contact:"9910549924"
}

var {address = "NCR", ...lessDetails} = details
var person = {...name, address, ...lessDetails}
person

// Override values
var details = {
    age:10,
    address:"Delhi",
    officeAddress: "Noida",
    contact:"9910549924"
}

var {address = "NCR", ...lessDetails} = {...details, address:"Mumbai"}
var person = {...name, address, ...lessDetails}
person

var {address, ...lessDetails} = {...details, address:"Mumbai"}
var person = {...name, address, ...lessDetails}
person


// passing multiple params to a function
function setDetails(name, age, contact) {
    name
    age
    contact
}

setDetails('harpreet', 10, '9910549924')

setDetails('harpreet', '9910549924', 10)


// passing multiple params to a function - Using destructuring
function setDetailsObj({name, age, contact}) {
    name
    age
    contact
}

setDetailsObj({
    name:'harpreet',
    age:10,
    contact:'9910549924'
})

var {name, age, contact} = { name:'harpreet', age:10, contact:'9910549924' }

// passing multiple params to a function - Using destructuring
function setDetailsObj2({name, age, contact, address = "Delhi"}) {
    name
    age
    contact
    address
}

setDetailsObj2({
    name:'harpreet',
    age:10,
    contact:'9910549924'
})


// passing multiple params to a function - Using destructuring
function setDetailsObj3({name, address="Delhi", ...others}) {
    name
    address
    others
}

setDetailsObj3({
    name:'harpreet',
    age:10,
    contact:'9910549924'
})

// passing multiple params to a function - Using destructuring
function setDetailsObj4(num1, num2, ...all) {
    num1
    num2
    all
}

setDetailsObj4(...[1,2,3,4])

var details = {
    name:"harpreet",
    age:10,
}

// passing multiple params to a function - Using destructuring
function setDetailsObj5(name, age) {
    name
    age
}

setDetailsObj5(...Object.values(details))

function setDetailsObj6(name, age) {
    name
    age
}

// setDetailsObj6(...{name:'harpreet', age:10})

// swap two numbers
var a = 1, b = 2, c=3
a
b
var [a,b] = [b, a]
a
b


// Create variable with diffrent name
var details = {
    age:10,
    address:"Delhi",
    officeContact:"aaaa",
    officeAddress: "Noida",
    contact:"9910549924"
}

var {officeContact:officialNumber} = details
officialNumber
// officeContact


// Accessing child propeties
var obj = {
    name:'harpreet',
    address: {
        permanent: {
            value: "Delhi"
        },
        temporary: {
            value:"Noida"
        }
    }
}
// unnecessary ...
var {address} = {...obj}
address
var {permanent} = {...address}
permanent
var {value:k} = {...permanent}
k


// shortest way
var {address: {permanent: {value:permanentAddress}}} = obj;
// value
permanentAddress

// merge two different objects 
var obj1 = {a, b}
var obj2 = {c}
var obj3 = {a, b:'X'}
obj1
obj2
obj3

// last object's field value will override previously created field
k = {...obj1, ...obj2, ...obj3}
// obj1.b replaced by obj3.b
k
k = {...obj3, ...obj2, ...obj1}
// obj1.b replaced by obj3.b
k