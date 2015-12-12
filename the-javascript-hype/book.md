# The JavaScript Hype &mdash; a guide for early programmers by Adam Burucs

## Foreword

I started writing this book, because I wanted to refresh and upgrade my knowledge about JavaScript. I think everybody can use this material with at least some basic knowledge of programming. JavaScript is getting better and stronger, especially with the latest improvements from ECMAScript 5, 5.1 and 6.

## Introduction

JavaScript is a multi-paradigm, high-level, dynamic, untyped, interpreted programming language. Brendan Eich designed the language in 1995. Despite the similar naming and syntax, JavaScript and Java are two very different programming languages.

JavaScript | Java
-----------|------
prototype based inheritance | classical inheritance
dynamic typing | static typing
interpreted language | compiled language
function scope | block scope

JavaScript can be found both on the client side (Internet browsers can handle it without a plugin as part of a webpage) and server side (Node.js).

The standardized version name of the language is called ECMAScript. This guide contains elements from the latest versions of ECMAScript like 5 (December 2009), 5.1 (June 2011) and 6 (June 2015). Since 2012, all modern browsers fully support ECMAScript 5.1. The ECMAScript standard is approved by the ISO (International Organization for Standardization).

## Tools

Basically a web browser is enough to run JavaScript code. I recommend using Google Chrome or Mozilla Firefox, because they got probably the best features for development. In Chrome press `Ctrl + Shift + J` or press `Ctrl + Shift + I` in Firefox, then select the Console tab.

You can also use an online development environment, like [JS Bin](http://jsbin.com/?html,output), [JSFiddle](https://jsfiddle.net/) or [CodePen](http://codepen.io/).

My favorite frontend development desktop application is Brackets. I use it for the full client side stack HTML, CSS and JavaScript. There are plugins as well for using with scripting languages like PHP, Ruby, Python or Perl among others.

## Data types and variables

According to the latest ECMAScript there are seven data types:

Boolean: logical value, can be true or false.

```
var isItChristmas = false;
```

The standard null value. Note that it is case sensitive.

```
var foo = null;
```

Undefined: this means that the variable doesn't have an assiegned value.

```
var x;
```

Number. Can be integer or floating point.

```
var personAge = 55;
var pi = 3.1415;
```

String. One or more characters in a sequence.

```
var personName = "Albert Einstein";
```
Symbol (ECMAScript 6): this is a new primitive type. Symbols are unique and allow properties to be keyed by either string or symbol.

```
var key = Symbol("key");
```

Object: a package of variables and functions, working together with each other.

```
var person = {
  name: "Albert Einstein",
  job: "scientist",
  age: 55,
  birthday: function() {
    this.age += 1;
  },
  working: function() {
    console.log("Don't bother me now, I'm working.");
  }
};
```

## Comments

The syntax of comments is similar to C like languages:

```
// one line comment
 
/* multi-line
   comment
*/
```

## Declaration methods

The standard way of creating variables with the `var` word.

```
var number = 128;
```

Block scope variables are made with `let`.

```
let color = 'blue';
```

For constants, you can use the `const` declaration.

```
const pi = 3.1415;
```

## Variable scope

Variables created outside of functions are created in global scope, while inside functions is local scope. Local scope variables are always valid in function level, but you can create block scope using `let`.

```
"use strict"
if (true) {
  var snow = 'falling';
}
console.log(snow);  // falling, function scope

if (true) {
  let tree = 'pine';
}
console.log(tree);  // tree is not defined
```

## Hoisting

The concept means variables and functions are lifted to the top of the code, but those will return as undefined. The best practice is to place all var statements to the top of the source or as near as possible.

```
function test() {
	render();
	var plugins = 1;
}
```

The hoisting behavior will interpret the code as the following:

```
function test() {
	var plugins;
	render();
	plugins = 1;
}
```

## Type conversion

JavaScript is dynamically typed so data types are converted automatically during script execution. You can also convert manually with the appropriate methods.

```
// convert to string
String(x)
String(42)
foo.toString()

// convert to number
Number("3.14")    // returns 3.14
Number(false)     // returns 0
Number(true)      // returns 1
```

## Arithmetic Operators

These helps us to perform tasks with numbers.

Character  | Task
------------- | -------------
\+  | Addition
\-  | Subtraction
\*  | Multiplication
/  | Division
%  | Modulus
++  | Increment
--  | Decrement

## Assignment Operators

Operators can be shortened like the following:

Example  | Task
------------- | -------------
x += 1 | x = x + 1
x -= 6 | x = x - 6
x *= 2 | x = x * 2
x /= 2 | x = x / 2

Or can be used in the default way.

Example  | Task
------------- | -------------
x + 1  | x + 1
x - 6 |  x - 6

## String Operators

```
var firstName = 'John';
var lastName = 'Smith';
var name = firstName + lastName; // 'John Smith'
var name = name + ' Jr.' // 'John Smith Jr.'
```

## Adding Strings and Numbers

The addition of a string and a number will be a string.

```
var fruits = 'apple*' + 5; // 'apple*5'
```

## Comparison operators

We can check equality and relation with these operators. The strict versions also check for the same type.

Operator | Meaning
---------|---------
==	| equal
===	| equal and got the same type
!=	| not equal
!==	| not equal value or not equal type
>	| greater than
<	| less than
>=	| greater than or equal
<=	| less than or equal

The best practice is to always use the strict equality to get consistent values.

## Dynamic typing

JavaScript is a dynamic language, which means that variables can change their type without errors.

```
var thing = 42; // thing is a number
thing = 'oranges'; // thing is a string
thing = false; // thing is a boolean
```

## Functions

Function is a short program that performs a specific task. Functions are powerful tools, which can increase the quality and reliability and reduce the costs of development. They can be thought of as building blocks of an application. Normal function and function literals behave the same way.

```
// return the sum of the parameters
function add(a, b) {
  return a + b;
}

// function literal form
var add = function(a, b) {
  return a + b;
}

// multiply numbers
var multiply = function(a, b) {
  return a * b;
}

// print output of an animal sound to the console
var sound = function(snd) {
  if (snd === 'dog') {
    console.log('barrk');
  }
  if (snd === 'cat') {
    console.log('meow');
  }
}
```

You can execute a function by calling the name and parameters inside parenthesis.

```
sound('dog'); // 'barrk'
sound('cat'); // 'meow'
add(5, 9); // 14
```

You can use functions as variables as well.

```
var fruits = add(1, 3) * multiply(2, 2); // 16
```

Functions either have a return value or don't.

```
// this is a function without a return value
function process(item) {
  prepare(item);
  modify(item);
  finalize(item);
  send(item);
}

// similar to above but without a parameter
function credits() {
  console.log('Written by John Doe with the hepl of Jane Doe.');
}
```

## Anonymous functions

This is considered a best practice as the code inside the anonymous function isn't part of the global scope. With this technique you can avoid naming collisions.

```
(function () {
  var dogName = "Alfie"; 
  console.log("I have got a dog called Alfie.");
})();
console.log(dogName); // error
```

## Arrow functions

Since ES6 functions can be defined with arrow. At the moment it is recommended, that you use the arrow functions only for lambdas and functions using this. Arrow functions share the same `this` context of their parents, so there is no need to define a reference to it.

```
// default syntax
function mult(a, b) {
  return a * b;
}

// arrow syntax, multiply two numbers
mult = (a, b) => a * b
mult(5, 10); // 50
```

## Closures

A closure is like local variables for a function, which is  kept alive after the function has returned. The local variable is not copied, but used by reference.

```
function greet(name) {
  var text = 'Hello ' + name;
  var sayHello = function() {
    alert(text);
  }
  return sayHello;
}

greet('Johnny'); // alerts "Hello Johnny"
```

## Conditional statements

When a condition is true, the commands in the block next to it are executed as part of the control flow.

```
if (condition) {
  statement_1;
} else {
  statement_2;
}

if (christmas) {
  celebrate();
} else {
  continueWork();
}

if (temperature === 'cold' && goingOutside === true) {
  console.log('Layer up and dress warm!');
}

// multiple conditions
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

The switch statement can match more values in a shorter syntax and behave accordingly. Each case should have a break command because without it the program would check the next definition. The default case will match every other value, and can be used for handling possible errors.

```
switch (animal) {
  case "dog":
    console.log("bark!");
    break;
  case "cat":
    console.log("meow!");
    break;
  case "sheep":
    console.log("baaa!");
    break;
  case "duck":
    console.log("quack!");
    break;
  default:
   console.log("The program doesn't recognize this animal!");
}
```

## Error handling statements

You can generate an exception with throw and handle them using `try...catch` and `try...catch...finally` statements. The `finally` block always executes regardless of the `try` and `catch` sections. Nesting is allowed for `try...catch` statements. When an inner statement doesn't have a `catch`, then an outer section is waiting to handle it.

```
try {
  n = getNumber(x);
  if (n === 0) {
    throw "ZeroNumber"; // possible error
  }
} catch (e) {
  console.log(e); // print the exception to console
}

try {
  n = getNumber(x);
  if (n === 0) {
    throw "ZeroNumber";
  }
} catch (e) {
  console.log(e);
} finally {
  console.log('operation finished');
}
```

## Promises

Promises appeared in ECMAScript 6 and they allow to control the flow of deferred and asynchronous operations. Async tasks can be data requests, animation, user interaction, hardware responses, component activities. Promises make easier writing chains and waiting for resolving as well. Before the native language feature several libraries already had some form of implementation of promises, like jQuery, YUI and Bluebird.

The states of a promise are:

* pending: initial state, neither fulfilled nor rejected
* fulfilled: successful operation
* rejected: failed operation
* settled: fulfilled or rejected, but not pending

```
function delay(t) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve();
    }, t);
  });
}

delay(1000).then(function() {
  console.log("command after delay");
});
```

## Loops

Loops provide a way to do tasks repeatedly.

### for loop

A for loop is running until the given condition will be false. This is working similarly to Java and C.

```
var i;
for (i = 0; i < 3; i++) {
  console.log('ok');
}
// prints ok 3 times to the console
```

### do while loop

The do while loop is running until the given condition will be false. This is working similarly to Java and C.

```
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

### while loop

The while loop is running as long as the condition is true.

```
var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
```

### for in loop

The for...in loop

```
var obj = {a:1, b:2, c:3};

for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
```

### for of loop
### label statement
### continue statement
### label statement

## Strict mode

The `"use strict"` directive defines strict mode since ECMAScript 5. The strict context prevents or throws errors and disables poorly created earlier features of the language. It is good for making fewer mistakes and detect things which can be harmful.

```
(function(){
  "use strict";

  // ...
})();
```
