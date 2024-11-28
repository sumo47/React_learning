// const array = [1, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const target = 11;

// var twoSum = function (nums, target) {
//   let ans = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         ans.push(i);
//         ans.push(j);
//         return ans;
//       }
//     }
//   }
// };

// console.log(twoSum(array, target));

// closure
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
}

x()

//* Difference between function statement and function expression 

a()
// b()

//  here both function has been called ,
//  but a will be called due to hoisting (in memory a has been stored as function ),
//  but b will not call , gives error undefined , bcoz b is variable and during hoisting it stored a value as undefined

// Function statement 
function a() {
  console.log("Hello world")
}


// function Expression 
var b = function () {
  console.log("Hello world")
}

//* Function declaration
// Function statement is also known as function declaration

// *Anonymous function
 // a function without a name is defined as anonymous function
 // anonymous function can't be called directly, but it can be stored in a variable
//  anonymous function can be called using call, apply or bind method //?

// if we write anonymous function directly then throw syntax error

// Example

var c = function () {
  console.log("Hello world")
}

// * Named Function Expression 
 // Named function expression is a function assigned to a variable,
 // It can be called directly

// Example

var d = function namedFunction() {
  console.log("Hello world")
}

d() // call named function directly

/**
 * but when we call namedFunction it will throw refrence error
 * because namedFunction does not stored in global scope 
 * it is stored in local scope
 */
// Example

// namedFunction()  //namedFunction is not defined

var f = function sumit(){
  console.log(sumit)
}
// outpur  = function sumit(){console.log(sumit)}

f()

//*  Difference between Parameters and Arguments ?
var sum = function (parameter1, parameter2) { // we have identifier , this is local variable
  console.log(parameter1 + parameter2)
}

sum(10, 20) // arguments are actual values passed to the function

//* First Class Function -- 
 // the ability to take as arguments inside a function is called first class function 
 // and the ability to return function as value is called higher order function
 // can be assign as a value // can be also called //*first class citizens

 var g = function (x) {
  return x;
}

function h (){
  console.log("h")
}

console.log(g(h))

