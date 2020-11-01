// Working with object type notation

// EXPLICIT NOTATION

const person1: {
    name: string;
    age: number;
    major: string;
} = {
    name: "Israel",
    age: 28,
    major: "Music",
};

// The object type looks like this:

// const person1 = {
//     name: string;
//     age: int
//     major: string;
// };


// IMPLICIT NOTATION


const person2 = {
    name: "Israel",
    age: 28,
    major: "Music",
};

// The object type looks like this:

// const person2 = {
//     name: string;
//     age: int
//     major: string;
// };


// NESTED OBJECT TYPES


const person3 = {
    name: "Israel",
    age: 28,
    work: {
        position: "Help Desk Tech",
        salary: 15000,
    }
};

// The type looks like this:

// const person3 = {
//     name: strin;
//     age: number;
//     work: {
//         position: string;
//         salary: number;
//     };
// };
