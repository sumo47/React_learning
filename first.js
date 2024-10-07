import React from 'react';
import reactDom from 'react-dom';
// // This is DOM
// const heading = document.createElement("h1");
// heading.innerHTML = "this is dom";

// const rootx = document.getElementById("root");

// rootx.appendChild(heading);
// console.log(heading) // <h1>this is dom<h1/>
   
   // prototype = 
    //* const variable = document.createElement("tag", {atributes:style}, "children");

    const heading1 = React.createElement('h1', {
        title: "head",
        style: {
            color: "red",
            fontSize: "20px",
            backgroundColor: "black",
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            border: "1px solid red",
            borderRadius: "10px",
            boxShadow: "10px 10px 10px 10px red",
            boxSizing: "border-box"
        }
    }, "This is heading by React CDN")

    const heading2 = React.createElement('h2', {
        id: "heading2",
        style: {
            color: "green",
            fontSize: "20px",
            backgroundColor: "black",
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            border: "1px solid green",
            borderRadius: "10px",
            boxShadow: "10px 10px 10px 10px green",
            boxSizing: "border-box"
        }
    }, "This is heading2 by React CDN")


    const container = React.createElement('div', {
        id: 'container'
    }, [heading1, heading2])

    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(container) //expend it // can only rander one element
    //? can we create multiple root in react?



//! Difference between normal functions and arrow functions

// ** value of this function depends on how you call it
// ** Js Engine gives us Window function

// const obj = {
//     fun1: function () {
//         console.log(this) // Here this refers to 'obj' object
//     },
//     fun2: () => {
//         console.log(this)  // Here this refers to 'window' object
//     }
// }

// obj.fun1() // logs: { fun1: [Function: fun1], fun2: [Function: fun2] }

// obj.fun2() // logs: {} (global object in Node.js)


//?  Another Example --- 

// function x() {
//     console.log(this)
//     function y() {
//         console.log(this)
//         function z() {
//             console.log(this)
//         } z()
//     } x()
// } x()


//?  Another Example ---

// const person1 = {
//     name: "Sumit kumar"
// }
// const person2 = {
//     name: "Emma watson"
// }
// function x() {
//     console.log(this)
// }

// x.call(this) // x() both are same
// x.call(person1)  // name:"Sumit kumar"
// x.call(person2)  // name: "Emma watson"

// ? Another Example --- 

// const person = {
//     name: "sumit",
//     print: function () {
//         console.log(this)
//     }
// }

// const person2 = {
//     name: "Simran"
// }

// person.print() // person object
// person.print.call() // window object
// person.print.call(this)  // window object 
// person.print.call(person2) // person2 object
// person.print.call(person) // person2 object

// ! Call , Apply , bind functions can change this function behaviour

// // ? Another example --- 

// const obj = {

//     firstName: "Sumit",

//     printName: () => {
//         console.log(this) // window obj
//     },

//     printName2: function () {
//         console.log(this) // obj
//     }
// }

// obj.printName() // window obj
// obj.printName2() // obj

// obj.printName.call() // window obj
// obj.printName2.call() // window obj