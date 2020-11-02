// Working with array type notation

// EXPLICIT NOTATION

let myHobbies: string[];
myHobbies = ["Music", "Languages", "Programming"];
// The array type looks like this
// let myHobbies: string[]
let myGrades: number[];
myGrades = [9, 8, 8.5, 10, 6, 10];
// The array type looks like this:
// let myGrades: number[] 


// IMPLICIT NOTATION

let movies = ["Melancholia", "Tenet", "His House"];
// The array type looks like this
// let movies: string[]
let ratings = [4, 4.5, 4, 3.5, 5, 5];
// The array type looks like this
// let ratings: number[]

for (let movie of movies) {
    // InteliSense delects that "movie" is of type "string":
    console.log(movie.toUpperCase());
}
// Output:
// MELANCHOLIA
// TENET
// HIS HOUSE


// TUPLES!!!

// Tuples are not supported in JavaScript,
// which are fixed-length arrays with type specification.
// These can only be typed "explicitly":

let roles: [number, string];
roles = [1, "admin"];
// roles = ["1", "admin"] will end up in a compilation error.
