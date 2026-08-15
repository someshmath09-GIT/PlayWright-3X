//comparision operator
let a = 10;
let b = 20;    

// =, == , ===
// = is assignment operator
// == is comparison operator or loose comparison operator
// === is strict comparison operator
//cmparison operators are used to compare two values and return a boolean value (true or false) based on the comparison.

let isEqual = a == b; // Equal to
let isNotEqual = a != b; // Not equal to
let isGreaterThan = a > b; // Greater than
let isLessThan = a < b; // Less than            

console.log("Is Equal: " + isEqual); // Output: Is Equal: false

console.log("Is Not Equal: " + isNotEqual); // Output: Is Not Equal: true       

console.log("Is Greater Than: " + isGreaterThan); // Output: Is Greater Than: false

console.log("Is Less Than: " + isLessThan); // Output: Is Less Than: true

let isGreaterThanOrEqual = a >= b; // Greater than or equal to
let isLessThanOrEqual = a <= b; // Less than or equal to        
let isStrictEqual = a === b; // Strict equal to
let isStrictNotEqual = a !== b; // Strict not equal to  

console.log("Is Greater Than or Equal: " + isGreaterThanOrEqual); // Output: Is Greater Than or Equal: false

console.log("Is Less Than or Equal: " + isLessThanOrEqual); // Output: Is Less Than or Equal: true  
console.log("Is Strict Equal: " + isStrictEqual); // Output: Is Strict Equal: false
console.log("Is Strict Not Equal: " + isStrictNotEqual); // Output: Is Strict Not Equal: true

console.log(5 == "5");//loose comparison operator, it will return true because it only compares the values and not the data types

console.log(5 === "5"); //strict comparison operator, it will return false because it compares both the values and the data types
console.log(5 === 5); //strict comparison operator, it will return true because it compares both the values and the data types

console.log(5 != "5"); //loose comparison operator, it will return false because it only compares the values and not the data types

console.log(5 !== "5"); //strict comparison operator, it will return true because it compares both the values and the data types