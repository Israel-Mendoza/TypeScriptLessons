// Function type


function funcZero() {
    console.log("Hello from function 1!");
}

function funcOne(name: string): void {
    console.log(`${name} says hello!`);
}

function funcTwo(name: string, message: string): void {
    console.log(`${name} says ${message}`);
}

let anyFunction: Function;
// No problwms with the following assignments:
anyFunction = funcZero;
anyFunction = funcOne;
anyFunction = funcTwo;

let particularFunction: (a: string) => void;
// This will work:
particularFunction = funcZero;
// But not calling the function:
// particularFunction();
// Expected 1 arguments, but got 0.ts(2554)
// FunctionTypes.ts(22, 26): An argument for 'a' was not provided.

// Working with callbacks
// Callback return type is not strict. If it's different, TypeScript won't complain.
function applier(name1: string, name2: string, cb: (names: string) => void): void {
    let names = `${name1} and ${name2}`;
    return cb(names);
}

function greeter(name: string): void {
    console.log(`Hello there, ${name}!`);
}

applier("Israel", "Margot", greeter);
// Hello there, Israel and Margot!
