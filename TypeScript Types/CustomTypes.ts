// UNION TYPES

// Union types give us the flexibility to expect two or more
// different types in a function parameter, or an uninitialized variable.


function combine(x: number | string, y: number | string) {
    let result: number | string;
    console.log(`x is a ${typeof x}`);
    console.log(`y is a ${typeof y}`);
    if (typeof x === "number" && typeof y === "number") {
        result = x + y;
        console.log(`result is a ${typeof result}`);
    } else {
        result = x.toString() + y.toString();
    }
    return result;
}

let num = combine(10, 20);
console.log(num);


// LITERAL TYPES


// Let's declare a constant of type number:
const aConstantNumber = 2.5;
// The type of the constant as given by the IntelliSense is:
// const aConstantNumber: 2.5
// This is a Literal Type, as it always will always be that value!


// We can hardcode these Literal Types in a function signature:


function combine2(x: number | string, y: number | string, returnType: "as-text" | "as-number") {
    let result: number | string;
    console.log(`x is a ${typeof x}`);
    console.log(`y is a ${typeof y}`);
    if (typeof x === "number" && typeof y === "number") {
        result = x + y;
        console.log(`result is a ${typeof result}`);
    } else {
        result = x.toString() + y.toString();
    }
    return returnType === "as-text" ? result.toString() : result;
}

// The returnType won't accept any other arguments 
// than "as-text" or "as-number"
let num2 = combine2(10, 20, "as-text");


// Type Aliases

type Combinable = number | string;
type CombinationType = "as-text" | "as-number"


function combine3(x: Combinable, y: Combinable, returnType: CombinationType) {
    let result: number | string;
    console.log(`x is a ${typeof x}`);
    console.log(`y is a ${typeof y}`);
    if (typeof x === "number" && typeof y === "number") {
        result = x + y;
        console.log(`result is a ${typeof result}`);
    } else {
        result = x.toString() + y.toString();
    }
    return returnType === "as-text" ? result.toString() : result;
}

// The combine function type can be read as:
// function combine3(x: Combinable, y: Combinable, returnType: CombinationType): Combinable
