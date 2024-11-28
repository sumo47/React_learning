//? what is callback Function in javascript
/**
 * when we pass a function inside a function , that passed function called a callback function.
 * 
 */
function x(y) {
    console.log("X");
    y()
}
x(function y() {
    console.log("Y");
})

setTimeout(function () {
    console.log("timer");
}, 5000) // here the callback function will get into call stack when 5 sec timeout.
// javascript has one call stack , /main thread / single thread 

//? javascript is synchronous and single-threaded language

// blocking the main thread

// power of callbacks

// Deep about Event Listeners

// closoures Demo with Event Listeners

// Scope Demo with Event listeners

function attachEventListener() {
    var count = 0
    document.getElementById("click").addEventListener("click", function xyz () {
        console.log("clicked"+ ++count)
    })
}
attachEventListener() // function xyz() creates closure with count variable
// Garbage Collection & removeEventListeners

