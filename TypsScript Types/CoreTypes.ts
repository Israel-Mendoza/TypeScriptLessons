// CORE TYPES IN TYPESCRIPT

// 1. number
// 2. string
// 3. boolean

// We can specify the type of a variable
// if it is not initialized. 

let aNumber: number;
let aString: string;
let aBoolean: boolean;

aNumber = 10;
aString = "A string";
aBoolean = true;

// If the variable is initialized, TypeScript will infer its type.

let anotherNumber = 20;
let anotherString = "Another string";
let anotherBoolean = false;

// let anotherNumber: number
// let anotherString: string
// let anotherBoolean: boolean


// We can then use these types to annotate a function:

function add(x: number, y: number): number {
    return x + y;
}

let result = add(aNumber, anotherNumber);
// let result: number

console.log(result);
// 30
