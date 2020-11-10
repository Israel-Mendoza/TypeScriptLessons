// Creating a simple interface

interface Named {
    name: string;
    optName?: string;
}

interface Aged {
    age: number;
}

interface Greetable extends Named, Aged {
    greet(message: string): void;
}


// An interface can be used as the type of a variable.

let user1: Greetable;

user1 = {
    name: "Israel",
    age: 28,
    greet(message: string) {
        console.log()
    }
}

// It can also be used to give a class a predefined implementation

class AnotherPerson implements Greetable {
    name: string;
    age: number;
    hobbies: string[];
    optName?: string;

    constructor(name: string, age: number, hobbies: string[], optName?: string) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        this.optName = optName;
    }

    greet(message: string): void {
        console.log(`${this.name} says "${message}"`);
    }

    sayBye(): void {
        console.log(`${this.name} says "Goodbye!"`);
    }

    tellHobbies(): void {
        console.log(`${this.name} has the following hobbies: `)
        this.hobbies.forEach((hobby) => {
            console.log(`\t${hobby}`);
        })
    }

    intro(): void {
        if (this.optName) {
            console.log(`I'm ${this.name} AKA ${this.optName}.`);
        } else {
            console.log(`My name is ${this.name}.`)
        }
    }
}

const p1 = new AnotherPerson("Israel", 28, ["Music", "Languages", "Coding"], "El Loco");
const p2 = new AnotherPerson("Mike", 28, ["Games", "Sports", "Music"]);
const p3 = new AnotherPerson("James", 28, ["Music", "Movies", "Cooking"]);

let people = [p1, p2, p3];

for (let person of people) {
    person.intro();
}

// Output:
// I'm Israel AKA El Loco.
// My name is Mike.
// My name is James.


// Using interfaces as funtion types

type aFunction = (a: number, b: number) => number;
interface anotherFunction {
    (a: number, b: number): number;
}

let add: aFunction;
let sub: anotherFunction;

add = (x: number, y: number) => {
    return x + y;
}

sub = (x: number, y: number) => {
    return x - y;
}
