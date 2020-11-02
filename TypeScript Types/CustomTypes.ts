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


// More custom types:

type namedAndAgedPerson = { name: string, age: number };

let anotherPerson = {
    name: "Israel",
    age: 28
};

let anAlien = {
    name: "Marvin",
    age: Infinity,
    planet: "Mars",
};

let namelessPerson = {
    age: 18,
    planet: "Pluto",
}


function introducePerson(person: namedAndAgedPerson) {
    console.log(`My name is ${person.name} and I am ${person.age} years old!`);
}


// Calling the function
introducePerson(anotherPerson);
// My name is Israel and I am 28 years old!

introducePerson(anAlien);
// My name is Marvin and I am Infinity years old!

// introducePerson(namelessPerson);
// Argument of type '{ age: number; planet: string; }'
// is not assignable to parameter of type 'namedAndAgedPerson'.
//   Property 'name' is missing in type '{ age: number; planet: string; }' 
// but required in type 'namedAndAgedPerson'.ts(2345)
