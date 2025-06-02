// Function declarations are hoisted completely
hoistedFunction(); // Output: "I am hoisted!"

 function hoistedFunction() {
    console.log("I am hoisted!");
}

// Variable declarations with var are hoisted, but not their assignments
console.log(hoistedVar); // Output: undefined
var hoistedVar = 10;
console.log(hoistedVar); // Output: 10

// let and const are hoisted but not initialized (Temporal Dead Zone)
try {
    console.log(hoistedLet); // ReferenceError
} catch (e) {
    console.log("Error:", e.message);
}
let hoistedLet = 20;
let me=1000;

// Summary:
// - Function declarations are hoisted with their definitions.
// - var declarations are hoisted, but assignments are not.
// - let and const are hoisted but not initialized, causing ReferenceError if accessed before declaration.