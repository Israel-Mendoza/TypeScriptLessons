// Any is a fallback for when we don't know the type of a variable.
// It doesn't tell TypeScript anything other than "accept anything".

let item: any;
// The variable type looks like this
// let item: any

// We can do anything to this variable:
item = "Hello";
item = 10;
item = true;
item = ["Hello", "Goodbye"];


// We can tell TypeScript about arrays of anything
let items: any[];
// The variable type looks like this
// let items: any[]

// We can only assign arrays to this variable
items = ["Hello", 2];
// We cannot assign a non-array type:
// items = 2;
