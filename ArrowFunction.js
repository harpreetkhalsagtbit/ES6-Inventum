/**
 *
 * Remember the two main benefits of arrow functions:
 * 1. A shorter syntax
 * 2. Lexical binding of this
 */

() => {
  statements;
};
// ** is equivalent to **
function example() {
  // do something...
}

/**
 *
 * ===================================  ES5 VERSION  ==========================================
 */
function myFunc1(a, b) {
  return a + b;
}

var myFunc2 = function(a, b) {
  return a + b;
};

console.log(myFunc2(3, 4));

/**
 *
 * ===================================  ES6 VERSION  ==========================================
 */

//  With One Params
parameter => {
  statements;
};

parameter => {
  statements;
};

() => {
  statements;
};
parameter => {
  statements;
};
parameter => ("statements")
  
//   (param1, param2, ...) => { statements }

// ** is equivalent to **
function example(parameter) {
  // do something...
}

//  With One Params
parameter => expression;

parameter => expression;

// ** is equivalent to **
function example(parameter) {
  return "expression";
}

var double = (num) => {
    return num * 2;
}
// Is the same as
var double = num => num * 2;

const add2 = num => num + 2;
console.log(add2(10));

var myFunc = (a, b) => {
  return a + b;
};
console.log(myFunc(3, 4));

var myFunc2 = (a, b) => a + b;
console.log(myFunc2(13, 4));

// Without Params
var myFunc3 = () => {
  return "value1";
};
console.log(myFunc3());

var myFunc3 = () => "value2";
console.log(myFunc3());

/*
 *
 * ===================================  Return Object  ==========================================
 */

var myFunc4 = () => {
  return {
    name: "harpreet",
    age: 10
  };
};
console.log(myFunc4());

var myFunc5 = () => ({ name: "harpreet", age: 10 });
console.log(myFunc5());

/*
 *
 * ===================================  Return Array  ==========================================
 */

var myFunc5 = () => {
  return [1, 2, 3, 4, 5];
};
console.log(myFunc5());

var myFunc5 = () => [1, 2, 3, 4, 5];
console.log(myFunc5());

var myFunc5 = () => [1, 2, 3, 4, 5];
console.log(myFunc5());

/*
 *
 * ===================================  Actual Use  ==========================================
 */

// ---------- ES5 ----------
function calcCircleArea(radius) {
  return Math.PI * radius * radius;
}
console.log(calcCircleArea(10));
// ---------- ES6 ----------
const calcCircleAreaES6 = radius => Math.PI * radius * radius;
console.log(calcCircleAreaES6(10));

function Circle() {
  this.radius = 0;
  this.setRadius = function(radius) {
    this.radius = radius;
  };
  this.getRadius = () => this.radius;
  this.getArea = () => Math.PI * this.radius * this.radius;
  this.incRadiusAfterSomeDelay = () => {
    setTimeout(function() {
      this.radius++;
      console.log(this.radius);
      console.log(this);
    }, 2000);
    setTimeout(() => {
      this.radius++;
      console.log(this.radius);
      console.log(this);
    }, 2000);

    var bindFunc = function() {
      this.radius++;
      console.log(this.radius, "here with bind");
      console.log(this);
    };
    setTimeout(bindFunc.bind(this), 2000);
  };
}
var circle1 = new Circle();
circle1.setRadius(20);
console.log(circle1.getArea());
circle1.incRadiusAfterSomeDelay();
console.log(circle1.getRadius());
