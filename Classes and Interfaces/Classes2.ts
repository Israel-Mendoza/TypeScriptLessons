class Person {
    protected _name: string;
    protected _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        console.log("Calling the name getter!");
        return this._name
    }

    set name(value: string) {
        console.log("Calling the name setter!");
        if (value) {
            this._name = value;
        } else {
            throw new Error("Name must be a non-empty string.");
        }
    }

    get age(): number {
        console.log("Calling the age getter!");
        return this._age;
    }

    set age(value: number) {
        console.log("Calling the age getter!");
        if (value > 0) {
            this._age = value;
        } else {
            throw new Error("Age must be a positive number...");
        }
    }

    hasBirthday(this: Person) {
        this.age++;
        console.log(`${this.name} has just turned ${this.age}`);
    }

    work(this: Person) {
        console.log(`Person ${this.name} is working...`);
    }

    eat(this: Person) {
        console.log(`Person ${this.name} is eating...`);
    }

    sleep(this: Person) {
        console.log(`Person ${this.name} is sleeping...`);
    }

    routine(this: Person) {
        console.log(`Routine for Person called ${this.name}`);
        this.work();
        this.eat();
        this.sleep();
    }
}


class Student extends Person {
    protected _major: string;

    constructor(name: string, age: number, major: string) {
        super(name, age);
        this.major = major;
    }

    get major(): string {
        return this._major;
    }

    set major(value: string) {
        if (value) {
            this._major = value;
        } else {
            throw new Error("Major must be a non-empty string.");
        }
    }

    work(this: Student) {
        console.log(`Student ${this.name} is studying to get their ${this.major} degree`);
    }

    hasBirthday(this: Student) {
        this.age++;
        console.log(`${this.name} has just turned ${this.age}. PARTY!!!`);
    }
}


const s1 = new Student("Israel Mendoza", 28, "Computer Science");

s1.routine();
// Calling the name getter!
// Routine for Person called Israel Mendoza
// Calling the name getter!
// Student Israel Mendoza is studying to get their Computer Science degree
// Calling the name getter!
// Person Israel Mendoza is eating...
// Calling the name getter!
// Person Israel Mendoza is sleeping...
// Calling the age getter!
// Calling the age getter!
// Calling the name getter!
s1.hasBirthday();
// Calling the age getter!
// Calling the name getter!
// Israel Mendoza has just turned 29. PARTY!!!

s1.name;
// Calling the name getter!

s1.name = "Mike Smith";
// Calling the name setter!
