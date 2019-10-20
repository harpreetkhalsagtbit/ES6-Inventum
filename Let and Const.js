/**
 * Three types of Variables in JS
 * var - ES5
 * let - ES6 block scoped
 * const - ES6 block scoped
 */

let x = 1;
{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1

var y = 1;
{
  var y = 2;
  console.log(y); // 2
}
console.log(y); // 1

console.log(count);
var count = 2;
console.log(count); // 2
console.log(count); // 1

// console.log(countWithLet)
// let countWithLet = 2;
// console.log(countWithLet); // 2
// console.log(countWithLet); // 1

// Looping
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i++);
console.log("final i", i);

for (let j = 0; j < 10; j++) {
  console.log(j);
}

// console.log('final j', j++)
// console.log('final j', j)

const PI = 3.14;
// PI++
// let PI = 4;
console.log(PI);
// What is Block Scope ?
{
  let PI = 4;
  console.log(PI);
}

function test(radius) {
  if (radius < 10) {
    var area = 0;
  } else {
    area = 20;
  }
  console.log(area);
}
test(10);

function testLet(radius) {
  if (radius < 10) {
    let area = 0;
  } else {
    let area = 30;
  }
  console.log(area);
}
// testLet(10)

/*
 *
 * ===================================  Actual Use  ==========================================
 */

function sayMeow() {
  console.log(cat); // undefined
  console.log(dog); // Uncaught ReferenceError: dog is not defined
  var cat = "meow";
  let dog = "woof";
}
// console.log(cat, dog)
// console.log(sayMeow())

const cat = "meow";
console.log(cat); // 'meow'
// cat = 'woof';

const myCat = {
  sound: "meow"
};
console.log(myCat.sound); // 'meow'
myCat.sound = "woof";
console.log(myCat.sound); // 'woof'

/**
 * 
 * Key Takeaways
 * 1. var is the broadest of the three variables and provides no added
 *  value to your code with the addition of let and const.
 * 2. There is no need to continue using var. If you never need to reassign
 *  a variable, you should always be using const, otherwise, use let.
 */


 var k = [5,4,3,2,1]
 console.log(k.slice())
 console.log(k.slice(0))
 console.log(k.slice(1))
 console.log(k.slice(2))
 console.log(k.slice(3))
 console.log(k.slice(4))
k
console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(0,0))
console.log(k.slice(0,1))
console.log(k.slice(0,2))
console.log(k.slice(0,3))
console.log(k.slice(0,4))
k

console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(1,0))
console.log(k.slice(2,1))
console.log(k.slice(3,2))
console.log(k.slice(4,3))
console.log(k.slice(5,4))
k


console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(1,1))
console.log(k.slice(2,2))
console.log(k.slice(3,3))
console.log(k.slice(4,4))
console.log(k.slice(5,5))
k
console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(0,9))
console.log(k.slice(2,5))
console.log(k.slice(3,4))
console.log(k.slice(4,3))
console.log(k.slice(5,2))
k

console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(-1))
console.log(k.slice(-2))
console.log(k.slice(-3))
console.log(k.slice(-4))
console.log(k.slice(-5))
console.log(k.slice(0, -1))
console.log(k.slice(0, -2))
console.log(k.slice(0, -3))
console.log(k.slice(0, -4))
console.log(k.slice(0, -5))
console.log(k.slice(0, -6))
k


 var k = [5,4,3,2,1]
 console.log(k.slice())
 console.log(k.slice(0))
 console.log(k.slice(1))
 console.log(k.slice(2))
 console.log(k.slice(3))
 console.log(k.slice(4))
k
console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(0,0))
console.log(k.slice(0,1))
console.log(k.slice(0,2))
console.log(k.slice(0,3))
console.log(k.slice(0,4))
k

console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(1,0))
console.log(k.slice(2,1))
console.log(k.slice(3,2))
console.log(k.slice(4,3))
console.log(k.slice(5,4))
k


console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(1,1))
console.log(k.slice(2,2))
console.log(k.slice(3,3))
console.log(k.slice(4,4))
console.log(k.slice(5,5))
k
console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(0,9))
console.log(k.slice(2,5))
console.log(k.slice(3,4))
console.log(k.slice(4,3))
console.log(k.slice(5,2))
k

console.log(k.slice())
console.log(k.slice(0))
console.log(k.slice(-1))
console.log(k.slice(-2))
console.log(k.slice(-3))
console.log(k.slice(-4))
console.log(k.slice(-5))
console.log(k.slice(0, -1))
console.log(k.slice(0, -2))
console.log(k.slice(0, -3))
console.log(k.slice(0, -4))
console.log(k.slice(0, -5))
console.log(k.slice(0, -6))
k



/** Splice */

var k = [5,4,3,2,1]
console.log(k.splice())
k
var k = [5,4,3,2,1]
console.log(k.splice(0))
k
var k = [5,4,3,2,1]
console.log(k.splice(1))
k
var k = [5,4,3,2,1]
console.log(k.splice(2))
k
var k = [5,4,3,2,1]
console.log(k.splice(3))
k
var k = [5,4,3,2,1]
console.log(k.splice(4))
k
var k = [5,4,3,2,1]
console.log(k.splice(5))
k

var k = [5,4,3,2,1]
console.log(k.splice())
k
var k = [5,4,3,2,1]
console.log(k.splice(0))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,0))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,1))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,2))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,3))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,4))
k

var k = [5,4,3,2,1]
console.log(k.splice())
var k = [5,4,3,2,1]
console.log(k.splice(0))
var k = [5,4,3,2,1]
console.log(k.splice(1,0))
var k = [5,4,3,2,1]
console.log(k.splice(2,1))
var k = [5,4,3,2,1]
console.log(k.splice(3,2))
var k = [5,4,3,2,1]
console.log(k.splice(4,3))
var k = [5,4,3,2,1]
console.log(k.splice(5,4))
k


var k = [5,4,3,2,1]
console.log(k.splice())
k
var k = [5,4,3,2,1]
console.log(k.splice(0))
k
var k = [5,4,3,2,1]
console.log(k.splice(1,1))
k
var k = [5,4,3,2,1]
console.log(k.splice(2,2))
k
var k = [5,4,3,2,1]
console.log(k.splice(3,3))
k
var k = [5,4,3,2,1]
console.log(k.splice(4,4))
k
var k = [5,4,3,2,1]
console.log(k.splice(5,5))
k

var k = [5,4,3,2,1]
console.log(k.splice())
k
var k = [5,4,3,2,1]
console.log(k.splice(0))
k
var k = [5,4,3,2,1]
console.log(k.splice(0,9))
k
var k = [5,4,3,2,1]
console.log(k.splice(2,5))
k
var k = [5,4,3,2,1]
console.log(k.splice(3,4))
k
var k = [5,4,3,2,1]
console.log(k.splice(4,3))
k
var k = [5,4,3,2,1]
console.log(k.splice(5,2))
k

var k = [5,4,3,2,1]
console.log(k.splice())
k
var k = [5,4,3,2,1]
console.log(k.splice(0))
k
var k = [5,4,3,2,1]
console.log(k.splice(-1))
k
var k = [5,4,3,2,1]
console.log(k.splice(-2))
k
var k = [5,4,3,2,1]
console.log(k.splice(-3))
k
var k = [5,4,3,2,1]
console.log(k.splice(-4))
k
var k = [5,4,3,2,1]
console.log(k.splice(-5))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -1))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -2))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -3))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -4))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -5))
k
var k = [5,4,3,2,1]
console.log(k.splice(0, -6))
k
var k = [5,4,3,2,1]
k

var outer = function a() {
  console.log(this)
  return function() {
    console.log(this)
  }
}

console.log(outer()())
var a = outer()
a()
